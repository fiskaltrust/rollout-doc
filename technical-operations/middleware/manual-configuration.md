---
slug: /posdealers/technical-operations/manual-cashbox-creation
title: Manual CashBox Creation
---
# Manual CashBox Creation

## Creating the Components 

The [Configuration](./configuration.md) of a CashBox follows these steps:

1. Choose `PosOperator` / `Overview` to switch to the account of the desired PosOperator.
2. Select `Configuration` / `Signature Creation Unit`.
3. Create a `Signature Creation Unit`.
4. Create a `Queue` and connect the `Signature Creation Unit`.
5. Create a `CashBox` and add the `Queue` and `Signature Creation Unit` to it.
6. Optionally create and add a `helper` to the `CashBox`. 

### SCU

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../images/numbers/circle-1o.png) |Select `Configuration` / `Signature Creation Unit` and check the `List of Signature Creation Units`.    |
|![Number 2](../../images/numbers/circle-2o.png) |To create a new SCU, please choose `+Add`.  |
|![Number 3](../../images/numbers/circle-3o.png) |You must add a `Description`.  |
|![Number 4](../../images/numbers/circle-4o.png) |At `Package name`, you can select the type of SCU you want to use.  |
|![Number 5](../../images/numbers/circle-5o.png) |At `Package version`, you can choose the desired option.  |
|![Number 6](../../images/numbers/circle-6o.png) |You must select an Outlet at `Outlet`.  |
|![Number 7](../../images/numbers/circle-8o.png) |After you have selected `Save`, you will be directed to `Configuration` / `Signature Creation Unit` / `Configuration`. Add the necessary details for the type of SCU you have made and add a URL for your SCU there.  |

### Queue

A Queue is defined [here](../../business-basics/architecture.md#queue), find more details at our [interface description](https://github.com/fiskaltrust/interface-doc).  

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../images/numbers/circle-1o.png) |Select `Configuration` / `Queue` and check the `List of Queues`.  |
|![Number 2](../../images/numbers/circle-2o.png) |To expand your Queues, please choose `+Add`.  |
|![Number 3](../../images/numbers/circle-3o.png) |You must add a `Description`.  |
|![Number 4](../../images/numbers/circle-4o.png) |At `Package name`, you can select the desired option.  |
|![Number 5](../../images/numbers/circle-5o.png) |At `Package version`, you can choose the type of Queue you want to use.  |
|![Number 6](../../images/numbers/circle-6o.png) |At `Timeout`, you can specify a millisecond value for the timeout of the Queue.  |
|![Number 7](../../images/numbers/circle-7o.png) |The `Country Code` depends on the chosen fiskaltrust.Portal and cannot be changed, see [reference tables](https://docs.fiskaltrust.cloud/de/docs/poscreators/middleware-doc/germany/reference-tables/ftstate "https://docs.fiskaltrust.cloud/de/docs/poscreators/middleware-doc/germany/reference-tables/ftstate") for details.  |
|![Number 8](../../images/numbers/circle-8o.png) |Enter the desired `CashBox Identification` but note that this value cannot be changed again after saving your Queue.  |
|![Number 9](../../images/numbers/circle-9o.png) |At `Outlet`, you can choose the desired option but note that this value cannot be changed again afer saving your Queue.  |
|![Number 10](../../images/numbers/circle-10o.png) |After you have selected `Save`, you will be directed to `Configuration` / `Queue` / `Configuration`. Add  there the necessary details for the selection you have made.

### Assign the SCU to the Queue

The SCU must be assigned to the Queue. Therefore go to `Configuration` / `Queue` and in the row with the created Queue, click on the button `Assign Signature Creation Unit`. A new dialog will open, select the desired SCU and click `Save`.

### CashBox  

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../images/numbers/circle-1o.png) |Select `Configuration` / `CashBox` and check the `List of CashBoxes`.  |
|![Number 2](../../images/numbers/circle-2o.png) |To expand your CashBoxes, please choose `+Add`.  |
|![Number 3](../../images/numbers/circle-3o.png) |You must add a `Description`.  |
|![Number 4](../../images/numbers/circle-4o.png) |At `IP Address`, you can enter a value (optional).  |
|![Number 5](../../images/numbers/circle-5o.png) |At `Oulet`, you can choose the desired outlet but note that this value cannot be changed again afer saving your Queue. |
|![Number 6](../../images/numbers/circle-6o.png) |After you have selected `Save`, you will be directed to your `List of CashBoxes` at `Configuration` / `CashBox`. 
|![Number 7](../../images/numbers/circle-7o.png) |Click the button `edit by list` to add the Queue, SCU and optionally a helper.  |


### Helper

Helpers are optional and vary depending on national laws and the needed functionality. Read the section [Helper](./helper.md) for further information.

## Deploying the CashBox

You should now have a working CashBox and be able to download its package and deploy it on your machine.

### Download

To download the Middleware package for your newly created CashBox, go to your list of CashBoxes in the portal (at `Configuration` / `CashBox`) and click the download button for the *Online Launcher*.

The downloaded Middleware package assembles the appropriate binary packages for your CashBox and may take a while. Once your browser prompts you for the file download, save the file to your hard disk.

### Deployment

Unzip the archive you downloaded into the directory where you'd like to deploy the Middleware. Once that is complete, you can start your Middleware instance with the test script `test.cmd` (_please make sure to launch it with **administrative privileges**_).

:::info

As we downloaded the Online Launcher, the archive only comes with the launcher stub, and the Middleware will fetch all additionally required packages upon the first start. The download of additionally required packages may delay the first start by a few seconds.

:::