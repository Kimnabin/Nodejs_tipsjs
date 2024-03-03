const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const app = express();

// init middleware
app.use(morgan("combined"));
app.use(helmet());
app.use(compression());

// init db
require("./dbs/init.mongodb");
const { checkOverload } = require("./helpers/check.connect");
checkOverload();
// init routes
app.get("/", (req, res, next) => {
  const strCompress = "Hello DUC ";
  return res.status(200).json({
    message: "hello world",
  });
});
// handle errors

module.exports = app;
