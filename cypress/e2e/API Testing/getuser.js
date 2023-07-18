export class api{

    getuser(){
    
    return new Cypress.Promise((resolve,reject)=>{
    
    cy.request({
    
    method: 'get',
    
    url: 'https://gorest.co.in/public/v2/users',
    
    }).then((res) => {
    
    resolve(res)
    
    })
    
      
    
    })
    
    }}