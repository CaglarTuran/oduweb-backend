const initializeExpressApp = require('./setup-express.js');
const initializePassport = require('./passport');
const initializeRoutes = require('./routes');
const initializeErrorRoutes = require('./routes');

const app = initializeExpressApp();

initializePassport(app);
initializeRoutes(app);


initializeErrorRoutes(app);

module.exports = app;
