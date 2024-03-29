const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const sessionexpress = require('express-session');

const initializeExpressApp = () => {
  const app = express();

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(sessionexpress({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
  }));

  return app;
};

module.exports = initializeExpressApp;
