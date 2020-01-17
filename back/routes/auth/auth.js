const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const connection = require("../../helpers/db");

// =====================================================
// @method:       POST
// @route:        /auth/signup
// @description   Register a new user
router.post("/signup", (req, res) => {
  // do the passwords match?
  if (req.body.password !== req.body.repeatPassword) {
    res.status(500).json({ flash: "Passwords do not match" });
    return;
  } else {
    res.status(200);
  }

  // hash the password
  let hash = bcrypt.hashSync(req.body.password, 10);

  let user = {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: hash
  };

  // add the new user to the database
  let query = connection.query(
    "INSERT INTO users SET ?",
    user,
    (error, results, fields) => {
      if (error) {
        console.log(error.message);
        res.status(500).json({ flash: error.message });
        return;
      }
      res.status(200).json({ flash: "New user has been registered!" });
    }
  );
});

// =====================================================
// @method:       POST
// @route:        /auth/signin
// @description   Sign in to account
router.post("/signin", (req, res) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      console.log(error);
      return res.status(500).json({ flash: "login error" });
    }
    if (!user) {
      return res.status(400).json({ flash: "no user found" });
    }

    // generate a signed json web token with the contents of user object and return it in the response
    const token = jwt.sign(user.id, secret);

    return res.json({ token, flash: "login success" });
  })(req, res);
});

module.exports = router;
