var express = require('express')

var routes = express.Router()

//http://localhost:8089/faculty
routes.get("/", (req, res) => {
    res.send("<h1>Faculty - GET - / </h1>")
})

//http://localhost:8089/faculty/fulltime
routes.route("/fulltime")
    .get((req, res) =>{
        res.send("<h1>Full time Faculty - GET - / </h1>")
        
    .post((req, res) =>{
        res.send("<h1>Full time Faculty - POST - / </h1>")
    })

    .put((req, res) =>{
        res.send("<h1>Full time Faculty - PUT - / </h1>")
    })
})

//http://localhost:8089/faculty/parttime
routes.route("/parttime")
    .get((req, res) =>{
        res.send("<h1>Part time Faculty - GET - / </h1>")
        
    .post((req, res) =>{
        res.send("<h1>Part time Faculty - POST - / </h1>")
    })
})

module.exports = routes
