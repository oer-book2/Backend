
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Naruto', password: 'password'},
        {id: 2, name: 'Sasuke', password: 'password'},
        {id: 3, name: 'Sakura', password: 'password'}
      ]);
    })
  }
