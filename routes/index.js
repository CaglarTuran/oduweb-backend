var memberRouter = require ('./member');
var createError = require('http-errors');


var initializeRoutes = app => {
  app.use('/member', memberRouter);
};

var initializeErrorRoutes = app => {
  app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    return res.status(err.status || 500).send();
  });
};

module.exports = initializeRoutes,initializeErrorRoutes;