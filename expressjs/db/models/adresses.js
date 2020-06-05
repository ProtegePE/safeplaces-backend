var knex = require('../knex.js');

function Adresses() {
  return knex('adresses');
}

function insertAdresses(data_adresses){
    return Adresses().insert(data_adresses).returning('*');
}

//Colocar WHERE como parâmetro
function findOne(filter){
  return Adresses().where(filter).then((row) => row);
}

module.exports = {
    insertAdresses: insertAdresses,
    findOne: findOne
};
