const express = require ('express');
var passport = require('passport');
const isAuthenticated = require ('../middlewares/auth');

var router = express.Router();

router.get('/me', function(req, res, next){
  res.status(200).send(req.user);
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if(err){
      return next(err);
    }

    if(!user) {
      return res.status(200).send( { error: 'unauthorized'}).end();
    }

    req.logIn(user, function(err){
      if(err) {
        return next(err);
      }
      return res.status(200).send( { user: user}).end();
    });

  })(req, res, next);
});

router.get('/logout', function(req, res){
  req.logout();
  res.status(200).send({ success : true })
});

module.exports = router;
