//17//remove product from cart
describe('remove product from cart', () => {
    it('remove product from cart', () =>{
        cy.visit('https://www.automationexercise.com/')
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click() //pr.add to cart
         cy.get('u').click() //view cart
         cy.get('.cart_quantity_delete').click().should('not.exist')//x button
    })
})
//18view category product
describe('remove product from cart', () => {
    it('remove product from cart', () =>{
        cy.visit('https://www.automationexercise.com/')
        cy.get('.left-sidebar > :nth-child(1)').should('be.visible') //category
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click() //women
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click() //dress
        cy.get('.title').should('be.visible') //women dress product
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click() //men category
        cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click() //men tshirt
    })
})
//19view &cart brand product
describe('view and cart brand product', () => {
    it('verify view and cart product', () =>{
        cy.visit('https://www.automationexercise.com/')
        cy.get('.brands_products > h2').should('be.visible') //brand
        cy.get('.brands-name > .nav > :nth-child(1) > a').click().should('be.visible')//polo
        cy.get('.brands-name > .nav > :nth-child(3) > a').click().should('be.visible') //madame
    })
})

//20search product and verify after login
describe('search product', () => {
    it('search product and after login', () =>{
        cy.visit('https://www.automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click() //product menu button
        cy.get('.title').should('be.visible') //all product page
        cy.get('#search_product').type('Fancy Green Top') //search input
        cy.get('#submit_search').click() //search button
        cy.get('.title').should('be.visible') //search product title
        cy.get('.productinfo > .btn').click() //add to cart product
        cy.get('u').click()//view cart
        cy.get('#product-8').should('be.visible') //product visible
        cy.get(':nth-child(4) > a').click() //signup/login button
        cy.get('[data-qa="login-email"]').type('ramzan.ahmad@invozone.com')//login email
        cy.get('[data-qa="login-password"]').type(123456) //login password
        cy.get('[data-qa="login-button"]').click() //login button
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click() //cart page
        cy.get('#product-8').should('be.visible')


    })})



//21Add Review on Product
describe('Add Review on Product', ()=> {
    it('Add Review on Product',()=> {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()  // click on product
    cy.get('.title').should('be.visible') //Verify user is navigated to ALL PRODUCTS page successfully
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click() //click on view product button
    cy.get('.active > a').should('be.visible') //Verify 'Write Your Review' is visible
    cy.get('#name').type('Ramzan')  //enter name
    cy.get('#email').type('ramzan.ahmad@invozone.com')
    cy.get('#review').type('mazy kii product ha')
    cy.get('#button-review').click() //click submit button
    cy.get('.alert-success > span').should('be.visible') //Verify success message 'Thank you for your review.'

    })
//22Add to cart from Recommended items
it('Add to cart from Recommended items',()=> {
    cy.visit('https://automationexercise.com/')
    cy.scrollTo('bottom',{ duration: 2000 })  //Scroll to bottom of page
    cy.get('.recommended_items > .title').should('be.visible')  //Verify 'RECOMMENDED ITEMS' are visible
    cy.get('.active > :nth-child(2) > .product-image-wrapper > .single-products > .productinfo > .btn').click() //Click on 'Add To Cart' on Recommended product
    cy.get('u').click()  //Click on 'View Cart' button
    cy.get('#product-5').should('be.visible')  //Verify that product is displayed in cart page
})
})

//Test Case 24: Download Invoice after purchase order
it.only('Download Invoice after purchase order',()=> {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible')
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click() //add product to cart
    cy.get('u').click()
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click() //Click 'Cart' button
    cy.get('#cart_info').should('be.visible')  //Verify that cart page is displayed
    cy.get('.col-sm-6 > .btn').click() //Click Proceed To Checkout
    cy.get('.modal-body > :nth-child(2) > a > u').click() //Click 'Register / Login' button
    cy.get('[data-qa="signup-name"]').type('Ahmad') //sigunup name
    cy.get('[data-qa="signup-email"]').type('ramzanahmad931+777@gmail.com') //Fill all details in Signup and create account
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

    cy.get('.col-sm-9 > .btn-default').click() //Click 'Download Invoice' button
    cy.get('[data-qa="continue-button"]').click() //click continue button
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click() //click delete account buuton
    cy.get('b').should('be.visible') //verify account deleted
    cy.get('[data-qa="continue-button"]').click() //click continue button

})

//25 verify using scroll up arrow buttton and scroll down
    it('verify scroll up arrow button and scroll down functionality',()=> {
    cy.visit('https://automationexercise.com/')
    cy.scrollTo('bottom',{ duration: 2000 })  //Scroll to bottom of page
    cy.get('.single-widget > h2').should('be.visible') //subscription text
    cy.get('#scrollUp > .fa').click() //arrow button right side
    cy.get('.active > :nth-child(1) > h2').should('be.visible')
    })

//26 verify scroll up without arrow button and scroll down functionality
    it('verify scroll up without arrow button and scroll down functionality',()=> {
    cy.visit('https://automationexercise.com/')
    cy.scrollTo('bottom',{ duration: 2000 })  //Scroll to bottom of page
    cy.get('.single-widget > h2').should('be.visible') //subscription text
    cy.scrollTo('top')
    cy.get('.active > :nth-child(1) > h2').should('be.visible') // full fledged
})

