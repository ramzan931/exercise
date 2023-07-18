export class Login{
    loginemail = '[data-qa="login-email"]';
    loginpassword = '[data-qa="login-password"]';
    loginbutton   =  '[data-qa="login-button"]';
    logoutbutton =   '.shop-menu > .nav > :nth-child(4) > a';
    loginWithNameSelector = ':nth-child(10) > a';
    
     enterloginemail(loginEmail){
        cy.get(this.loginemail).type(loginEmail);
    }
    enterloginpassword(loginValidPass){
        cy.get(this.loginpassword).type(loginValidPass);
    }

    clickloginbutton() {
        cy.get(this.loginbutton).click();
    }
    clicklogoutbutton(){
        cy.get(this.logoutbutton).click();
    }
    VisibilityloginWithNameSelector(){
        cy.get(this.loginWithNameSelector).should('be.visible')
    }
    
}




