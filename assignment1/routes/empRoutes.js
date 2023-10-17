const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const Employee = require('../models/employee');
const User = require('../models/user')

router.get('/', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ username: username, password: password });
      if (existingUser) {
        const employees = await Employee.find({});
        res.status(200).json(employees);
      } else {
        res.status(401).send("Username or password incorrect.");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Server error");
    }
});

router.post('/', async (req, res) => {
    const { first_name, last_name, email, gender, salary } = req.body;

    try {
        const existingEmployee = await Employee.findOne({ email: email });
        const existingUser = await User.findOne({ email: email });

        if (existingEmployee) {
            return res.status(400).send("Email already exists in the Employee collection");
        } else if (existingUser) {
            const newEmployee = new Employee({ _id: new mongoose.Types.ObjectId(), first_name, last_name, email, gender, salary });
            await newEmployee.save();
            return res.status(201).send("New employee created successfully");
        } else {
            return res.status(404).send("User with the provided email does not exist");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

router.get('/:eid', async (req, res) => {
    const { username, password } = req.body;
    const { eid } = req.params;
  
    try {
      const foundUser = await User.findOne({ username, password });
      if (foundUser) {
        const employee = await Employee.findOne({ _id : eid });
        if (employee) {
          res.status(200).json(employee);
        } else {
          res.status(404).json({ message: 'Employee not found' });
        }
      } else {
        res.status(404).json({ message: 'Username and password not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/:eid', async (req, res) => {
    const { username, password } = req.body;
    const { eid } = req.params;
    const { first_name, last_name, email, gender, salary } = req.body;
  
    try {
      const foundUser = await User.findOne({ username, password });
      if (foundUser) {
        const updatedEmployee = await Employee.findOneAndUpdate({ _id : eid }, {first_name, last_name, email, gender, salary}, {new: true});
        if (updatedEmployee) {
          res.status(200).json(employee);
        } else {
          res.status(404).json({ message: 'Employee not found' });
        }
      } else {
        res.status(404).json({ message: 'Username and password not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/', async (req, res) => {
    const { username, password } = req.body;
    const { eid } = req.query.eid
  
    try {
      const foundUser = await User.findOne({ username, password });
      if (foundUser) {
        const deletedEmployee = await Employee.findOneAndDelete({ _id : eid });
        if (deletedEmployee) {
          res.status(204).json("Employee deleted successfully");
        } else {
          res.status(404).json({ message: 'Employee not found' });
        }
      } else {
        res.status(404).json({ message: 'Username and password not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;