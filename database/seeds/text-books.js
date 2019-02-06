
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('text-books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('text-books').insert([
        {id: 1, title: 'rowValue1', author: 'authors', subject: 'math', description: 'descriptions'},
        {id: 2, title: 'rowValue2', author: 'authors', subject: 'math', description: 'descriptions'},
        {id: 3, title: 'rowValue3', author: 'authors', subject: 'math', description: 'descriptions'}
      ]);
    });
};
