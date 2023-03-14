const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.MYSQL_URI) {
  sequelize = new Sequelize(process.env.MYSQL_URI);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_PASSWORD,
    process.env.DB_USER,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

// const sequelize = new Sequelize(process.env.MYSQL_URI)

module.exports = sequelize;