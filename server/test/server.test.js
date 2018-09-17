const expect = require('expect')
const request = require('supertest')
const {ObjectID} = require('mongodb')

const {app} = require('./../server')
const {Todo} = require('./../models/todo')

var testTodos = [{
    _id: new ObjectID(),
    text: "Dummy todo 1"
},{
    _id: new ObjectID(),
    text: "Dummy todo 2"
}]

beforeEach((done)=>{
    Todo.remove({}).then(()=>{
       return Todo.insertMany(testTodos)
        }).then(() => done())
})

describe('POST /todos',()=>{
    it('should create a new todo',(done)=>{
        var text = 'Test todo text'

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res)=>{
            expect(res.body.text).toBe(text)
        })
        .end((err,res)=>{
            if(err){
                return done(err)
            }
            Todo.find({text}).then((todos =>{
                expect(todos.length).toBe(1)
                expect(todos[0].text).toBe(text)
                done()
            })).catch((e)=> done(e))
        })
    })

    it('should not create todo with invalid body data',(done)=>{
        

        request(app)
        .post('/todos')
        .send()
        .expect(400)
        
        .end((err,res)=>{
            if(err){
                return done(err)
            }
            Todo.find().then((todos =>{
                expect(todos.length).toBe(2)
                
                done()
            })).catch((e)=> done(e))
        })
    })
    it('should return all the todos',(done)=>{
        request(app)
        .get("/todos")
        .send()
        .expect(200)
        .expect((res)=>{
            expect(res.body.todos.length).toBe(2)
        })
        .end(done)
    })
})

describe('GET /todos/:id', () =>{
    it('should return todo doc', (done)=>{
        request(app)
        .get(`/todos/${testTodos[0]._id}`)
        .expect(200)
        .expect((res)=>{
            console.log(res.body)
            expect(res.body.todo.text).toBe(testTodos[0].text)
        })
        .end(done)
    })

    it('should return 404 if todo not found', (done)=>{
        newID = new ObjectID()
        request(app)
        .get(`/todos/${newID}`)
        .expect(404)
        .end(done)
    })

    it('should return 404 for non-objects ids', (done)=>{
        newID = new ObjectID()
        request(app)
        .get(`/todos/123`)
        .expect(404)
        .end(done)
    })
})
