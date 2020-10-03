import { User } from '../resources/users/user.model.js';
import request from 'supertest';
import pkg from 'chai';
import { app } from '../server.js';
const { expect } = pkg;

describe("User exists", () => {
    beforeEach(() => {
        User.deleteMany({});
    })
    it("User can be created", () => { 
        it("With a username", () =>{
            let newUser = new User({
                username: 'Name',
                password: 'password'
            });
            expect(newUser.username).to.equal("Name")
        })
        it("With a password", () => {
            let newUser = new User({
                username: 'Name',
                password: 'password'
            });
            expect(newUser.password).to.equal("password")
        })
    })
})

describe("User Crud", () => {
    describe("GET /users", () => {
        it("returns all users", () => {
            const users = [
                {username: 'name', password: 'pass'},
                {username: 'name2', password: 'passw'}
            ];
            User.insertMany(users);
            const res = request(app).get('/users').then(res => {
                let body = res.body
                expect(res.status).to.equal(200);
            }).catch(e => console.log(e.message))
        })
    })
    describe("GET /users/:id", () => {
        it("gets a single user", () => {
            const user = 
            {
                username: 'User1',
                password: 'pass'
            }
            User.create(user)
            const res = request(app).get('/users/5f7763767d48730f5194bb01').then(res => {
                expect(res.status).to.equal(200);
            }).catch(e => console.log(e.message))
        })
    })
})