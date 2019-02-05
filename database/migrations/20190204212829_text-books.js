
exports.up = function(knex, Promise) {
  return knex.schema.createTable('text-books', books => {
      books.increments()

      books.string('title', 244)
  })
};

exports.down = function(knex, Promise) {
  
};
