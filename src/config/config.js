const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: 'postgres',
  }
);
// const sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = sequelize;