// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
    //     console.log(res);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
    //     console.log(res);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res);
    // });

    //CHALLENGE
    
    //deleteMany
    // db.collection('Users').deleteMany({name: 'Andrew'}).then((res) => {
    //     console.log(res);
    // });
    
    //findOneAndDelete
    db.collection('Users').findOneAndDelete({name: 'Mike'}).then((res) => {
        console.log(res);
    });

    // db.close();
});