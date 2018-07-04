---
path: "/shopping6"
title: "Shopping Cart 6: Eventing"
---
When an item has it’s quantity drop to zero, raise an event to a separate services to ‘order more’. The separate service will then notify the api when the items have been ‘delivered’ and the api will record the new quantity.

The new service does not have to be an API but it does have to be able to consume events. 
The new service should communicate back to the API via an event as well. 

[< Prev](../shopping5)