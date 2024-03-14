---
layout: post
title:  "Service Data Ownership Is Hard"
date:   2024-03-19 09:39:37 +0300
description: "Here's something that might be a bit controversial: I believe that for most software projects, the performance of the language (C#, Golang) doesn't matter that much. The reason I am writing this article is that I've seen an almost cultlike obsession with various languages and tech stacks, to the point where teams are pushing for a complete rewrite of the application. I believe this is  not warranted for most projects.
"
icon: "icon.jpg"
image: "cucumber.jpg"

---
When building a monolith, it's common to not think much about which service accesses which tables, especially when dealing with complex business logic that needs to conditionally update data based on values of existing data, or if complex data aggregation is needed. To make matters worse, in many projects, not a lot of thought is given to how the database is structured, and it might not actually align well with the business domain (especially if DDD techniques are not followed). Which means it's very easy to end up with a structure like this:

What happens in a lot of projects is that your services are trying to create this sort of materialized view by pulling and aggregating data, which means they are coupled indirectly.

We can clearly see that this breaks encapsulation. We would also want to reach a situation where each service owns its own data, so something like this.

Keep in mind that the state of the whole application doesn't have to obey ACID.

## The Goal Is BASE Not ACID

My preferred way of splitting microservices is domain boundary lines. And if you find it hard to split the database schema, then that's probably an indication that you might not want to split that part of the monolith.

The goal around consistency is BASe.

Most developers will be familiar with ACID constraints of a RDBMS.

ACID is:

* **Atomicity** ensures that a transaction is treated as a single unit of work. Either all the operations within the transaction are successfully completed, or none of them are. In other words, a transaction cannot be partially completed; it must be executed in its entirety or not at all. If any part of the transaction fails, the entire transaction is rolled back.

* **Consistency** ensures that the database remains in a consistent state before and after the transaction. This means that transactions must preserve the integrity constraints, data validation rules, and relationships defined in the database schema. For example, if a transaction violates a unique key constraint or a foreign key constraint, it will be aborted to maintain the consistency of the database.

* **Isolation** ensures transactions operate in isolation from each other and even if multiple transactions are executing concurrently, the result should be as if they were executed serially, one after the other. This isolation property prevents interference between transactions and ensures data integrity.

* **Durability** means that once a transaction is committed, its changes are permanent and survive system failures such as power outages or crashes. The changes made by a committed transaction are stored in non-volatile storage (such as disk) and remain intact even if the system fails.

But decoupling your database means you lose all FK integrity so new you need something else. Distributed architectures rely heavily on eventual consistency as a trade-off for better operational architecture characteristics such as performance, scalability, elasticity, fault tolerance, and availability. While there are numerous ways to achieve eventual consistency between data sources and systems, the three main patterns in use today are the background synchronization pattern, orchestrated request-based pattern, and the event-based pattern.

So we require something else, which is BASE. BASE means:

* **Basically Available** means that the system should remain operational and responsive, even in the face of failures. It prioritizes availability over consistency. In other words, the system might return slightly outdated or inconsistent data during certain operations, but it ensures that the system remains accessible and operational.

* **Soft state** refers to the idea that the state of the system may change over time, even without input. Unlike in ACID systems, where the state is always consistent and deterministic, in BASE systems, the state might be transient or mutable. This allows for more flexible and scalable designs, particularly in distributed systems where maintaining strong consistency across all nodes can be challenging.

* **Eventually consistency** means that the system will eventually reach a consistent state after a period of time, given no further input. Unlike the immediate consistency guaranteed by ACID transactions, eventual consistency allows for temporary inconsistencies between different replicas or partitions of data. Over time, through mechanisms like gossip protocols, reconciliation, or background processes, these inconsistencies are resolved, and the system converges to a consistent state.

So as we can see, the constraints are much lower. Let's look at some patterns for inter service communication.

## Interservice Communication Pattern

The simplest form of microservice communication is for one microservice to call another one directly. The main advantage of this approach is simplicity, but there are quite a few drawbacks.

* **Tight coupling**. If service A depends on service B, any schema change in the response will affect it. Consider that a central tenet of microservices is being able to individually develop and deploy them, this form of tight coupling can cause problems.

* **Scalability issues**. A benefit of independent microservices is they can also be scaled independently. But if a service depends on another service, that service can become a performance bottleneck.

* **Error handling**. The 3rd party service might have crashed, which in turn takes down the services using it.

So let's look at a way around these.

## Data Duplication Pattern

On order to avoid direct calls between microservices, we can duplicate data. In our above example, the reports service would store its own user summary table in its own database. We would use a 

The main drawback of this is async code is harder to maintain and to understand that synchronous code. 

## Data Domain Pattern
The last resort is to use a shared database. This is called the data domain pattern, but it might as well be an antipattern. It is mainly encountered when attempting to decouple a monolith application, and some parts of the domain model cannot be easily pulled apart. Keep in mind that this has significant disadvantages.

* **Breaks encapsulation**. While calling the database directly avoids an extra round-trip to a different service (and the dependence on that service), keep in mind that there might be logic that controls what data is being exposed, and going directly to the data layer might circumvent it. This is a problem.

* **Indirect coupling**. Avoiding the microservice call doesn't mean there isn't any coupling, it just means that it's hidden. This means that you can't really have two independent teams or developers working on the 
* **Migrations**. A lot of codebases use code first migrations, which means that you probably want to designate an owner of the data model, but different. What can be done here is to have a master service, and secondary ones that don't touch the schema, but this needs to be clearly indicated.