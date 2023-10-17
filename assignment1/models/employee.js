const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId
    },
    first_name: {
        type: String,
        maxlength: 100,
        required: true
    },
    last_name: {
        type: String,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        maxlength: 50,
        unique: true
    },
    gender: {
        type: String,
        maxlength: 50,
        enum: ['Male', 'Female', 'Other']
    },
    salary: {
        type: Number,
        required: true
    }
})

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;