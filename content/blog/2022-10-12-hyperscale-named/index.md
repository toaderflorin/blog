---
layout: post
title:  "Cloud Native Relational Databases Are Truly Game Changing"
date:   2022-10-15 09:39:37 +0300
description: "A common theme on this blog is performance optimizations and practical, real-world-oriented development. We talked about sharding, but probably most companies would want to do something other than roll out their custom sharding solution. A very simple way to improve performance is to implement a caching solution on your endpoints. But that still requires going to every endpoint and adding caching logic, thinking about cache eviction, etc.


"
icon: "hyperscale.png"
categories: 

---
The word cloud native gets thrown around quite a bit, and depending on who you ask, you'll get significantly different answers. My favorite way to define it is this: *Does your code run on promise as well as in the cloud, or only in the cloud? What would be a case where your code doesn't run on premise, or only on premise? A case where that might not be the case is if you are using technologies like CosmosDB or Aurora.*

The promise of the cloud is it makes data center operations easy—or easier than they would be if you'd have to manage your own data center, but you can also manage your own private cloud -- yes, this involves a significant devops effort, but it can be done. However, there is a class of software that only runs 

But there is also built in software that takes native advantage of the cloud infrastructure. 

You could write your own sharding engine, but you probably don't want to do that. Alternatively, you could technologies like Vitess or Citus and run your own k8s cluster, which is an entirely acceptable approach, albeit probably not the simplest approach. A truly cloud native approach is to use something like Azure Database Elastic tools. AD tools offer a sharding solution that's built into the Azure cloud, the only caveat is it's not transparent, meaning you need to use dedicated .NET code for data dependent routing. Azure provides a shard map manager which allows it to spread to load within the cluster. The shards are kept withing a special database in a dedicated node. A simpler alternative is to use an approach such as Aurora.

A common theme on this blog is performance optimizations and practical, real-world-oriented development. We talked about sharding, but probably most companies would want to do something other than roll out their custom sharding solution. A very simple way to improve performance is to implement a caching solution on your endpoints. But that still requires going to every endpoint and adding caching logic, thinking about cache eviction, etc.

Since most applications are significantly more read-heavy than write-heavy, we can use database replication and have multiple read-only replicas. The problem here is we run into CAP theorem limitations. Let's assume that:

We are using sync replication: the more replica

What if we get rid of replication altogether?

### Azure Hyperscale is truly revolutionary
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

