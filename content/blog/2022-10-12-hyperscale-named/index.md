---
layout: post
title:  "Hyperscale Is Truly Game Changing"
date:   2022-10-15 09:39:37 +0300
description: "When Google announced that it would be rebooting AngularJS and that Angular 2.0 would be effectively a new framework, a lot of companies with products built on the old version were put in a difficult situation of having to either restart building their product from scratch or continue with a deprecated technology or you some kind of hybrid solution. Continuing to build on a deprecated technology is obviously risky. As time passes, there are no more updates to the library, and finding developers willing to work on it becomes harder and harder, so this isn't really an option.
"
icon: "exponential.png"
categories: 

---
A common theme on this blog is performance optimizations and practical, real-world-oriented development. We talked about sharding, but probably most companies would want to do something other than roll out their custom sharding solution. 

A very simple way to improve performance is to implement a caching solution on your endpoints. But that still requires going to every endpoint and adding caching logic, thinking about cache eviction, etc.

Since most applications are significantly more read-heavy than write-heavy, we can use database replication and have multiple read-only replicas. The problem here is we run into CAP theorem limitations. Let's assume that:

We are using sync replication: the more replica



What if we get rid of replication altogether?

### Hyperscale is truly revolutionary
Azure hyperscale separates the compute nodes (the bit that takes care of running complex queries) from the storage nodes. This means that we can scale up the 

Hyperscale is truly cloud-native. Since the page servers are 

<img src="hyperscale.png" class="img" />

Hyperscale allows two options for read replicas: high availability replicas and named replicas. 

You can have up to four read replicas, and they work transparently. The application code doesn't even need to know that they are there. Azure will take care of spreading calls to them.

If you want to further extend your read compute capacity, you can use named replicas. 


### .NET Core Implementation

If you are not using, you probably should.

```csharp
public class GenericRepository<TEntity> where TEntity : class
{
    internal SchoolContext context;
    internal DbSet<TEntity> dbSet;

    public GenericRepository(SchoolContext context)
    {
        this.context = context;
        this.dbSet = context.Set<TEntity>();
    }

    public virtual IEnumerable<TEntity> Get(
        Expression<Func<TEntity, bool>> filter = null,
        Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
        string includeProperties = "")
    {
        IQueryable<TEntity> query = dbSet;

        if (filter != null)
        {
            query = query.Where(filter);
        }

        foreach (var includeProperty in includeProperties.Split
            (new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
        {
            query = query.Include(includeProperty);
        }

        if (orderBy != null)
        {
            return orderBy(query).ToList();
        }
        else
        {
            return query.ToList();
        }
    }

    public virtual TEntity GetByID(object id)
    {
        return dbSet.Find(id);
    }

    public virtual void Insert(TEntity entity)
    {
        dbSet.Add(entity);
    }

    public virtual void Delete(object id)
    {
        TEntity entityToDelete = dbSet.Find(id);
        Delete(entityToDelete);
    }

    public virtual void Delete(TEntity entityToDelete)
    {
        if (context.Entry(entityToDelete).State == EntityState.Detached)
        {
            dbSet.Attach(entityToDelete);
        }
        dbSet.Remove(entityToDelete);
    }

    public virtual void Update(TEntity entityToUpdate)
    {
        dbSet.Attach(entityToUpdate);
        context.Entry(entityToUpdate).State = EntityState.Modified;
    }
}
```

A typical implementation would look like:

We can make use of the options functionality patter in C#.

