
exports.up = function(knex) {
  return knex.schema.alterTable('incidents', (table)=>{
      table.double('value');
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('incidents', (table)=>{
      table.dropColum('value');
  })
};
