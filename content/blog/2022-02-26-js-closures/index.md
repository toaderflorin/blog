---
layout: post
title:  "Javascript Closures"
date:   2022-02-26 09:39:37 +0300
description: "Closures are interesting because they can be used to emulate private class data. While there are classes in JS, they just are syntactical sugar over prototypical inheritance, and you can't have private fields. Normally most developers wouldn't need to know how closures work, but given how popular React's functional components are (which make use of closures) and the amount of frustration not understanding them, a guide to explain them in detail is needed."
icon: "hook-icon.png"
categories: 

---
Closures are interesting because they can be used to emulate private class data. While there are classes in JS, they just are syntactical sugar over prototypical inheritance, and you can't have private fields. Normally most developers wouldn't need to know how closures work, but given how popular React's functional components are (which make use of closures) and the amount of frustration not understanding them, a guide to explain them in detail is needed.

```javascript
function outer(x: string) {
  return function inner(y: string) {

  }
}

const f = outer()
```

What's interesting here is that the inner function remembers the context in which it was called even though the outer code has returned. This would be atypical if you're coming from soemthing like C# (yes, C# now has closures, and the way they work is interesting - it will be later on).

What's interesting here is that the inner function remembers the context in which it was called even though the outer function has finished executing. The main idea is that classes are first-class citizens in Javascript, whereas in C# / Java, it's the classes that are first-class citizens.

Functions are objects and can be initialized, passed as arguments, etc. For example: 

```javascript
const f = new Function('function code')
```
The Javascript engine attaches a lexical environment to the function - and this stays with the function.

### Execution context

When the JS engine starts a script, it creates something which is called a *global execution context*.

```javascript
let x = 12

function y() {
  console.log(x)
}
```

Each execution context has two phases:

1. The creation phase.
2. The execution phase.

The values in it are `window`, `x:12` etc.

When starting the function, a new *function execution context* gets created.
