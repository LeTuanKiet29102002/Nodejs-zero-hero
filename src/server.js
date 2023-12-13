const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 6969;
const hostname = process.env.HOST_NAME || 'localhost';
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
//get the client
const mysql = require('mysql2');
//config template engine
configViewEngine(app)

// //config static files
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', webRoutes);

//test connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'hoidanit'
})

connection.query(
  'SELECT * FROM Users u',
  function (err, result, fields) {
    console.log('>>>result = ', result);
    console.log('fields = ', fields);
  }
)


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})






















// const http = require('http'); //nodejs


// const hostname = 'localhost';

// const port = 6969;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World! I am Kimoonmmmmm!');

// });

// server.listen(port , hostname, ()=>{
// console.log(`Server running at http://${hostname}:${port}`);
// })



