
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1, comment: 'comments go here', textbook_id: 1,  rating: 3},
        {id: 2, comment: 'comments go here', textbook_id: 2 ,rating: 3},
        {id: 3, comment: 'comments go here', textbook_id: 3 ,rating: 3}
      ]);
    });
};
