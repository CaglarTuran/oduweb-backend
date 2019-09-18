const Sequelize = require ('sequelize');
const sequelize = require ('../../clients/sequlize');

module.exports = DeepUser = sequelize.define('DeepUser', {
  Id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Name: {
    type: Sequelize.STRING,
    field: 'Name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  Password: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});
