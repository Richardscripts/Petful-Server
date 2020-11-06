const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res, next) => {
  return res.json(Pets.get());
});

router
  .get('/cats', (req, res, next) => {
    return res.json(Pets.get('cats'));
  })
  .delete((req, res, next) => {
    Pets.dequeue('cats');
    return res.status(204).end();
  });

router
  .get('/dogs', (req, res, next) => {
    return res.json(Pets.get('dogs'));
  })
  .delete((req, res, next) => {
    Pets.dequeue('dogs');
    return res.status(204).end();
  });

router.delete('/:type', json, (req, res, next) => {
  const type = req.params.type;
  Pets.dequeue(type);
  return res.status(200).json();
});

module.exports = router;
