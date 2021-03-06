
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', review => {
    review.increments()

    review.string('name')
    review.text('comment')
    review.integer('rating')
    review.integer('textbook_id').unsigned().references('id').inTable('text-books')

})

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('reviews')
};
