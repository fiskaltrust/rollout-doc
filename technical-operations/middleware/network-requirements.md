---
slug: /posdealers/technical-operations/middleware/network-requirements
title: Network Requirements
---
# Network Requirements

:::info summary

After reading this, you can prepare a network environment where the Middleware can access the necessary resources.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

The Middleware requires a basic set of network access to perform its function. First and foremost, this includes **inbound** connections from your POS Systems to the Middleware. Therefore, please ensure your POS Systems have free access to your Middleware instance. For example, you need to configure the firewalls to allow connections from your POS Systems to the IP address and ports where the Middleware is running.

A fully functioning Middleware setup requires a few **outbound** connections (e.g., querying for changes to your CashBox configuration). Therefore, please ensure the machine where the Middleware is active has proper network access to the following hostnames.

| Hostname                     | Protocol | Port(s) | Description                                                                                                                    |
| ---------------------------- | :------: | :-----: | ------------------------------------------------------------------------------------------------------------------------------ |
| packages.fiskaltrust.cloud   |   TCP    |   443   | Provides the required binary packages of the CashBox components                                                                |
| helipad.fiskaltrust.cloud    |   TCP    |   443   | Provides the CashBox configuration and the archive service                                                                     |
| dc.services.visualstudio.com |   TCP    |   443   | Error reporting (Microsoft provides a [list of IP addresses](https://docs.microsoft.com/azure/azure-monitor/app/ip-addresses)) |



:::tip troubleshooting

In case of connectivity issues, please check out the dedicated chapter [Network Troubleshooting](../troubleshooting/network-troubleshooting.md).

:::



### Additional access permissions

This section describes external 3rd party endpoints that the Middleware uses in some cases. This usage is currently only the case when using cloud TSSs in Germany.

import HostsAT from '../../_markets/at/technical-operations/middleware/network-requirements/_hosts.mdx';
import HostsFR from '../../_markets/fr/technical-operations/middleware/network-requirements/_hosts.mdx';
import HostsDE from '../../_markets/de/technical-operations/middleware/network-requirements/_hosts.mdx';

<Tabs groupId="market">

  <TabItem value="AT" label="Austria">
    <HostsAT />
  </TabItem>

  <TabItem value="FR" label="France">
    <HostsFR />
  </TabItem>

  <TabItem value="DE" label="Germany">
    <HostsDE />
  </TabItem>

</Tabs>
<br />

:::tip address lookup

Should you need to determine the IP addresses of these hostnames for your network policies, please use the appropriate tools on your local workstation (e.g., nslookup or dig) or an [online lookup service](https://search.brave.com/search?q=dns+lookup+online).

:::

:::info inbound connections

The Middleware does not expect or handle any other inbound connections, apart from the receipt requests sent by your POS Systems. So you only need to ensure your POS Systems have access; you can (and should) restrict all other connections.

:::


## Proxy setups

Suppose your network requires a proxy for outbound connections. In that case, you will need to provide the Middleware with details on how to connect to the proxy (i.e., the proxy address and connection credentials).

### Setting the proxy configuration

Setting the configuration parameters can be done using the Launcher's [`-proxy` parameter](https://docs.fiskaltrust.cloud/docs/poscreators/middleware-doc/general/installation#launcher-configuration). This parameter takes a semicolon-separated connection string with **five arguments**, specifying the address of the proxy, an optional username and password for authentication, as well as two exception settings.

| Value           | Description                                                                                                                 | Required |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- | -------: |
| address         | The URL of the proxy *(if only a hostname is provided, default is set to HTTP)*                                                    |      Yes |
| username        | The user which should be used for authentication against the proxy                                                          |       No |
| password        | The password of the proxy user                                                                                              |       No |
| bypass          | A regular expression with host addresses and names that ought to be exempt from proxying<br />*Can be used more than once* |       No |
| bypasslocalhost | Indicates whether local connections require proxying as well (`false` or `true`)                                            |       No |

#### Example Proxy Strings

```
address=192.168.0.1
address=192.168.0.1;username=proxyuser;password=proxypw
address=proxy.example.com;username=proxyuser
address=192.168.0.1;bypass=192\.168\.10\.1
address=192.168.0.1;bypass=192\.168\.10\.1;bypass=scu\d+\.example\.com
```

#### Sample Call

```PowerShell
C:\>fiskaltrust.exe -proxy="address=192.168.0.1;username=proxyuser;password=proxypw"
```

When you invoke the Launcher with that parameter, it will save the connection information in an **encrypted value** in its configuration and immediately return. You can verify if the information was added by checking for the following key in `fiskaltrust.exe.config`

```xml
<add key="proxy" value="[ENCRYPTED-PROXY-INFORMATION]" />
```

:::danger

For security reasons, do not add the connection information directly to any of the two Launcher files (`test.cmd` and `install-service.cmd`). Instead, call `fiskaltrust.exe` once manually with `-proxy` and the connection information.

And please make sure there is no other `-proxy` parameter in your Launcher files, as this would overwrite your configuration.

:::

### Editing the proxy configuration

Should you need to edit the proxy details, please remember that you will need to run the `-proxy` call again and cannot edit the configuration file manually as the file encrypts the proxy details.

If you want to remove the connection information altogether, please edit `fiskaltrust.exe.config` manually and remove the `add key="proxy"` entry.


:::caution settings taking effect

Please remember that any changes only take effect after a restart of fiskaltrust.Middleware.

:::


### third-party proxy settings

Depending on your setup, you might also need to grant access to additional network resources.

import ProxyAT from '../../_markets/at/technical-operations/middleware/network-requirements/_proxy.mdx';
import ProxyFR from '../../_markets/fr/technical-operations/middleware/network-requirements/_proxy.mdx';
import ProxyDE from '../../_markets/de/technical-operations/middleware/network-requirements/_proxy.mdx';

<Tabs groupId="market">

  <TabItem value="AT" label="Austria">
    <ProxyAT />
  </TabItem>

  <TabItem value="FR" label="France">
    <ProxyFR />
  </TabItem>

  <TabItem value="DE" label="Germany">
    <ProxyDE />
  </TabItem>

</Tabs>