---
slug: /technical-operations/rollout-automation/shop-templating
title: Shop Templating
---
# Shop Templating

:::info summary

After reading this, you can create and use templates in the portal.

:::

Instead of creating and configuring a CashBox manually, a template can be used to create many similar CashBoxes. The fiskaltrust.Portal offers a graphical user interface to create, edit and buy templates.

## Create & Edit Template

At 'Configuration->Template' you can see the existing templates, copy or edit them and create new ones.

![Template List](./images/template-shop-list.png)

| elements | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../images/numbers/circle-1o.png) |Expand a template to get more detailed information.  |
|![Number 2](../../images/numbers/circle-2o.png) |Templates are visible for different scopes of users: Private (owner only), Deactivated (not visible in shop), Public for (your) PosOperators, Public for (your) PosDealers. |
|![Number 3](../../images/numbers/circle-3o.png) |You can copy an existing template.  |
|![Number 4](../../images/numbers/circle-4o.png) |Edit an existing template. |

When you create or edit a template, you have to fill out the following form.

![Template Create/Edit](./images/template-shop-create.png)

| elements | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../images/numbers/circle-1o.png) |Meaningfull name for the template. |
|![Number 2](../../images/numbers/circle-2o.png) |More detailed description to understand the purpose and content of the template. An image (e.g. product image) and link url for further information can be assinged.  |
|![Number 3](../../images/numbers/circle-3o.png) |Mode sets the visibility of the template: Private (owner only), Deactivated (not visible in shop),Public for (your) PosOperators, Public for (your) PosDealers.   |
|![Number 4](../../images/numbers/circle-4o.png) |The JSON content of the template. |
|![Number 5](../../images/numbers/circle-5o.png) |Save the template before leaving the page. |

## Create CashBox from Shop Template

CashBoxes can be created from templates at 'Shop->Products' by buying them like a regular product (see chapter [Shop](../../buy-resell/shop.md)). 
Please make sure to [surrogate](../../getting-started/operator-onboarding/surrogating.md) into the right PosOperator and select the correct Outlet in the Shop, before adding the template into the shopping cart. The CashBox will be created on Checkout.

:::info Required Products

Some templates require a product to be bought, before the derived CashBoxes will be fully operational. This should be mentioned in the description of the template. If so, place the required product into the shopping cart, before adding the template to the cart.

:::