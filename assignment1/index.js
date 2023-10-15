var express = require('express')
var app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = express.Router();
var fs = require('fs');

const db = db.getSiblingDB('comp3123_assignment1')
db.createCollection('test')

app.post('/api/v1/user/signup', (req, res) => {

})

app.post('/api/v1/user/login', (req, res) => {
    
})

app.get('/api/v1/emp/employees', (req, res) => {
    
})

app.post('/api/v1/emp/employees', (req, res) => {
    
})

app.get('/api/v1/emp/employees/eid', (req, res) => {
    
})

app.put('/api/v1/emp/employees/eid', (req, res) => {
    
})

app.delete('/api/v1/emp/employees?eid=xxx', (req, res) => {
    
})

app.listen(process.env.port || 8081);
console.log('Web Server is listening at port '+ (process.env.port || 8081));