---
layout: post
title:  "Dissecting Why Indexes Are Costly"
date:   2022-08-10 09:39:37 +0300
description: "A typical mistake among junior developers is adding too many indexes to tables in SQL databases, way more than it would be necessary. On first impression, it wouldn't look like they would be a big deal, but that's not the case. 
"
icon: "exponential.png"
categories: 

---
A typical mistake among junior developers is adding too many indexes to tables in SQL databases, way more than it would be necessary. On first impression, it wouldn't look like they would be a big deal, but that's not the case. 

*Indexes use B-tree structures, which generalize binary trees and allow for logarithmic time searches. These B-trees also need to be rebalanced.*

Before we get into B-trees, we need to discuss balancing binary trees and why that is important.

### Let's Start With Binary Trees
Let's assume we have a set of numbers: 1, 6, 3, 2, 4, 8. We want to know if a specific number exists in this sequence. The trivial approach is to go through them one by one and check if our desired value is there (we could, of course, also you a hash tablet, but this is a simple example for demonstration purposes). Instead of keeping this data in a linked list, we could store it in a binary tree. As you may see, depending on the sequence, you might get more balanced trees or trees that are not balanced at all. What we need here is to balance the tree.
 
A balanced binary tree, also referred to as a height-balanced binary tree, is defined as a binary tree in which the height of any node's left and right subtree differs by not more than 1.

<img src="unbalanced.png" class="img" />

Following are the conditions for a height-balanced binary tree:

* The difference between the left and the right subtree for any node is not more than one.
* The left subtree is balanced.
* The right subtree is balanced.

What we've shown is a very simple example, but in reality, we need to do sequential access and insertions, deletions, etc.

In computer science, a B-tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. The B-tree generalizes the binary search tree, allowing for nodes with more than two children. Unlike other self-balancing binary search trees, the B-tree is well suited for storage systems that read and write relatively large blocks of data, such as databases and file systems.

<img src="b-tree.jpeg" class="img" />

A btree also allows an ordered sequence aas data for the:
 
* Every node has at most m children.
* Every internal node has at least ⌈m/2⌉ children.
* Every non-leaf node has at least two children.
* All leaves appear on the same level and carry no information.
* A non-leaf node with k children contains k−1 keys.

So we have a bit of leeway when it comes to how many children a node can contain. Overall this is a much more flexible structure.

### Clustered Versus Non CLustered Indexes
Database indexes come in two flavours: clustered and non-clustered. A clustered index defines the order in which data is physically stored in a table. Table data can be sorted in only way, therefore, there can be only one clustered index per table. In SQL Server, the primary key constraint automatically creates a clustered index on that particular column.

With non-clustered indexes, the a node in the B-tree points to the data on disk. With clustered indexes, the node actually represents the data. While this of course makes range queries faster, it also makes rebalancing slower. Significantly slower.