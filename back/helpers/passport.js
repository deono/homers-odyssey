const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const secret = require("../private/secret");

const connection = require("./db");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false
    },
    function(email, password, done) {
      connection.query(
        `SELECT id, email, password FROM users WHERE email = '${email}'`,
        (error, user) => {
          // get object from array
          user = user[0];
          console.log("user: ", user);
          // there was an error with the database query
          if (error) {
            console.log(error);
            return done(error);
          }

          // credentials are not valid
          if (!email) {
            return done(null, false, {
              message: "The username provided was not found. Please try again."
            });
          }

          //password incorrect
          if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false, {
              message: "The password provied was incorrect. Please try again."
            });
          }

          // credentials are valid, supply the user that was authenticated
          return done(null, user);
        }
      );
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: secret
    },
    function(jwtPayload, cb) {
      return cb(null, jwtPayload);
    }
  )
);
