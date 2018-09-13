//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err){
        return console.log('Unable to conecct to MongoDb Server');
    }
    console.log('Conected to MongoDB server')

  /*   db.collection('Todos').insertOne({
        text: "Something to do",
        completed: false
    },(err, result)=>{
        if(err){
            return console.log('Unable to insert todo',err)
        }

        console.log(JSON.stringify(result.ops,undefined,2))
    }) */

    /* db.collection('Users').insertOne({
        name: "Gabriel Arce",
        age: 30,
        location: "Solano García 2623 Montevideo Uruguay"
    },(err, result)=>{
        if(err){
            return console.log('Unable to insert todo',err)
        }

        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2))
    })
    */
    db.close(); 
})