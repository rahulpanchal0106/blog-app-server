const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    author:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'Users'
    }
},{
    timestamps:true
})

const model = mongoose.model('Blogs',schema)

module.exports = model;