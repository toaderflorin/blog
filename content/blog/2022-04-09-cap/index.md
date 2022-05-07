---
layout: post
title:  "The CAP Theorem Hugely Oversimplifies Things"
date:   2022-04-09 09:39:37 +0300
description: "
The CAP theorem is usually the first thing that comes up when discussing replication / data-store options on distributed systems, but considering how popular it is, it’s surprising that it’s not understood correctly most of the time. The CAP letters refer to Consistency, Availability, and Partition tolerance, and it’s worth mentioning that it is merely an idealization (abstraction) because real-world situations are significantly more complicated.
"
icon: "cqrs.png"
url: "./images/ddd.png"
categories:
---
The CAP theorem is usually the first thing that comes up when discussing replication / data-store options on distributed systems, but considering how popular it is, it's surprising that it's not understood correctly most of the time. The CAP letters refer to Consistency, Availability, and Partition tolerance, and it's worth mentioning that it is merely an idealization (abstraction) because real-world situations are significantly more complicated. 

First, let's consider a replicated datastore:

<img src="replication.png" class="img" />

### The Actual Theorem 

The CAP letters in the appellation refer to *Consistency*, *Availability*, and *Partition tolerance*, but these usually mean something different than what we mean in practice when we refer to these concepts.

*The theorem says that you can only have a maximum of two out of the three. Of course, you can also have one or none.*

<img src="cap.png" class="img" />

Where:

* **Consistency** refers to the fact that all nodes return the same value after a successful write to the store. 

* **Availability** refers to the fact that it can respond if a node is online. The CAP theorem is quite specific here: it means that *all* available nodes must be able to respond, not just some of them.

* **Partition tolerance** (quite the misnomer) means that the datastore can continue to work even if the connection between nodes is severed due to network issues. This means that nodes might not sync.

Usually, all networks have issues such as dropped packets or nodes not being able to communicate, so P isn't an option - it needs to be there, which means we're usually left with CA or AP databases. Here's how that works: if we opt for availability, we must keep all nodes online (and fault-tolerant). Since it takes some time to sync the data between nodes, the nodes will not be consistent. If, on the other hand, we choose consistency over availability and we write to one node, we will need to take the other nodes offline until they sync, which means they won't be available. And lastly, if you want to have both availability and consistency, your database won't be fault-tolerant because if the connection is severed, the nodes can't be in sync.

When one uses the term "theorem," a level of (mathematical) rigor is usually expected, but this isn't the case here because, in the real world, notions such as availability are pretty vague. With these types of databases, there is usually a master node that is read/write and multiple read-only replicas - just this aspect alone is a departure from the theorem.

If the response takes too long to come back, even if it is correct, the application users might not consider the system "highly available," so in cases like that, a compromise is required. Lack of consistency is something most social media users would be familiar with. Quite often, you would get a notification to say that a new comment is available, and when clicking on it, the comment isn't there. 

Also, to get perfect consistency, we would need to use synchronous replication (this means a write won't return a success message until all nodes have synced), and the more nodes we have, the more brittle the database system is because if just one node fails, everything grinds to a halt until the node is back online. So while this is required for critical applications - such as banking, most applications don't need this level of consistency. Also, handling network faults doesn't necessarily mean tolerating them: if your network usually is reasonably reliable, a valid approach may be to show an error message to users while your network is experiencing problems. 

## PACELC theorem

Both theorems describe how distributed databases have limitations and tradeoffs regarding consistency, availability, and partition tolerance. PACELC however goes further and states that an additional trade-off exists: between latency and consistency, even in absence of partitions, thus providing a more complete portrayal of the potential consistency trade-offs for distributed systems.

Latency is just one aspect of the equation. Preserving ordering is another, so seeing some comments come in late isn't that big of a problem, but it is if they come in out of order. 

## CosmosDB

Let's use Cosmos DB as an example. It offers us not just strong consistency and eventual consistency - it has five intermediate levels.
Let's say we don't want to pay the price for strong consistency in terms of delay and throughput. 

1. Strong consistency: this is the strongest level.
2. 



