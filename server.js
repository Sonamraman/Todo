const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");

const path = require('path');

const app = express();

console.log('May Node be with you')

// app.get(endpoint, callback)

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
  })

app.get('/about', (req, res) => {
  res.send('<h1>Hello, About page</h1>')
})

app.get('/contact', (req, res) => {
  res.send('<h1>Hello, Contact page</h1>')
})

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public' , 'index.html'))
//   })

app.get('/list', (req, res) => {
  res.json([
    {
      id:1,
      name:"sonam"
    },
    {
      id:2,
      name:"ritu"
    },
    {
      id:3,
      name:"lavish"
    },
  ])
})

// Set static folder

app.use(express.static(path.join(__dirname,'src')))

app.post('/quotes', (req, res) => {
  console.log('Hellooo!')
})


const port =process.env.port || 5000;
// const port = require('./config/env').serverPORT;

app.listen(port, () => console.log(`Server started on port ${port}`));

