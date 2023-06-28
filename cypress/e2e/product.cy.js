//Add product in Cart
describe('Add Product in Cart', ()=> {
    it('Add Product in cart',()=> {
    cy.visit('https://automationexercise.com/')
    cy.get('.nav > :nth-child(1) > a').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('u').click()
    cy.get('#cart_info').should('be.visible')
    cy.get('#cart_items > :nth-child(1)').should('be.visible')
    })
    //product quantity in cart
it.only('product quantity page',() => {
    cy.visit('https://www.automationexercise.com/')
    cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click() //view product
    cy.get('#quantity').clear().type('4')
    // .clear()
    // .type('4')
    cy.get(':nth-child(5) > .btn').click() //addtocartbutton
    cy.get('u').click() //view cart
})


})