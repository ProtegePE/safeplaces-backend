const { onUpdateTrigger } = require('../../knexfile');

exports.up = function(knex, Promise) {
  let createQuery = `
  CREATE TABLE adresses(
    id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    person_id UUID NOT NULL REFERENCES persons(id) ON DELETE CASCADE,
    logradouro VARCHAR(255),
    complemento VARCHAR(255),
    numero VARCHAR(30),
    bairro VARCHAR(255),
    cidade VARCHAR(128),
    cep VARCHAR(128),
    uf VARCHAR(2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  ) WITH (oids = false)`;
  return knex.raw(createQuery).then(() => knex.raw(onUpdateTrigger('adresses')));
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE adresses`;
  return knex.raw(dropQuery);
};