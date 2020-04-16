
exports.up = function(knex) {
    return knex.schema.createTable('cards', table => {
        table.increments('id').notNullable();
        table.string('name').notNullable();
        table.string('priority').notNullable();
        table.text('deets').notNullable();
        table.string('status').notNullable();
        table.string('created_by').notNullable();
        table.string('assigned_to').notNullable();
        table.date('date_created');
      })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('cards')

};
