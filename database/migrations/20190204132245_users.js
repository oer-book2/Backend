
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', users => {
      users.increments()

      users.string('name', 128).notNullable().unique()
      users.string('password', 128)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
