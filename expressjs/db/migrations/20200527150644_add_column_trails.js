const { onUpdateTrigger } = require('../../knexfile');

exports.up = function(knex, Promise) {
  let createQuery = `ALTER TABLE trails 
  ADD person_id UUID NOT NULL REFERENCES persons(id) ON DELETE CASCADE`;
  return knex.raw(createQuery);
};

exports.down = function(knex) {
    let dropQuery = `DROP TABLE trails`;
    return knex.raw(dropQuery);
};


