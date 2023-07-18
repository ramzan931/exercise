
export class Signup {
    clickForRegister = '.shop-menu > .nav > :nth-child(4) > a';
    signupName = '[data-qa="signup-name"]';
    signupEmail = '[data-qa="signup-email"]';
    signupButtonClick = '[data-qa="signup-button"]';
    selectGender = '#id_gender1';
    passwordInput = '[data-qa="password"]';
    selectDay = '[data-qa="days"]';
    selectMonth = '[data-qa="months"]';
    selectYear = '[data-qa="years"]';
    firstNameInput = '[data-qa="first_name"]';
    lastNameInput = '[data-qa="last_name"]';
    companyInput = '[data-qa="company"]';
    addressInput = '[data-qa="address"]';
    address2Input = '[data-qa="address2"]';
    selectCountry = '[data-qa="country"]';
    stateInput = '[data-qa="state"]';
    cityInput = '[data-qa="city"]';
    zipcodeInput = '[data-qa="zipcode"]';
    mobileNumberInput = '[data-qa="mobile_number"]';
    createAccountButton = '[data-qa="create-account"]';
    signupSelector = '.nav > :nth-child(1) > a'
    emailalreadyexistSelector = '.signup-form > form > p'
    accountcreatedSelector = 'b'
    accountDeletedSelector = 'b'


    checkemailalreadyexistVisibility(){
      cy.get(this.emailalreadyexistSelector).should('be.visible');

    }

    checksignupVisibility (){
        cy.get(this.signupSelector).should('be.visible');

    }
  
    visitWebsite() {
      cy.visit("https://www.automationexercise.com/");
    }
  
    createaccount() {
      cy.get(this.clickForRegister).click();
    }
  
    entersignupname(fullname) {
      cy.get(this.signupName).type(fullname);
    }
  
    entersignupemail(exampleEmail) {
      cy.get(this.signupEmail).type(exampleEmail);
    }
  
    clicksignupbutton() {
      cy.get(this.signupButtonClick).click();
    }
  
    selectgender() {
      cy.get(this.selectGender).click();
    }
  
    enterpassword(pass) {
      cy.get(this.passwordInput).type(pass);
    }
  
    selectday() {
      return cy.get(this.selectDay);
    }
  
    selectmonth() {
      return cy.get(this.selectMonth);
    }
  
    selectyear() {
      return cy.get(this.selectYear);
    }
  
    enterFirstName(firstname) {
      cy.get(this.firstNameInput).type(firstname);
    }
  
    enterLastName(lastname) {
      cy.get(this.lastNameInput).type(lastname);
    }
  
    enterCompanyname(company) {
      cy.get(this.companyInput).type(company);
    }
  
    enteraddress(address) {
      cy.get(this.addressInput).type(address);
    }
  
    enteraddressline2(address2) {
      cy.get(this.address2Input).type(address2);
    }
  
    selectcountry() {
      return cy.get(this.selectCountry);
    }
  
    enterStateName(state) {
      cy.get(this.stateInput).type(state);
    }
  
    enterCityName(city) {
      cy.get(this.cityInput).type(city);
    }
  
    enterZipCode(zipcode) {
      cy.get(this.zipcodeInput).type(zipcode);
    }
  
    enterMobileNumber(phone) {
      cy.get(this.mobileNumberInput).type(phone);
    }
  
    hitCreateAccountButton() {
      cy.get(this.createAccountButton).click();
    }
    visibilityAccountDeletedSelector(){
      cy.get(this.accountDeletedSelector).should('be.visible')
    }
    VisibilityaccountcreatedSelector(){
      cy.get(this.accountcreatedSelector).should('be.visible')

    }
  }
  
 
  