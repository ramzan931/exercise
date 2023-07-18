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
        "name": dataJson.name,
        "gender": dataJson.gender,
        "email": testEmail,
        "status": dataJson.status
      }
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(201);
      expect(res.body.data).to.have.property('email', testEmail);
      expect(res.body.data).to.have.property('name', dataJson.name);
      expect(res.body.data).to.have.property('status', dataJson.status);
      expect(res.body.data).to.have.property('gender', dataJson.gender);

      const userId = res.body.data.id;
      cy.log("user id is: " + userId);

      cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v1/users/' + userId,
        headers: {
          'Authorization': 'Bearer ' + accessToken
        }
      }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.data).to.have.property('email', testEmail);
        expect(res.body.data).to.have.property('name', dataJson.name);
        expect(res.body.data).to.have.property('status', dataJson.status);
        expect(res.body.data).to.have.property('id', userId);
      });

      
    });
  });
});