---
layout: post
title:  "Use SQL Indexes With Caution"
date:   2024-01-29 09:39:37 +0300
description: "A typical mistake among junior developers is adding too many indexes to tables in SQL databases, way more than it would be necessary. On first impression, it wouldn't look like they would be a big deal, but that's not the case. A Simple Paralel:
Think of indexes as a Indexes use B-tree structures, which generalize binary trees and allow for logarithmic time searches. These B-trees also need to be rebalanced. Before we get into B-trees, we need to discuss balancing binary trees and why that is important.
"
icon: "binary-tree.png"
categories: 

---
A typical approach that a lot of developers take to improve query performance would be to add a lot of indexes to your database, but I'd like to mention why this is a mistake.

### A Simple Paralel

Think of indexes as a 

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

### Clustered Versus Non Clustered Indexes
Database indexes come in two flavours: clustered and non-clustered. A clustered index defines the order in which data is physically stored in a table. Table data can be sorted in only way, therefore, there can be only one clustered index per table. In SQL Server, the primary key constraint automatically creates a clustered index on that particular column.

<img src="clustered.webp" class="img" />

With non-clustered indexes, the a node in the B-tree points to the data on disk. With clustered indexes, the node actually represents the data. While this of course

In the context of databases, index cardinality refers to the number of distinct values stored in a specific column within an index. It's an important metric for database optimization because it influences the effectiveness of indexes in speeding up queries.

### Understanding Index Cardinality

Low Cardinality:

Index cardinality is considered low when there are relatively few distinct values in a column. For instance, an index on a column storing gender (male or female) would have low cardinality. Low-cardinality indexes are generally less effective than high-cardinality indexes because they don't narrow down the search space significantly. However, they can still be helpful in some cases, such as when searching for specific values that occur infrequently.

High Cardinality:

An index is considered to have high cardinality when there are many distinct values in a column. For example, an index on a column storing customer IDs would typically have high cardinality. High-cardinality indexes are more effective than low-cardinality indexes in speeding up queries because they filter out a greater proportion of rows.

Cardinality vs. Selectivity:

Cardinality and selectivity are often used interchangeably, but they have distinct meanings. Cardinality is the total number of distinct values in a column, while selectivity is the proportion of rows that match a particular search condition. In other words, selectivity measures how well an index filters out rows. makes range queries faster, it also makes rebalancing slower. Significantly slower.

### A Simple Paralel: Materialized Views
Think of indexes as a

Indexes use B-tree structures, which generalize binary trees and allow for logarithmic time searches. These B-trees also need to be rebalanced.

Before we get into B-trees, we need to discuss balancing binary trees and why that is important.