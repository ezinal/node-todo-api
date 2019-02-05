// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    
    //findOneAndUpdate using $set
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c59ca61beed757f7a636ef4')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    //CHALLENGE
    //findOneAndUpdate using $inc
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5c585a9f50d93c523066e2f7")
    },{
        $set: {
            name: 'Andrew'
        },
        $inc: {
            age: 3
        }
    },{
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });


    // db.close();
});