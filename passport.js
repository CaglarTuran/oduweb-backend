var passport = require ('passport');
var LocalStrategy = require('passport-local').Strategy;
var _ = require('lodash');
var User = require ('./models/sql/user');

const UNAUTH_URSL = [
  '/member/login'
];

module.exports = initializePassport = app => {

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(function (req, res, next) {

    if(UNAUTH_URSL.indexOf(req.path) > -1){
      return next();
    } else if(req.isAuthenticated()){
      return next();
    } else {
      res.status(401).send({error: 'unauthorized'}).end();
    }
  });

  passport.use(new LocalStrategy(
    function(username, password, done) {
      DeepUser.findOne({
        where: {
          Name: username,
          Password: password,
        }
      }).then(DeepUser => {
        if(!DeepUser) {
          return done(null, false);
        }

        return done(null, _.pick(DeepUser,['Id', 'Name'])); // '_' lodash call library
      })
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

};
