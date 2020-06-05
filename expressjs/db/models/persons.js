var knex = require('../knex.js');
var Adress = require('./adresses')

function Person() {
  return knex('persons');
}

function insertPerson(dados_pessoa){
    return Person().insert(dados_pessoa).returning('*');
}

function find(){
  const pessoas = Person().select();

  console.log(pessoas);

  let saidas = [];

  for(let i = 0; i < pessoas.length; ++i) {
    console.log(pessoas[i]);

    let adresses = Adress.findOne({person_id: pessoas[i].id}) ;

    let obj = {
      nome: pessoas[i].nome,
      nome_mae: pessoas[i].nome_mae,
      telefone: pessoas[i].telefone,
      adresses: adresses,      
    }

    saidas.push(obj);
  }

  return saidas;

}

module.exports = {
    insertPerson: insertPerson,
    find: find
};
