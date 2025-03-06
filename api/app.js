const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); 

const greetRoute = require("./routes/greet");
app.use("/greet", greetRoute);

module.exports = app;
