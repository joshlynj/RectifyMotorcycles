require("dotenv").config();

const express = require('express');
const morgan = require('morgan');

const app = express();

const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || "development"]);

app.use(morgan("tiny"));
app.use(express.json());


// get all services
app.get('/:table', function(req, res) {
  knex
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

//get services by id 
app.get('/:table/:id', function(req, res) {
  knex
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

app.delete('/:table/:id', function(req, res) {
  knex(req.params.table).where({ id: req.params.id}).del()
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: "Something is wrong." })
  })
});

app.patch('/:table/:id', function(req, res) {
  knex(req.params.table).where({ id: req.params.id}).update(req.query)
  .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: "Something is wrong." })
  })
});





app.post('/services', function(req, res) {
  knex.insert({ name: req.body.name, cost: req.body.cost}).from('services')
    .then((data) => res.status(201).json(data))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: "Something is wrong." })
  })
});

module.exports = app;