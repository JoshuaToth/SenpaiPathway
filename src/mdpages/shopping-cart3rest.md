---
path: "/shopping3"
title: "Shopping Cart 3: REST"
---
Using a combination of SOLID and TDD, create a RESTful API using a framework of your choice.

- A data store will also be required. This can be a local DB or something hosted like Firebase.
- It is recommended to use [Postman](https://www.getpostman.com/) to conduct api queries, a frontend is not required. (There can be a task to create a frontend for this after this task if you are interested)
- The API consist of all the features of the Shopping cart project we used in V2. Plus extensions. 
- It is recommended to have three layers.

Controller - Where API commands are received

Business layer - Where business logic happens

Repository - The interface between the API and the database (and objects)

### Extension - Cart ID + Purchase

After a cost has been returned to the user they can use the returned cart ID to then purchase the cart. 

### Extension - Item Quantities

Items will have a quantity and cannot be sold after they have been exhausted. The user will receive a message saying the sale can not be conducted until the item is in stock or is removed from the order.

### Extension - Item list

The API can be queried to return all items along with their cost, weight and quantity.

### Extension - Sale history 

A list of all previous sales can be queried, Items, quantity and cost should be included.

[< Prev](../TDD) | [Next >](../shopping3_5)