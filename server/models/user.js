let mongoose = require('mongoose');

let User = mongoose.model('User',{
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {User};

// let newUser = new User({
    //     email: 'e'
    // });
    
    // newUser.save().then((doc) => {
    //     console.log(JSON.stringify(doc,undefined,2));
    // }, (e) => {
    //     console.log('Unable to save User',e);
    // });