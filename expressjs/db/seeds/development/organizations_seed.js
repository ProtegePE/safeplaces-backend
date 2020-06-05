exports.seed = function(knex, Promise) {
  return knex('organizations').del() // Deletes ALL existing entries
    .then(async function() { // Inserts seed entries one by one in series
      return knex('organizations').insert({
        id: 'a88309c2-26cd-4d2b-8923-af0779e423a3',
        authority_name: 'Secretaria de Saúde do Estado de Pernambuco',
        info_website: 'http://portal.saude.pe.gov.br/',
        safe_path_json: 'https://www.something.give/safe_path/a88309c2-26cd-4d2b-8923-af0779e423a3'
      });
    });
};
