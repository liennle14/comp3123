const mongoose = require('mongoose')
const router = require('express').Router();
const User = require('../models/user');

//http://localhost:8084/api/v1/user/signup
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser){
            res.status(400).send("User already exists");
        }
        const newUser = new User({ _id: new mongoose.Types.ObjectId(), username, email, password });
        await newUser.save();
        res.status(201).send("New user created successfully")
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error")
    }
})

router.post('/login', async (req, res) => { 
    const { username, password } = req.body;
    try {
        const existingUser = await User.findOne({ username: username, password: password });
        if (existingUser){
            res.status(200).send("Signing in!");
        }
        else{
            res.status(401).send("Username or password incorrect.");
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Server error")
    }

});

module.exports = router;