const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 6969;
const hostname = process.env.HOST_NAME || 'localhost';
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
//get the client
//config template engine
configViewEngine(app)

// //config static files
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', webRoutes);



connection.query(
  'SELECT * FROM Users ',
  function (err, results, fields) {
    console.log('>>>result = ', results);
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



