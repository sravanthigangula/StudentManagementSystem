const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    _id: {
        type: Number, 
        required: true 
    },
    name: String,
    phone: Number,
    email: String
});

const studentModel = mongoose.model("Student", studentSchema);

module.exports = studentModel;
