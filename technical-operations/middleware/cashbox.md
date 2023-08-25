---
slug: /posdealers/technical-operations/middleware/cashbox
title: Cashbox
---
# Cashbox

:::info summary

After reading this, you can explain how the Middleware uses the CashBox Configuration and create one.

:::

## Introduction

A CashBox is the basic Configuration setting of a Middleware setup. It contains the details of all its components (e.g., queue, SCU) and their relation to each other (e.g., a queue connected to an SCU).

The CashBox is primarily configured in the fiskaltrust.Portal and then rolled out as part of the Middleware deployment.

## CashBox ID and AccessToken

The `CashBoxID` and the `AccessToken` are two crucial parameters of each CashBox and serve for authentication against the portal services. For example, the Middleware itself uses them to fetch its Configuration. You'll also use them in the context of templating.

You can access the `CashBoxID` and the `AccessToken` of each CashBox under its respective entry on the [`Configuration` / `CashBox`](#cashbox-maintenance-fiskaltrustportal) screen.

:::caution

The CashBoxID is not strictly confidential data and is, e.g., used by fiskaltrust.Support to identify a CashBox and provide technical assistance.

As for the AccessToken, please **do not share the AccessToken** with third parties and treat it like a password.

:::

## CashBox instance (Middleware)

From the middleware perspective, a CashBox is a [JSON](https://en.wikipedia.org/wiki/JSON) file that the portal delivers during the middleware startup phase or, in the case of an offline setup, as part of the deployment package. This file contains the **complete Configuration information** for this particular middleware instance. This Configuration includes, first, its Configuration data and, second, all the components it is to deploy.

The format of the file follows a standard JSON syntax, with the top-level fields being

* `ftCashBoxId` - Specifying the **ID** of the CashBox
* `ftSignaturCreationDevices` - The list of **SCUs** configured for the CashBox
* `ftQueues` - The list of **Queues** configured for the CashBox
* `helpers` - The list of **Helpers** configured for the CashBox
* `TimeStamp` - The time when the CashBox Configuration was **last updated**

:::info

Unless you configure the Middleware for offline mode, it will compare its CashBox Configuration against the CashBox Configuration in the portal on each start and apply pending changes to the Configuration. Therefore, please ensure the relevant _fiskaltrust_ hosts are reachable for your Middleware; otherwise, it won't be able to download the latest CashBox data.

Please see [Network Requirements](network-requirements.md) for details.

:::

#### Configuration Sample

The following sample is a trimmed-down CashBox skeleton outlining the overall structure.

```JSON
{
    "ftCashBoxId": "00000000-0000-0000-0000-000000000000",
    "ftSignaturCreationDevices": [{
        "Id": "00000000-0000-0000-0000-000000000000",
        "Package": "fiskaltrust.package",
        "Version": "1.0",
        "Configuration": {},
        "Url": ["grpc://localhost:1201"]
    }],
    "ftQueues": [{
        "Id": "00000000-0000-0000-0000-000000000000",
        "Package": "fiskaltrust.package",
        "Version": "1.0",
        "Configuration": {
            "init_ftQueue": [{
                "ftQueueId": "00000000-0000-0000-0000-000000000000",
                "ftCashBoxId": "00000000-0000-0000-0000-000000000000",
                "ftCurrentRow": 0,
                "ftQueuedRow": 0
            }],
            "init_ftCashBox": {
                "ftCashBoxId": "00000000-0000-0000-0000-000000000000",
                "TimeStamp": 0
            },
            "init_ftSignaturCreationUnitAT": [],
            "init_ftSignaturCreationUnitFR": [],
            "init_ftSignaturCreationUnitDE": []
        },
        "Url": ["rest://localhost:1200/fiskaltrust"]
    }],
    "helpers": [{
        "Id": "00000000-0000-0000-0000-000000000000",
        "Package": "fiskaltrust.package",
        "Version": "1.0",
        "Configuration": {},
        "Url": []
    }],
    "TimeStamp": 0
}
```

## CashBox maintenance (fiskaltrust.Portal)

The fiskaltrust.Portal is the starting point for each CashBox, where you create and maintain all your CashBoxes.There, you will find an overview of the CashBoxes of an account.  
You log in as PosDealer and switch to the desired account (`PosOperators` / `Overview`).

![](../../images/cashbox_portal-2023-08-25.png "https://portal-sandbox.fiskaltrust.TLD/CashBox#/")

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../images/numbers/circle-1o.png) |Select `Configuration` / `CashBox`.|
|![Number 2](../../images/numbers/circle-2o.png) |Reduce the number of records in the `List of CashBoxes` with filter criteria such as CashBox, Queue or SCU name or use the sort options for your desired overview.|
|![Number 3](../../images/numbers/circle-3o.png) |`Collapse` the details of the desired CashBox.|
|![Number 4](../../images/numbers/circle-4o.png) |Please see [CashBox ID and AccessToken](#cashbox-id-and-accesstoken) for more details.|
|![Number 5](../../images/numbers/circle-5o.png) |[Digital Receipt / InStore App](https://docs.fiskaltrust.cloud/de/docs/poscreators/middleware-doc/digital-receipt/InStore-App)|
|![Number 6](../../images/numbers/circle-6o.png) |A Queue is defined [here](../../business-basics/architecture.md#queue), find more details in our [interface description](https://github.com/fiskaltrust/interface-doc). For `Configuration`, use the menu or the icon on the right side. |
|![Number 7](../../images/numbers/circle-7o.png) |Please see [Helpers](../middleware/helper.md) for more details on this subject. For `Configuration`, use the menu or the icon on the right side.|
|![Number 8](../../images/numbers/circle-8o.png) |Read [the definition of a SCU](../../business-basics/architecture.md#scu) and more about its [Configuration](https://github.com/fiskaltrust/interface-doc).For `Configuration`, use the menu or the icon on the right side.|
|![Number 9](../../images/numbers/circle-9o.png) | [Rebuilding](#rebuilding) offers you further details.  |
|![Number 10](../../images/numbers/circle-10o.png) |Please see [Launcher for...](../../technical-operations/middleware/launchers/desktop.md) for more details on this subject.  |
|![Number 11](../../images/numbers/circle-11o.png) |[Configuring a CashBox](#configuring-a-cashbox) offers you further details.|

### Creating a CashBox

There are several ways to add a new CashBox to your portal account. First, you can do so manually by simply creating a new CashBox entry and configuring its components by hand. Another way would be to use pre-existing CashBox templates and make the new CashBox based on a template. Another way to get a new CashBox is to use rollout management, which utilizes templates in the background.

#### Manually

Perform the following steps to create a new CashBox by hand.

1. Open the portal and navigate to the list of CashBoxes.
2. Click the `Add` button in the top right.
3. On the new screen, provide the basic CashBox information.
   - A description for the CashBox.
   - The outlet for which the CashBox should be active.
4. Click `Save`.

Subsequently, you will be redirected back to the list of CashBoxes, where your new CashBox should now appear. Please see [Configuring a CashBox](#configuring-a-cashbox) for details on configuring your new CashBox and adding the desired components.

#### With templates and rollout plans

CashBox templates are customizable blueprints for CashBoxes and, depending on their Configuration, come with several components already pre-configured.

You can create CashBoxes with templates in the context of the shop and API templating, as well as part of a technical rollout. Please see the chapters [Templates](../rollout-automation/templates.md) and [Rollout Plans](../../buy-resell/rollout-plans.md) for more information on these topics.

### Configuring a CashBox

A CashBox alone does not do much. Instead, you must configure it with all the service components you eventually want to run as part of that CashBox, such as queues or SCUs.

CashBoxes, created in an automated fashion, will already have their pre-configured components by default. However, if you want to change that Configuration or create the CashBox by hand, you can always edit its component Configuration afterward. To do so, click the `Edit by list` button (![Edit by list](images/edit_list.png)) to select the components from a list view.

### Rebuilding

Please ensure to rebuild your CashBox whenever it has the rebuild icon (![rebuild icon](images/rebuild.png)) active. The rebuild applies any changes to the Configuration. After a successful rebuild, you can proceed to download the deployment package or restart any already deployed instance.

:::caution restart

Please note that once you have deployed your CashBox, any changes to its Configuration will only take effect after a restart of your Middleware instance. It also needs to [reach the fiskaltrust.Portal services](network-requirements.md) and must **not** be configured for [offline mode](configuration.md#parameters).

:::