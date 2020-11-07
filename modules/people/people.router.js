const express = require('express');

const People = require('./people.service');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    return res.json(People.get());
  })
  .post((req, res) => {
    const person = req.body.person;
    if (!person) {
      return res.status(400).json('Missing person!');
    }
    People.enqueue(person);
    return res.status(200).json(People.get().last);
  })
  .delete((req, res) => {
    People.dequeue();
    return res.status(204).end();
  });

module.exports = router;
