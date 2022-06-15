---
slug: /posdealers/technical-operations/rollout-automation/templates
title: Templates
---
# Templates

:::info summary

After reading this, you can explain how templates work.

:::

## Introduction

**Templates are blueprints for CashBoxes**. They provide a fast way to set up fully configured CashBoxes based on pre-configured layouts.

Templates follow the same JSON structure as shown in the [CashBox](../middleware/cashbox.md#cashbox-instance-middleware) chapter, with the main difference that they are not the configuration of an actual CashBox instance but are used to create such in a second step. Consequently, their configuration entries are either hardcoded default values, used for all instances created with the respective template, or variables set at runtime.

## Instantiating a template

There are two different ways you can use templates to create a new CashBox.

#### Shop

You'll find a number of pre-configured templates in the [shop](../../buy-resell/shop.md) under `Shop` / `Products`. Either fiskaltrust, PosCreators, or PosDealers provided these templates. You can add them to your shopping cart like any other product or clone them to modify them for your needs. After submitting your order, the portal will create a new CashBox based on the template's configuration.

Please see the chapter [Shop Templating](shop-templating.md) for more details.

#### API

Another way to create CashBoxes based on templates is to use fiskaltrust's REST API. You do not need to pre-configure any template in the portal in this case but can send custom templates with your requests.

Please see the chapter [API Templating](api-templating.md) for more details.

## Variables

Variables are substitute entries for dynamically configured values. Your rollout replaces these with actual content. You denote a variable by its name being wrapped into `|[`  and `]|`.

For example, to use the variable `my_variable` in a template, you'd use `|[my_variable]|` at the location where you want to use its eventual value.



### Pre-defined system variables

The following variables are pre-defined and will be populated automatically by auto-generated or pre-defined values with the templates rollout.

*Curly brackets denote dynamic values.*

| Variable                                  | Content                                                      |
| ----------------------------------------- | ------------------------------------------------------------ |
| `cashbox_description`                     | Defaults to the same value as `description`.                 |
| `cashbox_id`                              | A random UUID for the CashBox. Used to set or reference the CashBox ID. |
| `cashbox_ipaddress`                       | The IP address of the machine where the CashBox is running. Defaults to an empty string. |
| `cashbox_producttype`                     | The product type.                                            |
| `count`                                   | The number of queues in your account, plus one.              |
| `description`                             | Description of the CashBox, defaulting to `ft{UTC timestamp}` (e.g. `ft19700101000000`). |
| `helper{0-9}_description`                 | Defaults to the same value as `description`.                 |
| `helper{0-9}_id`                          | Ten random UUIDs for helper components. Used to set or reference helper IDs. |
| `helper{0-9}_url`                         | Ten helper URLs, defaulting to `net.pipe://localhost/{helperX_id}`. |
| `outlet_number`                           | The number of outlets in your account, plus one.             |
| `queue{0-9}_description`                  | Defaults to the same value as `description`.                 |
| `queue{0-9}_id_base64withoutspecialchars` | Base64 representation (filtered for alphanumeric characters) of the respective `queue{X}_id` value. |
| `queue{0-9}_id`                           | Ten random UUIDs for queue components. Used to set or reference queue IDs. |
| `queue{0-9}_url`                          | Ten queue URLs, defaulting to `http://localhost:1200/fiskaltrust{X}`. |
| `scu{0-9}_description`                    | Defaults to the same value as `description`.                 |
| `scu{0-9}_id`                             | Ten random UUIDs for SCU components. Used to set or reference SCU IDs. |
| `scu{0-9}_url`                            | Ten SCU URLs, defaulting to `net.pipe://localhost/{scuX_id}`. |

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VariablesAT from '../../_markets/at/technical-operations/rollout-automation/templates/_variables.mdx';
import VariablesFR from '../../_markets/fr/technical-operations/rollout-automation/templates/_variables.mdx';
import VariablesDE from '../../_markets/de/technical-operations/rollout-automation/templates/_variables.mdx';

<Tabs groupId="market">

  <TabItem value="AT" label="Austria">
    <VariablesAT />
  </TabItem>

  <TabItem value="FR" label="France">
    <VariablesFR />
  </TabItem>

  <TabItem value="DE" label="Germany">
    <VariablesDE />
  </TabItem>

</Tabs>

### Custom variables

In addition to the pre-defined system variables, API templating also allows you to use custom variables and set their respective values when running the API request.

Please see the chapter [API Templating](api-templating.md) for more details.

:::caution

Custom variables are only available when using the API.

:::



## Template structure

Templates are classic JSON documents with a root object and five root-level fields.

```JSON
{
    "ftCashBoxId": "|[cashbox_id]|",
    "ftSignaturCreationDevices": [],
    "ftQueues": [],
    "helpers": [],
    "TimeStamp": 0
}
```

| Field                       | Type                                        | Required | Description                                                  |
| --------------------------- | ------------------------------------------- | :------: | ------------------------------------------------------------ |
| `ftCashBoxId`               | String                                      |   yes    | Indicates the ID of the CashBox. Typically, the variable [`cashbox_id`](#pre-defined-system-variables) here, to ensure a unique value is selected when the template is instantiated. |
| `ftSignaturCreationDevices` | Array of [package objects](#package-object) |    no    | A list of all SCUs managed by this CashBox.                  |
| `ftQueues`                  | Array of [package objects](#package-object) |    no    | A list of all queues managed by this CashBox.                |
| `helpers`                   | Array of [package objects](#package-object) |    no    | A list of all helpers managed by this CashBox.               |
| `TimeStamp`                 | Number                                      |    no    | The time when the CashBox was updated. Please see [DateTime](https://docs.microsoft.com/dotnet/api/system.datetime.ticks) for more details on the format. |

The arrays `ftSignaturCreationDevices`, `ftQueues`, and `helpers` each contain package object entries for each component the Middleware is supposed to service for the given component type.



### Package object

A package object specifies the entire setup configuration of an individual component (e.g., queue or SCU).

```JSON
{
    "Id": "",
    "URL": [],
    "Package": "",
    "Version": "",
    "Configuration": {},
    "Description": ""
}
```

| Field           | Type             | Required | Description                                                  |
| --------------- | ---------------- | :------: | ------------------------------------------------------------ |
| `Id`            | String           |   yes    | The identifier of this component. Typically, you'll use one of the [relevant system variables](#pre-defined-system-variables) here. |
| `URL`           | Array of strings |   yes    | One or more URLs under which you can reach this component.  |
| `Package`       | String           |   yes    | The package name                                             |
| `Version`       | String           |    no    | The package version to be used. If not specified, you will use the current version. |
| `Configuration` | Object           |    no    | The configuration data for this component.                   |
| `Description`   | String           |    no    | A description of this component.                             |
