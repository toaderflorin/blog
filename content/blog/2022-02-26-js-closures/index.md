---
layout: post
title:  "Execution Contexts, Scopes and Closures"
date:   2022-02-26 09:39:37 +0300
description: "Closures are probably one of the most unintuitive features for newcomers to Javascript, especially if they come from languages such as Java or C#. The notion of a function within another function itself isn't hard to understand, the significant hurdle in understanding comes with preserving the lexical environment around these functions once the parent function has finished executing. There are also quite a few articles that use misleading terminology -- for example, context versus execution context, lexical environment versus scope, etc. We'll aim to clarify the terms. 
"
icon: "hook-icon.png"
categories: 

---
Closures are probably one of the most unintuitive features for newcomers to Javascript, especially if they come from languages such as Java or C#. The notion of a function within another function itself isn't hard to understand, the significant hurdle in understanding comes with preserving the lexical environment around these functions once the parent function has finished executing. There are also quite a few articles that use misleading terminology -- for example, context versus execution context, lexical environment versus scope, etc. We'll aim to clarify the terms. 

*An important concept to mention is that functions are first-class citizens in Javascript, whereas in C# / Java, it's the classes that are first-class citizens. So even though a language like C# does support closures, they use some magic under the hood, as we'll explain later.*

### Scope
Let's look at what *scope* means first. Scoping simply means reducing the visibility of variables based on the block where they have been declared. The JS engine recognizes three types of scopes:

1. The global scope.
2. Function scopes.
3. Block scopes.

We can consider the following piece of code:

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
This is how it looks like:

<img src="stack.svg" class="img" />

In this case, the global scope contains *arrayItems*, *i* is in the function scope and *message* is in the block scope. So far, this is intuitive, and it's not that much different than what we would expect from a language like C#, Java, or C. 

Scopes form a chain. Variable resolution works as follows: if a variable isn't available in the current scope, it goes up the chain.

### Execution context
The term *context* refers to what the *this* keyword points to, which is different from *execution context*, as we will see in a moment. Since JS is not an OOP imperative language (classes are just syntactic sugar), the value of the *this* keyword depends on how the function is called (see *bind* or *apply*), but explaining it is beyond the scope of this article.  The *execution context* is a general abstract term and refers to several things taken as a whole:

* The value of *this*.
* The lexical environment in which the code runs in -- in the case of functions, that's the outer scope.
* The code/function's own variables.

When the JS engine starts a script, it creates something which is called a *global execution context*. Each execution context has two phases:

1. The creation phase.
2. The execution phase.

Javascript also introduces a concept called "hoisting". This refers to variables being available before being declared, but contrary to what the term would intuitively suggest, nothing is actually being hoisted. Instead, what happens is the JS engine first does a pass through the code and determines which variables are declared and assigns an undefined value for them. The term "hoisting" comes from the illusion this gives that the declaration has been moved to the beginning of the block.

```javascript
function showXandY() {
  console.log('x is ', x)
  console.log('y is ', y)
}

showXandY() // we get undefined and undefined

const x = 12
const y = 14

showXandY() // here, we get 12 and 14
```
Also we have:

1. A global execution context.
2. A function execution context.

*<b>Remember:</b> scope refers to the visibility of the variables, and context refers to where the code is executed.*

### Closures
Let's look at a more complicated example:

```javascript
let name = 'global variable'

function f1() {
  console.log(name)
}

function createClosure(name) {    
  function f2() {
    console.log(name)
  }

  return function() {
    console.log('starting...')
    f1()
    f2()
  }
}

const g1 = createClosure('a')
const g2 = createClosure('b')

c1()
c2()
```
This seriously complicates things. First, we can see we can see thate *createClosure* returns another function -- so they really are objects. We create two instances, *g1* and *g2*. The first question would be which *name* variable the *f1* function "sees", because it's being run from *createClosure*, but it's being declared outside. The answer is it seems the variable in the global scope.  

If we run this, we get:

```
starting...
outer variable
a
starting...
outer variable
b
```
What's interesting is that *f2* is able to display the value of the name parameter even though the *createClosure* function has finished executing. This aspect captures what closures are all about.

If a function returns a value that is another function (functions are objects), the JS engine creates a "closure" around it and preserves the returned function's lexical environment that the inner function lives in at the moment it was created. This has several potential uses and also side-effects -- a simple side effect is the one mentioned before -- since React components are closures, they keep the value of *state* at the moment the function was called (it acts as a render function), you cannot use a global state object per component and you cannot merge new partial state asynchroniously because other actions might have changed the state in the meantime. A simple example of closure can be the result returned by a React higher order component.

### Closures For Private Fields
Closures are also interesting because they can be used to emulate private class data. While there are classes in JS, they are simply syntactical sugar over prototypical inheritance, and you can't have private fields. Normally most developers wouldn't need to know how closures work, but given how popular React's functional components are (which make use of closures) and the amount of frustration not understanding them, a guide to explain them in detail is needed. With the advent of TypeScript however, we don't need to do this.

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
```

Let's try to unpack what happens here. The methods *incrementAge* and *showStats* live inside the *Person* function scope. They "see" *firstName*, *lastName*, *age* and *_age* (which acts as a private variable). They constitute the lexical environment for these functions. When the outer function returns an object referencing these functions (and again keep in mind they are simply objects).

### A Look At C# Closures
To illustrate how remarkable closures are, it's worth pointing out what the .NET runtime does to support them (they are only supported from C# 7.0 and up).

With C# / VB.NET in general, there has been a move towards a hybrid imperative/functional language, so support for "functions in functions" wasn't unexpected. And, of course, scoping requires closures -- so let's look at how .NET achieves them.

```csharp
int a = 10;
Action del = delegate 
{ 
  Console.WriteLine($"a is {x}."); 
};

del();
```

C# uses the concept of a "delegate" to refer function objects that can be passed around - they are essentially reference types. The problem with delegates is that they don't have any state, so when the C# compiler detects a delegate that forms a closure returned to the outside scope, the function and its associated local variables are promoted to a compiler-generated class. The compiler then treats the delegate as a method in this class.

```csharp
[CompilerGenerated]
private sealed class <>c__DisplayClass0_0
{
    public int a;
    internal void <M>b__0()
    {
        Console.WriteLine(string.Format("a is {0}.", x));
    }
}
```

As we can see from the .NET implementation, we really just have a function with some data.
