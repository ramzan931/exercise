//verify subscription for home page
describe('Subscription page', ()=> {
it('Subscription for home page',()=> {
cy.visit('https://automationexercise.com/')
cy.scrollTo('bottom',{ duration: 2000 })
cy.get('.single-widget > h2').should ('be.visible')
cy.get('#susbscribe_email').type('ramzan.ahmad@invozone.com')
cy.get('#subscribe').click()

})
})
//verify subscription in cart page
it('Verify Subscription in Cart page',() => {
    cy.visit('https://automationexercise.com/') 
    cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click() 
    cy.get('h2').should('be.visible')
    cy.get('#susbscribe_email').type('ramzan.ahmad@invozone.com')
    cy.get('#subscribe').click()
})

