---
path: "/shopping4"
title: "Shopping Cart 4: CQRS"
---
## Intent
To shake things up a bit we are adding a new pattern into the API. This won't be a complete rewrite and if the previous step was completed with TDD, your mentees should start seeing that pay back all their hard work. 

CQRS is a popular pattern making a move away from the CRUD pattern that was more than likely implemented in the API step. The step is to encourage the mentee to re-evaluate the current implementation and weigh up the pros/cons between the two. At this stage the API should be sufficiently complex enough for the pattern to be useful. 

One of the things that developers tend to do when approaching CQRS is to avoid code repetition and CQRS will challenge that. Both stacks are completely separated so avoiding code reuse and crossing over is a big must. 

## Problem
Command Query Responsibility Segregation

[https://martinfowler.com/bliki/CQRS.html](https://martinfowler.com/bliki/CQRS.html)

Convert your shopping cart API to use a CQRS model.

Read up on CQRS and use the above repository as a guide to make your conversion.


[< Prev](../shopping3_5) | [Next >](../shopping5)