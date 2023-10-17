const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const empRoutes = require('./routes/empRoutes');
let app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/employees', empRoutes);

const DB_CONNECTION_STRING = "mongodb+srv://dbuser:UtE7x7w6GxvauwUS@cluster0.wihv2ix.mongodb.net/comp3123?retryWrites=true&w=majority"

//http://localhost:8084/

mongoose.connect(DB_CONNECTION_STRING, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }).then(() => {
        console.log("Successfully connected to mongoDB")
    })

//http://localhost:8084/
app.get("/", (req, res) => {
    res.send("<h1>Assignment 1 :)</h1>")
})


const port = 8084;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});