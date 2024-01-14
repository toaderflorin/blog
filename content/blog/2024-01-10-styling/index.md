---
layout: post
title:  "Is Radix More Easy To Customize Than MUI?"
date:   2024-01-13 09:39:37 +0300
description: "The idea behind MUI is it's an implementation of Google's Material Design, and it's really opinionated in that regard. The thing is, a lot of designers don't want their application to look like Gmail or Android and will want a specific look and feel.The idea behind using a library like MUI is it comes with a lot of prebuilt controls, and most teams don’t want to reinvent the wheel. Nobody wants to build a calendar. And certainly, it is tempting to pick MUI and attempt to change it / style it / customize it. You don’t want to do that.
"
icon: "small.jpg"
image: "cucumber.jpg"

---
The idea behind MUI is it's an implementation of Google's Material Design, and it's really opinionated in that regard. The thing is, a lot of designers don't want their application to look like Gmail or Android and will want a specific look and feel.

The idea behind using a library like MUI is it comes with a lot of prebuilt controls, and most teams don't want to reinvent the wheel. Nobody wants to build a calendar. And certainly, it is tempting to pick MUI and attempt to change it / style it / customize it. You don't want to do that.

<img src="screen.jpg" class="img" />

*MUI is an implementation of Material Design. Material has a philosophy that is based on layers, elevation and conveying it via shadows. Changing the theme will give you a variation of Material Design, not something else. And the look and feel is quite specific, people know it when they see it.*

You will be able to go and change classes on some base controls, but this has the problem that it propagates to various controls where you don't want it. The alternative is to write custom overrides just for some specific controls (the ones you want to use), but you are really fighting against the library, because it wasn't meant for that.

The customization mechanism works as follows: you can override styles which are used in the app. So for example:

```css
.Button {
  color: black;
}

/* Increase the specificity */
.Button:disabled {
  color: white;
}
```

Or specifically...

```tsx
<Slider
  defaultValue={30}
  sx={{
    width: 300,
    color: 'success.main',
    '& .MuiSlider-thumb': {
      borderRadius: '1px',
    },
  }}
/>
```

The problem with this is that it has cascading effects on more complicated controls. 

## Headless Alternatives

If you're going for a custom look and feel, it's better to go with a headless library, and two come to mind, HeadlessUI and Radix. HeadlessUI is made by TailwindLabs, so it has good support, unfortunately there aren't many controls.

The other alternative is Radix, which is based on  React Aria. A headless library basically just renders the UI elements needed and the interactions. 

<img src="tabs.jpg" class="img" />

The JSX code isn't styled by default.

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

And the coresponponding CSS.

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

Styling the components will take a lot of work if you start from scratch. Don't expect it to be very easy, and you will most likely use the existing theme / template.

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

Let's look at how a select looks like, when inspecting.

<img src="radix-select.jpg" class="img" />

As we can see, it isn't very simple either, and overriding styles will create specificity issues.

## Conclusion

If you want really custom behavior, you are going to have to put in some work. RadixUI Themes works similarly to MUI, it just has a different look and feel which may be preferable.