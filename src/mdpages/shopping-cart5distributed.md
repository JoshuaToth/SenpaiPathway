---
path: "/shopping5"
title: "Shopping Cart 5: Distributed"
---
## Intent
As we move forward the problems will be getting less structured but with specific goals in mind. This step is to accomplish a few things:
- Putting together a new service of their own design using all the previously learned methods.
- Learning how painful coupled API calls can be while trying to keep data in sync across multiple data stores. (We will attempt to alleviate this in the next step)
- Figuring out where the communication logic will sit in the established API.

## Problem

When an item has its quantity drop to zero, communicate with a separate service that will then ‘Order’ more stock and then inform the API that more stock has been delivered. The API will then record the new quantity of stock. 

The new service should communicate with your API using coupled, synchronous calls. I.e. TCP or REST calls. The new service should also have it's own datastore. It doesn't need to be the same type of datastore as the established API, but it can be. 

Try to make your calls transactional so your services are in sync; consider any failure scenarios. 

As in the previous steps, use TDD and your choice of either CRUD or CQRS. 
The new service can be an API or a service application. That’s up to you.

[< Prev](../shopping4) | [Next >](../shopping6)