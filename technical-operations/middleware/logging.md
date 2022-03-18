---
slug: /posdealer/technical-operations/middleware/logging
title: Logging
---
# Logging

:::info summary

After reading this, you can configure and use logging to get information about your Middleware instance.

:::

## Introduction

Logging is a crucial part of debugging issues when the Middleware is not working as expected. It can provide you and fiskaltrust.Support with the relevant information to determine the reason for any unexpected behaviour.

The Middleware supports **two types** of logging, a default one to standard output when the Middleware is running in [test mode](launcher.md#in-test-mode), and a second one for traditional file-based logging. The latter requires manual configuration of the log file and **works in both execution modes**, test and service.

The following sections provide you with more insight on which log levels are available, as well as how to configure logging in detail.

:::caution logging in production

Depending on the log level and your number of transactions, the Middleware may log a lot of information, which may unnecessarily occupy disk storage on your system. For performance and storage reasons, it is generally advised not to exceed a log level of `warning` for regular production use. Set a higher log level only when you want to reproduce or analyse issues or when advised by fiskaltrust.Support.

**Log file rotation is only supported as of version 2.0 of the launcher.**

:::



## Log levels

The Middleware distinguishes between seven different log levels.

|                Priority                 | Level         | Description                                                    |
| :-------------------------------------: | ------------- | -------------------------------------------------------------- |
| ![](../../images/numbers/circle-1o.png) | `none`        | Nothing is logged                                              |
| ![](../../images/numbers/circle-2o.png) | `critical`    | Only critical errors are logged                                |
| ![](../../images/numbers/circle-3o.png) | `error`       | General errors are logged                                      |
| ![](../../images/numbers/circle-4o.png) | `warning`     | Warning messages are logged                                    |
| ![](../../images/numbers/circle-5o.png) | `information` | General technical information is logged                        |
| ![](../../images/numbers/circle-6o.png) | `debug`       | Debug messages are logged                                      |
| ![](../../images/numbers/circle-7o.png) | `trace`       | The most detailed log level, with additional trace information |

Each log level builds upon the previous ones and includes all their information as well. For example, if you configure `warning` the log will also include the information for the levels `critical` and `error`.



## Configuring the log level and log file

The log level and the log file are defined in the Middleware's configuration file `fiskaltrust.exe.config`. Both are configured with an `<add>` entry under the `appSettings` section and have a `key` attribute indicating the respective parameter (`logfile` and `loglevel`), as well as a `value` attribute specifying the actual value (either the desired log level or the full path to the log file).

The following example shows a configuration where the log level was set to `debug` and a log file configured under the given file system path.

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>

  <appSettings>

    <add key="loglevel" value="Debug" />
    <add key="logfile" value="C:\log\fiskaltrust\middleware.log" />

    [ .. other configuration values .. ]

  </appSettings>

  [ .. other configuration settings .. ]

</configuration>
```



The entries can be set manually by editing `fiskaltrust.exe.config` or by calling the Launcher with the [`-verbosity`/`logfile` parameters](configuration.md#parameters). The following example call illustrates how the settings from above's example would be configured via the command line.


```shell
C:\>fiskaltrust.exe -verbosity=debug -logfile="C:\log\fiskaltrust\middleware.log"
```



:::info service restart

Please note, any changes to the configuration will only take effect after a restart of the Middleware service.

:::

:::tip starts scripts

Avoid adding your configuration parameters directly to any of the included launch scripts (`test.[cmd/sh]` and `install-service.[cmd/sh]`). Doing so will overwrite your configuration whenever you launch one of the scripts, resetting any changes you possibly made to the configuration in the meantime.

:::



## Providing logs to fiskaltrust.Support

When providing support with a log file, or log excerpt, please make sure you enabled file logging and the adequate log level is configured (typically `debug`, support may provide you with more details on that).

Whenever possible, please also try to limit the logging to the point in time when you are reproducing the issue. It greatly helps the support team in the analysis of the issue when the log file only contains relevant information. Should a log file still be too large to send via email, please try compressing it first, should that still not work, please contact support for further upload options.




## Log format

The following log excerpt is an example from when the Launcher just started and encountered a file system permission issue.

```
1970-01-01 00:00:00 [INF] fiskaltrust.Launcher-X.X.X
1970-01-01 00:00:00 [INF] CashBoxId set to "00000000-0000-0000-0000-000000000000"
1970-01-01 00:00:00 [INF] AccessToken set
1970-01-01 00:00:00 [INF] Sandbox set to "True"
1970-01-01 00:00:00 [ERR] Cannot set ACL to ServiceFolder
System.UnauthorizedAccessException: Attempted to perform an unauthorized operation.
   at System.Security.AccessControl.Win32.SetSecurityInfo(ResourceType type, String name, SafeHandle handle, SecurityInfos securityInformation, SecurityIdentifier owner, SecurityIdentifier group, GenericAcl sacl, GenericAcl dacl)
   at System.Security.AccessControl.NativeObjectSecurity.Persist(String name, SafeHandle handle, AccessControlSections includeSections, Object exceptionContext)
   at System.Security.AccessControl.NativeObjectSecurity.Persist(String name, AccessControlSections includeSections, Object exceptionContext)
   at System.Security.AccessControl.FileSystemSecurity.Persist(String fullPath)
   at fiskaltrust.service.launcher.Configuration.get_ServiceFolder()
1970-01-01 00:00:02 [INF] Starting Middleware with configuration timestamp: 0 (SHA256: 0000000000000000000000000000000000000000000000000000000000000000)
1970-01-01 00:00:02 [INF] Save configuration to C:\ProgramData\fiskaltrust\service\Configuration-00000000-0000-0000-0000-000000000000.json
1970-01-01 00:00:02 [INF] Starting ft.Middleware at C:\ProgramData\fiskaltrust\service\00000000-0000-0000-0000-000000000000
1970-01-01 00:00:02 [INF] fiskaltrust.Middleware started. Press a button to stop...
```

A log entry consists of four elements.

1. The local date
2. The local time
3. The log level under which the message was logged (`CRI`, `ERR`, `WRN`, `INF`, `DBG`, and `VRB`)
4. The log message

The given example provides us with the following clues

* in line 1, the Middleware was started with the Launcher version X.X.X
* lines 2 to 4, [configuration parameters](configuration.md#parameters) for the mentioned settings were provided
* line 5 indicates an error (*in this case missing permissions for the file system*), the respective exception message is appended in lines 6 to 11
* lines 12 to 14 are general information messages during the start
* line 15 points out that, in test mode, the Middleware can be exited by pressing any key