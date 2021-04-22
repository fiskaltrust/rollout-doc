---
slug: /posdealers/rollout-doc/middleware/guides/1-to-1
title: Setup Guide for "A TSE per cash register"
---

# A TSE per cash register
This guide walks you through the most basic setup with one dedicated cashbox (Queue + SCU/TSE) for each cash register.

## 0 - Prerequisites
As dealer please make sure you have used the surrogate function first to enter your client's account and make subsequent changes in that context.

## 1 - Creating the SCU
### Step 1
Choose `Configuration` - `Signatur creation unit` from the left-hand menu.

![menu_scu](../images/menu_scu.png)

### Step 2
Click the `Add` button.

![scu_add](../images/scu_add.png) 

### Step 3
Enter an appropriate description for your new SCU, choose the right package and version applicable to this particular TSE, and select the outlet in which this SCU should be active.

![main](main.png)

Once you have entered all information, click `Save` and the new SCU should be listed on the subsequent screen of all your client's SCUs.





## 2 - Creating the Queue
### Step 1
Choose `Configuration` - `Queue` from the left-hand menu.

![menu_queue](../images/menu_queue.png)

### Step 2
Click the `Create new` button.


### Step 3

Enter an appropriate description for your new queue, choose the right package for the desired backend storage and the applicable version, enter the desired timeout (default 15,000 milliseconds)

Enter a descriptive name for the SCU, choose the right package and version applicable to this particular TSE, and select the outlet in which this SCU should be active.




## 3 - Creating the Cashbox
The cashbox is the central configuration and will combine/connect the queue with the SCU (and its TSE).