const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(400).send({ error: 'unauthorized' }).end();
  }
};

module.exports = isAuthenticated;
