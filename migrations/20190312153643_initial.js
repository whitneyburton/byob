exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('states', (table) => {
      table.increments('id').primary();
      table.string('state');
      table.integer('stateTotal');
      table.integer('statePercentage');
      table.timestamps(true, true);
    }),
    
    knex.schema.createTable('areas', (table) => {
      table.increments('id').primary();
      table.integer('area_id').unsigned();
      table.foreign('area_id').references('states.id');
      table.string('area');
      table.string('state');
      table.string('best_season');
      table.integer('total_boulders');
      table.integer('area_percentage');
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