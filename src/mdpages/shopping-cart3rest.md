---
path: "/shopping3"
title: "Shopping Cart 3: REST"
---
## Intent
This step is to start taking the previously learned methods and then applying them to something more than a simple console application.

It's always daunting to approach a totally different type of application and with API's being the centre of web development it's a good starting point and quite often a goal of newer developers who've not had a chance to create one from scratch.

The reason behind choosing a REST api rather than something like HATEOS is down to popularity and familiarity. If you feel a different type of API would suit your pupil better, point them to the information needed and include the problem statement below. 

This is a fairly large step, including data persistence and another rewrite of the original shopping cart problem. It's expected this might take a bit of time and possibly multiple iterations. Pairing is recommended. This will also be the first problem where TDD is used from the beginning, so the pupil may be unsure of where to start. We suggest starting at the Service Layer with a 'mock' Repository layer. 

It's recommended to have your pupil plan out the entire solution before attempting any code. This can be a paired activity as well, but try and let them attempt a solution plan themselves and then iterate on it with them. 

There isn't a large focus on the data store part of the problem, so feel free to choose whichever one you want. Firebase is recommended without having to work out hosting and the packages available are fairly straightforward.

The extension is to give a reason to persist data to something that is managed separately of the API. This is also to prepare for the next step. 

## Problem
Using a combination of SOLID and TDD, create a RESTful API using a framework of your choice.

- A data store will also be required. This can be a local DB or something hosted like Firebase.
- It is recommended to use [Postman](https://www.getpostman.com/) to conduct api queries, a frontend is not required. (There can be a task to create a frontend for this after this task if you are interested)
- The API consist of all the features of the Shopping cart project we used in V2. Plus extensions. 
- It is recommended to have three layers.

Controller - Where API commands are received

Service layer - Where logic happens

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