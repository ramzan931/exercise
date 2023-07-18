/// <reference types="cypress" />

const dataJson = require('../../fixtures/createuser.json');

describe('Delete user request', () => {
let accessToken = '4cef239b61082cbbeaa3def254ef32cb975b3985dd0841e9d3ffda4128d5f003';
let randomText = "";
let testEmail = "";

it('create user test', () => {
    // create user POST
cy.request({
    method: 'POST',
    url: 'https://gorest.co.in/public/v1/users',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    },
    body: {
      "name": "Ramzan Automation user dd",
      "gender": "male",
      "email": "ramzanahmaduser119@gmail.com",
      "status": "active"
    }
  }).then((res) => {
    cy.log(JSON.stringify(res));
    expect(res.status).to.eq(201);
    expect(res.body.data).to.have.property('email', 'ramzanahmaduser119@gmail.com');
    expect(res.body.data).to.have.property('name', 'Ramzan Automation user dd');
  
    const userId = res.body.data.id;
    cy.log("user id is: " + userId);
    
    // delete user (DELETE)
    cy.request({
      method: 'DELETE',
      url: 'https://gorest.co.in/public/v1/users/' + userId,
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    }).then((res) => {
      expect(res.status).to.eq(204);
    });
  });
});
})
  