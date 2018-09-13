//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err){
        return console.log('Unable to conecct to MongoDb Server');
    }
    console.log('Conected to MongoDB server')

    
    db.collection('Users').deleteMany({name:'Gabriel Arce'}).then((result)=>{
        console.log(result)        
    },(err)=>{
        if(err){
            console.log('Unable to delete ', err)
        }
    })

    db.collection('Users').deleteOne({name:'Gabriel Arce'}).then((result)=>{
        console.log(result)
    },(err) => {
        if(err){
            console.log('Unable to delete', err)
        }
    })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b9ace766206f81b7cf2f884')
    }).then((result)=>{
        console.log(result)        
    },(err)=>{
        if(err){
            console.log('Unable to delete ', err)
        }
    })
    //db.close()
 
})