describe('login', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/login')
        cy.get('.nav > :nth-child(1) > a').should('be.visible')

    });
    // test case 2 : invalid password
    it('should display an error message for invalid login credentials', () => {
        cy.get('[data-qa="login-email"]').type('Ramzan.ahmad@invozone.com');
        cy.get('[data-qa="login-password"]').type('invalidPassword');
        cy.get('[data-qa="login-button"]').click();
    });
//test case 3: valid password
    it('should successfully log in with valid credentials', () => {
        cy.get('[data-qa="login-email"]').type('Ramzan.ahmad@invozone.com');
        cy.get('[data-qa="login-password"]').type('123456');
        cy.get('[data-qa="login-button"]').click();
    });
// test case :4 Logout user
    it('should log out from the session', () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    });


})
