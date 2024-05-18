const express = require('express')
const routes = express.Router();
const mongoose = require('mongoose')
const studentModel = require('../model/student.model.js')
routes.use(express.json())
const jwt = require('jsonwebtoken')
routes.get('/',async (req,res)=>
{
    try{
    const students = await studentModel.find({}).sort({_id:1})
    res.status(200).json(students)
    }catch(error)
    {
        console.error("Error retrieving students:", error);
        res.status(500).json({ error: "Failed to retrieve students" });
    }
})

routes.post('/login', (req, res) => {
    const user = {
        uname: "cvr",
        password: "1234"
    }
    jwt.sign({ user }, "secret Key", (err, token) => {
        res.status(200).json({ token })
    })
})


routes.post('/', async (req, res) => {
    try {
        const { id, name, phone, email } = req.body;
        const student = await studentModel.create({
            _id: id, 
            name,
            phone,
            email
        });
        res.status(200).json(student);
    } catch (error) {
        console.error("Error creating student:", error);
        res.status(500).json({ error: "Failed to create student" });
    }
});


routes.get('/:id' , async (req , res) => {
    const {id} = req.params
    try{
    const student = await studentModel.findById(id)
    res.status(200).json(student)
}catch(error)
{
    console.error("Error retrieving student:", error);
    res.status(500).json({ error: "Failed to retrieve student" });
}
})

function verifyToken(req, res, next) {
    token = req.headers.authorization.split(' ')[1]
    req.token = token
    jwt.verify(req.token, "secret Key", (err, data) => {
        if (err) {
            res.status(300).send("unauthorized trial to update student")
        }
        else {
            next()
        }
    })
}

routes.put('/:id', verifyToken, async (req, res) => {
    const { id } = req.params;
    try {
        
        const student = await studentModel.findByIdAndUpdate(id, req.body);

      
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json(student);
    } catch (error) {
        console.error("Error updating student:", error);
        res.status(500).json({ error: "Failed to update student" });
    }
});



routes.delete('/:id' ,  async (req , res)=>
{
    const {id}=req.params
    try{
    const student = await studentModel.findByIdAndDelete(id)
    if(!student)
        {
            req.status(404).json({message:"error"})
        }
    else
    {
        res.status(200).json(student)
    }
}catch(error)
{
    console.error("Error deleting student:", error);
    res.status(500).json({ error: "Failed to delete student" });
}
})


module.exports = routes;