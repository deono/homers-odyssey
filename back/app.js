// declare libraries
const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

// set up the app
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// define routes
const authRouter = require("./routes/auth/auth");
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});
// in case path is not found, return the 'Not Found' 404 code
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

const PORT = process.env.PORT || 5000;

// launch the server
let server = app.listen(PORT, err => {
  if (err) {
    throw new Error("Error starting the server");
  }
  console.log(
    `Homers Odyssey server listening on port ${server.address().port}`
  );
});
