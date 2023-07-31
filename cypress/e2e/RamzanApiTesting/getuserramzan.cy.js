/// <reference types="cypress" />
import { Users } from "../PagesRamzan/usersapi";
import { Posts } from "../PagesRamzan/postsapi";
import {Comments} from "../PagesRamzan/commenting";
import { Todos } from "../PagesRamzan/todooo";

const users = new Users();
const postObj = new Posts();
const commentObj = new Comments();
const todosObj = new Todos();

describe("HTTP Requests", () => {
  it("GET Call for all Users", async () => {
    const response = await users.GETAllUsers();
    expect(response.status).to.eq(200);
  });
  it("Create a new User and verify code", async () => {
    let userName = users.randomName();
    let userEmail = userName + '@gmail.com';

    let body = {
      name: userName,
      email: userEmail,
      gender: 'female',
      status: 'inactive',
    };

    const newUser = await users.createNewUser(body);
    cy.log(newUser.status);
    expect(newUser.status).to.eq(201);
    expect(newUser.body.name).to.eq(userName);
    expect(newUser.body.email).to.eq(userEmail);
  });
  it("Create a new User and verify code", async () => {
    let userName = users.randomName()
    let userEmail = userName + '@gmail.com'
    let newCreatedUserId = ''
    let body = {
      name: userName,
      email: userEmail,
      gender: 'male',
      status: 'active'
    }
    const createUser = await users.createNewUser(body)
    expect(createUser.status).eq(201)
    expect(createUser.body.name).eq(userName)    
    cy.log(createUser.body.id)
    newCreatedUserId = createUser.body.id
    body = {
      name: 'updatedName',
      email: userEmail,
      gender: 'male',
      status: 'active'
    }
    const updatedUser = await users.updateUser(newCreatedUserId, body)
    expect(updatedUser.status).eq(200)
    expect(updatedUser.body.name).eq('updatedName')
  })
  //delete user
  it('delete user', async () => {
    let userName = users.randomName()
    let userEmail = userName + '@gmail.com'
    let newCreatedUserId = ''
        let body = {
            name: userName,
            email: userEmail,
            gender: 'male',
            status: 'active'
        }
        const createUser = await users.createNewUser(body)
        expect(createUser.status).eq(201)
        expect(createUser.body.name).eq(userName)    
        cy.log(createUser.body.id)
        newCreatedUserId = createUser.body.id
        body = {
            name: 'updatedName',
            email: userEmail,
            gender: 'male',
            status: 'active'
        }
    const delUser = await users.deleteUser(newCreatedUserId)
      expect(delUser.status).eq(204)
  })
})
//Post request started from here
let postId = ''
let postUserId = ''
describe('posts get requests', () => {
    it('get all posts', async () => {
        const allPosts = await postObj.getAllPosts()
        expect(allPosts.status).eq(200)
        cy.log(allPosts.body)
    })
    it('get one post', async() => {
        const allPosts = await postObj.getAllPosts()
        postId = allPosts.body[0].id
        const res = await postObj.getOnePost(postId)
        expect(res.status).eq(200)
        expect(res.body.id).eq(postId)
    })
})
describe('posts post request', () => {
    it('create new post', async () => {
        const allPosts = await postObj.getAllPosts()
        postUserId = allPosts.body[1].user_id
        let body = {
            user_id: postUserId,
            title: 'Ramzan',
            body: 'hello ramzan how are you'
        }
        const res = await postObj.createPost(body)
        expect(res.status).eq(201)
    })
  })
  describe('posts put & delete requests', () => {
    it('update a post', async () => {
        const allPosts = await postObj.getAllPosts()
        postId = allPosts.body[1].id
        postUserId = allPosts.body[1].user_id
        let body = {
            user_id: postUserId,
            title: 'updated title',
            body: 'updated body',
            id: postId
        }
        const updatedPost = await postObj.updatePost(postId, body)
        expect(updatedPost.status).to.eq(200)
        expect(updatedPost.body.body).eq('updated body')
    })
    it('delete post', async() => {
        const allPosts = await postObj.getAllPosts()
        postId = allPosts.body[1].id
        const res = await postObj.deletePost(postId)
        expect(res.status).to.eq(204)
    })
})
//comment request started from here
let commentId = ''
describe ('comments get request',()=>{
  it('get all comments', async()=>{
    const res = await commentObj.getAllComments()
    expect(res.status).to.eq(200)

  })
  it('get one comment', async() => {
    const allComments = await commentObj.getAllComments()
    commentId = allComments.body[0].id
    const res = await commentObj.getOneComment(commentId)
    expect(res.status).to.eq(200)
})
describe('comments post request', () => {
  it('create new comment', async () => {
      const allComments = await commentObj.getAllComments()
      postId = allComments.body[1].post_id
      let body = {
          post_id: postId,
          name: 'Hello',
          email: 'email@gmail.com',
          body: 'this is some comment on a post'
      }
      const res = await commentObj.createComment(body)
      expect(res.status).to.eq(201)
      expect(res.body.name).eq('Hello')
  })
})
describe('comments put & delete requests', () => {
  it('update a comment', async () => {
      const allComments = await commentObj.getAllComments()
      commentId = allComments.body[0].id
      postId = allComments.body[0].post_id
      let body = {
          post_id: postId,
          name: 'updated name',
          email: 'updated@email.com',
          body: 'udpated body',
      }
      const res = await commentObj.updateComment(commentId, body)
      expect(res.status).to.eq(200)
  })
  it('delete a commnet', async () => {
      const allComments = await commentObj.getAllComments()
      commentId = allComments.body[0].id
      const res = await commentObj.deleteComment(commentId)
      expect(res.status).to.eq(204)
  })
})
// Todos test requests start from here
let todosId = '';

describe('todos get request', () => {
  it('get all todos', async () => {
    const res = await todosObj.getAllTodos();
    expect(res.status).to.eq(200);
  });

  it('get one todo', async () => {
    // Assuming 'allTodos' is a valid response object received from the API
    todosId = allTodos.body[0].id;
    const res = await todosObj.getOneTodos(todosId);
    expect(res.status).to.eq(200);
  });
})
})
