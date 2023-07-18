// signup.cy.js
import { faker } from '@faker-js/faker';
import {Login} from "../../support/Pages/login";
import {Signup} from "../../support/Pages/signup";
import {Product} from "../../support/Pages/product";
import {Common} from "../../support/Pages/common";
import {Cart} from "/Users/muhammadramzan/Documents/ramzan automation/exercise/cypress/support/Pages/cart";
import {Order} from "/Users/muhammadramzan/Documents/ramzan automation/exercise/cypress/support/Pages/order";
const login = new Login();
const signup = new Signup();
const product = new Product();
const common = new Common();
const cart = new Cart();
const order = new Order();
describe('Signup', () => {
  let loginEmail = 'ramzan.ahmad@invozone.com';
  let loginValidPass = '123456';
  let loginInvalidPass = 'loginInvalidPass';
  let firstname = faker.person.firstName();
  let lastname = faker.person.lastName();
  let fullname = faker.person.fullName();
  let exampleEmail = faker.internet.exampleEmail();
  let pass = faker.internet.password({length: 9});
  let exampleCompany = faker.company.buzzNoun();
  beforeEach(() => {
    cy.visit("https://www.automationexercise.com/");
  })
  it('Visits the website', () => {
    //signup.visitWebsite();
    signup.createaccount();
    signup.entersignupname(fullname);
    signup.entersignupemail(exampleEmail);
    signup.clicksignupbutton();
    signup.selectgender();
    signup.enterpassword(pass);
    signup.selectday().select('5');
    signup.selectmonth().select('February');
    signup.selectyear().select('1996');
    signup.enterFirstName(firstname);
    signup.enterLastName(lastname);
    signup.enterCompanyname(exampleCompany);
    signup.enteraddress('johar town lahore');
    signup.enteraddressline2('lahore');
    signup.selectcountry().select('United States');
    signup.enterStateName('California');
    signup.enterCityName('long beach');
    signup.enterZipCode('124');
    signup.enterMobileNumber('1-212-456-7890');
    signup.hitCreateAccountButton();
  });
   
  it('should display an error message for invalid login credentials', () => {
    signup.createaccount();
    login.enterloginemail(exampleEmail);
    login.enterloginpassword(pass)
    login.clickloginbutton() 
  });

  it('should successfully log in with valid credentials', () => {
    signup.createaccount();
    login.enterloginemail(loginEmail);
    login.enterloginpassword(loginValidPass)
    login.clickloginbutton() 
  });

  it('should log out from the session', () => {
    signup.createaccount();
    login.enterloginemail(loginEmail);
    login.enterloginpassword(loginValidPass)
    login.clickloginbutton() 
    login.clicklogoutbutton() 
  });

  it('should display an error message for registering with an existing email', () => {
    signup.createaccount();
    common.checkHomeVisibility ()
    signup. checksignupVisibility ()
    signup.entersignupname(fullname);
    signup.entersignupemail(loginEmail)
    signup.clicksignupbutton();
    signup.checkemailalreadyexistVisibility()
  });

  it('should successfully log in with valid credentials', () => {
    signup.createaccount();
    login.enterloginemail(loginEmail);
    login.enterloginpassword(loginValidPass)
    login.clickloginbutton() 
    common. clickcontactUsPage() // test case:6 contact us form
    common.entercontactUsName()  
    common.entercontactUsEmail()
    common.entercontactUsSubject()
    common.entercontactUsMessage()
    common.attachcontactUsFile()
    common.hitContactUsSubmitButton()
    common.detailSubmittedVisibility()
    common.hitcontactUsHomeButton()
  });

  it('search product and after login', () => {
    common.checkHomeVisibility () // home page should be visible
    common.clickApiTestingPage()
    common.clickStepVerifyLoginValidData()
    });

  it('all product and product detail page', () => {
    common.checkHomeVisibility ()
    product.clickProductPage ()
    product.checkAllProductVisibility()
    product.checkProductPanelVisibilitySelector()
    product.clickProductimage()
    product.productInformationVisibility()
  });

  it('Search product', () => {
    common.checkHomeVisibility ()
    product.clickProductPage ()
    product.checkAllProductVisibility()
    product.searchProducttype()
    product.enterSubmitSearch()
    product.checkAllProductVisibility ()
  });

  it('Subscription for home page', () => {
    product.scrollToBottom()
    product.subscriptionHeadingVisibility()
    product.enterSubscribeEmail()
    product.hitSubscribeButton()
  });

  it('Verify Subscription in Cart page', () => {
    common.checkHomeVisibility ()
    cart.clickCartPage()
    cart.subscriptionHeadingVisibility()
    product.enterSubscribeEmail()
    product.hitSubscribeButton()
  });

  it('Add Product in cart', () => {
    common.checkHomeVisibility ()
    product.clickProductPage ()
    product.clickProductimage1()
    cart.ContinueShoppingsclick()
    product.clickProductimage2()
    cart.clickViewCart()
    cart.CartinfoVisibility()
    cart.cartItemSelectorVisibility()
  });

  it('product quantity page', () => {
   product.clickProductimage4()
   product.selectProductQuantity()
    cart.clickAddToCartButton()
    cart.clickViewCart()
})

it('Place Order: Register while Checkout',()=> {
   common.checkHomeVisibility ()
   product.clickProductPage ()
   product.clickProductimage7()   //add product to cart
   cart.ContinueShoppingsclick()
   cart.clickCartPage() //click cart button
   cart.cartItemSelectorVisibility()
   order.clickProceedTOCheckout()    //Click Proceed To Checkout
   order.clicksignupLoginbutton()  //cy.get('.modal-body > :nth-child(2)').click()
   signup.entersignupname(fullname);
   signup.entersignupemail(exampleEmail);
   signup.clicksignupbutton();
   signup.selectgender();
   signup.enterpassword(pass);
   signup.selectday().select('5');
   signup.selectmonth().select('February');
   signup.selectyear().select('1996');
   signup.enterFirstName(firstname);
   signup.enterLastName(lastname);
   signup.enterCompanyname(exampleCompany);
   signup.enteraddress('johar town lahore');
   signup.enteraddressline2('lahore');
   signup.selectcountry().select('United States');
   signup.enterStateName('California');
   signup.enterCityName('long beach');
   signup.enterZipCode('124');
   signup.enterMobileNumber('1-212-456-7890');
   signup.hitCreateAccountButton();
   signup.VisibilityaccountcreatedSelector()// Verify 'ACCOUNT CREATED!' and click 'Continue' button
   common.clickcontinueButton()
   login.VisibilityloginWithNameSelector() //Verify ' Logged in as username' at top
   cart.clickCartPage() //click cart button
   order.clickProceedTOCheckout() //Click 'Proceed To Checkout' button
   order.VisibilityAddressDetailSelector() //verify address detail
   order.VisibilityReviewYourOrderSelector() //review your order
   order.inputReviewForm()// Enter description in comment text area
   order.hitPlaceOrder() //click 'Place Order'
   order.enterCardName() //Enter payment details: Name on Card, Card Number, CVC, Expiration date
   order.enterCardNumber()
   order.enterCVC()
   order.enterCardMonth()
   order.enterCardYear()
   common.clickPayButton()//Click 'Pay and Confirm Order' button
   order.VisibilityOrderPlacedConfirmedSelector()
   common.clickDeleteAccountBtn()
   signup.VisibilityaccountcreatedSelector()
   common.clickcontinueButton()
})
it('Place Order: Register before Checkout',()=> {
  common.checkHomeVisibility ()
  signup.createaccount()
  signup.entersignupname(fullname);
   signup.entersignupemail(exampleEmail);
   signup.clicksignupbutton();
   signup.selectgender();
   signup.enterpassword(pass);
   signup.selectday().select('5');
   signup.selectmonth().select('February');
   signup.selectyear().select('1996');
   signup.enterFirstName(firstname);
   signup.enterLastName(lastname);
   signup.enterCompanyname(exampleCompany);
   signup.enteraddress('johar town lahore');
   signup.enteraddressline2('lahore');
   signup.selectcountry().select('United States');
   signup.enterStateName('California');
   signup.enterCityName('long beach');
   signup.enterZipCode('124');
   signup.enterMobileNumber('1-212-456-7890');
   signup.hitCreateAccountButton();
   signup.visibilityAccountDeletedSelector()// Verify 'ACCOUNT CREATED!' and click 'Continue' button
   common.clickcontinueButton()
   login.VisibilityloginWithNameSelector() //Verify ' Logged in as username' at top
   product.clickProductPage() //click on product
   product.clickProductimage7() //add product to cart
   cart.ContinueShoppingsclick()
   cart.clickCartPage() //click cart button
   cart.cartItemSelectorVisibility()//Verify that cart page is displayed
   cart.ContinueShoppingsclick()//continue on cart
   order.clickProceedTOCheckout() //proceed to checkout
   cart.CartItemContainerSelectorVisibility()//Verify Address Details and Review Your Order
   order.inputReviewForm() // Enter description in comment text area
   order.hitPlaceOrder() //click 'Place Order'
   order.enterCardName() //Enter payment details: Name on Card, Card Number, CVC, Expiration date
   order.enterCardNumber()
   order.enterCVC()
   order.enterCardMonth()
   order.enterCardYear()
   common.clickPayButton() //Click 'Pay and Confirm Order' button
   order.VisibilityOrderPlacedConfirmedSelector() //your order has been placed successfully
   common.clickDeleteAccountBtn()
   signup.visibilityAccountDeletedSelector()
   common.clickcontinueButton()
  })
  it('Place Order: Login before Checkout',()=> {
    common.checkHomeVisibility ()
    signup.createaccount()
    login.enterloginemail(loginEmail)
    login.enterloginpassword(loginValidPass)
    login.clickloginbutton()
    login.VisibilityloginWithNameSelector()
    product.clickProductPage() //click on product
   product.clickProductimage7() //add product to cart
   cart.ContinueShoppingsclick()
   cart.clickCartPage() //click cart button
   cart.cartItemSelectorVisibility()//Verify that cart page is displayed
   cart.ContinueShoppingsclick()//continue on cart
   order.clickProceedTOCheckout() //proceed to checkout
   cart.CartItemContainerSelectorVisibility()//Verify Address Details and Review Your Order
   order.inputReviewForm() // Enter description in comment text area
   order.hitPlaceOrder() //click 'Place Order'
   order.enterCardName() //Enter payment details: Name on Card, Card Number, CVC, Expiration date
   order.enterCardNumber()
   order.enterCVC()
   order.enterCardMonth()
   order.enterCardYear()
   common.clickPayButton() //Click 'Pay and Confirm Order' button
   order.VisibilityOrderPlacedConfirmedSelector() //your order has been placed successfully
   common.clickDeleteAccountBtn()
   signup.visibilityAccountDeletedSelector()
   common.clickcontinueButton()
    })
    it('remove product from cart', () =>{
    product.clickProductimage() //pr.add to cart
    cart.clickAddToCartButton()
    cart.hitviewcartProduct()
    cart.clickCartQuantityDelete()
  })
  it('remove product from cart', () =>{
    cy.get('.left-sidebar > :nth-child(1)').should('be.visible') //category
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click() //women
    cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click() //dress
    cy.get('.title').should('be.visible') //women dress product
    cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click() //men category
    cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click() //men tshirt
})
it('verify view and cart product', () =>{
  product.brandHeadingSelectorVisibility() //brand
  product.clickBrandNamePolo()//polo
  product.clickBrandNameMadame()
})
it('search product and after login', () =>{
  product.clickProductPage() //product menu button
  product.checkAllProductVisibility () //all product page
  product.searchProducttype() //search input
  product.enterSubmitSearch() //search button
  product.checkAllProductVisibility () //search product title
  cart.ClickAddtoCart() //add to cart product
  cart.clickViewCart()//view cart
  signup.createaccount() //signup/login button
  login.enterloginemail()//login email
  login.enterloginpassword() //login password
  login.clicklogoutbutton() //login button
  cart.clickCartPage() //cart page
})
it('Add Review on Product',()=> {
  product.clickProductPage () // click on product
  product.checkAllProductVisibility () //Verify user is navigated to ALL PRODUCTS page successfully
  product.clickViewProduct3() //click on view product button
  order.ReviewSelectorVisibility() //Verify 'Write Your Review' is visible
  order.enterReviewName()  //enter name
  order.enterReviewEmail()
  order.EnterProductReview()
  order.HitReviewButton() //click submit button
  order.VisibilityReviewMessageSelector() //Verify success message 'Thank you for your review.'
})
  it('Add to cart from Recommended items',()=> {
    cy.scrollTo('bottom',{ duration: 2000 })  //Scroll to bottom of page
    cy.get('.recommended_items > .title').should('be.visible')  //Verify 'RECOMMENDED ITEMS' are visible
    cy.get('.active > :nth-child(2) > .product-image-wrapper > .single-products > .productinfo > .btn').click() //Click on 'Add To Cart' on Recommended product
    cy.get('u').click()  //Click on 'View Cart' button
    cy.get('#product-5').should('be.visible')  //Verify that product is displayed in cart page
})
it('Download Invoice after purchase order',()=> {
   common.checkHomeVisibility()  
   product.clickProductimage2()     //add product to cart
   cart.clickViewCart()   
   //cy.get('u').click()
  cart.clickCartPage()
  cart.CartinfoVisibility()    //Verify that cart page is displayed
  order.clickProceedTOCheckout()
  order.clicksignupLoginbutton() 
  signup.entersignupname()  
    signup.entersignupemail(exampleEmail);
    signup.clicksignupbutton();
    signup.selectgender();
    signup.enterpassword(pass);
    signup.selectday().select('5');
    signup.selectmonth().select('February');
    signup.selectyear().select('1996');
    signup.enterFirstName(firstname);
    signup.enterLastName(lastname);
    signup.enterCompanyname(exampleCompany);
    signup.enteraddress('johar town lahore');
    signup.enteraddressline2('lahore');
    signup.selectcountry().select('United States');
    signup.enterStateName('California');
    signup.enterCityName('long beach');
    signup.enterZipCode('124');
    signup.enterMobileNumber('1-212-456-7890');
    signup.hitCreateAccountButton();
    signup.VisibilityaccountcreatedSelector()
  //cy.get('b').should('be.visible')// Verify 'ACCOUNT CREATED!' and click 'Continue' button
  common.clickcontinueButton()
  login.VisibilityloginWithNameSelector()
  cart.clickCartPage() 
  order.clickProceedTOCheckout() //Click 'Proceed To Checkout' button
  //cy.get(':nth-child(2) > .heading').should('be.visible') //verify address detail
  order.VisibilityReviewYourOrderSelector() //review your order
  order.inputReviewForm()   // Enter description in comment text area
  order.hitPlaceOrder()     //click 'Place Order'
  order.enterCardName() //Enter payment details: Name on Card, Card Number, CVC, Expiration date
   order.enterCardNumber()
   order.enterCVC()
   order.enterCardMonth()
   order.enterCardYear()
   common.clickPayButton() 
   cy.window().document().then(function (doc) {      doc.addEventListener('click', () => {        setTimeout(function () { doc.location.reload() }, 5000)      })
   cy.get('.col-sm-9 > .btn-default').should('contain', 'Download Invoice').click() })
   common.clickcontinueButton() //cy.get('[data-qa="continue-button"]').click() //click continue button
   //common.clickDeleteAccountBtn()  
   cy.get('.shop-menu > .nav > :nth-child(5) > a').click() //click delete account buuton
  signup. visibilityAccountDeletedSelector()    //cy.get('b').should('be.visible') //verify account deleted
  common.clickcontinueButton()
})
//25 verify using scroll up arrow buttton and scroll down
it('verify scroll up arrow button and scroll down functionality',()=> {
  cy.scrollTo('bottom',{ duration: 2000 })  //Scroll to bottom of page
  cy.get('.single-widget > h2').should('be.visible') //subscription text
  cy.get('#scrollUp > .fa').click() //arrow button right side
  cy.get('.active > :nth-child(1) > h2').should('be.visible')
  })
  //26 verify scroll up without arrow button and scroll down functionality
  it('verify scroll up without arrow button and scroll down functionality',()=> {
    cy.scrollTo('bottom',{ duration: 2000 })  //Scroll to bottom of page
    cy.get('.single-widget > h2').should('be.visible') //subscription text
    cy.scrollTo('top')
    cy.get('.active > :nth-child(1) > h2').should('be.visible') // full fledged
})})
