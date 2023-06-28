//register with existing email
describe('Signup', () => {
    it('should display an error message for registering with an existing email', () => {
        cy.visit('https://www.automationexercise.com/signup');
        cy.get('.nav > :nth-child(1) > a').should('be.visible')
        cy.get(':nth-child(4) > a').click()
        cy.get('.signup-form > h2').should('be.visible')
        cy.get('[data-qa="signup-name"]').type('Ramzan');
        cy.get('[data-qa="signup-email"]').type('Ramzan.ahmad@invozone.com');
        cy.get('[data-qa="signup-button"]').click();
        cy.get('.signup-form > form > p').should('be.visible')
    });
});

  
  