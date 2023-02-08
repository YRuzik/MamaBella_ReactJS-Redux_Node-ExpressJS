const databaseConfig = require('./knexfile');
let knex = require('knex')(databaseConfig);

const db = knex;
module.exports = db;
