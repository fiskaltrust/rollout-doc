---
slug: /technical-operations/maintenance/backup-restore
title: Backup & Restore
---
# Backup & Restore

:::info summary

After reading this, you can plan and implement recovery of the Middleware.

:::

## Backup

If you have subscribed a product, that includes our [revision-safe receipt archive](../../overview/services#revision-safe-receipt-archive), your receipts will always be backed up in a secure and legally compliant way. 

If you have not subscribed such a product or use the middleware in offline mode, the following components should be backed up locally:
- Database: The database you used for your installation. In case SQLite is used, it can be found in the [data directory](setup.md#data-directory). Should be backuped up regularly.
- [Data directory](setup.md#data-directory): The necessary data to run your cashbox. Backup is only necessary after configuration changes (except when you use SQLite, see Database).

:::caution

We do not recommend to use a backup to migrate an active instance of the fiskaltrust.Middleware to another hardware. If possible, please set the queue out of operation and configure and install a new Middleware instance on the new machine.

:::

## Restore

It is recommended to:
- Create a new queue.
- Replace the queue in the cashbox, that was installed on the system which needs to be restored.
- Rebuild the launcher and download it onto the new system.
- [Install the launcher](launcher.md#installing-and-uninstalling-as-a-service) on the new system and start the middleware.