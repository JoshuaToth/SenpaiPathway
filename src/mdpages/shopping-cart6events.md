---
path: "/shopping6"
title: "Shopping Cart 6: Eventing and DDD"
---
## Intent
Reaching outside of the code for a moment, this step will also consider additional framework surrounding your services in order for them to communicate with each other.

## Problem
This step is to fix up one of the glaring issues of the previous steps and move to an eventually consistent model. The aim will be to utilize queuing and messaging to pass information from one service to the other. Services like AWS's SNS and SQS are recommended here. Using a framework such as [Localstack](https://github.com/localstack/localstack) you can avoid having to set up your own AWS account. 

In order to construct these events, utilizing DDD (Domain Driven Design) is recommended. 

When an item has its quantity drop to zero, raise an event to a separate services to ‘order more’. The separate service will then notify the api when the items have been ‘delivered’ and the api will record the new quantity.

Your events should be standardised.

The separate service should be the one created in the previous step.
The new service should communicate back to the original API via an event as well. 

[< Prev](../shopping5)