---
slug: /posdealers/technical-operations/troubleshooting/network-troubleshooting
title: Network troubleshooting
---
# Network troubleshooting

:::info summary

After reading this, you can analyze network-related problems.

:::

## Introduction

This chapter contains general tips and suggestions as to what to do and what to check if you experience any network-related issues with your Middleware instance.

## Verifying online mode

For starters, if you have any issues with outbound connections (connections **from** the Middleware, **not to**), please make sure the Middleware is **not** configured for *offline mode*. If this were the case, the Middleware would not even attempt any communication on its own with the outside world (i.e., download packages, verify its CashBox configuration, update your archive service).

To verify that your Middleware is configured for online mode, please check its [configuration file](../middleware/configuration.md) `fiskaltrust.exe.config` and make sure there is no `useoffline` parameter configured to `true` under the `<appSettings>` section.

```xml
<add key="useoffline" value="true" />
```

If you find such an entry, your Middleware would be running in *offline mode*, and you'd first need to enable *online mode*. Please either remove that line altogether or set its value to `false` and save the file. **Important**, restart the Middleware after that configuration change.

:::caution helper scripts overwriting parameters

Double-check your [helper scripts](../middleware/setup.md#installation-directory) and make sure they do not set the value with the `-useoffline` parameter either.

:::

## fiskaltrust firewall script

In addition to the manual verification steps outlined in this chapter, _fiskaltrust_ also provides a ready-made PowerShell script, which automatically performs a couple of basic network checks.

To run the script, [download the latest version from here](../../assets/fw-script.zip) and unpack it into the desired destination directory. Next, run the `CheckFirewall.ps1` script and pass **as an argument the configuration CSV file** applicable to your use case (the package contains several sample files) from your PowerShell console. Please also ensure you have the [latest version](https://github.com/PowerShell/PowerShell/releases/latest) of PowerShell installed.

:::caution execution policy

If you receive an execution policy error, please run the following command before running the script.

```
Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope Process -Force
```

:::

Running the script can take a few seconds. However, once completed, you should have a similar output to the following.

```console
PS C:\fw-script>.\CheckFirewall.ps1 FirewallTests-ft.csv
CheckFirewall 2.0

Machine name: COMPUTER-NAME
OS version: 10.0.19044
Windows name: Windows 10 Enterprise
Overall connectivity: True
Active Middleware instances: 0

Name                             Version        Release
----                             -------        -------
v2.0.50727                       2.0.50727.4927
v3.0                             3.0.30729.4926
Windows Communication Foundation 3.0.4506.4926
Windows Presentation Foundation  3.0.6920.4902
v3.5                             3.5.30729.4926
Client                           4.8.04084      528372
Full                             4.8.04084      528372
Client                           4.0.0.0

We're all good!
Status: (SUCCESS) -- Purpose: ft cashbox download & upload receipt data
Status: (SUCCESS) -- Purpose: ft download packages
Status: (SUCCESS) -- Purpose: ft error reporting
Full Results below:

Url                                        Purpose                                   Notes From
---                                        -------                                   ----- ----
https://helipad.fiskaltrust.cloud/version  ft cashbox download & upload receipt data okay  COMPUTER-NAME
https://packages.fiskaltrust.cloud/version ft download packages                      okay  COMPUTER-NAME
https://dc.services.visualstudio.com/      ft error reporting                        okay  COMPUTER-NAME
```

The output's last table (with `Url`) is attractive, as it indicates which network connections succeeded.Analyzing the log

The first step in debugging connectivity issues is typically the Middleware's log. You could either start the Middleware in [test [mode](../middleware/launchers/desktop.md) and analyze its output directly in the console or configure a [log file](../middleware/logging.md). In either case, please ensure the log level is set to `debug`.

If you find any of the following error messages in the log output, it may suggest an issue in the area mentioned in the right column.

| Error message                                                    | Typically suggests                                             |
| ---------------------------------------------------------------- | -------------------------------------------------------------- |
| The remote name could not be resolved                            | [DNS issues](#dns)                                             |
| Unable to connect to the remote server                           | [General network issues](#network) (e.g., ports blocked)        |
| The request was aborted: Could not create SSL/TLS secure channel | [SSL issues](#ssl)                                             |
| Failed to connect to all addresses                               | [Connection issue between queue and SCU](#queuescu-connection) |



## Common errors

### DNS

If the Middleware logged an error saying something like "(remote) name could not be resolved", that might hint at issues with the DNS resolution on your machine. This issue is because the Middleware needs to be able to resolve hostnames to their IP addresses to establish a network connection. For example, the Middleware needs to be able to resolve all the hostnames mentioned in the chapter [Network Requirements](../middleware/network-requirements.md).

You can check your system's DNS resolution with the commands [nslookup](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/nslookup) (on Windows) or [dig](https://en.wikipedia.org/wiki/Dig_(command)) (on Unix). For example, run one of the following commands to check if your system can resolve `packages.fiskaltrust.cloud` fine.

**Windows**

```
nslookup packages.fiskaltrust.cloud
```

**Unix**
```
dig +short packages.fiskaltrust.cloud
```

If you do not receive the correct IP address, you can verify against online services, such as [nslookup.io](https://www.nslookup.io)). Also, if You receive an error message like Non-existent domain`, you may have a general DNS resolution issue on your machine. Therefore, you should contact the responsible network administrator for details on fixing the issue.



### Network

:::tip proxy

It may be that your network generally restricts outbound connections and requires the use of a proxy. In that case, please consult your network administrator for further information and [Proxy setups](../middleware/network-requirements.md#proxy-setups) for details on how to configure a proxy for the Middleware.

:::

If the log refers to a message saying 'a connection could not be established` or that it was `unable to connect to the remote server`, that could be an issue with the present Internet connectivity or some security appliance (e.g., a network firewall) blocked the connection.

All services mentioned in the chapter [Network Requirements](../middleware/network-requirements.md) must be reachable for the Middleware. These are typically HTTP-based services running on TCP port 443 and can be quickly checked with curl.



#### Checking web services

You can use [curl](https://curl.se) to perform a basic connection test against an HTTP-based service. Should you not use a current version of Windows, you may have to [download curl manually](https://curl.se/download.html#Win64).

Use the following command to run a test request against `https://packages.fiskaltrust.cloud`.

```console
curl.exe -I https://packages.fiskaltrust.cloud
```

As long as you receive an HTTP response with a valid status code (e.g., `200` or `401`), your system should be able to connect to the specified URL. However, should you receive an error message indicating, for example, a network or encryption issue, additional configuration changes might be necessary to allow the said connection. For example, firewall whitelisting or updates to your SSL configuration. Please consult your network administrator for more information.



#### Checking generic TCP services

While most of the _fiskaltrust_ services are web-based and connections can be verified as mentioned under [Checking web services](#checking-web-services), you can also use default system tools, such as Telnet, to check for overall connectivity.

:::tip telnet installation

Telnet does not come pre-installed on Windows. If it hasn't been installed, please open the Run dialog (Win+R), type `appwiz.cpl` and press `Enter`, choose `Turn Windows features on or off` from the left, and install `Telnet Client`.

:::

For example, to verify whether your system allows connections to `https://packages.fiskaltrust.cloud` on the default HTTPS port 443, you can also run the following command:

```
telnet packages.fiskaltrust.cloud 443
```

If the screen immediately clears and only shows a text cursor, you have established a connection. You can exit Telnet by pressing `Ctrl` + `]`. If Telnet appears to hang or shows any error message, that may suggest that you have possible connectivity issues. Please consult your network administrator in that case for more information.


### SSL

All outbound connections established by the Middleware are HTTPS-protected and require a properly configured SSL setup, particularly regarding the SSL version and the root certificates of the involved certificate authorities.

If your Middleware instance provided you with error messages which indicate possible SSL issues, you could first run the check from [Checking web services](#checking-web-services) (please make sure to use an HTTPS URL). Depending on its output, you can also use additional tools, such as [OpenSSL](https://wiki.openssl.org/index.php/Binaries), to run other checks. For example, the following command would try to establish an SSL connection to `packages.fiskaltrust.cloud` on port 443 (i.e. `https://packages.fiskaltrust.cloud`)

```console
openssl s_client -connect packages.fiskaltrust.cloud:443 -servername packages.fiskaltrust.cloud
```



Apart from firewalls, the most common issue is an improperly configured SSL stack on your system. This configuration may include unavailable or disabled SSL/TLS versions or missing CA root certificates. You can typically fix the latter by ensuring your operating system has its latest updates installed.

If your operating system is not supported or you have customized your certificate trust store, you may have to import/configure the certificates manually. You can obtain the necessary certificate details in two ways.

* By opening the site in question in your browser and [accessing the certificates from the security dialog](https://search.brave.com/search?q=accessing+certificate+chain+in+browser).
* By downloading the applicable certificate pack from fiskaltrust.Portal under `Tools` / `Download` (subject to availability).



### Queue/SCU connection

This issue typically indicates that the [queue](../middleware/overview.md#queue) lost its internal connection to an [SCU](../middleware/overview.md#scu-signature-creation-unit). This loss may occur after you shifted components within a CashBox or any of the involved machines got new IP addresses assigned.

Fixing this issue is often quickly done with a [rebuild](../middleware/cashbox.md#rebuilding) of the CashBox and a subsequent restart of the Middleware. Please verify the configuration of the relevant CashBoxes beforehand. In particular, please pay attention to the hostnames, IP addresses, and the ports you configured for each component and make sure they [resolve](#dns) and match the actual machine configuration. Also, please double-check that no (local) firewall may prevent connections.