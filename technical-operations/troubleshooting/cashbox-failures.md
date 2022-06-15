---
slug: /posdealers/technical-operations/troubleshooting/cashbox-failures
title: CashBox failures
---
# CashBox failures

:::info summary

After reading this, you can get the information to analyze CashBox failures.

:::

You can analyze CashBox failures remotely using the fiskaltrust.Portal at `Metrics->CashBox` by clicking the button `Go to failed requests` on the tile `CashBox failures`.

:::caution Offline or Opt-out

Using the launcher in [offline mode](../troubleshooting/network-troubleshooting.md#verifying-online-mode) or setting the launcher parameter --telemetry-opt-out prevents log files from being transferred to the fiskaltrust.Portal. Therefore the Metrics section in the Portal will not be available.
Please keep in mind that this will prevent us from actively reacting to issues in the respective customer installations. Instead, we will entirely depend on receiving inquiries and log files manually from you.

:::

![CashBox Failures ](./images/cashbox-failures.png "https://portal-sandbox.fiskaltrust.TLD/MetricCashbox/ListCashboxes")

| element | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../images/numbers/circle-1o.png) |The initial view is filtered to view the failures of the last 24 hours. You can change the period shown here.  |
|![Number 2](../../images/numbers/circle-2o.png) |A health indicator shows the number of overall CashBox failures within the filtered period. |
|![Number 3](../../images/numbers/circle-3o.png) |The number of exceptions for each single CashBox. |
|![Number 4](../../images/numbers/circle-4o.png) |Click the icon in the column `Logs` to get the detailed CashBox failure log. |

![CashBox Failure Log ](./images/cashbox-failure-log.png "https://portal-sandbox.fiskaltrust.TLD/MetricCashbox/ListCashboxes")
You will find more detailed information about the exceptions here and can even access the stack trace when clicking on the icon below `Details` to analyze the CashBox failure.

