const express = require('express');
const Pets = require('./pets.service');
const router = express.Router();

router.get('/', (req, res, next) => {
  return res.json(Pets.get());
});

router
  .route('/cats')
  .get((req, res, next) => {
    return res.json(Pets.get('cats'));
  })
  .delete((req, res, next) => {
    Pets.dequeue('cats');
    return res.status(204).end();
  });

router
  .route('/dogs')
  .get((req, res, next) => {
    return res.json(Pets.get('dogs'));
  })
  .delete((req, res, next) => {
    Pets.dequeue('dogs');
    return res.status(204).end();
  });

module.exports = router;
