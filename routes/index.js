const createError = require('http-errors');
const memberRouter = require('./member');


const initializeRoutes = (app) => {
  app.use('/member', memberRouter);
};
/* eslint-disable no-unused-vars */
const initializeErrorRoutes = (app) => {
  /* eslint-enable no-unused-vars */
  app.use((req, res, next) => {
    next(createError(404));
  });

  // error handler
  app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    return res.status(err.status || 500).send();
  });
};
/* */
module.exports = initializeRoutes, initializeErrorRoutes;
