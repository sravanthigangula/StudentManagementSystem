const fs = require('fs');
const students = require('./students.json')
const express = require('express');
const cors = require('cors')
const app = express();
const jwt = require('jsonwebtoken')
const studentRoutes = require('./routes/student.route.js')
const mongoose = require('mongoose')
app.use(express.urlencoded({extended : true}))
mongoose.connect('mongodb://127.0.0.1:27017/testjp').then(()=>
{
    console.log(`server successfully connected to db`);
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/api/students',studentRoutes)













app.listen(3020);