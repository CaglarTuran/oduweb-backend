const Sequelize = require('sequelize');

const sequelize = new Sequelize('DeepJupiter', 'postgres', '123qaz', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

module.exports = sequelize;
/*
Database port : 5432
Database Superuser : postgres
Database password : 123qaz
Database Name : DeepJupiter
Database host : localhost
*/
