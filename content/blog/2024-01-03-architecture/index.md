---
layout: post
title:  "Explaining Architectural Concepts"
date:   2024-01-01 09:39:37 +0300
description: "One of the tasks of a senior developer is to introduce architectural concepts to new junior developers joining the company.
And if there are multiple microservices involved, which all use different approaches, it can be confusing.
Some older microservices might use MVC, in a Web API context. The newer ones might use minimal APIs. A select few might do CQRS. 
"
icon: "opera-icon.png"
categories: 

---
One of the tasks of a senior developer is to introduce architectural concepts to new junior developers joining the company.
And if there are multiple microservices involved, which all use different approaches, it can be confusing.
Some older microservices might use MVC, in a Web API context. The newer ones might use minimal APIs. A select few might do CQRS.

Ultimately, it all boils down to things like cohesion, coupling, and encapsulation.

The PC architecture is one of the simplest analogy you can use to explain these concepts to a junior developer. It would consist of the following components:

* A motherboard.
* A CPU, which can be an x86 or arm.
* Hard disk drives.
* A graphics card.
* Memory chips.

<img src="moth.jpg" class="img" />

Right off the bat, we notice that everything is modular, and everything consists of components communicating through standardized interfaces.

## Decoupling

Let's assume we have created a very powerful PC for development. But after a while, we might want to turn it also use it as a gaming PC. All we need to do is 

We can swap out our old graphics card with a newer one, and very easily, and it doesn't really impact the system in any way, because it doesn't affect the rest of the system, and because it communicates with the rest through a PCI interface on the motherboard. 
This is an example of decoupling.

A simple analogy with for better understanding coupling is a Rubik's cube.

<img src="rubik.jpeg" class="img" />

Have you ever tried to solve one of these? If you don't know the trick, what you will try to do is to solve one face first, and then try to focus on the others. 
Of course, this doesn't work because the colors are coupled and trying to change the unsolved faces breaks the existing ones.

## Encapsulation

Here's a picture of a Samsung SSD drive.

<img src="hdd.png" class="img" />

To the outside system, it is a black box. And that's the way it should be. If there is an issue with it, it can be serviced or replaced without affecting the whole system. The same drive can also be used in other computers.

<br />

## Agnostics

With PCs, you are dealing with stable interfaces like SATA etc., but when writing your own code you will need to come up with your own patterns for communicating between components.
Here's a rule of thumb: if two components depend on each other in both directions, you essentially have just one monolith. Now let's take it up a notch.
This is why a layered approach is so important.

Notice that the lower level layer are agnostic to how they are being used.

This is why building things using components is so important. 

## Classic 3-tier



And there you have it.

An example of the 3-tier is this:

<img src="tiered.png" class="img" />


Some final notes.

```csharp
public interface IRepository<T>
{
    T GetById(int id);
    IEnumerable<T> GetAll();
    void Add(T entity);
    void Update(T entity);
    void Delete(T entity);
}
```

Now we are using it.

```csharp
public interface IRepository<T>
{
   public class EntityFrameworkRepository<T> : IRepository<T> where T : class
{
    private readonly DbContext _context;
    private readonly DbSet<T> _dbSet;

    public EntityFrameworkRepository(DbContext context)
    {
        _context = context;
        _dbSet = _context.Set<T>();
    }

    public T GetById(int id)
    {
        return _dbSet.Find(id);
    }

    public IEnumerable<T> GetAll()
    {
        return _dbSet.ToList();
    }

    // ...
}
```