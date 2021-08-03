//Given an app.js file, write an API with path / using express JS to send Express JS text as a response.

//Export the express instance using default export syntax.

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Express JS");
});
module.exports = app;
