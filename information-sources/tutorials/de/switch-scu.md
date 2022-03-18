---
slug: /posdealer/information-sources/tutorials/germany/switch-scu
title: 'Switch SCU'
---

# Switch SCU

This tutorial describes how to exchange the assignment of a queue to the used fiskaltrust.SCU with a new SCU in a CashBox. The feature described here is useful in case you want to exchange a TSE.

## Steps

In general, there are two cases for the switch:

1. The Queue is not yet active (initial operation receipt has not yet been sent)
2. The Queue is already active (initial operation receipt has already been sent)

## Queue is not yet active

In this case, the exchange is straightforward and consists of the following steps:

### SCU is in the same CashBox as the queue

1. Remove old SCU from the CashBox in the fiskaltrust.Portal
2. Add the new SCU to the CashBox
3. Connect the Queue with the new SCU
4. Publish the configuration update ("Rebuild configuration")
5. Restart the fiskaltrust.Middleware

### SCU is located in another CashBox

1. Connect the Queue with the new SCU in the fiskaltrust.Portal
2. Publish the configuration update ("Rebuild configuration")
3. Restart the fiskaltrust.Middleware

## Queue is already active

In case the Queue is already active, the switch is done in a two-step process. This makes it possible to easily change a hardware TSE if only one slot is available for it in the computer and thus only one of the two hardware TSEs (old or new) can be plugged in. Such a change of the hardware TSE is performed after sending the initialte switch receipt and before sending the finish switch receipt (see below).

To switch the SCU, proceed as follows:

### SCU is in the same CashBox as the Queue

1. Add the new SCU to the CashBox in the fiskaltrust.Portal (do not remove old SCU from the CashBox)
2. Connect the Queue with the new SCU in the fiskaltrust.Portal
3. Publish the configuration update ("Rebuild configuration")
4. Restart the fiskaltrust.Middleware
5. Send a daily-closing receipt to the Queue to save the data of the old SCU
6. Send an initiate-switch receipt to the Queue
(Note: If this concerns the changing of a hardware TSE and only one slot is available in the computer, change the hardware TSE after sending the initiate-switch receipt - old for new )
7. Send an finish-switch receipt to the Queue
8. Remove the old SCU from the CashBox in the fiskaltrust.Portal
9. Publish the configuration update ("Rebuild configuration")
10. Restart the fiskaltrust.Middleware

The above mentioned receipt types must have been implemented in the POS-System by the PosCreator. A detailed description of the receipt types mentioned can be found in our [Middleware API documentation](https://docs.fiskaltrust.cloud/docs/poscreators/middleware-doc/germany/reference-tables/ftreceiptcase) for PosCreators.

### SCU is located in a different CashBox

1. Connect the Queue with the new SCU in the fiskaltrust.Portal
2. Publish the configuration update ("Rebuild configuration")
3. Restart the fiskaltrust.Middleware
4. Send a daily-closing receipt to the Queue to save the data of the old SCU
5. Send an initiate-switch receipt to the Queue
(Note: If this concerns the changing of a hardware TSE and only one slot is available in the computer, change the hardware TSE after sending the initiate-switch receipt - old for new )
6. Send an finish-switch receipt to the Queue

The above mentioned receipt types must have been implemented in the POS-System by the PosCreator. A detailed description of the receipt types mentioned can be found in our [Middleware API documentation](https://docs.fiskaltrust.cloud/docs/poscreators/middleware-doc/germany/reference-tables/ftreceiptcase) for PosCreators.
