module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/bouldering_areas',
    useNullAsDefault: true,
    migrations: {
      directory: './migrations'
    },
  }
};