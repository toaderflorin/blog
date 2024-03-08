---
layout: post
title:  "Language Performance Doesn't Matter (Most Of The Time)"
date:   2024-03-06 09:39:37 +0300
description: "Here's something that might be a bit controversial: I believe that for most software projects, the performance of the language (C#, Golang) doesn't matter that much. The reason I am writing this article is that I've seen an almost cultlike obsession with various languages and tech stacks, to the point where teams are pushing for a complete rewrite of the application. I believe this is  not warranted for most projects.
"
icon: "icon.jpg"
image: "cucumber.jpg"

---
Here's something that might be a bit controversial: *I believe that for most software projects, the performance of the language (C#, Golang, PHP, Ruby) doesn't matter that much. The reason I am writing this article is that I've seen an almost cultlike obsession with various languages and tech stacks, to the point where teams are pushing for a complete rewrite of the application. Even if there isn't a push for a complete rewrite, there usually is a push for a *polyglot* microservice setup, which has its own problems.*

I believe this is  not warranted for most projects, and I'll explain why. But first, let's look at a benchmark showing raw performance for different languages.

<img src="perf.png" class="img" loading="lazy" />

As we can see, there's quite a big difference between, say C and PHP, and if you were to implement a game, or a database engine, the choice of language would matter *a lot*. But most projects aren't relational database engines or games, they are web applications. And most applications actually use frameworks, written on top of a language, which interact with native code. But before we get into specifics, let's look at code optimization, or specifically an approach to code optimization.

### Inner Loop Optimization
A common theme when thinking about optimizing code is the concept of *inner loop optimization*. Consider the following code:

```javascript
let before = 0, after = 0, inner = 0
let n = 10

for (let i = 0; i < 100; i++) {
  before++
  
  for(let j = 0; j < 100; j++) {
    inner++
  }

  after++
}

console.log({ before, inner, after })
```

Output for n equals 10.

```
{ before: 10, inner: 100, outer: 10 }
```

And for n equals 100.

```
{ before: 100, inner: 10000, outer: 100 }
```

We quickly see that the inner loop takes much longer than the outer loop, and this gets more and more pronounced, the bigger n is. Now imagine we have three loops, or four loops. It gets progressively worse. A lot of code uses inner loops, and while the lines of code of the functionality in the inner loop might not necessarily be more than the outer loop, they have significantly more impact on performance. Which is why a lot of optimizing efforts are targeted on the inner loop code.

### Inner Loop Optimization Is Ubiquitous In Software

Games are notorious performance hogs, and developing a game like Quake 1 would have been exceptionally challenging, given the limited performance of the hardware at the time. Not only that, it's also considered a masterclass in software design.

<img src="quake1.jpg" class="img" loading="lazy" />

There's a lot going on, and the engine needs to figure out a lot of things:
* A level is big, so the engine needs to figure out the exact polygons the player sees. It does so using 
* The engine also needs to figure out what enemies need to do in reaction to the player's actions.
* Collision detection, i.e., has the player bumped into a wall and what to do as a result.
* The engine needs to do this at an acceptable framerate, e.g. over 30 fps (which would be considered low by today's stadards, since modern games target 60 fps).

A huge part of the engine is visual surface determination, but the Quake engine uses precomputed visibility sets.

<img src="wireframe.png" class="img" loading="lazy" />

Let's try to sketch the rendering loop. Keep in mind this highly simplifies things.

```c
  Polygon[] polygons = get_visible_polygons();
  
  Polygon transformed_polygon;
  ScreenSpacePoligon projected_polygon;
  Line current_line;

  for (int i = 0; i < sizeof(polygons); i++) {
    transformed_polygon = transform(polygon, currentPosition, currentHeading);    
    projected_polygon = project(transformed_polygon);
  
    for (int j = 0; j < sizeof(projected_polygon.horizontal_lines); j++) {        
      for (int k = 0; k < get_pixels(projected_polygon.horizontal_lines[j]); k++) {
        // implement perspective correct texture mapping for current pixel
      }
    }
  }
```
When comparing a normal rendered picture, we can see that the polygon vertexes (corners) are much lower in number than the number of pixels. And the per pixel correct texture mapping happens inside the inner loop, where performance matters. Also, correct texture mapping requires two divides per pixel and is quite expensive. So the inner loops were written in assembly (and texture correction was done every 8 pixels--the code used linear interpolation in between).

### The Classic 3-Tier Architecture

This is quite academic, so how does this help is? We need to consider a typical web app using a 3-tier architecture.

1. You get an HTTP request.
2. Based on this request, you run some business logic that calls some ORM code.
3. The ORM code generates SQL, which is run against a relational database. 
4. The results are then mapped and returned to the caller.

If you do some profiling, you will find that most of the time is being spent on the database level. Operations such as mapping query results aren't that computationally expensive.

<img src="app.png" class="img" loading="lazy" />

Let's consider a product page where users can filter and order based on categories such. Sorting and joins can abe expensive operations, and if indexes are not used properly, this can result in full table scans and even sorting done in temp tables.

```
------------------------------------------------------------------------------
| Id | Operation           | Name        |Rows | Bytes |Cost (%CPU)| Time    |
------------------------------------------------------------------------------
|  0 | SELECT STATEMENT    |             |   4 |   124 |   5  (20)| 00:00:01 |
|  1 |  SORT ORDER BY      |             |   4 |   124 |   5  (20)| 00:00:01 |
|* 2 |   HASH JOIN         |             |   4 |   124 |   4   (0)| 00:00:01 |
|* 3 |    TABLE ACCESS FULL| CATEGORIES  |   4 |    60 |   2   (0)| 00:00:01 |
|  4 |    TABLE ACCESS FULL| PRODUCTS    |  27 |   432 |   2   (0)| 00:00:01 |
------------------------------------------------------------------------------
```

ORM performance does matter, however. Here is an interesting graph comparing the performance of different ORMs available for Node.js.

<img src="performance.png" class="img" loading="lazy" />

As you can see, yes, performance varies between them quite significantly, but then you have to ask yourself: can I simply scale up my database and are those costs worth it?
