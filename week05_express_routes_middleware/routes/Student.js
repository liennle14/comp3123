var express = require('express')

var routes = express.Router()

//http://localhost:8089/student
routes.get("/", (req, res) => {
    res.send("<h1>Student - GET - / </h1>")
})

//http://localhost:8089/student/fulltime
routes.route("/fulltime")
    .get((req, res) =>{
        res.send("<h1>Fulltime Student - GET - / </h1>")
        
    .post((req, res) =>{
        res.send("<h1>Fulltime Student - POST - / </h1>")
    })

    .put((req, res) =>{
        res.send("<h1>Fulltime Student - PUT - / </h1>")
    })
})

//http://localhost:8089/student/parttime
routes.route("/parttime")
    .get((req, res) =>{
        res.send("<h1>Part time Student - GET - / </h1>")
        
    .post((req, res) =>{
        res.send("<h1>Part time Student - POST - / </h1>")
    })
})

module.exports = routes
