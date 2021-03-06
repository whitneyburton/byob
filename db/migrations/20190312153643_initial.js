exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('states', (table) => {
      table.increments('id').primary();
      table.string('state');
      table.integer('state_total');
      table.float('state_percentage');
      table.timestamps(true, true);
    }),
    
    knex.schema.createTable('areas', (table) => {
      table.increments('id').primary();
      table.integer('state_id').unsigned();
      table.foreign('state_id').references('states.id');
      table.string('area');
      table.string('state');
      table.string('best_season');
      table.integer('total_boulders');
      table.float('area_percentage');
      table.string('nearest_city');
      table.timestamps(true, true);
    })
  ])
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('areas'),
    knex.schema.dropTable('states')
  ]);
};