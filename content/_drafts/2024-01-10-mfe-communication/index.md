---
layout: post
title:  "Micro-Frontend Communication Patterns"
date:   2024-01-13 09:39:37 +0300
description: "Architects are the creative visionaries who conceptualize and design the overall form, function, and aesthetics of buildings. They consider factors like aesthetics, functionality, sustainability, and user experience to create spaces that are both aesthetically pleasing and functionally effective. Architects possess a deep understanding of architectural history, design principles, and building codes. They translate client requirements into detailed drawings and specifications that guide the construction process. 
"
icon: "small.jpg"
image: "cucumber.jpg"

---
When using micro-frontends, with technologies like SingleSPA or module federation, something that normally comes to mind is how does one MFE communicate with another. There are several reasons why this might be the case.

Flows that span multiple MFEs, for example, triggering a popup or notification in another micro-frontend.

<img src="frames.png" class="img" />

Sharing some piece of state or session.

Triggering a page refresh.

## Lifting State Up / 

A common pattern with React components is taking the component hierarchy, and moving the state in the current properties one level higher.
Let's assume have a component and we are displaying it in a list.

Initially, it's the comp.

We can do one call 

## Local Storage / Session Storage

If we lift state all the way to the root component, we can sync it to local storage. 

```javascript
const mfeState = JSON.parse(localStorage.getItem(MFE_NAME))
```
You will have one entry per MFE, and it will be hierarchical, just like Redux state.

Make sure you are familiar with [immutable update patterns](https://redux.js.org/usage/structuring-reducers/immutable-update-patterns).

## The URL As State

Lifting the state even higher means putting it in the URL. In fact, doing a local redirect is the best way to trigger re-rendering across MFEs.
A simple approach would be this:

```
/state=%7B%22firstName%22%3A%22Florin%22%2C%22lastName%22%3A%22Toader%22%7D
```
There are some security considerations with keeping the entire state in the URL. An alternative is to keep just IDs. For example:

## Window Level Events

One microfrontend can communicate with another simply by triggering an event on the window. 

```javascript
const catFound = new CustomEvent("animalfound", {
  detail: {
    name: "cat",
  },
});
```

This can be easily captured:

```javascript
const catFound = new CustomEvent("animalfound", {
  detail: {
    name: "cat",
  },
});
```