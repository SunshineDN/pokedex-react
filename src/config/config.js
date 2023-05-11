const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'pokedexdb',
  'pokedex-react',
  'poke321',
  {
    host: 'db',
    dialect: 'postgres',
  }
);
// const sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = sequelize;