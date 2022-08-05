---
layout: post
title:  "Migrating AngularJS Apps Using Microfrontends"
date:   2022-07-05 09:39:37 +0300
description: "When Google announced that it would be rebooting AngularJS and that Angular 2.0 would be effectively a new framework, a lot of companies with products built on the old version were put in a difficult situation of having to either restart building their product from scratch or continue with a deprecated technology or you some kind of hybrid solution. Continuing to build on a deprecated technology is obviously risky. As time passes, there are no more updates to the library, and finding developers willing to work on it becomes harder and harder, so this isn't really an option.
"
icon: "opera-icon.png"
categories: 

---
Dan Abramov causing a bit of a stir when in 2019 he mentioned he doesn't understand micro-frontends and that their role could be taken up by a good component architecture. This was when they recently came to the scene and they were the it thing. His statement raised a lot of people’s curiosity and made them wonder about them.

<img src="dan.png" class="img" />

Naturally, given the popularity of microservices, I had to have a look.

### So Are They Useful?
Interestingly, the same arguments could be made however for an API project -- and indeed a solid module system could take the role of micro-services. The counter-argument is of course that you cannot deploy modules individually, and the flow of publishing packages and updating your monolith is more cumbersome than deploying individual microservices. 

Ikea is one of the first companies to introduce the concept (although they weren't called microfrontends) at the time -- and they were using iframes. Dazn was another early adopter, and the chief architect Luca Mezzarila seems to be quite an evangelist for the approach.

<iframe width="560" height="315" src="https://www.youtube.com/embed/BuRB3djraeM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="z-index: -1" allowfullscreen></iframe>

However, most companies aren't the size of Ikea or Dazn, and so naturally one would proably ask if there is any role for them for a smaller sized company. But there is another advantage to microservices - you can use different programming languages for them. The same applies to micro-frontends.

### The Satelite Microservice Pattern

This isn't a design pattern per se, it's more a patter that appears "in the wild". A lot of companies start out with a monolith API, and then they decide they want to expand on it. As the size of the company increases, they might want to move to microservices, but the monolith isn't always designed in such a way that its modules are decoupled into bounded contexts (which makes it difficult to break up). Or they might want to use a newer technology -- let's say the main API is written in PHP, but they want to move to Node.js. So what companies usually do is they keep the initial API and they bild smaller satellite microservices around it.

<img src="micro.webp" class="img" />

In fact, this might be the most frequent approach to microservices.

Microfrontends are similar.

<img src="verticals.png" class="img" />

### iFrames
The simplest way to use microfrontends is the Ikea way: create a shell application and then each microfrontend is displayed in an iframe, and is completely isolated. The shell would have its own routing, and so would the individual MFEs. 

### Module federation
This is a new WebPack feature (and it's only available in WebPack 5). The idea behind it is you want to be able to have multiple builds form a single application. Each build acts as a container and also consumes other builds as containers. This way each build is able to access any other exposed module by loading it from its container.

### A Specific Usecase

When Google announced that it would be rebooting AngularJS and that Angular 2.0 would be effectively a new framework, a lot of companies with products built on the old version were put in a difficult situation of having to either restart building their product from scratch or continue with a deprecated technology or you some kind of hybrid solution. Continuing to build on a deprecated technology is obviously risky. As time passes, there are no more updates to the library, and finding developers willing to work on it becomes harder and harder, so this isn't really an option. But if the company has invested a lot of time and effort in building the problem, restarting from scratch isn't really an option either as it may take years to rebuild the product. So what would be the ideal solution is to keep the existing codebase, ideally not touch it, and just add/rebuild parts of the application in a newer framework.

Let's assume that the new framework is React since that is the most popular choice out there. You can use a library such as react2angular to communicate directly to React components from your Angular app, and it would look something like this:

The problem with this approach is it's quite cumbersome. Also, React and Angular have significantly different data flows - React is usually used alongside a datastore such as Redux, and it has a unidirectional information flow. 

<img src="redux.svg" class="img" />

Angular, on the other hand, uses two-way data binding and an MVC style of architecture.  

<img src="mvc.png" class="img" />

In this case, React is more restrictive than Angular is so we have to use a lot of callbacks. 

Luckily, there's a better way. We can use microfrontends. While module federation can be used for polyglot apps, it's not easy to do so. We'll get into that in a later article. There is however a specific framework that allows just that.

### SingleSPA
SingleSPA is probably the most popular way to do microfrontends right now. They have an interesting intro on it.

<!-- <iframe width="1237" height="696" src="https://www.youtube.com/embed/L4jqow7NTVg" title="Single-Spa Intro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

Let's look at some of the advantages:

1. Integration with support.
2. 
