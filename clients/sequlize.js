var Sequelize = require('sequelize');

module.exports = sequelize = new Sequelize('DeepJupiter', 'postgres', '123qaz', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});
/*
Database port : 5432
Database Superuser : postgres
Database password : 123qaz
Database Name : DeepJupiter
Database host : localhost
*/
