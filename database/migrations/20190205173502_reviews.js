
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviws', review => {
      review.increments()

      review.text('comment')
      review.integer('textbook_id').unsigned().references('id').inTable('text-books')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('reviews')
};
