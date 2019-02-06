
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('text-books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('text-books').insert([
        {id: 1, title: '100 People: A World Portrait', author: 'authors', subject: 'Worl History', description: 'Overview: This website gives you the opportunity see the world through different people all over the world on a variety of topics. Watch videos, see lesson plans about global issues and looking at it from a lense of focus on 100 people.'},
        {id: 2, title: '4th Grade Students Investigate Electric Circuits Through Construction and Illustration', author: 'Lorraine Aaland ', subject: 'Electronic Technology', description: 'Overview: As an activity related to FOSS unit Magnetism and Electricity, 4th grade science students use a computer download to explore electrical circuits and to generate illustrations of electrical circuits for physical models built in class'},
        {id: 3, title: 'G All vs. Only some', author: 'Illustrative Mathematics ', subject: 'math', description: 'This is a task from the Illustrative Mathematics website that is one part of a complete illustration of the standard to which it is aligned. Each task has at least one solution and some commentary that addresses important asects of the task and its potential use'}
      ]);
    });
};
