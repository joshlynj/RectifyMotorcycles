// require("dotenv").config();
const dbConnection = require('./controllers/dbConnection');
const cors = require('cors');
//middleware
const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());
const morgan = require('morgan');

// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

//Hashing
const { hash, compare } = require("bcrypt");
const saltRounds = 12;
const { createUser, getPasswordHash } = require("./controllers");
// const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || "development"]);
//const localdbConnection = dbConnection(development);
app.use(morgan("tiny"));
 


// get all for any table g2g
app.get('/:table', function(req, res) {
  dbConnection
    .select('*')
    .from(req.params.table)
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

//get by id  g2g
app.get('/:table/:id', function(req, res) {
  dbConnection
    .select('*')
    .from(req.params.table)
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

// delete by id 
app.delete('/:table/:id', function(req, res) {
  dbConnection
(req.params.table).where({ id: req.params.id}).del()
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: "Something is wrong." })
  })
});

// patch services g2g
app.patch('/services/:id', function(req, res) {
  const {service, cost} = req.body;
  dbConnection
('services').where({ id: req.params.id}).update({service: service, cost: cost})
  .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: "Something is wrong." })
  })
});

// {user_id: 1, service_id: 1, completion_status: false, part: 'Carburetor', make: null, model: null, year: null}
// patch orders g2g
app.patch('/orders/:id', function(req, res) {
  const {completion_status} = req.body;
  dbConnection
('orders').where({ id: req.params.id}).update({completion_status: completion_status})
  .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: "Something is wrong." })
  })
});

// post to services
app.post('/services', function(req, res) {
  dbConnection
.insert({ service: req.body.service, cost: req.body.cost}).from('services')
    .then((data) => res.status(201).json(data))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: "Something is wrong." })
  })
});


// post to orders
//{user_id: 1, service_id: 1, completion_status: false, part: 'Carburetor', make: null, model: null, year: null},
app.post('/orders', function(req, res) {
  console.log('Order worked');
  dbConnection
.insert({ user_id: req.body.user_id, service_id: req.body.service_id, completion_status: req.body.completion_status, 
    part: req.body.part, make: req.body.make,  model: req.body.model, year: req.body.year}).from('orders')
    .then((data) => res.status(201).json(data))
    .catch((err) => {
      console.error(`error here:`, err);
      res.status(404).json({ message: "Something is wrong." })
  })
});

// post to users
// app.post('/users', function(req, res) {
//   dbConnection
// .insert({ username: req.body.username, password: req.body.password, 
//     first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email,
//     address: req.body.address, phone_number: req.body.phone_number }).from('users')
//     .then((data) => res.status(201).json(data))
//     .catch((err) => {
//       console.error(err);
//       res.status(404).json({ message: "Something is wrong." })
//   })
// });

//password hashing code below
app.post("/users", function(req, res) {
let {username, password, first_name, last_name, email, address, phone_number} = req.body;

if(!username) res.status(401).send('username required for signup')
if(!password) res.status(401).send('password required for signup')
if(!first_name) res.status(401).send('first name required for signup')
if(!last_name) res.status(401).send('last name required for signup')
if(!email) res.status(401).send('email required for signup')
if(!address) res.status(401).send('address required for signup')
if(!phone_number) res.status(401).send('phone number required for signup')

  else {
    hash(password, saltRounds).then(hashedPassword=>{
    console.log(`users real password:`, password);
    console.log(`That password is now:`, hashedPassword)
      createUser(username, hashedPassword, first_name, last_name, email, address, phone_number)
      .then(data=> res.status(201).json("USER CREATED SUCCESFULLY"))
      .catch(err => rescape.status(500).json(err));
      });
    }
});

//login as a user- validates users credentials
app.post("/login", (req,res)=> {
  //compare password to passwordHash
  let {username, password} = req.body;
  if (!username) res.status(401).send("username required for login");
  else if (!password) res.status(401).send("password required for login");
  else {
    getPasswordHash(username)
      .then((hashedPassword) => {
        console.log(`user's entered password:`, password);
        console.log(`That user's hashed password:`, hashedPassword);

        compare(password, hashedPassword)
          .then((isMatch) => {
            // send whatever back as json object
            // if 202, useNavigate to whatever page you want
            if (isMatch) res.status(202).json("passwords match");
            // THIS IS THE SUCCESSFUL LOGIN RESPONSE
            else
              res.status(401).json("incorrect username or password supplied");
          })
          .catch((err) => {
            res.status(500).json(err);
          });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
});


module.exports = app;