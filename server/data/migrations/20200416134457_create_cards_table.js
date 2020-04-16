

exports.up = function(knex) {
    return knex.schema.createTable('cards', table => {
        table.increments('id').notNullable();
        table.string('name').notNullable();
        table.string('priority').notNullable();
        table.text('deets').notNullable();
        table.string('status').notNullable();
        table.string('created_by').notNullable();
        table.string('assigned_to').notNullable();
        table.datetime('date_created', { precision: 6 }).defaultTo(knex.fn.now(6))
      })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('cards')

};
