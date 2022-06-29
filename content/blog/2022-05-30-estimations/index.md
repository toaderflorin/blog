---
layout: post
title:  "Why It's So Hard To Get Estimations Right"
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

The opera house scenario bears a lot of similarities with most software projects. These start with the ideation phase, and then investors are keen to move fast to capture a market segment. Agile methodologies are all the rage.

When building a house, it would be extremely uncommon to start building anything without detailed plans. 

<img src="failure.webp" class="img" />

Let's look at some of the common pitfalls. 

### The Dunning Kruger Effect And Optimism Bias

According to Wikipedia:

<i>The Dunning–Kruger effect is a cognitive bias whereby people with low ability, expertise, or experience regarding a certain type of a task or area of knowledge tend to overestimate their ability or knowledge. Some researchers also include in their definition the opposite effect for high performers: their tendency to underestimate their skills. The Dunning–Kruger effect is usually measured by comparing self-assessment with objective performance.</i>

<img src="dunning.png" class="img" />

We tend to be overly optimistic when we don't know enough about a certain subject. Also when doing estimations, even if devs estimate in story points, they think in time and revert back to storypoints -- and they usually assume the best outcome. However, in real life unexpected things happen: 

* They might get a spec from the designer, only to find out mid-estimation that the UX design doesn't translate well into CSS (more on that later). 
* They might get a spec from the product owner and implement it, only to find that the spec is incomplete or the PO meant something else in the spec (because of inconsistent domain language). 
* Or that the implementation actually requires a complicated database migration that wasn't factored in.
* Or that breaking changes / major refactoring is required midway through implementation.
* They might implement the happy path, but miss edge cases.
* In the process of implementation, they might find bugs in some of the libraries they are using, or simply that the libraries don't support what they are trying to do.
* After implementing the functionality, the performance might not be acceptable.

When estimating, most developers think they can go from A to B in a straight line, but that's rarely the case because software development is a highly nonlinear process. You might get to where you think you're 90% done, only for you to discover there's another 90% to go (to paraphraze John Carmack).

### Cone of uncertainty / Not enough spikes

Simply looking at a map doesn't tell you how long a road will be, because you can't go from A to B in a straight like -- usually some prospecting is needed. Software is the same.

<img src="winding.jpeg" class="img" />

If developers don't know enough about how to tackle a piece of functionality, they will not be able to properly estimate it, is which case a technical user story (or spike) needs to be added. Spikes come from Extreme Programming (XP), are a special type of user story that is used to gain the knowledge necessary to reduce the risk of a technical approach, better understand a requirement, or increase the reliability of a story estimate. A spike has a maximum time-box size as the sprint it is contained in it. At the end of a sprint, the spike will be determined that is done or not-done just like any other ordinary user story.

Normally teams use estimation poker, but there will usually be different developers that specialize in different areas of the application. Somebody that's very familiar with the code in one area might come up with a higher estimations in their heads, but succumb to social pressure from the team to revise their estimation lower. Normally they would be in the minority.

<img src="cone.png" class="img" />

Sometimes developers might perform

### Finessing UX

Design tools don't work like CSS / HTML. The layout in CSS was designed to flow and wrap, whereas design tools tend to use absolute positioning. What usually ends up happening is the output is subtly different from what the designer expects, which means they will come back with changes. 

<img src="dash.webp" class="img" />

In some cases, it is possible to do them; in other cases, a compromise will have to be reached, which takes time, and several iterative steps might be needed.  Another issue is developers tend to think in components, and when using a framework such as React, they will have a set of building reusable blocks already prebuilt. Designers focus more on UX and 

### Brook's Law
In the famous Mythical Man Month, Fred Brooks argues that adding developers to a late project makes it even more late, which has since came to be known as Brook's law. 

*Or put it differently, if a woman can deliver a baby in nine months, it doesn't mean that three women can deliver a baby in three months.*

Some tasks cannot be partitioned effectively and don't scale well with more developers. In fact, attempting to do it makes matters worse because there is now communication overhead, potential blocking and merging conflicts, etc. Like communication between components, the number of pathways scales with O(n^2). It also takes quite a bit of time for developers to become productive on a specific project if they aren't familiar with it, and they will need support, which takes away productive time from the experienced devs.

### Time Estimations Are Flawed

First of all, developers don't work full eight hours per day. This is quite self-explanatory, and most teams consider effective work to be six hours per day, but this isn't accurate. In his book The Shallows: What The Internet Is Doing To Our Brins, Nichlas Karr explains how the advent of the internet, multi-tasking, and social media has changed how our brain works. Since a lot of the applications we use are designed to be addictive.

* Checking email.
* Checking social media.
* Receiving error log notifications.

On top of that:

* Being interrupted by coworkers on Slack.
* Working from home poses new challenges - like being interrupted by family members.

It takes an average of about 25 minutes (23 minutes and 15 seconds, to be exact) to return to the original task after an interruption, according to Gloria Mark, who studies digital distraction at the University of California, Irvine. Multiple studies confirm this, so it's safe to say that the actual effective time spent coding is significantly less than six hours. When we do estimations, we need to consider relative ones. So a story point should not be defined in time but rather in relation to another user story. This way we can escape the pitfall of unreliable time-based estimations.

### In Closing

There isn't a onesize fit all solution.

* Use a strict domain language.
* Make sure stakeholders understand the value of spikes.
* Get your designers on board with Atomic Design. If they are familiar with CSS and HTML, even better.
* Before building UI pages, get into the habit of first indentifying and building the needed components. 
* Use Storybook to test these components in isolation.
* Use a self management technique like Pomodoro to manage your time, and work in uninterupted bursts.
* Resist the urge to go to time based estimations and always resort to relative comparisons between user stories: ask questions like "do you feel this 3 point user story is three times as complex as this one which is only 1 SP?".