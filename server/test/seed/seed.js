const {ObjectID} = require('mongodb')
const {Todo} = require('./../../models/todo')
const {User} = require('./../../models/user')
const jwt = require('jsonwebtoken')

const userOneId = new ObjectID()
const userTwoId = new ObjectID()
const users=[{
    _id: userOneId,
    email: 'test01@test.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access:'auth'},'abc123').toString()
    }]},
    {_id: userTwoId,
        email: 'test02@test.com',
        password: 'userTwoPass',
       
    }
]

var testTodos = [{
    _id: new ObjectID(),
    text: "Dummy todo 1"
},{
    _id: new ObjectID(),
    text: "Dummy todo 2",
    completed: true,
    completedAt: 333
}]




const populateTodos = (done)=>{
    Todo.remove({}).then(()=>{
       return Todo.insertMany(testTodos)
        }).then(() => done())
}

const populateUsers = (done)=>{
    User.remove().then(()=>{
        var userOne = new User(users[0]).save()
        var userTwo = new User(users[1]).save()

        return Promise.all([userOne, userTwo])
    }).then(()=>done())
}

module.exports = {
    testTodos,
    populateTodos,
    users,
    populateUsers
}