/// <reference types = "cypress" />

describe('get api user test',()=>{

let accessToken ='Bearer 4cef239b61082cbbeaa3def254ef32cb975b3985dd0841e9d3ffda4128d5f003'

it('get users test',()=>{

cy.request({

    method : 'GET',
    url    : 'https://gorest.co.in/public-api/users',
    headers : {
        'authorization'  : "Bearer" + accessToken
    }
}).then((res)=>{
    expect(res.status).to.eq(200)
    expect(res.body.meta.pagination.limit).to.eq(10)
})

})

it('get users by id test',()=>{

    cy.request({
    
        method : 'GET',
        url    : 'https://gorest.co.in/public-api/users/3455279',
        headers : {
            'authorization'  : "Bearer" + accessToken
                }
    }).then((res)=>{
        expect(res.status).to.eq(200)
        expect(res.body.data.name).to.eq('Dr. Bhupati Achari')
    })
    
    })

})
