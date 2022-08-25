---
layout: post
title:  "The Dreaded Death Spiral"
date:   2022-08-05 09:39:37 +0300
description: "When Google announced that it would be rebooting AngularJS and that Angular 2.0 would be effectively a new framework, a lot of companies with products built on the old version were put in a difficult situation of having to either restart building their product from scratch or continue with a deprecated technology or you some kind of hybrid solution. Continuing to build on a deprecated technology is obviously risky. As time passes, there are no more updates to the library, and finding developers willing to work on it becomes harder and harder, so this isn't really an option.
"
icon: "exponential.png"
categories: 

---
We've all been in a failed software project. More projects than not fail to meet their target goals, and usually, the failure is slow and gradual and could have been anticipated. Identifying that your project has started going down a slippery slope and reversing course early is crucial for managers and team leads.

Development is a complex process. And like all complex processes, it exhibits self-interaction - i.e., feedback loops. Let's analyze a positive feedback loop: the team is happy and productive. Developers are motivated, they produce good work, and the product does well as a result.

<img src="chaos.png" class="img" />

Let's now analyze the reverse:

1. We have a digital agency that does custom software, and they have provided a client with a fixed term price for a project - and they got the contract by low balling the estimate. 

2. It turns out that the project is grossly underestimated, and upper management is putting pressure on the development team to deliver more story points worth of functionality faster.

3. Some developers start working overtime to meet deadlines, some start cutting corners, unit test coverage drops, etc. In a nutshell, technical debt goes up.

4. Overtime leads to burnouts in some developers. Other developers are unhappy with the drop in code quality. As technical debt goes up, fixing bugs feels like a game of whack-a-mole, and the application feels like a fragile structure made out of layers of mud plastered on top of each other.


5. Seeing that there's a drop in productivity management ups the pressure. Developers are informed there will be no bonuses or raises because the team is behind schedule.

<img src="exponential.png" style="width: 400px; float: right;" />

6. Burned out and unhappy, the best developers accept offers from other companies. 

7. Faced with a staff shortage, management scrambles to find replacements. But given the budget constraints and limited time, they cannot find the same caliber of people that left.

8. Moreover, it takes a considerable amount of time to train these new recruits by the exis't eting devs, which slows down development even worse.

9. Management gets even more panicked, and they call for a meeting. The cycle repeats.

10. Ultimately, the core developers decide to leave at once and the project is cancelled.

As we can see, not only do things spiral out of control, they do so at an accelerated rate. Once things get to a certain level of "bad", a point of not return is reached.

### Understanding Self Reinforcing Loops
Self reinforcing loops happen all the time in nature. A classic example is a blackhole. As matter falls into it, the black hole gets bigger and bigger. As an observer, approaches the event horizon, space is more and distorted and chaotic.

<img src="black-hole.webp" class="img" />

This principle can be applied to people / psychology as well. A person from a rich family will have good financial education, as well as significant starting capital. They would also probably have access to higher education and afford to pay for a prestigious university which in turn grants access to high-paying jobs (being a lawyer).
On the flip side, people from poor/broken families have a history of 

### A Note On Psychology
A fundamental problem with people is it's hard for them to change their mind. A great [article](https://jamesclear.com/why-facts-dont-change-minds) by James Clear explains it. We haven't evolved to .

A famous example is the French losing to the British in three consecutive battles at Azincourt, Crecy and Poitiers in pretty much the same manner -- by charging .

### Mitigation Strategies
The best mitigation strategy is prevention.

1. Don't allow the mood in the team to degrade in the first place. Once the vase is broken, it's harder to put the pieces back.
2. Make sure proper estimation practices are in place.
3. Make sure code reivews are in place and that the management understands the value of spikes.
4. 