// signup.cy.js
import Signup from "./signup";

describe('Signup', () => {
  const signup = new Signup();

  it('Visits the website', () => {
    signup.visitWebsite();

    signup.createaccount();

    signup.entersignupname('Ramzan');

    signup.entersignupemail('Ramzan.ahmad@invozone.com');

    signup.clicksignupbutton();

    signup.selectgender();

    signup.enterpassword('123456');

    signup.selectday().select('5');

    signup.selectmonth().select('February');

    signup.selectyear().select('1996');

    signup.enterFirstName('Ramzan');

    signup.enterLastName('Ahmad');

    signup.enterCompanyname('InvoZone');

    signup.enteraddress('johar town lahore');

    signup.enteraddressline2('lahore');

    signup.selectcountry().select('United States');

    signup.enterStateName('California');

    signup.enterCityName('long beach');

    signup.enterZipCode('124');

    signup.enterMobileNumber('1-212-456-7890');

    signup.hitCreateAccountButton();
  });
});
