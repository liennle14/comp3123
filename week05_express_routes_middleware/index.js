var express = require('express')
var studentRoutes = require('./routes/Student')
var facultyRoutes = require('./routes/faculty')

const SERVER_PORT = 8089
var app = express()
var v1api = express()

// Application level middleware
app.use((req, res, next) => {
    console.log(`Application Middleware: ${req.method} - ${req.url}`)
    next()
})

//route level middleware
app.use("/api/v1/student",(req, res, next) => {
    console.log(`${req.method} - ${req.url}`)
    next()
})

//Error handling level middleware
// any func with 4 parameters, first param is for error
var errorHandling = (err, req, res, next) => {
    console.log("Error middleware")
        console.log("Middleware Error Hadnling");
        const errStatus = err.statusCode || 500;
        const errMsg = err.message || 'Something went wrong';
        res.status(errStatus).json({
            success: false,
            status: errStatus,
            message: errMsg,
            stack: process.env.NODE_ENV === 'development' ? err.stack : {}
        })
}

app.use(errorHandling)

v1api.use('/student', studentRoutes)
v1api.use('/faculty', facultyRoutes)
app.use("/api/v1", v1api)
//http://localhost:8089/api/v1/student/parttime

//http://localhost:8089/

app.get("/", (req, res) =>{
    res.send("<h1>Welcome to Express App</h1>")
})

//http://localhost:8089/hello
app.get("/hello", (req, res) =>{
    try{
        throw new Error ("error thrown")
    }
    catch(err){
        next(err)
    }
})

app.post("/welcome", (req, res) =>{

})

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})
