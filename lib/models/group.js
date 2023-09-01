const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true, 
      },
    id:Number,
	admin: {
        required:true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
},
    members:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }],
    members_count:Number,
    assignments_count:Number

});

module.exports = mongoose.model('Group', groupSchema);