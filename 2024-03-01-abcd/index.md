---
layout: post
title:  "Atomic Specs: DDD and BDD Are a Match Made In Heaven"
date:   2024-03-06 09:39:37 +0300
description: "Any lawyer will tell you that contracts need to be specific, otherwise they can be thrown out of court quite easily. Prenuptial agreements are famous for being thrown out of court.
In the Pacific Bell v. Superior Court of Alameda County case, the court held that a contract between a telephone company and its customers was invalid because it was ambiguous and did not clearly define the scope of the company’s services.
"
icon: "small.jpg"
image: "cucumber.jpg"

---
Here's something that might be a bit controversial: I believe that for most software projects, the performance of the language (C#, Golang) doesn't matter that much. The reason I am writing this article is that I've seen an almost cultlike obsession with various languages and tech stacks, to the point where teams are pushing for a complete rewrite of the application. I believe this is  not warranted for most projects.

How can I say that, given the significant performance difference between languages / runtimes? Here's a 

This, of course, isn't the case if you're writing a game, an IDE, a compiler, a database engine, the performance of your language matters a lot.

But most projects you will work on are not games or database engines. They are web applications, specifically REST APIs. 

```javascript
for (let i = 0; i < 100; i++) {
  for(let j = 0; j < 100; j++) {
  }
}
```

Output:

```
{before: 100}
```

### Quake 1 As An Example

But even if you are dealing with an extremely CPU intensive application like a game, you will see the same tradeoffs. I'd like to use Quake 1 as an example, because the source code is widely available, and it's considered a masterclass in software design.

Games are notorious performance hogs. Developing a game like Quake 1 would have been exceptionally challenging, given the limited performance of the hardware at the time. 

There's a lot going on. The engine needs to figure out a lot of things:
* A level is big, so the engine needs to figure out the exact polygons the player sees. It does so using 
* The engine also needs to figure out what enemies need to do in reaction to the player's actions.
* Collision detection, i.e., has the player bumped into a wall and what to do as a result.

*And once all this is done, it needs to be rendered on the screen. That's the inner loop.*

Most of the game engine is written in C, but the (software) rendering engine is written in assembly language. Why? Because true perspective correct rendering requires two division operations per pixel (bilinear filtering in software would have been out of the question at the time), and even so, significant were taken.

