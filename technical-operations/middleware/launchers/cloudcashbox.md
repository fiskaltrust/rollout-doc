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

![20241016-1-rollout-cloud-cashbox](https://github.com/user-attachments/assets/9ae51df5-bfc5-4fca-a93f-5d12d6f7c65e)


On the next screen, choose the Business Rollout.

![20241016-2-rollout-cloud-cashbox](https://github.com/user-attachments/assets/3a0dc353-5bb8-42ce-bc23-917d0bd6fde8)


Once the next screen is loaded, you can now search for _CloudCashbox_ products. In this case, we did the Rollout with a fiskaltrust. Carefree package. It is also possible to rollout an fiskaltrust.Carefree package with your already existing entitlements if you have some or to simply rollout the _CloudCashbox_ as a standalone product.

![20241016-3-rollout-cloud-cashbox](https://github.com/user-attachments/assets/309ba6b0-26f0-4215-939c-70ae2c29b80a)


Once you have made your choice, you can now select for which Operator you will perform the rollout. You can select several operators at once if needed.

![20241016-4-rollout-cloud-cashbox](https://github.com/user-attachments/assets/c563f3c3-7e42-4f9b-8ff3-8a70369fab1d)


After choosing the operators, you will now have to select the outlets to be rolled out. There also, you can select more than one at once.

![20241016-5-rollout-cloud-cashbox](https://github.com/user-attachments/assets/bb1a68b0-711d-459c-a3d5-11d5d4aabdcd)


After this step, you can review your order and if everything matches your expectations, click on `Create Quote`.

![20241016-6-rollout-cloud-cashbox](https://github.com/user-attachments/assets/dc6cc622-cb45-48af-b7a0-81e2b7d7e943)


After a small loading time, you will have to add your selected products to the Basket by clicking on the `Add to basket` button.

![20241016-7-rollout-cloud-cashbox](https://github.com/user-attachments/assets/c39c51db-bdc1-4fa1-9900-a86403a35ac8)

This will send you to the Checkout Cart in which you can go through the payment process

![20241016-8-rollout-cloud-cashbox](https://github.com/user-attachments/assets/8fb4a6ee-cead-45cc-ab53-750026896978)

There you can validate your order. It will then generate the order, your invoice but more important, it will start to work in the background to generate your _CloudCashbox_ containing the new queue.

![20241016-9-rollout-cloud-cashbox](https://github.com/user-attachments/assets/ca7193b3-5dbe-422d-b6dd-3d1050c4b910)


After some minutes, you will be able to see the cashbox that has been created and is ready to be used through the address and the access token. 

![20241016-10-cloud-cashbox](https://github.com/user-attachments/assets/9e53c8bb-b243-45c0-a0a4-501afa1ff255)


Also under Configuration > Queue, you will see the created Queue. You are now ready to go!

![20241016-11-cloud-cashbox](https://github.com/user-attachments/assets/ae2420a1-716a-4182-bcf9-ce9d6162b05b)



### How to migrate to the _CloudCashbox_

If you already have local Cashboxes or some using a TSE in the cloud, you can migrate them into CloudCashboxes by following this process.


**1. Request the Migration**


First, you will have to go to `Rollout management`. There, you will have to select `Exchange product`.

![20241017-1-migration-cloud-cashbox](https://github.com/user-attachments/assets/c2430c58-d180-491e-9e86-f2425ac7cfbe)


On the next screen, select `Switch to CloudCashbox`.

![20241017-2-migration-cloud-cashbox](https://github.com/user-attachments/assets/4acb281f-8299-41da-bc74-0c25306c94b3)


After this step, you will have to select, as usual, the PosOperator for whom you want the migration to be done.

![20241017-3-migration-cloud-cashbox](https://github.com/user-attachments/assets/7ea981cc-d3aa-4327-922e-cab26bd1b8e6)


and right after the outlet and the queues you want to migrate.

![20241017-4-migration-cloud-cashbox](https://github.com/user-attachments/assets/0c70e6ee-2738-4f7a-ba08-00131642138c)


After this step, you will be asked to verify your selection. If everything is alright, click on `Request Migration`. In the pop-up window that will appear, validate your request.

![20241017-5-migration-cloud-cashbox](https://github.com/user-attachments/assets/439ea46f-eee1-43e5-b6a7-9b26fbb73126)


Your request has then been sent and can take to up to 5 days to be validated. 

![20241017-6-migration-cloud-cashbox](https://github.com/user-attachments/assets/e7b840ee-f63c-48be-9390-015cd3e6f810)



**2. Wait for approval**


You can check the status by clicking on Requests & Updates, that will show you the evolution of your request. The request needs to be approved by fiskaltrust before the migration can be performed.

![20241017-7-migration-cloud-cashbox](https://github.com/user-attachments/assets/6eac02f8-d6c6-47f6-acca-4641123eec65)


Once it has been approved, you can continue.

![20241017-8-migration-cloud-cashbox](https://github.com/user-attachments/assets/5aa282bb-7a32-4cd4-9d48-fe71db312ef2)



**3.Send Start-Migration Receipt**


In the request on the following screen, you will see a list of Queues and their migration status.

![20241017-9-migration-cloud-cashbox](https://github.com/user-attachments/assets/41b998d9-6f2b-4272-8496-8a765e6bd7c3)


You can perform the migration for all Queues at once or for smaller batches at a time. In the beginning all Queues will be in the not ready state and you will need to send a _Start-Migration Receipt_ for them to become ready. Once the _Start-Migration Receipt_ was sent and the data has been uploaded (leave the Queue running for at least 5min after sending the _Start-Migration Receipt_ to ensure all data is uploaded), the Queue will move into the `Ready to migrate` column.

![20241017-10-migration-cloud-cashbox](https://github.com/user-attachments/assets/9d4a017a-78d0-42c2-9b8c-b1c63ed09f40)


:::Note

After sending the Start-Migration Receipt the Queue will stop signing locally.

:::


**4.Perform Migration**

To perform the technical migration, select the queues that are ready to migrate and migrate them. This will only take a few minutes.

![20241017-11-migration-cloud-cashbox](https://github.com/user-attachments/assets/d2d68b1a-8670-4188-b414-4a8122c81f41)


![20241017-12-migration-cloud-cashbox](https://github.com/user-attachments/assets/c34e40d8-176e-411f-8f44-8e850c3cf087)


**5.Update PosSystem**

Next you need to update the Queue Url that the PosSystem uses to `https://cloudcashbox.fiskaltrust.de`.

Once the 4. Perform Migration step is completed for the Queue, the CloudCashbox is ready to use. You can now uninstall the local CashBox.

After this, you can then come back to the request to perform the migration for the remaining queues.

![20241017-13-migration-cloud-cashbox](https://github.com/user-attachments/assets/05e676ac-f253-4d7d-87d7-453752a8b875)
