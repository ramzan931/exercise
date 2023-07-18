export class Order{
ProceedTOCheckout = '.col-sm-6 > .btn'
signupLoginbutton = ('.modal-body > :nth-child(2)')
AddressDetailSelector = ':nth-child(2) > .heading'
ReviewYourOrderSelector = ':nth-child(4) > .heading'
ReviewForm   = '.form-control'
ReviewSelector = '.active > a'
PlaceOrderBtn = ':nth-child(7) > .btn'
CardName = '[data-qa="name-on-card"]'
CardNumber = '[data-qa="card-number"]'
CardCVC = '[data-qa="cvc"]'
CardMonth = '[data-qa="expiry-month"]'
CardYear = '[data-qa="expiry-year"]'
orderPlacedConfirmedSelector = '.col-sm-9 > p'
ReviewName = '#name'
ReviewEmail = '#email'
ReviewProductForm = '#review'
ReviewBtn = '#button-review'
ReviewMessageSelector = '.alert-success > span'





clickProceedTOCheckout(){
    cy.get(this.ProceedTOCheckout).click()
}
clicksignupLoginbutton(){
    cy.get(this.signupLoginbutton).click()
}
VisibilityAddressDetailSelector(){
    cy.get(this.AddressDetailSelector).should('be.visible')
}
VisibilityReviewYourOrderSelector(){
    cy.get(this.ReviewYourOrderSelector).should('be.visible')
}
inputReviewForm(){
    cy.get(this.ReviewForm).type('Shukria mehrbani') 
}
ReviewSelectorVisibility(){
    cy.get(this.ReviewSelector).should('be.visible')
}
hitPlaceOrder(){
    cy.get(this.PlaceOrderBtn).click()
}
enterCardName(){
    cy.get(this.CardName).type('Ahmad')
}
enterCardNumber(){
    cy.get(this.CardNumber).type('123987456')
}
enterCVC(){
    cy.get(this.CardCVC).type('31')
}
enterCardMonth(){
    cy.get(this.CardMonth).type('06')

}
enterCardYear(){
    cy.get(this.CardYear).type('2020')
}
VisibilityOrderPlacedConfirmedSelector(){
    cy.get(this.orderPlacedConfirmedSelector).should('be.visible')
}
enterReviewName(){
    cy.get(this.ReviewName).type('Ramzan')
}
enterReviewEmail(){
    cy.get(this.ReviewEmail).type('ramzan.ahmad@invozone.com')
}
EnterProductReview(){
    cy.get(this.ReviewProductForm).type('mazy kii product ha')
}
HitReviewButton(){
    cy.get(this.ReviewBtn).click()
}
VisibilityReviewMessageSelector(){
    cy.get(this.ReviewMessageSelector).should('be.visible')
}
}
