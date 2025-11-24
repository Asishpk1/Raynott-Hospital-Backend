const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    message:{
        type:String
    }
})

const appointments = mongoose.model("appointments",appointmentSchema)

module.exports = appointments