---
layout: post
title:  "Is Radix UI Easier To Customize Than MUI?"
date:   2024-01-13 09:39:37 +0300
description: "MUI is one of the most powerful and popular of the React libraries out there, because it comes prepacked with a lot of controls (let’s face it, nobody wants to build a calendar). The idea behind it is it’s an implementation of Google’s Material Design, and it’s really opinionated in that regard, and herein lies one of its problems: a lot of designers don’t want their application to look like Gmail or Android, they will want a specific look and feel.
"
icon: "radix-small.jpg"
image: "cucumber.jpg"
cells: 2
---
MUI is one of the most powerful and popular of the React libraries out there, because it comes prepacked with a lot, of controls (let's face it, nobody wants to build a calendar). It's a React implementation of Google's Material Design, and it's really opinionated in that regard. Which might be its Achile's heel, because a lot of designers don't want their application to look like Gmail or Android, they will want a look and feel that's specific to the application they are working on. 

<img src="screen.jpg" class="img" />

Alot of development teams pick it up with the idea that they will change it so that it doesn't look like Material Design, and since MUI supports variants and customizing the theme, this seems like a reasonable assumption, at least on first look.

*Material has a philosophy that is based on layers, elevation and conveying it via shadows. Changing the theme will give you a variation of Material Design, not something else. And the look and feel is quite specific, people know it when they see it.*

Can you change classes on the controls themselves? Yes. The problem is that in order to achieve the rich look, the actual controls have a lot of DOM subelements, and this can make it quite tricky. Take the select, for example.

<img src="mui-select.jpg" class="img" />

A select input will have DOM elements for icons on the left hand side, for the dropdown chevron, etc. Let's say we want to change the outline and add a shadow for focus, we could do one of two things.

```css
.Select {
  color: black;
  outline: none;
}
```
Just some very simple changes. The problem with this is you are going to have to change *a lot* of controls. So you could try something else: why not change the *MuiInputBase* class, as that is being used in a lot of input controls. The problem with this is that it has cascading effects on more complicated controls, and it tents to break them.

You can also customize controls on the theme level (here's a snippet from their documentation).

```typescript
const finalTheme = createTheme({
  components: {
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            px: 1,
            py: 0.25,
            borderRadius: 1,
          }),
        label: {
          padding: 'initial',
        },
        icon: ({ theme }) =>
          theme.unstable_sx({
            mr: 0.5,
            ml: '-2px',
          }),
      },
    },
  },
});
```

Again, this is going to be quite a bit work, and I don't believe the library was designed to be used like that.

## Headless Alternatives

If you're going for a custom look and feel, it's better to go with a headless library, and two come to mind, HeadlessUI and Radix. HeadlessUI is made by TailwindLabs, so it has good support, unfortunately there aren't many controls.

The other alternative is Radix UI Primitives, which are just unstyled React controls (based on Adobe React Radia).

<img src="tabs.jpg" class="img" />

By default, they only render unstyled DOM elements.

```tsx
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import './styles.css';

const TabsDemo = () => (
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
        Account
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab2">
        Password
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tab1">
...
```

You need to add the corresponding CSS.

```css
@import '@radix-ui/colors/black-alpha.css';
@import '@radix-ui/colors/green.css';
@import '@radix-ui/colors/mauve.css';
@import '@radix-ui/colors/violet.css';

/* reset */
button,
fieldset,
input {
  all: unset;
}

.TabsRoot {
  display: flex;
  flex-direction: column;
  width: 300px;
  box-shadow: 0 2px 10px var(--black-a4);
}

.TabsList {
  flex-shrink: 0;
  display: flex;
  border-bottom: 1px solid var(--mauve-6);
}
...
```

Styling the components will take a lot of work if you start from scratch. Don't expect it to be very easy, and you will most likely use the existing CSS / Tailwind their site suggests as a starting point.

## Radix UI Themes

Radix UI Themes work a lot like MUI. It's basically a theming system built on top of the existing primitives, where you can pick between various options.

Let's see how it works.

```jsx
<Theme
  accentColor="mint"
  grayColor="gray"
  panelBackground="solid"
  scaling="100%"
  radius="full"
>
  ...
</Theme>
```

It offers you a nice preview of it.

<img src="preview.jpg" class="img" />

Let's look at how a select looks like, when inspecting the DOM.

<img src="radix-select.jpg" class="img" />

Somewhat simpler, but not that much.

## Conclusion

MUI is a fantastic library. And if you're using MUI X, you get A LOT.

<img src="mui-x.jpg" class="img" />

But expect to use it *as is*, maybe with a custom theme. Radix UI Themes work similarly to MUI, it's just a different look-and-feel, which may be preferable.

If you want really custom behavior, you are probably looking at Radix UI Primitives, and you are going to have to put in some work. There are no magic bullets here.