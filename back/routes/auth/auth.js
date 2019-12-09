const express = require("express");

const router = express.Router();

const connection = require("../../helpers/db");

// =====================================================
// @method:       POST
// @route:        /auth/signup
// @description   Register a new user
router.post("/signup", (req, res) => {
  if (req.body.password !== req.body.repeatPassword) {
    res.send("Passwords do not match");
    return;
  } else {
    res.status(200);
  }

  let user = {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password
  };

  console.log("User object: ", user);

  let query = connection.query(
    "INSERT INTO users SET ?",
    user,
    (error, results, fields) => {
      if (error) {
        res.status(500).send(error);
        return;
      }
      res.status(200).send(results);
    }
  );
});

module.exports = router;
