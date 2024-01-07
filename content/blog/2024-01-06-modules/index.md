---
layout: post
title:  "Modular Monoliths"
date:   2024-01-06 09:39:37 +0300
description: "First, when creating a new application, should you start off with a microservice architecture? Well, the prevailing wisdom is no, because there is significant cost associated with maintaining, deploying, hosting., multiple microservices.
"
icon: "modular.jpg"
categories: 

---
First, when creating a new application, should you start off with a microservice architecture? Well, the prevailing wisdom is no, because there is significant cost associated with maintaining, deploying, hosting., multiple microservices.

Let's also look at some microservice tenets:

1. Microservices need to own their own data, which means you need a database for each. 
2. Instead of synchronous communication, you usually use message based communication to ensure decoupling.

So what does this mean?:

1. We lose FK constraints, and data integrity related to them.
2. Joins across data sources can be tricky.
3. Distributed transactions can also be tricky.
4. We lose some data normalization (for example, catalog data will probably have to be replicated).

What is the alternative? Well, writing a monolith. Monoliths in themselves aren't bad—the term monolith refers to a unit of deployment. In fact, most APIs are monoliths. Moreover, you can even have a distributed monolith because if the dependencies between microservices are as such that you need to 

The only potential problem arises if, at some later point, we want to move to a microservice architecture, those FK constraints will pose a problem.
A Modular Monolith

What would be a possible approach? Create a monolith with predefined modules and enforce strict domain boundaries.

## DDD

Which is where Domain Driven Design comes to play.

Domain-driven design (DDD) is a software development approach that focuses on modeling software to align closely with the business domain it represents. It emphasizes a deep understanding of the domain, collaboration between domain experts and developers, and the creation of a shared language to bridge the gap between them.

Core Principles of DDD:

1. Ubiquitous Language: Fostering a shared understanding of the domain's terminology and concepts among developers and domain experts.
2. Modeling the Domain: Creating a comprehensive and detailed model of the domain, capturing its core concepts, rules, and relationships.
3. Bounded Contexts: Dividing the domain into smaller, manageable subdomains with well-defined boundaries.

Let's say we have an online store that sells mugs. We need to support recommendations etc. We will also have a back office website where users can log in, add / update prices, etc.

## A Case Study

Let's define a bunch of products:
* *Product*
* *ProductCategory*
* *User*
* *ProductReview*
* *UserAddress*

So far, so good. It goes as follows: 

We're keeping it simple. We need to look at where the boundaries intersect. Admins can add items of the catalog. 

The module search will intersect with login, because we are using the user id. The 

<img src="schema.png" class="img" />

## Breaking The Monolith

Let's do a mental exercise. Let's think what would be needed in order to break this monolith. We would need to identify a set of domain boundaries and 

* Logging in.
* Search and product details.
* Payment.
* Catalog.

In order to separate them into separate modules, we would need to remove the FK constraints.

<img src="schema.png" class="img" />

One idea to achieve coupling is to break the monolith.

