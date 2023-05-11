const Sequelize = require('sequelize');

// const sequelize = new Sequelize({
//   dialect: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'pokedex-react',
//   password: 'poke321',
//   database: 'pokedexdb'
// });
const sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = sequelize;