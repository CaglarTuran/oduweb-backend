const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const _ = require('lodash');
const DeepUser = require('./models/sql/user');

const UNAUTH_URSL = [
  '/member/login',
];

const initializePassport = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  app.use((req, res, next) => {
    if (UNAUTH_URSL.indexOf(req.path) > -1) {
      return next();
    } if (req.isAuthenticated()) {
      return next();
    }
    return res.status(401).send({ error: 'unauthorized' }).end();
  });

  passport.use(new LocalStrategy(
    ((username, password, done) => {
      DeepUser.findOne({
        where: {
          Name: username,
          Password: password,
        },
      }).then((deepUser) => {
        if (!deepUser) {
          return done(null, false);
        }

        return done(null, _.pick(deepUser, ['Id', 'Name'])); // '_' lodash call library
      });
    }),
  ));

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};

module.exports = initializePassport;
