---
layout: post
title:  "DDD and BDD Are a Match Made In Heaven"
date:   2024-01-06 09:39:37 +0300
description: "Any lawyer will tell you that contracts need to be specific, otherwise they can be thrown out of court quite easily. Prenuptial agreements are famous for being thrown out of court.
In the Pacific Bell v. Superior Court of Alameda County case, the court held that a contract between a telephone company and its customers was invalid because it was ambiguous and did not clearly define the scope of the company’s services.
"
icon: "modular.jpg"
image: "cucumber.jpg"
categories: 

---
Any lawyer will tell you that legal contracts must follow very specific rules, otherwise they can be deemed invalid. You simply cannot type whatever you want in a contract, it must follow a specific structure, use specific legal terms and so forth. Even software contracts can be thrown out of court because, if the specifications aren't clear enough.

Here's the thing: it is desirable to have very concrete specs, even if they aren't used legally binding.

## Product Specifications

Think of specs as a contract between the product owner and the development team. Even if nobody gets sued, there is a risk of time being spent on implementing the wrong thing. This in turn can lead to rebuilding portions of the application under time pressure, frustration in the team and even people trying to shift blame. While developers can ask for clarifications if they don't understand something, sometimes there are unknown unknowns, or they simply might have thought they understood everything.

*I've been in situations where I thought I understood the requirements, the technical lead thought he understood them, the UX designer thought the same, and each of us understood it quite differently. Complex domains might involve hundreds of types of domain objects: products, records, items, comments, tasks, categories, accounts, users etc.*

And these structures are hierarchical because you can have comments on various products (on your site), or comments on other entities. Here's a simple example of confusion: an app registration and the app principal are two different things. Simply referring to it as the "app" can lead to confusion, because they can even be in different Azure tenants. An inspection checklist can have some comments, but also comments can be on the individual items on the list. *Tags*, comments, categories can be applied to multiple things. So it is customary for data tables to be named like OrderItem, or PostComment, to indicate a foreign key relation.

## Enter DDD

A PO can have a good understanding of what the client wants, but if that is not properly communicated to the devs, it's a problem.

<img src="ddd.jpg" class="img" />

Domain-driven design (DDD) is a software development approach that emphasizes modeling software to closely match the specific domain it is intended to represent. It advocates for close collaboration between software developers and domain experts to ensure that the software accurately reflects the business rules, processes, and terminology of the domain.

Here are some key principles of DDD:

* *Ubiquitous Language:* establish a shared language between domain experts and developers to ensure consistent understanding of the domain concepts and terminology.
* *Bounded Context:* divide the software system into self-contained modules, each focused on a specific aspect of the domain, to manage complexity and maintain domain knowledge.
* *Continuous collaboration:* Foster ongoing collaboration between developers and domain experts to ensure the software remains consistent with the evolving domain and business needs.

We'll break that down in a bit. Ubiquitous language means we always refer to an entity by the same term. Let's say we have a blogging engine. So we'll have users, blogs, blog posts, etc.

The database schema would look something like this:

## What is BDD
Most developers are familiar with TDD, and if your team has the budget for it (it can be expensive, and some teams tend to go with the 20/80 rule, where they only cover the 20% of the code that's responsible with the majority of the bugs). 

<img src="cucumber.jpg" class="img" />

Consider that each of these lines: a lot of these lines translate to code. Cucumber creates a set of constraints for the product owner, similarly to how a control library with a theme would constrain the designer. 
```csharp
@When("^I click the \"([^\"]+)\" button$")
public void clickButton(String buttonName) {
    // Code to click the button with the specified name
}
```

What is interesting is that by getting POs to write specs in Cucumber, we have created *a framework of specs*.

### Advantages / Disadvantages

Just as TDD, BDD can be costly in terms of time to implement.