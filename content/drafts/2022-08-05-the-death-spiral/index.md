---
layout: post
title:  "The Dreaded Death Spiral"
date:   2022-08-05 09:39:37 +0300
description: "When Google announced that it would be rebooting AngularJS and that Angular 2.0 would be effectively a new framework, a lot of companies with products built on the old version were put in a difficult situation of having to either restart building their product from scratch or continue with a deprecated technology or you some kind of hybrid solution. Continuing to build on a deprecated technology is obviously risky. As time passes, there are no more updates to the library, and finding developers willing to work on it becomes harder and harder, so this isn't really an option.
"
icon: "exponential.png"
categories: 

---
A common theme on the blog is the practicality of approaches (and avoiding development dogma). For example,  Elm is a great technology stack. Still, it probably won't be on most companies' adoption lists because technologies like React or Angular are much more popular, and it's easier to find developers. It's also much more likely that those technologies will be supported in the future. Likewise, even though microservices are very popular, most projects won't start out using a microservice architecture. 

A typical pattern encountered in the wild is the hybrid monolith + satellite microservices approach. This usually occurs something like this:

1. A company starts out with a new product, and even though care is taken to split the app into modules, there are usually dependencies between modules - for example, code that hits the same database tables.
2. A decision is taken to move to a microservice architecture as the product team grows.
3. The team attempts some refactoring and isolates some parts of the monolith into individual microservices.
4. New functionality will be developed as new microservices.

Polyglot programming is touted as one of the advantages of microservices, but just because you can do something doesn't mean you should. You almost certainly don't want to start out with microservices written in distinct languages, but what's great about them is you can integrate existing services written in different languages, which might occur as a result of acquiring another company (for example).

Microfontends, as their name suggests, are the front-end equivalent of microservices.  Dan Abramov (of Redux fame) famously said he doesn't understand them and that they can be replaced with a sound component system.

One could, of course, point out that microservices can be replaced with a sound module system for a backend API that doesn't allow us to deploy the modules individually very quickly, nor is interoperability between different technologies easy.
