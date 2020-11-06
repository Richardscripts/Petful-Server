const express = require("express");
const store = require("../../store");
const json = require("body-parser").json();

const People = require("./people.service");

const router = express.Router();

router.get("/", (req, res) => {
  return res.json(People.get());
});

router.post("/", json, (req, res) => {
  const person = req.body.person;
  if (!person) {
    return res.status(400).json("Missing person!");
  }
  People.enqueue(person);
  return res.json(person);
});

module.exports = router;
