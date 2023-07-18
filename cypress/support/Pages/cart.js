export class Cart{
cartPage = '.shop-menu > .nav > :nth-child(3) > a'
SubscriptionHeadingSelector = 'h2'
ContinueShoppings = '.modal-footer > .btn'
ViewCart = 'u'
viewcartProduct = '.modal-body > :nth-child(2)'
cartinfoSelector = '#cart_info'
cartItemSelector = '#cart_items > :nth-child(1)'
AddToCartButton = ':nth-child(5) > .btn'
AddtoCart ='.productinfo > .btn'
CartItemContainerSelector = '#cart_items > .container'
cartQuantityDelete = '.cart_quantity_delete'





clickCartPage(){
    cy.get(this.cartPage).click();
}
subscriptionHeadingVisibility(){
    cy.get(this.SubscriptionHeadingSelector).should('be.visible');
}
ContinueShoppingsclick(){
    cy.get(this.ContinueShoppings).click({force: true});
}

clickViewCart(){
    cy.get(this.ViewCart).click();
  }
  hitviewcartProduct(){
    cy.get(this.viewcartProduct).click();
  }
CartinfoVisibility(){
cy.get(this.cartinfoSelector).should('be.visible');
}
cartItemSelectorVisibility(){
    cy.get(this.cartItemSelector).should('be.visible');
}
clickAddToCartButton(){
    cy.get(this.AddToCartButton).click()
}
CartItemContainerSelectorVisibility(){
    cy.get(this.CartItemContainerSelector).should('be.visible') 
}
clickCartQuantityDelete() {
    cy.get(this.cartQuantityDelete).click()
  }
  ClickAddtoCart(){
    cy.get(this.AddtoCart).click()
  }
}