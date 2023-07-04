// test case 12 Add product in Cart
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
    //test case 13 : product quantity in cart
it('product quantity page',() => {
    cy.visit('https://www.automationexercise.com/')
    cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click() //view product
    cy.get('#quantity').clear().type('4')
    // .clear()
    // .type('4')
    cy.get(':nth-child(5) > .btn').click() //addtocartbutton
    cy.get('u').click() //view cart
})


})

// Test Case 14: Place Order: Register while Checkout
describe('Place Order: Register while Checkout', ()=> {
    it('Place Order: Register while Checkout',()=> {
    cy.visit('https://automationexercise.com/')
    cy.get('.nav > :nth-child(1) > a').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click() //click on product
    cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click() //add product to cart
    cy.get('.modal-footer > .btn').click()
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click() //click cart button
    cy.get('#cart_items > :nth-child(1)').should('be.visible')//Verify that cart page is displayed
    cy.get('.col-sm-6 > .btn').click() //Click Proceed To Checkout
    cy.get('.modal-body > :nth-child(2)').click()
    cy.get('[data-qa="signup-name"]').type('Ahmad')
    cy.get('[data-qa="signup-email"]').type('ramzanahmad931+211192@gmail.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.get('#id_gender1').click()
    cy.get('[data-qa="password"]').type('123456')
    cy.get('[data-qa="days"]').select('25');
    cy.get('[data-qa="months"]').select('February');
    cy.get('[data-qa="years"]').select('2000');
    cy.get(':nth-child(7) > label').click();
    cy.get('[data-qa="first_name"]').type('Ahmad');
    cy.get('[data-qa="last_name"]').type('Rasheed');
    cy.get('[data-qa="company"]').type('InvoZone');
    cy.get('[data-qa="address"]').type('johar town lahore');
    cy.get('[data-qa="address2"]').type('lahore');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('California');
    cy.get('[data-qa="city"]').type('long beach');
    cy.get('[data-qa="zipcode"]').type('124');
    cy.get('[data-qa="mobile_number"]').type('1-202-456-7890');
    cy.get('[data-qa="create-account"]').click();
    cy.get('b').should('be.visible')// Verify 'ACCOUNT CREATED!' and click 'Continue' button
    cy.get('[data-qa="continue-button"]').click()
    cy.get(':nth-child(10) > a').should('be.visible') //Verify ' Logged in as username' at top
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click() //click cart button
    cy.get('.col-sm-6 > .btn').click() //Click 'Proceed To Checkout' button
    cy.get(':nth-child(2) > .heading').should('be.visible') //verify address detail
    cy.get(':nth-child(4) > .heading').should('be.visible') //review your order
    cy.get('.form-control').type('Shukria mehrbani') // Enter description in comment text area
    cy.get(':nth-child(7) > .btn').click() //click 'Place Order'
    cy.get('[data-qa="name-on-card"]').type('Ahmad') //Enter payment details: Name on Card, Card Number, CVC, Expiration date
    cy.get('[data-qa="card-number"]').type('123987456')
    cy.get('[data-qa="cvc"]').type('31')
    cy.get('[data-qa="expiry-month"]').type('06')
    cy.get('[data-qa="expiry-year"]').type('2020')
    cy.get('[data-qa="pay-button"]').click() //Click 'Pay and Confirm Order' button
    cy.get('.col-sm-9 > p').should('be.visible')
    cy.get(':nth-child(5) > a').click()
    cy.get('b').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
})})

// Test Case 15: Place Order: Register before Checkout
describe('Place Order: Register before Checkout', ()=> {
    it('Place Order: Register before Checkout',()=> {
    cy.visit('https://automationexercise.com/')
    cy.get('.nav > :nth-child(1) > a').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type('Ahmad')
    cy.get('[data-qa="signup-email"]').type('ramzanahmad931+51656@gmail.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.get('#id_gender1').click()
    cy.get('[data-qa="password"]').type('123456')
    cy.get('[data-qa="days"]').select('25');
    cy.get('[data-qa="months"]').select('February');
    cy.get('[data-qa="years"]').select('2000');
    cy.get(':nth-child(7) > label').click();
    cy.get('[data-qa="first_name"]').type('Ahmad');
    cy.get('[data-qa="last_name"]').type('Rasheed');
    cy.get('[data-qa="company"]').type('InvoZone');
    cy.get('[data-qa="address"]').type('johar town lahore');
    cy.get('[data-qa="address2"]').type('lahore');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('California');
    cy.get('[data-qa="city"]').type('long beach');
    cy.get('[data-qa="zipcode"]').type('124');
    cy.get('[data-qa="mobile_number"]').type('1-202-456-7890');
    cy.get('[data-qa="create-account"]').click();
    cy.get('b').should('be.visible')// Verify 'ACCOUNT CREATED!' and click 'Continue' button
    cy.get('[data-qa="continue-button"]').click()
    cy.get(':nth-child(10) > a').should('be.visible') //Verify ' Logged in as username' at top
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click() //click on product
    cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click() //add product to cart
    cy.get('.modal-footer > .btn').click()
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click() //click cart button
    cy.get('#cart_items > :nth-child(1)').should('be.visible')//Verify that cart page is displayed
    cy.get('.modal-footer > .btn')//continue on cart
    cy.get('.col-sm-6 > .btn').click() //proceed to checkout
    cy.get('#cart_items > .container').should('be.visible') //Verify Address Details and Review Your Order
    cy.get('.form-control').type('Shukria mehrbani') // Enter description in comment text area
    cy.get(':nth-child(7) > .btn').click() //click 'Place Order'
    cy.get('[data-qa="name-on-card"]').type('Ahmad') //Enter payment details: Name on Card, Card Number, CVC, Expiration date
    cy.get('[data-qa="card-number"]').type('123987456')
    cy.get('[data-qa="cvc"]').type('31')
    cy.get('[data-qa="expiry-month"]').type('06')
    cy.get('[data-qa="expiry-year"]').type('2020')
    cy.get('[data-qa="pay-button"]').click() //Click 'Pay and Confirm Order' button
    cy.get('.col-sm-9 > p').should('be.visible') //your order has been placed successfully
    cy.get(':nth-child(5) > a').click() //click delete account button
    cy.get('b').should('be.visible') //verify account deleted
    cy.get('[data-qa="continue-button"]').click() //continue button
    })})
// Test Case 16: Place Order: Login before Checkout
describe('Place Order: Login before Checkout', ()=> {
    it.only('Place Order: Login before Checkout',()=> {
    cy.visit('https://automationexercise.com/')
    cy.get('.nav > :nth-child(1) > a').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click() //Click 'Signup / Login' button
    cy.get('[data-qa="login-email"]').type('Ramzan.ahmad@invozone.com');
    cy.get('[data-qa="login-password"]').type('123456');
    cy.get('[data-qa="login-button"]').click();
    cy.get(':nth-child(10) > a').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click() //click on product
    cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click() //add product to cart
    cy.get('.modal-footer > .btn').click()
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click() //click cart button
    cy.get('#cart_items > :nth-child(1)').should('be.visible')//Verify that cart page is displayed
    cy.get('.modal-footer > .btn')//continue on cart
    cy.get('.col-sm-6 > .btn').click() //proceed to checkout
    cy.get('#cart_items > .container').should('be.visible') //Verify Address Details and Review Your Order
    cy.get('.form-control').type('Shukria mehrbani') // Enter description in comment text area
    cy.get(':nth-child(7) > .btn').click() //click 'Place Order'
    cy.get('[data-qa="name-on-card"]').type('Ahmad') //Enter payment details: Name on Card, Card Number, CVC, Expiration date
    cy.get('[data-qa="card-number"]').type('123987456')
    cy.get('[data-qa="cvc"]').type('31')
    cy.get('[data-qa="expiry-month"]').type('06')
    cy.get('[data-qa="expiry-year"]').type('2020')
    cy.get('[data-qa="pay-button"]').click() //Click 'Pay and Confirm Order' button
    cy.get('.col-sm-9 > p').should('be.visible') //your order has been placed successfully
    cy.get(':nth-child(5) > a').click() //click delete account button
    cy.get('b').should('be.visible') //verify account deleted
    cy.get('[data-qa="continue-button"]').click() //continue button
    })})