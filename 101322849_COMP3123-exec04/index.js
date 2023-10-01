var express = require('express')

const SERVER_PORT = 8089
var app = express()

person = {
    "firstname": "Lien", 
    "lastname": "Le"
}

app.use("/test", express.static("./public"))
app.use(express.json())

app.use(express.urlencoded({extended: true}))

//http://localhost:8089/hello
app.get("/hello", (req, res) => {
    res.status(201).send("<h1>Hello Express JS</h1>")
})

//http://localhost:8089/user?fnm=lien&lnm=le
app.get("/user", (req, res) => {
    res.send(person)
})

//http://localhost:8089/user/lien/le
app.post("/user/:firstname/:lastname", (req, res) => {
    const {firstname, lastname} = req.params
    res.send(req.params)
})


app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})
