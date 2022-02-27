---
layout: post
title:  "You Probably Don't Need CQRS"
date:   2022-02-13 09:39:37 +0300
description: "
CQRS has been popular for quite a few years (it's more than a decade old at this point), and while it's no longer in the hype phase of adoption, it still gets brought up quite a bit during architectural discussions for new projects (not unlike microservices). The purpose of this article is to give a birds-eye view of the pattern, encourage its use where it's suitable, and potentially dissuade developer teams from adopting it where it isn't.
"
icon: "cqrs.png"
url: "./images/ddd.png"
categories:
---
CQRS has been popular for quite a few years (it's more than a decade old at this point), and while it's no longer in the hype phase of adoption, it still gets brought up quite a bit during architectural discussions for new projects (not unlike microservices). A few years after the pattern became popular, there was mounting criticism against it, mainly because of the complexity it introduces - with critics citing it as a typical example of over-engineering / premature optimization.

As with most new technologies, this is captured very well by the Gartner hype cycle graph -- dismissing CQRS out of hand would be a mistake however, as it does serve a purpose, albeit a very specific one. The adoption curve for microservices was similar: they were initially everywhere and eventually, teams began using this approach more judiciously.
 
<br/><img src="hype.png" class="img" />

The purpose of this article is to give a birds-eye view of the pattern, encourage its use where it's suitable, and potentially dissuade developer teams from adopting it where it isn't. 

## Architecture

CQRS stands for Command Query Responsibility Segregation. In a nutshell, it means that the read and write parts of the application are separated. In contrast, a tiered application architecture would look like this: As a mental model, CRUD works well for this type of approach. 

In contrast, the topology for a CQRS architecture would look something like this:

<img src="x.png" class="img" />

At first look, this looks significantly more complicated than the standard approach because not only are there two pipelines now, CQRS involves using two data stores. We'll clarify the purpose behind this in a moment. 

> As a general rule of thumb, applications involve significantly more reads than writes. Also, it's not possible to optimize our data model for reads and writes at the same time. Themore 
> we imporove on read speed, by way of indexes, the slower the inserts become. Another approach to speed up reads is to denormalize your data, to avoid having to perform costly joins.

Let's look at a case where this might be needed:

<br/><img src="feed.png" class="img" />

This means it makes sense to use some form of caching and possibly scale the read store horizontally to improve performance. So why not use a caching solution instead? The core value proposition of CQRS is the decoupling of the view model and the domain model in a distributed application.  

1. The domain model is the primary source of truth, denormalized, and usually stored in a relational database.
2. The view model contains data duplication and is normally stored in a fast document database.

This approach naturally lends itself to a microservice solution, where we can scale different parts of the application. Scaling out a relational database is complicated. Scaling out denormalized  "views" is not. 

There is significant overhead associated with implementing CQRS and in most cases, there's no need to separate the reading and writing pipelines. And in fact, it can be argued that the main advantage of CQRS is the fact that we have two storage formats, one that makes reading faster and one that denormalizes the data, not two pipelines. The former can be seen as a view model and the later should be the primary source of truth.

*In a nutshell, CQRS allows you to take a distributed data model and agregate it in one or more view models (caches).*

## A Primer On Event Sourcing
If your application is using "event sourcing", then it's also customary to use CQRS. A typical use case for event sourcing would be an equipment inspection application where inspectors perform periodic inspections and the final state is calculated based on a series of events.

<img src="sourcing.png" class="img" />

Each event acts as a *transition* in a state machine. Some properties of events are:

* We are only appending, we are not removing.
* We do something else.

Another example is the one we used in the [DDD article](/2022-02-02-ddd): a post on social media has a series of comments but do you want to  tie those comments to the post object or to the user making the post? If so, how do we scale? CQRS can be a solution here - in our view cache, we can duplicate the comments, one time for the article and another time for the user's history actions. A notification can be sent to update the cached view.

