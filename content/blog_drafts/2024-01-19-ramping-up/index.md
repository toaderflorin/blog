---
layout: post
title:  "The Danger Of Ramping Up A project Too Soon"
date:   2024-02-01 09:39:37 +0300
description: "MUI is one of the most powerful and popular of the React libraries out there, because it comes prepacked with a lot of controls (let’s face it, nobody wants to build a calendar). The idea behind it is it’s an implementation of Google’s Material Design, and it’s really opinionated in that regard, and herein lies one of its problems: a lot of designers don’t want their application to look like Gmail or Android, they will want a specific look and feel.
"
icon: "scr.jpg"
image: "cucumber.jpg"
cells: 2
---
Here's the most common issue caused by ramping up too soon: the lack of parallelization. 

*If a woman gives birth to one child in 9 months, it doesn't mean 3 women can't birth the same child in 3 months.*

Which I've discussed at length in my estimation article here.

### Construction As An Analogy

Let's use another analogy: construction work. If you are a construction company that builds houses, you can absolutely scale up and have multiple teams work on different residential units. But this is not the case, when it comes to 

<img src="skyscraper.jpg" data-src="skyscraper.jpg" class="img" loading="lazy" />

The interesting thing about software development is that you actually can work on stuff before having the underlying foundation properly set up, but it doesn't mean you should. It is commonly understood that adding more developers to a late project doesn't solve the problem. What's discussed less is the danger of ramping up a project too soon.

## You need a solid foundation

What constitutes the foundation of an application?

1. The layers and folder structure including setting up data access, dependency injection etc.
2. Configuration.
3. Instrumentation / logging.
4. Authentication.
5. Creating a design system for the frontend.
6. Setting up application state and access patterns.
7. Localization.
8. Linting.

Changing / understanding / maintaining code is a lot harder than creating new code. When you are working on large code bases with technical debt, you see a lot of different patterns.

* Some portions of the backend might use Kendo UI.
* Other portions might use MUI.
* Others use native HTML / CSS.
* Some parts of the backend could hit the database directly.
* Other parts might use an ORM.

Not only is it jarring for the user from a UX perspective, but it's also confusing for developers joining the team.

<img src="abcx.jpg" class="img" loading="lazy" />

Feedback loops and messy code

A piece of code, when standalone (out of a bigger context) can be clean, but it can still be problematic because it doesn't adhere to the project standards. So what happens when there are no standards yet, because the foundation hasn't 

Messy code lacking patterns leads to more messy code.

When developers fail to recognize patterns or understand existing code 

