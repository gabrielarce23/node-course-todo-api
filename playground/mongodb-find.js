//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err){
        return console.log('Unable to conecct to MongoDb Server');
    }
    console.log('Conected to MongoDB server')

  /*   db.collection('Todos').find({
        _id: new ObjectID('5b9ab75eefc996a2e55ab645')
    }).toArray().then((docs)=>{
        console.log('Todos')
        console.log(JSON.stringify(docs,undefined,2))
    },(err)=>{
        if(err){
            console.log('Unable to fetch todos ', err)
        }
    }) */

/*     db.collection('Todos').find().count().then((count)=>{
        console.log('Todos count: ', count )
        
    },(err)=>{
        if(err){
            console.log('Unable to fetch todos ', err)
        }
    }) */
    db.collection('Users').find({name:'Gabriel Arce'}).toArray().then((docs)=>{
        
        console.log('Todos')
        console.log(JSON.stringify(docs,undefined,2))
    },(err)=>{
        if(err){
            console.log('Unable to fetch todos ', err)
        }
    })
    //db.close()
 
})