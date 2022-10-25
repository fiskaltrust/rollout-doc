---
slug: /posdealers/technical-operations/middleware/Helper
title: Helper
---
# Helper

:::info summary

After reading this, you can explain what a Helper does and how to use it.

:::

## Introduction

Helpers can extend the CashBox with further functionality or change existing functionality. They are created in the portal like any other technical component and assigned to a CashBox.

## Types of Helpers

The type and number of Helpers can vary depending on national laws and/or the needed functionality of POS-Systems.
Depending on the Helper type, it might be necessary to enter values for parameters or add additional parameters.

![Types of Helpers](images/54446-1-Types-of-Helpers.png "Types of Helpers")

### HelipadHelper (Description)

One example of a Helper available in all countries is the HelipadHelper, which is responsible for uploading data from the local queue to the chosen cloud. This Helper belongs to the default settings in the background and is assigned to each CashBox. Therefore, it has not to be added by the user. 
You can add your own HelipadHelper to change the upload behavior. 

:::caution Troubleshooting only

Do **not change the standard behavior** without reason! Usually, there should be no need to change the behavior of the Helipad. However, when you face troubles with your uploads (like upload failures, constant retries or problems with the standard 1000 receipt upload size), changing the upload behavior with your own HelipadHelper might help solve the issue.

:::

#### HelipadHelper (Available Parameters)

##### interval

Use the **interval** parameter to set the length in seconds for the upload interval. The default value is 300 seconds (5 minutes).

##### maxrecordcount

With **maxrecordcount**, you define the maximum number of objects for which the upload will be attempted. The default value is 1000 (e.g., 1000 queue items, 1000 journals, ...). 
If the upload fails a few times, gradually reduce the maximum number. If the upload succeeds again, increase the value step by step up to the maximum possible value.

##### recordcountjournalde

With **recordcountjournalde**, you define the same as _maxrecordcount_, the maximum number of files for an attempted upload. But this parameter is valid specifically for the JournalDE table, which contains the tar files.
In case the TAR upload fails, set this value to 1.

### Country specific Helpers

import HelperAT from '../../_markets/at/technical-operations/middleware/overview/_Helper.mdx';
import HelperFR from '../../_markets/fr/technical-operations/middleware/overview/_Helper.mdx';
import HelperDE from '../../_markets/de/technical-operations/middleware/overview/_Helper.mdx';

<Tabs groupId="market">

  <TabItem value="AT" label="Austria">
    <HelperAT />
  </TabItem>

  <TabItem value="FR" label="France">
    <HelperFR />
  </TabItem>

  <TabItem value="DE" label="Germany">
    <HelperDE />
  </TabItem>

</Tabs>

## Overview Helper


![Overview Helpers](images/54446-2-Overview-Helpers.png "Overview")

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../images/numbers/circle-1o.png) |Choose `Configuration`/ `Helper` to get to the Helper configuration.  |
|![Number 2](../../images/numbers/circle-2o.png) |To reduce the displayed search results, you can enter your desired search terms. |
|![Number 3](../../images/numbers/circle-3o.png) |With the arrow symbol, you can display a brief overview of the data for the selected Helper. |
|![Number 4](../../images/numbers/circle-4o.png) |By clicking on `Configuration`, the basic settings and package configuration for individual use of the Helper in the cash register can be called up again. |
|![Number 5](../../images/numbers/circle-5o.png) |By clicking on `Edit`, you may edit things like the description, package name and version of the Helper. |
|![Number 6](../../images/numbers/circle-6o.png) | The button `Trash` is inactive: _You cannot delete Helpers as they are an integral part of the CashBox and contain important audit data that you must preserve._ |
|![Number 7](../../images/numbers/circle-7o.png) |Click on `+Add` for creating a new Helper. |
See **Add a Helper** below for further details.

## Add a Helper

Note that the following figures and steps are exemplary. Other Helpers may require further configuration. 

![Configuration / Helper / +Add or Edit](images/54446-3-create-Helper.png "Add a Helper")

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|...|![Number 1](../../images/numbers/circle-1o.png) _Choose `Configuration`/ `Helper` to get to the Helper configuration._  |
|...|![Number 2](../../images/numbers/circle-2o.png) _Click on `+Add` for creating a new Helper._ |
|![Number 3](../../images/numbers/circle-3o.png) |Add or edit a **name** for your Helper at  `Description`. |
|![Number 4](../../images/numbers/circle-4o.png) |Make a selection from the different **Helper types** using the drop-down menu at `Package name`. Note that this selection **cannot be changed later**. |
|![Number 5](../../images/numbers/circle-5o.png) |Select one `Package version` using the drop-down menu.|
|![Number 6](../../images/numbers/circle-6o.png) | You can select one of the available outlets with the drop-down menu. |
|![Number 7](../../images/numbers/circle-7o.png) |`Save` your changes; note that **you cannot change your selection of Helper type** at `Package name`. |

See **Configure a Helper** below for further details of configuration.

## Configure a Helper

![Configuration / Helper / Configuration ](images/54446-4-configure-Helper.png "Configuration / Helper / Configuration")

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|...|![Number 1](../../images/numbers/circle-1o.png) _Choose `Configuration`/ `Helper`, search for the desired Helper and press `Configuration`._  |
|![Number 2](../../images/numbers/circle-2o.png)| Enter a parameter like mentioned above at `Key` and add a `Value` |
|![Number 3](../../images/numbers/circle-3o.png) |Edit the **name** for your Helper at  `Description`. |
|![Number 4](../../images/numbers/circle-4o.png) |Your formerly selected **Helper type** using the drop-down menu at `Package name` **cannot be changed later**. |
|![Number 5](../../images/numbers/circle-5o.png) |You can select another `Package version`. Should the desired version not be available, use `Reload package version`to refresh the drop-down menu.|
|![Number 6](../../images/numbers/circle-6o.png) |You can enter a URL for your Helper. With `net.pipe`you get a URL suitable for local use without an internet connection because no firewall settings are required. With `http`, the system generates a URL for you with which the POS-System can access the Helper. You can rename the URL yourself. This URL can look like this: http://localhost:1200/fiskaltrust.Helper. |
|![Number 7](../../images/numbers/circle-7o.png) |`Save` your changes or use `Save and close` to return to `Configuration`/ `Helper`. |