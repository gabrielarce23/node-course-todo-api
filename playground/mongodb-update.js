//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err){
        return console.log('Unable to conecct to MongoDb Server');
    }
    console.log('Conected to MongoDB server')

    
    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID('5b9ab0e32b2c8052c0bb1842')},
        {$set : {
            name: 'D arce'
        },
        $inc: {
            age: 1
        }
        },
        {
            returnOriginal: false
        }
    ).then((result)=>{
        console.log(result)        
    },(err)=>{
        if(err){
            console.log('Unable to delete ', err)
        }
    })

   
    //db.close()
 
})