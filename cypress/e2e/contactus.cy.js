describe('login', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/login');
    })
    it('should successfully log in with valid credentials', () => {
        cy.get('[data-qa="login-email"]').type('Ramzan.ahmad@invozone.com');
        cy.get('[data-qa="login-password"]').type('123456');
        cy.get('[data-qa="login-button"]').click();
        cy.get(':nth-child(9) > a').click()
        cy.get('[data-qa="name"]').type('Ramzan')
        cy.get('[data-qa="email"]').type('ramzan.ahmad@invozone.com')
        cy.get('[data-qa="subject"]').type('Hello i am facing an issue')
        cy.get('[data-qa="message"]').type('hello hello kese ho')
        cy.get(':nth-child(6) > .form-control').attachFile('2023-06-23_23-25.png')
        cy.get('[data-qa="submit-button"]').click()
        cy.get('#form-section > .btn').click()
//verify Test cases
       cy.get('.shop-menu > .nav > :nth-child(6) > a').click()
       cy.get(':nth-child(8) > .panel > .panel-heading > .panel-title > a > u').click()
   //Verify All Products and Product detail Page
   cy.get('.nav > :nth-child(2)').click()
   cy.get('#search_product').type('Men tshirt')
   cy.get('#submit_search').click()
   cy.get('.choose > .nav > li > a').click()
   cy.get(':nth-child(5) > .btn').click()
   cy.get('u').click()
   cy.get('.col-sm-6 > .btn').click()
   cy.get('.form-control').type('Thankssss')
   cy.get(':nth-child(7) > .btn').click()
   cy.get('[data-qa="name-on-card"]').type('Ramzan')
   cy.get('[data-qa="card-number"]').type('123987456')
   cy.get('[data-qa="cvc"]').type('31')
   cy.get('[data-qa="expiry-month"]').type('06')
   cy.get('[data-qa="expiry-year"]').type('2020')
   cy.get('[data-qa="pay-button"]').click()
   cy.get('.col-sm-9 > .btn-default').click()
   //cy.get('.nav > :nth-child(1) > a').click()

    })})