
exports.up = function(knex, Promise) {
  return knex.schema.createTable('text-books', books => {
      books.increments()

      books.string('title', 244).unique()
      books.string('author', 244)
      books.string('subject', 244)
      books.text('description', 380)
      books.integer('avg-rating')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('text-books')
};
