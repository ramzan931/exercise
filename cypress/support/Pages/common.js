export class Common{
    homeSelector = '.nav > :nth-child(1) > a'
    contactUsPage = '.shop-menu > .nav > :nth-child(8) > a'
    contactUsName = '[data-qa="name"]'
    contactUsEmail = '[data-qa="email"]'
    contactUsSubject =  '[data-qa="subject"]'
    contactUsMessage =  '[data-qa="message"]'
    contactUsChooseFile = ':nth-child(6) > .form-control'
    contactUsSubmitButton = '[data-qa="submit-button"]'
    yourDetailsHaveBeenSubmittedSuccessfullySelector = '.status'
    contactUsHomeButton = '#form-section > .btn'
    apiTestingPage = '.shop-menu > .nav > :nth-child(6) > a'
    stepVerifyLoginValid =  ':nth-child(8) > .panel > .panel-heading > .panel-title > a > u'
    continueButton = '[data-qa="continue-button"]'
    PayBtn = '[data-qa="pay-button"]'
    DeleteAccountBtn = ':nth-child(5) > a'




    checkHomeVisibility (){
        cy.get(this.homeSelector).should('be.visible');

    }
    clickcontactUsPage (){
        cy.get(this.contactUsPage).click();
    }
    entercontactUsName(){
        cy.get(this.contactUsName).type('Ali');
    }

    entercontactUsEmail(){
        cy.get(this.contactUsEmail).type('ramzan.ahmad@invozone.com');
    }
    entercontactUsSubject(){
        cy.get(this.contactUsSubject).type('Hello i am facing an issue');
    }
    entercontactUsMessage(){
        cy.get(this.contactUsMessage).type('hello hello kese ho');
    }
    attachcontactUsFile(){
        cy.get(this.contactUsChooseFile).attachFile('2023-06-23_23-25.png');
    }
    hitContactUsSubmitButton(){
        cy.get(this.contactUsSubmitButton).click();
    }
    detailSubmittedVisibility(){
        cy.get(this.yourDetailsHaveBeenSubmittedSuccessfullySelector).should('be.visible');
  
      }
      hitcontactUsHomeButton(){
        cy.get(this. contactUsHomeButton).click();
      }
      clickApiTestingPage(){
        cy.get(this.apiTestingPage).click();
      }
      clickStepVerifyLoginValidData(){
        cy.get(this.stepVerifyLoginValid).click();
      }
      clickcontinueButton(){
        cy.get(this.continueButton).click()
      }
      clickPayButton(){
        cy.get(this.PayBtn).click() 
      }
      clickDeleteAccountBtn(){
        cy.get(this.DeleteAccountBtn).click()
      }
}
