---
layout: post
title:  "Implementing A Simple Redux Store"
date:   2021-01-08 00:39:37 +0300
description: "
In the previous example, we went over a global store app pattern that emulates Redux. The main advantage of this approach is familiarity, meaning that developers can structure their projects using a similar folder/code structure. There is, however, an alternative approach popularized by  Svelte, which is less verbose. While this is a familiar approach, many developers feel that the single-store architectural approach leads to bad software patterns.
"
icon: "store.jpg"
categories:
---
In the previous example, we went over a global store app pattern that emulates Redux. The main advantage of this approach is familiarity, meaning that developers can structure their projects using a similar folder/code structure. There is, however, an alternative approach popularized by  Svelte, which is less verbose. While this is a familiar approach, many developers feel that the single-store architectural approach leads to bad software patterns. Dan Abramov has famously likened asynchronicity and state mutations, yet having a global state object can easily lead to situations where existing functionality can rely on existing state (state that was fetched previously). Moreover, oftentimes users bookmark or refresh pages, which can lead to problems.

Having a lot of stateful data can lead to brittle code because it relies on previously executed actions which might break the flow.

(As a side note here, a lot of applications are clientside logic heavy and they do a lot of inner joins and computations where this information might be better sent to the server)

One approach that client-side applications can borrow from server-side applications is to treat the URL as the current "state" and render solely based on that. That way, we ensure that the page always renders the same regardless of whether it was the result of client-side navigation or the user refreshing the page. An (imperfect) analogy that can be used here is that of pure functions - the result of the pure function always depends on the input parameters (in our case the URL), not some other application state. The analogy is imperfect because the page would of course render based on the server-side state.

React's functional components lend themselves well to this approach. We can use a simple example: imagine a page that displays products. 

>/products

By default, the page would display a list of products on sale or popular products. 

>/products?search=searchterm

The following URL would show the user a search result list. Let's consider the following scenario: a lot of sites allow the user to have a list of favorites. If a certain product is in the favorite list, the application shows an icon next to it. 

Instead of relying on a single global state object, we would have an individual store just for the product page that we would populate on URL navigation (which can be clientside or serverside). 

Our store uses the useReducer hook for reasons explained in the following article. 

The aim is to create a personal organizer application that has two sections: notes and tasks. The note page and task page structure are similar, so we'll present the code for notes as an example.

```typescript
import { useReducer } from 'react'

type Task = {
  id: string
  description: string
}

export type TaskStoreState = {
  tasks: Task[]
}

type Action = any

export default function useLoginStore(initialState: TaskStoreState) {
  const [state, dispatch] = useReducer(reducer, initialState)

  function addTask(description: string) {
    dispatch({ type: 'ADD_TASK', description })
  }

  function removeTask(id: string) {
    dispatch({ type: 'REMOVE_TASK', id })
  }

  function updateTask(id: string, description: string) {
    dispatch({ type: 'UPDATE_TASK', id, description })
  }

  return {
    state,
    actions: {
      addTask,
      removeTask,
      updateTask
    }  
  }
}

function reducer(state: TaskStoreState, action: Action) {
  switch (action.type) {
    case 'ADD_TASKS': {
      return {
        ...state,
        tasks: [...state.tasks, {
          id: 'newid',
          description: action.description
        }]
      }
    }

    case 'REMOVE_TASK': {
      return {
        ...state,
        tasks: state.tasks.filter((task: Task) => task.id !== action.id)
      }
    }

    case 'UPDATE_TASK': {
      return {
        ...state,
        tasks: state.tasks.map((task: Task) => {
          if (task.id !== action.id) {
            return task
          } else {
    
```