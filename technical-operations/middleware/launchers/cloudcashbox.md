---
slug: /posdealers/technical-operations/middleware/launchers/cloudcashbox
title: CloudCashbox
---

# CloudCashbox

:::info summary

After reading this, you can explain what the _CloudCashbox_ solution is, how it is used to host the Middleware.

:::

## Introduction
The CloudCashbox is a fully hosted SaaS version of fiskaltrust's Middleware, offering a centralized and reliable fiscalization solution. Hosted on Microsoft Azure in Germany, it simplifies the complexity of fiscal compliance by eliminating the need for local software configuration and installation. Users can easily connect to the Middleware using an access token and URL, without the need to manage TSEs.



### Key features include:

- Support for PosAPI and classic Middleware API: Ensures compatibility with various POS systems.
- Centralized Management: Fiskaltrust manages the entire setup, offering more control and flexibility.
- Easy Rollout: The product can be rolled out via the portal, and migration from existing Cashboxes is streamlined through a dedicated process.


### How to order and create new CloudCashboxes

First of all, before creating a _CloudCashbox_, you will need to order one of the products that contains a CloudCashbox. 
The Cashbox and the Queue will then be created automatically, which is also another difference with the Middleware.

To order a  _CloudCashbox_ product, go to the fiskaltrust.Portal and log in.

Once you are logged in, click on the Rollout Management tab and on `Rollout products`

![Rollout](../../images/20241016-1-rollout-cloud-cashbox.png)

On the next screen, choose the Business Rollout.

![Business-Rollout](../../images/20241016-2-rollout-cloud-cashbox.png)

Once the next screen is loaded, you can now search for _CloudCashbox_ products. In this case, we did the Rollout with a fiskaltrust. Carefree package. It is also possible to rollout an fiskaltrust. Carefree package with your already existing entitlements if you have some or to simply rollout the _CloudCashbox_ as a standalone product.

![Select-Product](../../images/20241016-3-rollout-cloud-cashbox.png)

Once you have made your choice, you can now select for which Operator you will perform the rollout. You can select several operators at once if needed.

![Rollout-Product](../../images/20241016-4-rollout-cloud-cashbox.png)

After choosing the operators, you will now have to select the outlets to be rolled out. There also, you can select more than one at once.

![Rollout-outlet](../../images/20241016-5-rollout-cloud-cashbox.png)

After this step, you can review your order and if everything matches your expectations, click on `Create Quote`.

![Quote-creation](../../images/20241016-6-rollout-cloud-cashbox.png)

After a small loading time, you will have to add your selected products to the Basket by clicking on the `Add to basket` button.

![Basket](../../images/20241016-7-rollout-cloud-cashbox.png)

This will send you to the Checkout Cart in which you can go through the payment process

![Checkout](../../images/20241016-8-rollout-cloud-cashbox.png)

There you can validate your order. It will then generate the order, your invoice but more important, it will start to work in the background to generate your _CloudCashbox_ containing the new queue.

![Payment](../../images/20241016-9-rollout-cloud-cashbox.png)

After some minutes, you will be able to see the cashbox that has been created and is ready to be used through the address and the access token. 

![Cashbox](../../images/20241016-10-cloud-cashbox.png)

Also under Configuration > Queue, you will see the created Queue. You are now ready to go!

![Configuration](../../images/20241016-11-cloud-cashbox.png)


### How to migrate to the _CloudCashbox_

If you already have local Cashboxes or some using a TSE in the cloud, you can migrate them into CloudCashboxes by following this process.


**1. Request the Migration**


First, you will have to go to `Rollout management`. There, you will have to select `Exchange product`.

![Request-migration1](../../images/20241017-1-migration-cloud-cashbox.png)

On the next screen, select `Switch to CloudCashbox`.

![Request-migration2](../../images/20241017-2-migration-cloud-cashbox.png)

After this step, you will have to select, as usual, the PosOperator for whom you want the migration to be done.

![Request-migration3](../../images/20241017-3-migration-cloud-cashbox.png)

and right after the outlet and the queues you want to migrate.

![Request-migration4](../../images/20241017-4-migration-cloud-cashbox.png)

After this step, you will be asked to verify your selection. If everything is alright, click on `Request Migration`. In the pop-up window that will appear, validate your request.

![Request-migration5](../../images/20241017-5-migration-cloud-cashbox.png)

Your request has then been sent and can take to up to 5 days to be validated. 

![Request-migration6](../../images/20241017-6-migration-cloud-cashbox.png)


**2. Wait for approval**


You can check the status by clicking on Requests & Updates, that will show you the evolution of your request. The request needs to be approved by fiskaltrust before the migration can be performed.

![Awaiting-approval](../../images/20241017-7-migration-cloud-cashbox.png)

Once it has been approved, you can continue.

![Migration-approved](../../images/20241017-8-migration-cloud-cashbox.png)


**3.Send Start-Migration Receipt**


In the request on the following screen, you will see a list of Queues and their migration status.

![Migration-receipt1](../../images/20241017-9-migration-cloud-cashbox.png)

You can perform the migration for all Queues at once or for smaller batches at a time. In the beginning all Queues will be in the not ready state and you will need to send a _Start-Migration Receipt_ for them to become ready. Once the _Start-Migration Receipt_ was sent and the data has been uploaded, the Queue will move into the `Ready to migrate` column.

![Migration-receipt2](../../images/20241017-10-migration-cloud-cashbox.png)

:::Note

After sending the Start-Migration Receipt the Queue will stop signing locally.

:::


**4.Perform Migration**

To perform the technical migration, select the queues that are ready to migrate and migrate them. This will only take a few minutes.

![Migration1](../../images/20241017-11-migration-cloud-cashbox.png)

![Migration2](../../images/20241017-12-migration-cloud-cashbox.png)

**5.Update PosSystem**

Next you need to update the Queue Url that the PosSystem uses to https://cloudcashbox.fiskaltrust.de.

Once the 4. Perform Migration step is completed for the Queue, the CloudCashbox is ready to use. You can now uninstall the local CashBox.

After this, you can then come back to the request to perform the migration for the remaining queues.

![Possystem-update](../../images/20241017-13-migration-cloud-cashbox.png)