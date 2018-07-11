---
path: "/shopping5"
title: "Shopping Cart 5: Distributed"
---
When an item has its quantity drop to zero, communicate with a separate service that will then ‘Order’ more stock and then inform the API that more stock has been delivered. The API will then record the new quantity of stock. 

The new service should communicate with your API using coupled, synchronous calls. I.e. TCP or REST calls. (This may feel wrong, and it IS. We will fix this in another step).
Try to make your calls transactional so your services are in sync and try to consider any failures. 

As in the previous steps, use TDD and your choice of either SOLID or CQRS. 
The new service can be an API or a console application. That’s up to you.

[< Prev](../shopping4) | [Next >](../shopping6)