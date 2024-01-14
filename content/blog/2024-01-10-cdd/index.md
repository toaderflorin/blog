---
layout: post
title:  "You Need Component Driven Design"
date:   2024-01-10 09:39:37 +0300
description: "Architects are the creative visionaries who conceptualize and design the overall form, function, and aesthetics of buildings. They consider factors like aesthetics, functionality, sustainability, and user experience to create spaces that are both aesthetically pleasing and functionally effective. Architects possess a deep understanding of architectural history, design principles, and building codes. They translate client requirements into detailed drawings and specifications that guide the construction process. 
"
icon: "small.jpg"
image: "cucumber.jpg"

---
During my development work, I have repeatedly come across the following pattern.'

1. The designer produces a design in Figma. S/he will.
2. The developer will implement said design.
3. The designer will play with the design and conclude it doesn't really behave exactly as s/he had expected.
4. Rinse and repeat.

The consequence of this is delivering a user story takes longer than expected, or in the words of John Carmack "after the first 90% comes the second 90%".

There are several reasons for this:

1. Figma uses absolute positioning, HTML usually doesn't, so layout flows.
2. HTML can be quite quirky, when it comes to collapsing margins, floating objects, etc.
3. Designers typically build their UIs out of primitives, whereas developers built them out of components (using component libraries), and there might not be a one-to-one relationship.
4. The application just doesn't behave as the designer expected when it comes to responsiveness / resizing of the window.
5. The designer's insistence that the implementation is pixel perfect.

In many ways the relationship between designers and developers is like the relationship between the architect and the structural engineer.

## The Architect / Structural Engineer Dichotomy

Architects and structural engineers are both crucial figures in the design and construction of buildings, but their roles and approaches differ significantly.

Architects are the creative visionaries who conceptualize and design the overall form, function, and aesthetics of buildings. They consider factors like aesthetics, functionality, sustainability, and user experience to create spaces that are both aesthetically pleasing and functionally effective. Architects possess a deep understanding of architectural history, design principles, and building codes. They translate client requirements into detailed drawings and specifications that guide the construction process. 

Structural engineers specialize in the analysis and design of a building's structural system, ensuring that it can safely and efficiently support the intended loads. They employ mathematical principles and sophisticated software to calculate the structural integrity of various components, such as beams, columns, and foundations. Structural engineers must consider factors like gravity, wind, earthquakes, and other environmental forces to ensure the stability and safety of the building under various conditions. They work closely with architects to ensure that the structural design aligns with the architectural vision.

<img src="hill.jpg" class="img" />

In essence, architects focus on the "what" and "how" of a building's design, while structural engineers focus on the "can" and "why." Architects envision the building's overall form and functionality, while structural engineers ensure that the building can safely support the intended loads and withstand external forces.


## The Approach

In my view, there needs to be a two-way collaboration between the developer and the designer during the implementation (during the sprint). 

My first rule of thumb is we need to do Component Driven Design. The central rule of CDD is: build your UI out of components, not out of HTML primitives. *So before implementing anything, designers need to ask themselves: "does our design system support it?".*

I believe that designers knowing some HTML / CSS and understanding flexbox / grid goes a long way. 
Atomic design is a specific CDD approach.

<img src="atomic-design.jpg" class="img" />

With Atomic Design, you have the following:

* Your *atoms* will usually be your HTML primitive elements like inputs, divs, etc.
* Your *molecules* would be compound components, for example, form items.
* An *organism* would be an entire form.
* *Templates* would be repeating patterns that you can use throughout the app, and *pages* are obviously entire pages in the app.

Again, you don't necessarily have to stick to this terminology, the only rule is you need to build your UI out of components, not HTML primitives.

Collaboration between the designer and the developer is essential during the sprint. This can be done using Figma Dev Mode, and Storybook.

Plugins:
* There is a Storybook plugin for Figma.
* There is a Figma plugin for VS Code, where the developer can see what has been marked as "ready for development".
* Slack integrations

<img src="integration.png" class="img" style="border: 1px solid #ddd;" />

The Slack integration is essential.

## Figma Components

Figma has support for components, but I found that most designers don't really use them, or use them sparringly. They might use them for things such as buttons or inputs, but that's about it (so just for the atoms). In the real world, we would have a lot of *molecules* (in atomic design parlance), but designers would usually copy paste in the design.

The components in Figma need to mirror the components in the code.

## 3rd Party Component Libraries And Custom Components

What happens if the developers use some kind of 3rd party library? Well, the good news is there are Figma libraries that replicate the existing controls in various component libraries, like MUI.
If we use a library that doesn't have a corresponding library, the designer will probably have to implement the Figma side using Figma components. 

In this particular case, we are showing a HeadlessUI popover. 

<img src="component.jpg" class="img" />

There will also be custom components that the team needs to build, in order to expand the in-house style guide library, as part of our CDD approach, this is normal. 

