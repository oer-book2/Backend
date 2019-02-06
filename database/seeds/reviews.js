
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1, comment: 'comments go here'},
        {id: 2, comment: 'comments go here'},
        {id: 3, comment: 'comments go here'}
      ]);
    });
};
