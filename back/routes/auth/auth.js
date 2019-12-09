const express = require("express");

const router = express.Router();

// =====================================================
// @method:       POST
// @route:        /auth/signup
// @description   Register a new user
router.post("/signup", (req, res) => {
  res.send("I am in POST signup");
});

module.exports = router;
