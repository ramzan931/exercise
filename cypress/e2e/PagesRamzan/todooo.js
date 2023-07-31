const url = Cypress.env('baseUrl');
const token = Cypress.env('token');

export class Todos {
  getAllTodos() {
    return new Cypress.Promise((resolve, reject) => {
      cy.request({
        method: 'GET',
        url: url + 'todos',
        failOnStatusCode: false,
        headers: {
          'authorization': token
        }
      }).then((response) => {
        resolve(response);
      });
    });
  }

  getOneTodos(id) {
    return new Cypress.Promise((resolve, reject)=>{
        cy.request({
          method:'GET',
          url: url+'/todos/'+ id,
          failOnStatusCode: false,
          headers:{
            'authorization': token
          }
        }).then((response)=>{
          resolve(response)
        })
    })
  }
}
