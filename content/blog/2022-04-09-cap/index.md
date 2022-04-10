---
layout: post
title:  "The CAP Theorem Hugely Oversimplifies Things"
date:   2022-04-09 09:39:37 +0300
description: "
CQRS has been popular for quite a few years (more than a decade old at this point), and while it's no longer in the hype phase of adoption, it still gets brought up quite a bit during architectural discussions for new projects (usually in conjunction with microservices). A few years after the pattern became popular, there was mounting criticism against it, mainly because of the complexity it introduces - with critics citing it as a typical example of over-engineering / premature optimization.
"
icon: "cqrs.png"
url: "./images/ddd.png"
categories:
---
The CAP theorem comes up quite often when discussing replication options, but there's a great deal of misunderstanding surrounding it, and it's worth mentioning that it is merely an idealization (abstraction). We can start by dissecting what it says and how it maps to concrete real-world scenarios. 

First, let's consider a replicated datastore:

The CAP letters in the appellation refer to *Consistency*, *Availability*, and *Partition tolerance*. 

<img src="cap.png" class="img" />

* **Consistency** refers to the fact that all nodes return the same value after a successful write to the store. 

* **Availability** refers to the fact that it can respond if a node is online. The CAP theorem is quite specific here: it means that *all* available nodes must be able to respond, not just some of them.

* **Partition tolerance** (quite the misnomer) means that the datastore can continue to work even if the connection between nodes is severed due to network issues. This means that nodes might not sync.

*The theorem says that you can only have a maximum of two out of the three. Of course, you can also have one or none.*

Lack of consistency is something most social media users would be familiar with. Quite often, you would get a notification to say that a new comment is available, and when clicking on it, the comment isn't there. Latency is just one aspect of the equation. Preserving ordering is another. Getting back to our social media example, seeing some comments come in late isn't that big of a problem, but it is if they come in out of order. 

With these types of databases, there is usually a master node that is read/write and multiple read-only replicas - just these two aspects are a significant departure from the theorem. 

## CosmosDB

Let's use Cosmos DB as an example. It offers us not just strong consistency and eventual consistency - it has five intermediate levels.
Let's say we don't want to pay the price for strong consistency in terms of delay and throughput. 

1. Strong consistency: this is the strongest level.
2. 



