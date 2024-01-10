---
layout: post
title:  "The Hybrid Monolith / Microservice Approach"
date:   2024-01-07 09:39:37 +0300
description: "When Google announced that it would be rebooting AngularJS and that Angular 2.0 would be effectively a new framework, a lot of companies with products built on the old version were put in a difficult situation of having to either restart building their product from scratch or continue with a deprecated technology or you some kind of hybrid solution. Continuing to build on a deprecated technology is obviously risky. As time passes, there are no more updates to the library, and finding developers willing to work on it becomes harder and harder, so this isn't really an option.
"
icon: "polyglot.jpeg"
categories: 
---

A typical pattern encountered in the wild is the hybrid monolith + satellite microservices approach. This usually occurs something like this:

1. A company starts out with a new product, and even though care is taken to split the app into modules, there are usually dependencies between modules - for example, code that hits the same database tables.
2. A decision is taken to move to a microservice architecture as the product team grows.
3. The team attempts some refactoring and isolates some parts of the monolith into individual microservices.
4. New functionality will be developed as new microservices.

For example, a very simple schematic for an online store might look like this:

<img src="satelite.svg" class="img" />

A common problem with breaking up modules into microservices is transactions, because even if individual pieces of code from various modules don't call each other direcetly, they can still share data and trigger transactions in the database. And with microservices, transactions become distributed. And distributed transactions are hard. 

## Async Communication Is Hard

Direct calls between services are a lot simpler than async communication between 

Ca