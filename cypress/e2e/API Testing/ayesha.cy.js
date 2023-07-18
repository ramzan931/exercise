//import { api } from "./api"

//let user =new api()

//Get Method

describe('get method', () => {

it('get user',async () =>{

const res = await user.getuser()

expect(res.status).equal(200)

  

// cy.request({

// method: 'get',

// url: 'https://gorest.co.in/public/v2/users',

  

// }).then((response) => {

// expect(response.status).equal(200)

// })

  
  

})

})

//Post method

describe('post method', () => {

let token = '0334f2d7f189ea96488653ebe14a3d33216958c0fc882b43c3bb42098e01ab57'

it.only('create user',() => {

cy.request({

method: 'POST',

url:'https://gorest.co.in/public/v2/users ',

failOnStatusCode: false,

header:{

Authorization: 'Bearer ' + token,

},

body:{

"name":"ayesha",

"email":"ayesha32@gmail.com",

"designation":"sqa"

}

}).then((res)=>{

expect(res.status).to.eq(201);

  
  

// expect(res.status).to.eq(201)

// expect(res.body).has.property('name','ayesha')

  

})

  
  
  

})

  
  
  
  

})