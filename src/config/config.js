const Sequelize = require('sequelize');

// const sequelize = new Sequelize(
//   'pokedexdb',
//   'pokedex-react',
//   'poke321',
//   {
//     host: 'db',
//     dialect: 'postgres',
//   }
// );
const sequelize = new Sequelize("postgres://cprxustl:vZfjowvWOhEd4ceLnKElh_C40QoFGxSp@silly.db.elephantsql.com/cprxustl");

module.exports = sequelize;