var http = require("http");
//TODO - Use Employee Module here
const Employee = require("./Employee");
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const SERVER_PORT = 8080
//const port = process.env.PORT || 8081

const employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]

//Create Web Server using CORE API
var server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.method !== 'GET') {
        res.end(`error: ${http.STATUS_CODES[404]}`)} 
    else {
        //http://localhost:8080
        if (req.url == '/') {
            res.write("<h1>Welcome to Lab Exercise 03</h1>")
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
        }
        //http://localhost:8080/employee
        if (req.url == '/employee') {
            res.write("<h1>Employees</h1>")
            const empString = JSON.stringify(employees)
            res.write(empString)
            //TODO - Display all details for employees in JSON format
        }
        //http://localhost:8080/employee/names
        if (req.url == '/employee/names') {
            res.write("<h1>Employee Names</h1>")
            const firsts = employees.map(person => person.firstName + " " + person.lastName);
            const names = JSON.stringify(firsts)
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.write(names)

        }
        //http://localhost:8080/employee/totalsalary
        if (req.url == '/employee/totalsalary') {
            res.write("<h1>Employee Salary</h1>")
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }
            const salaries = employees.map(person => "total_salary : " + person.Salary);
            const total = JSON.stringify(salaries) 
            res.write(total)
    }
    res.end();
    }
})

server.listen(SERVER_PORT)
console.log(`Server running at ${SERVER_PORT}`)