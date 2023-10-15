var express = require('express')
var app = express()
const router = express.Router();
var fs = require('fs');
const { userInfo } = require('os');
const fileName1 = 'user.json';
const fileName2 = 'home.html';

// fs.readFile(filePath, (err, data) =>{
//   if(err){
//     console.log("Error reading the file.")
//     return; 
//   }
//   return data;
// })

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/

//http://localhost:8081/
app.get('/', (req, res) => {
  const filePath = __dirname + "/home.html";
  res.sendFile(filePath)
})

router.get('/home', (req,res) => {
  res.send('This is home router');
});

/*
- Return all details from user.json file to client as JSON format
*/

//http://localhost:8081/users
app.get('/users', (req, res) =>{
  fs.readFile(fileName1, (err, data) =>{
    if(err){
      console.log("Error reading the file.")
      return; 
    }
    const content = JSON.parse(data)
    const details = JSON.stringify(content)
    res.send(details)
  })
})

router.get('/profile', (req,res) => {
  res.send('This is profile router');
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
//http://localhost:8081/login
router.get('/login', (req,res) => {
  const { username, password } = req.query
  fs.readFile(fileName1, (err, data) => {
    if(err){
      console.log(err)
    }
  })
  const userData = JSON.parse(fileName1)
  const { user } = userData
  res.send(Uname, pass);
  return
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req,res) => {
  res.send('This is logout router');
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));