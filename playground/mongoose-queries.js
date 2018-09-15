const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo') 
const {User} = require('./../server/models/user')

var id = '5b9c898b732e24c42d9e88eb'

Todo.find({
    _id : id
}).then((todos)=>{
    console.log('Todos', todos)
})

Todo.findOne({
    _id: id
}).then((todo)=>{
    console.log('Todo', todo)
})

Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('Todo not find for this id')
    }
    console.log('Todo',todo)
}).catch((e)=>{
    console.log(e)
})

var userId = '5b9bce9bc576e928176630fa'
User.findById(userId).then((user)=>{
    if(!user){
        return console.log('User not find for this id')
    }
    console.log('User',user)
}).catch((e)=>console.log(e))