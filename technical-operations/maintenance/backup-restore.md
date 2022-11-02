---
slug: /posdealers/technical-operations/maintenance/backup-restore
title: Backup & Restore
---
# Backup & Restore

:::info summary

After reading this, you can plan and implement recovery of the Middleware.

:::

## Backup

With one of our products that includes our [revision-safe receipt archive](../../overview/services.md#revision-safe-receipt-archive), you receive a backup in a secure and legally compliant way for receipts. 

If you have not subscribed for such a product or use the middleware in offline mode, prepare a local backup for the following components:

- Database: The database you used for your installation. In case SQLite is used, it can be found in the [data directory](../middleware/setup.md#data-directory). Have a backup copy made regularly.
- [Data directory](../middleware/setup.md#data-directory): The necessary data to run your cashbox. Backup is only necessary after configuration changes (except when you use SQLite, see database).

:::caution

We do not recommend using a backup to migrate an active instance of the fiskaltrust.Middleware to another hardware. If possible, please set the queue out of operation and configure and install a new Middleware instance on the new machine.

:::

## Restore

You, as a PosDealer, recommend using restoring to:

- Create a new queue.
- Replace the queue in the cashbox installed on the system you want to restore.
- Rebuild the launcher and download it onto the new system.
- [Install the launcher](../middleware/launchers/desktop.md#installing-and-uninstalling-as-a-service) on the new system and start the middleware.