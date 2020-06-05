const { onUpdateTrigger } = require('../../knexfile');

exports.up = function(knex, Promise) {
  let createQuery = `
  CREATE EXTENSION pgcrypto;
  CREATE TABLE persons(
    id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(256),
    nome_mae VARCHAR(256),
    telefone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  ) WITH (oids = false)`;
  return knex.raw(createQuery).then(() => knex.raw(onUpdateTrigger('persons')));
};

exports.down = function(knex) {
    let dropQuery = `DROP TABLE persons`;
    return knex.raw(dropQuery);
};
