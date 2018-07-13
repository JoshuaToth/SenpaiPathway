---
path: "/shopping2"
title: "Shopping Cart 2: S.O.L.I.D"
---
## Intent
This step is to introduce the first design principles to the problem. SOLID has been chosen as an approachable and somewhat widely practiced principle. 

There are varying opinions on SOLID programming and concerns over it's validity in the programming community, if you have a different principle set you would like to include in this program, feel free to substitute it in this step while including the extension below.

The below resources are not the end all to learning SOLID and if you have others that you would recommend instead/as well please do. (And shoot us a link to check it out too!) 

This step should be a complete rewrite and not a refactor of the previous step. It is this way to encourage the mentee to approach the problem from a fresh perspective. 

The extension is used to add another layer of pricing and to prompt the mentee to not simply refactor their previous code. 

After the step is completed: 
- Ask the mentee if they had any difficulties/why
- Get the mentee to take you through their code and ask them to show it working. 
- Compare their new code to their old code side-by-side and have a conversation on how they are different and if they are better/worse.
- Give your mentee tips on how to improve their code further if there is room. 

Notes.
- The solution isn't really complex enough to justify every aspect of SOLID programming at this stage, so your mentees may struggle with finding a reason to use them. This is fine and if there isn't a good reason to use a certain attribute, don't. 

## Problem:
## S.O.L.I.D
- Single Responsibility
- Open/Closed
- Liskov Substitution
- Interface Segregation
- Dependency Inversion

[https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design))

[https://www.codeproject.com/Articles/703634/SOLID-architecture-principles-using-simple-Csharp](https://www.codeproject.com/Articles/703634/SOLID-architecture-principles-using-simple-Csharp)

## Task: 
Read up on the SOLID design principles and then re-implement the console app shopping cart, with an extension.

### Extension - Shipping cost. 
Depending on the item weight, there will be several brackets the weight falls into:
Weight Bracket: $Cost
- 0g - 75g: $3.50
- 76g - 200g: $8
- 200g - 499g: $15
- 500g - 999g: $22
- 1kg - 2.999kg: $35
- 3kg - 8kg: $50
- 8kg+: 50 + $5/kg over 8kg

Calculate the shipping cost and add that to the total.

[< Prev](../shopping) | [Next >](../TDD)