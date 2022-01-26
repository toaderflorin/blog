---
layout: post
title:  "Replicating State Functionality In Functional React Components"
date:   2021-01-09 00:39:37 +0300
description: "
In the previous example, we went over a global store app pattern that emulates Redux. The main advantage of this approach is familiarity, meaning that developers can structure their projects using a similar folder/code structure. There is, however, an alternative approach popularized by  Svelte, which is less verbose. While this is a familiar approach, many developers feel that the single-store architectural approach leads to bad software patterns.
"
icon: "/src/images/gatsby-icon.png"
categories:
---
When implementing simple React applications, Redux might cause significant overhead, and just using component state is enough. There are however differences between class components and function components related to how hooks work, which we'll look at next.

With classes, component state is accessible via this.state, and updating it (and triggering component rerendering) is done via this.setState. In functional components, we use the useState hook and instead of merging the object we're passing in, the state is replaced. It can be used several times and the intention is to be used for each field we want to track - for example, if we have multiple inputs on the page, we can use the hook for the state of each one of them.

<img src="x.png" class="img" />

On first look it seems there's a simple solution - we can simply merge the state ourselves.

```typescript
async function loadSection1() {
  try {
    this.setState({
      ...state,
      section1: {
        ...state.section1,
        requestState = RequestState.Loading
      }
    })
    
    const data = await fetchSection1Data()

    this.setState({
      ...state,
      section1: {
        ...state.section1,
        requestState = RequestState.Loaded
      }
    })
  } catch {
    this.setState({
      ...state,
      section1: {
        ...state.section1,
        requestState = RequestState.Error      
      }
    }
  }) 
}

async function loadSection2() {
  try {
    this.setState({
      ...state,
      section2: {
        ...state.section1,
        requestState = RequestState.Loading
      }
    })
    
    const data = await fetchSection1Data()

    this.setState({
      ...state,
      section2: {
        ...state.section2,
        requestState = RequestState.Loaded
      }
    })
  } catch {
    this.setState({
      ...state,
      section2: {
        ...state.section2,
        requestState = RequestState.Error      
      }
    }
  })
}
```

Where again X is:

```typescript
type RequestState = {
  Null,
  Loading,
  Loaded,
  Error
}
```

We've started both actions at the same time. The first action finishes the fetch, updates the state, and triggers a render. Then the second action finishes, but because the function creates a closure around the update method, so state refers to the value when the action started. This means that the second action that finishes will overwrite the results of the other one.

What we is a mutable way of tracking the state. Luckily React provides a useRef hook that allows us to keep a reference to an object on a per-component basis. The typical use case for it is to store references to UI elements but it can be used to point to any object, so we can store our updated state in it whenever any of the responses return.

```javascript
function setComponentState(newState: any) {
  const currentState = stateRef.current
  const newState = { ...currentState, ....newState }
  this.setState(newState)
  stateRef.current = newState
}
```

Finally, necause we find this functionality useful, let's create a custom hook.

```javascript
import { useRef, useState } from 'react'

export default function useComponentState(initialState: any) {
  const internalRef  = useRef(initialState)
  const [internalState, setInternalState] = 
    useState(initialState)

  function setState(state: any) {
    const newState = { ...internalRef.current, ...state }
    setInternalState(newState)
    internalRef.current = newState
  }

  return { state: internalState, setState }
}
```

Finally, this can be used in our component the same way we would use the regular `useState` hook:

```typescript
function StatefulComponent() {}  {
  const { state, setState } = 
    useComponentState(initialState)

  return (
    // we ca bind the state here
  )  
}
```

Calling `setState` will trigger a component update.
