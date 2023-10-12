const mongoose = require('mongoose')

const schema = new mongoose.Schema({ 
    username: String, 
    
});
const User = mongoose.model('User', schema);

module.exports =User