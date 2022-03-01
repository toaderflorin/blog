---
layout: post
title:  "Javascript Closures"
date:   2022-02-26 09:39:37 +0300
description: "Closures are interesting because they can be used to emulate private class data. While there are classes in JS, they just are syntactical sugar over prototypical inheritance, and you can't have private fields. Normally most developers wouldn't need to know how closures work, but given how popular React's functional components are (which make use of closures) and the amount of frustration not understanding them, a guide to explain them in detail is needed."
icon: "hook-icon.png"
categories: 

---
Closures are probably one of the most unintuitive features for newcomers to Javascript, especially if they come from languages such as Java or C#. The notion of a function within another function itself isn't hard to understand. The unintuitive part comes when the outer function returns.

There are also quite a few articles that use misleading terminology - for example, context versus execution context, lexical environment versus scope, etc. We'll aim to clarify the terms. The main idea is that classes are first-class citizens in Javascript, whereas in C# / Java, it's the classes that are first-class citizens.

### Scope
Let's look at what "scope" means first. Scoping simply means reducing the visibility of variables based on the block where they have been declared. That is the "scope" of the variable. Let's look at the following example:

```javascript
const arrayItems = [1, 2, 3, 4]

function logArrayItems() {
  let i = 0
  for (const item of arrayItems) {
    const message = `Array item ${i} is ${item}`
    console.log(message)
    i++
  }
}

logArrayItems()
```

The JS engine recognizes three types of scopes:

1. The global scope.
2. Function scopes.
3. Block scopes.

This is how it looks like:

<img src="scopes.png" class="img" />

In this case, the global scope contains `arrayItems`, `i` is in the function scope and `message` is in the block scope. Let's look at a more complicated example:

```javascript
let name = 'outer scope'

function f1() {
  console.log(name)
}

function f2() {
  let name = 'inner scope'
  
  return function() {
    f1()
  }
}

const f = f2()
f()
```


### Execution context
The execution context is a general abstract term and refers to several things taken as a whole:
* The value of this.
* The lexical environment in which the code runs in - in the case of functions, that's the outer scope.
* The code/function's own variables.

When the JS engine starts a script, it creates something which is called a *global execution context*. Each execution context has two phases:

1. The creation phase.
2. The execution phase.


### Closures
If a function returns a value that is another function, the JS engine creates a "closure" around it and preserves the function's lexical environment that the inner function lives in at the moment it was created. This is interesting, it has several potential uses and also side-effects. A simple side effect is the one mentioned before -- since React components are closures, they keep the value of *state* at the moment the function was called (it acts as a render function), you cannot use a global state object per component and you cannot merge new partial state asynchroniously because other actions might have changed the state in the meantime. 

A simple example of closure can be the result returned by a React higher order component.

Closures are interesting because they can be used to emulate private class data. While there are classes in JS, they are simply syntactical sugar over prototypical inheritance, and you can't have private fields. Normally most developers wouldn't need to know how closures work, but given how popular React's functional components are (which make use of closures) and the amount of frustration not understanding them, a guide to explain them in detail is needed.

```javascript
function Person(firstName, lastName, age) {
  let _age = age

  function incrementAge() {
    _age += 1
  } 

  function showStats() {
    return `${firstName} ${lastName}, age ${_age}`
  }

  return {
    incrementAge,
    showStats
  }
}

const person1 = new Person('John', 'Doe', 32)
const person2 = new Person('Jane', 'Doe', 24)

console.log(person1.incrementAge === person2.incrementAge) // false
// not the same reference
```

Let's try to unpack what happens here. The methods `incrementAge` and `showStats` live inside the `Person` function scope. They "see" `firstName`, `lastName`, `age` and `_age` (which acts as a private variable). They constitute the lexical environment for these functions. When the outer function returns an object referencing these functions (and again keep in mind they are simply objects).

