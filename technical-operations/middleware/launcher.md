---
slug: /technical-operations/middleware/launcher
title: Launcher
---
# Launcher

:::info summary

After reading this, you can explain what the Middleware launcher is and how it is used to start the Middleware.

:::

## Introduction

The Launcher is a core component of every Middleware setup, it is the service's **bootstrap part** which manages and initialises the other components of the CashBox (e.g. the queue). The file `fiskaltrust.exe` in your Middleware package is the Launcher binary.

Typically, you will not use the Launcher binary directly yourself, but you will use one of the **included scripts** to start the service in test mode or install it as a system-wide service.



## Installing and uninstalling as a service

Please use the included installation script (`install-service.[cmd/sh]`) to register the Middleware with your operating system's service manager.

For Windows, please make sure to run `install-service.cmd` with **administrative privileges** (from an administrator shell or with "Run as administrator"). In case you are deploying a Mono setup, please run `install-service.sh` from a **root user context**.

To **uninstall** the service, please use `uninstall-service.[cmd/sh]` in the same fashion as the installation.



## Launching the Middleware

### As service

The Middleware service behaves like a standard system service and can be controlled with the operating system's default tools.

#### Windows

Please use either the built-in Windows Services dashboard (open the Start Menu and type `Services`) or the command line commands `net start [SERVICENAME]` and `net stop [SERVICENAME]` to start and stop the installed service.



#### Unix (Mono)

Please use the standard service control commands, applicable to your system setup. For example many Linux distributions support `systemctl start [SERVICENAME]` and `systemctl stop [SERVICENAME]` to start and stop installed services.



### In test mode

Though not intended to be the standard launch mode (please [install as a service instead](#installing-and-uninstalling-as-a-service)), the *test mode* can be very useful to **quickly test** the Middleware setup and get **additional logging information** without having to necessarily configure a full-fledged log file.

To start the Middleware in *test mode*, please first make sure any possibly running **service instance has been stopped**. Then, use the test script (`test.[cmd/sh]`) to start the Middleware. It is important to run the script with **administrative privileges** (from an administrator shell or with "Run as administrator"). Once the Middleware has started and the Launcher initialised all components, you can use the Middleware just as if you had started it as a service.

If you wish to stop the Middleware, just press any key.

:::caution Windows shell behaviour

Please be careful when interacting with the Middleware shell window on Windows, as **any keystroke will stop the Middleware**. Clicking into the window could also be an issue, as this will **enable the shell's text selection mode** by default, suspending the Middleware until you exited selection mode.

:::



## Command Line Parameters

The Launcher supports a number of parameters which either control its execution or set its general configuration environment.

A list of supported parameters can be obtained with the `-?` parameter.

```shell
C:\>fiskaltrust.exe -?
```



### Control parameters

| Parameter                  | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| -i                         | Installs the Middleware as system service on Windows (based on `-servicename`) |
| -u                         | Uninstalls the Middleware system service on Windows (based on `-servicename`) |
| -test                      | Starts the Middleware as regular command line application (instead of in service mode) |
| -servicename=[SERVICENAME] | Defines the name of the service                              |
| -displayname=[DISPLAYNAME] | Defines the display name of the service                      |
| -description=[DESCRIPTION] | Defines the description of the service                       |



### Configuration parameters

The following parameters are used for changing configuration settings in the Middleware's configuration file `fiskaltrust.exe.config`.

Each parameter is to be followed by an `=` sign and its value (e.g. `-cashboxid=00000000-0000-0000-0000-000000000000`). Please use quotes (`"`) for the value, should there be any spaces in the string.

| Parameter          | Description                                                  | Example                                             |
| ------------------ | ------------------------------------------------------------ | --------------------------------------------------- |
| -accesstoken       | The access token of the CashBox                              | `-accesstoken=McWDtOcxxN`                           |
| -cashboxid         | The ID of the CashBox the Launcher should start              | `-cashboxid=00000000-0000-0000-0000-000000000000`   |
| -connectionretry   | The number of times the Middleware will attempt to fetch its configuration from | `-connectionretry=1`                                |
| -connectiontimeout | The timeout (in seconds) after which the Middleware will abort | `-connectiontimeout=15`                             |
| -logfile           | Full path to log file                                        | `-logfile="D:\logs\fiskaltrust.log"`                |
| -packagesurl       | An alternative download URL for the fiskaltrust package service. | `-packagesurl="https://packages.fiskaltrust.cloud"` |
| -proxy             | Connection details for a possible proxy connection. Please see [Proxy setups](network-requirements.md#proxy-setups) for details. | `-proxy="address=10.0.0.0"`                         |
| -sandbox           | Boolean flag indicating whether the Middleware uses the [sandbox environment](../../getting-started/sandbox.md) | `-sandbox=false`                                    |
| -servicefolder     | Full path to the Middleware's working directory.             | `-servicefolder="D:\data\fiskaltrust"`              |
| -sslvalidation     | Boolean flag indicating whether the Middleware validates SSL certificates | `-sslvalidation=true`                               |
| -useoffline        | Boolean flag indicating whether the Middleware should function | `-useoffline=false`                                 |
|                    | **Following parameters are only available with version 1.3 of the Launcher, on the German market** |                                                     |
| -scutimeout        | The timeout (in seconds) after which the queue will abort requests to the SCU | `-scutimeout=75`                                    |
| -telemetry-optout  | Flag indicating whether the Middleware should disable telemetry | `-telemetry-optout=false`                           |
| -verbosity         | The level of logging the Middleware should use<br />Supported values: trace, debug, information, warning, error, critical, and none | `-verbosity=information`                            |

:::caution

Please note, configuration parameters only set their values in the configuration file `fiskaltrust.exe.config`. Removing a parameter from the invocation call will *not remove* the configuration setting, please adjust either the parameter or the configuration file entry in this case.

:::