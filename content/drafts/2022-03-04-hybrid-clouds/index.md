---
layout: post
title:  "Hybdrid Cloud Applications"
date:   2022-03-04 09:39:37 +0300
description: "
CQRS has been popular for quite a few years (more than a decade old at this point), and while it's no longer in the hype phase of adoption, it still gets brought up quite a bit during architectural discussions for new projects (usually in conjunction with microservices). A few years after the pattern became popular, there was mounting criticism against it, mainly because of the complexity it introduces - with critics citing it as a typical example of over-engineering / premature optimization.
"
icon: "cqrs.png"
url: "./images/ddd.png"
categories:
---
It's extremely rare to find an application in the real world that doesn't have technical debt. An analogy that I like to use is applications are like kitchens - if you're using them regularly, they need to be cleaned regularly.

The specs of the application evolve over time. The domain model evolves. The database evolves. This is especially true with agile development. A company might create an MVP (minimally viable product), bring it to market then iterate based on user feedback. Considering that it isn't even known if the product will be successful, most companies/teams come up with a minimal structure for the product:

* An API connected to a relational database.
* A Javascript client (using something like React or Angular).

Over time, if the product is successful, the number of pages in the client will get bigger, the database model will evolve and the number of methods in the API will increase. If you have proper test coverage (and you should), then the process of continuous integration will take more and more time. And now the team might consider microservices, instead of the monolith approach.

In reality, the notion of having a microservice per bounded domain is usually a myth. That's the canonical approach, but it rarely ends up that way. What teams end up most of the time is a legacy central API monolith with some microservice satellites. In some cases, some sections of this monolith might be abstracted away and moved to their own microservices.

*Remember: microservices bring advantages such as the ability to scale each one individually, polyglot persistence, etc., but also introduce problems with synchronizing distributed state and communication between them.*

You don't have to go all-in on cloud computing. If your legacy API is working just fine on-premise, you can set up only the new satellite microservices in the cloud with k8s.

### Enter The Hybdrid Cloud

In a previous article, we looked at how we can come up with a scale-out solution for relational databases. The main takeaway from the article should probably be that it isn't easy. Luckily for us, Microsoft Azure has a built-in solution: Azure SQL Database supports sharded databases, multi-shard queries, and distributed transactions out of the box!

<img src="sql.png" class="img" />

Let's say you enjoy the Digital Ocean k8s control plane because of its simplicity. Or when your team decided to go the microservice route, they chose Digital Ocean because of the pricing.

### The Gateway Pattern