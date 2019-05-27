const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const refreshLocalDatabase = require("./api/update-db-function")

const predictionRoute = require("./api/routes/prediction-route");
const dataRoute = require('./api/routes/data-route');

refreshLocalDatabase()
setInterval(refreshLocalDatabase, 3000000);

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Accept, Authorization");
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use("/api", predictionRoute);
app.use('/api', dataRoute);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;