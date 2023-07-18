export class Product{
productPage = '.shop-menu > .nav > :nth-child(2) > a'
ProductVisibilitySelector = '.title'
ProductPanelVisibilitySelector = 'section[style="height: auto !important;"] > .container > .row'
Productimage = ':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a'
Productimage1 = ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn'
ViewProduct3  = ':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a'
Productimage2 = ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn'
Productimage4 = ':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a'
Productimage7 = ':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn'
ProductQuantity = '#quantity'
ProductInformation = '.product-information'
SearchProduct = '#search_product'
SubmitSearch = '#submit_search'
ScrollBottom = 'bottom'
SubscriptionHeading = '.single-widget > h2'
SubscribeEmail = '#susbscribe_email'
SubscribeButton = '#subscribe'
brandHeadingSelector = '.brands_products > h2'
brandNamePolo = '.brands-name > .nav > :nth-child(1) > a'
brandNameMadame = '.brands-name > .nav > :nth-child(3) > a'
menTshir2tSelector = '#product-2'





clickProductPage (){
    cy.get(this.productPage).click();
}
checkAllProductVisibility (){
    cy.get(this.ProductVisibilitySelector).should('be.visible');
}
checkProductPanelVisibilitySelector(){
    cy.get(this.ProductPanelVisibilitySelector).should('be.visible');
}
clickProductimage(){
    cy.get(this.Productimage).click();
}
productInformationVisibility(){
    cy.get(this.ProductInformation).should('be.visible');
}
searchProducttype(){
    cy.get(this.SearchProduct).type('Men tshirt');
}
enterSubmitSearch(){
    cy.get(this.SubmitSearch).click();
}
scrollToBottom(){
    cy.scrollTo(this.ScrollBottom, { duration: 2000 });
}
subscriptionHeadingVisibility(){
    cy.get(this.SubscriptionHeading).should('be.visible');
}
enterSubscribeEmail(){
    cy.get(this.SubscribeEmail).type('ramzan.ahmad@invozone.com');
}
hitSubscribeButton(){
    cy.get(this.SubscribeButton).click();
}
clickProductimage1(){
    cy.get(this.Productimage1).click();
}
clickViewProduct3(){
    cy.get(this.ViewProduct3).click()
}
clickProductimage2(){
    cy.get(this.Productimage2).click();
}
clickProductimage4(){
    cy.get(this.Productimage4).click();
}
clickProductimage7(){
    cy.get(this.Productimage7).click();
}
selectProductQuantity(){
    cy.get(this.ProductQuantity).clear().type('4');
}
brandHeadingSelectorVisibility()
{
    cy.get(this.brandHeadingSelector).should('be.visible')
}
clickBrandNamePolo(){
    cy.get(this.brandNamePolo).click().should('be.visible')
}
clickBrandNameMadame(){
    cy.get(this.brandNameMadame).click().should('be.visible')
}

}