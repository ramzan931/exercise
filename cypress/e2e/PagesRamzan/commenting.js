const url = Cypress.env('baseUrl');
const token = Cypress.env('token');

export class Comments {
  getAllComments() {
    return new Cypress.Promise((resolve, reject) => {
      cy.request({
        method: 'GET',
        url: url + '/comments',
        failOnStatusCode: false,
        headers: {
          'authorization': token
        }
      }).then((response) => {
        resolve(response);
      });
    });
  }

  getOneComment(Comments) {
    return new Cypress.Promise((resolve, reject) => {
      cy.request({
        method: 'GET',
        url: url + '/comments/' + Comments,
        failOnStatusCode: false,
        headers: {
          'authorization': token
        }
      }).then((response) => {
        resolve(response);
      });
    });
  }
  createComment(body){
    return new Cypress.Promise((resolve, reject) => {
        cy.request({
            method: 'POST',
            url: url + '/comments',
            failOnStatusCode: false,
            headers: {
                'authorization': token
            },
            body: body
        }).then((response) => {
            resolve(response)
        })
    })
}
  updateComment(id, body){
    return new Cypress.Promise((resolve, reject) => {
        cy.request({
            method: 'PUT',
            url: url + '/comments/' + id,
            failOnStatusCode: false,
            headers: {
                'authorization': token
            },
            body: body
        }).then((response) => {
            resolve(response)
        })
    })
}
deleteComment(id){
    return new Cypress.Promise((resolve, reject) => {
        cy.request({
            method: 'DELETE',
            url: url + '/comments/' + id,
            failOnStatusCode: false,
            headers: {
                'authorization': token
            }
        }).then((response) => {
            resolve(response)
        })
    })
}
}


