---
layout: post
title:  "The Trouble With Estimations"
date:   2022-05-30 09:39:37 +0300
description: "The Sydney Opera house is such an iconic building that, for many people, it's almost the first thing that comes to mind when they think of Sydney, yet few people are aware of its troubled history and how it came to be built. In 1995, the then prime minister (who?) launched an international design contest, where no fewer than X showed up. After reviewing 233 entries from architects in x countries, Danish architect X was declared the winner, who simply entered a simple pencil sketch outlining the shape of the building.
"
icon: "clock.jpg"
categories: 

---
The Sydney Opera house is such an iconic building that, for many people, it's almost the first thing that comes to mind when they think of Sydney, yet few people are aware of its troubled history and how it came to be built. In 1995, the then prime minister (who?) launched an international design contest, where no fewer than X showed up. After reviewing 233 entries from architects in x countries, Danish architect X was declared the winner, who simply entered a simple pencil sketch outlining the shape of the building.

<img src="sketch.jpeg" class="img" />

They pushed for starting the 

The idea was bold. But there were no interior plans, no support structure, nothing. Nevertheless, based on this vision, the Australian government set out to build, even before the schematics were finalized. Little would they know that the project would exceed the budget by a factor of ten, and the whole process would take ten years, more than the three initially devised. By now, this story will have sounded all too familiar if you're a software project manager or developer, but let's not get ahead of ourselves.

To maximize time, the support columns were built before the design of the roof was finalized. And once the design was completed, the columns proved too weak to support it, so all of them had to be removed and replaced. So why did the roof design take so long? Since such a structure had never been built before, the engineers didn't know how to go about it, and no less than 14 designs had to be proposed before settling on the final one, a design that would be feasible.

### Software
The opera house scenario bears a lot of similarities with most software projects. These start with the ideation phase, and then investors are keen to move fast to capture a market segment. Agile methodologies are all the rage.

When building a house, it would be extremely uncommon to start building anything without detailed plans. 

<img src="failure.webp" class="img" />

Let's look at some of the common pitfalls. 

### The Dunning Kruger Effect And Optimism Bias

According to Wikipedia:

<i>The Dunning–Kruger effect is a cognitive bias whereby people with low ability, expertise, or experience regarding a certain type of a task or area of knowledge tend to overestimate their ability or knowledge. Some researchers also include in their definition the opposite effect for high performers: their tendency to underestimate their skills. The Dunning–Kruger effect is usually measured by comparing self-assessment with objective performance.</i>

<img src="dunning.svg" class="img" />

We tend to be overly optimistic when we don't know enough about a certain subject. Also when doing estimations, even if devs estimate in story points, they think in time and revert back to storypoints -- and they usually assume the best outcome. However, in real life unexpected things happen: 

* They might get a spec from the designer, only to find out mid-estimation that the UX design doesn't translate well into CSS (more on that later). 
* They might get a spec from the product owner and implement it, only to find that the spec is incomplete or the PO meant something else in the spec (because of inconsistent domain language). 
* Or that the implementation actually requires a complicated database migration that wasn't factored in.
* Or that breaking changes / major refactoring is required midway through implementation.
* They might implement the happy path, but miss edge cases.
* In the process of implementation, they might find bugs in some of the libraries they are using, or simply that the libraries don't support what they are trying to do.
* After implementing the functionality, the performance might not be acceptable.

When estimating, most developers think they can go from A to B in a straight line, but that's rarely the case because software development is a highly nonlinear process.

<img src="winding.jpeg" class="img" />

You might get to where you think you're 90% done, only for you to discover there's another 90% to go (to paraphraze John Carmack).

### Cone of uncertainty / Not enough spikes

As mentioned before, if developers don't know enough about how to tackle a piece of functionality, they will not be able to properly estimate it, is which case a technical user story (or spike) needs to be added. Spikes are an invention of Extreme Programming (XP), are a special type of user story that is used to gain the knowledge necessary to reduce the risk of a technical approach, better understand a requirement, or increase the reliability of a story estimate. A spike has a maximum time-box size as the sprint it is contained in it. At the end of a sprint, the spike will be determined that is done or not-done just like any other ordinary user story.

Normally teams use estimation poker, but there will usually be different developers that specialize in different areas of the application. Somebody that's very familiar with the code in one area might come up with a higher estimations in their heads, but succumb to social pressure from the team to revise their estimation lower. Normally they would be in the minority.

<img src="cone.png" class="img" />

Sometimes developers might perform

### Devs Don't Work Full Eight Hours Per Day



### Finessing UX

Design tools don't work like CSS / HTML. The layout in CSS was designed to flow and wrap, whereas design tools tend to use absolute positioning. What usually ends up happening is the output is subtly different from what the designer expects, which means they will come back with changes. 

<img src="dash.webp" class="img" />

In some cases, it is possible to do them; in other cases, a compromise will have to be reached, which takes time, and several iterative steps might be needed.  Another issue is developers tend to think in components, and when using a framework such as React, they will have a set of building reusable blocks already prebuilt. Designers focus more on UX and 

### In Closing

There isn't a onesize fit all solution.

* Use a strict domain language.
* Make sure stakeholders understand the value of spikes.

