const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/me', (req, res) => {
  res.status(200).send(req.user);
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(200).send({ error: 'unauthorized' }).end();
    }

    return req.logIn(user, (loginError) => {
      if (loginError) {
        return next(loginError);
      }
      return res.status(200).send({ user }).end();
    });
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).send({ success: true });
});

module.exports = router;
