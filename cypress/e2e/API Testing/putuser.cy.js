/// <reference types="cypress" />

const dataJson = require('../../fixtures/createuser.json');

describe('post user request', () => {
let accessToken = '4cef239b61082cbbeaa3def254ef32cb975b3985dd0841e9d3ffda4128d5f003';
let randomText = "";
let testEmail = "";

it('create user test', () => {
var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var i = 0; i < 10; i++) {
randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
}
testEmail = randomText + '@gmail.com';
cy.request({
    method: 'POST',
    url: 'https://gorest.co.in/public/v1/users',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    },
    body: {
      "name": "Ramzan Ahmad1 cypress",
      "gender": "male",
      "email": testEmail,
      "status": "active"
    }
  }).then((res) => {
    cy.log(JSON.stringify(res));
    expect(res.status).to.eq(201);
    expect(res.body.data).to.have.property('email', testEmail);
    expect(res.body.data).to.have.property('name', 'Ramzan Ahmad1 cypress');
    expect(res.body.data).to.have.property('status', 'active');
    expect(res.body.data).to.have.property('gender', 'male');
  
    const userId = res.body.data.id;
    cy.log("user id is: " + userId);
    //update user (PUT)
    cy.request({
      method: 'PUT',
      url: 'https://gorest.co.in/public/v1/users/' + userId,
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
      body: {
        "name": "Ramzan Ahmad Automation cypress Updated",
        "gender": "male",
        "email": testEmail,
        "status": "inactive"
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data).to.have.property('email', testEmail);
      expect(res.body.data).to.have.property('name', 'Ramzan Ahmad Automation cypress Updated');
      expect(res.body.data).to.have.property('status', 'inactive');
      expect(res.body.data).to.have.property('gender', 'male');
    });
  });
});
})