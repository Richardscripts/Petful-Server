const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("../../config");

const app = express();
app.use(helmet());
app.use(cors());

app.use("/people", require("../people/people.router"));
app.use("/pets", require("../pets/pets.router"));

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === "production") {
    response = { error: "Sorry, Server Error! Try refreshing." };
  } else {
    console.error(error);
    response = { error: error.message };
  }
  res.status(500).json(response);
});

module.exports = app;
