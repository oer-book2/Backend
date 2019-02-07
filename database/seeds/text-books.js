
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('text-books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('text-books').insert([
        {id: 1, title: `Exploring Movie Construction & Production: What's so exciting about movies?`, author: 'John Reich', subject: 'art', description: `Exploring Movie Construction & Production contains eight chapters of the major areas of film construction and production. The discussion covers theme, genre, narrative structure, character portrayal, story, plot, directing style, cinematography, and editing. Important terminology is defined and types of analysis are discussed and demonstrated.  An extended example of how a movie description reflects the setting, narrative structure, or directing style is used throughout the book to illustrate building blocks of each theme. This approach to film instruction and analysis has proved beneficial to increasing students' learning, while enhancing the creativity and critical thinking of the student.`, link: 'https://textbooks.opensuny.org/exploring-movie-construction-production/', avg_rating: 3, imageArea: './images/movieconstruction.png'},
        {id: 2, title: `A First Course in Linear Algebra`, author: `Robert Beezer, University of Puget Sound`, subject: 'math', description: `A First Course in Linear Algebra is an introductory textbook aimed at college-level sophomores and juniors. Typically students will have taken calculus, but it is not a prerequisite. The book begins with systems of linear equations, then covers matrix algebra, before taking up finite-dimensional vector spaces in full generality. The final chapter covers matrix representations of linear transformations, through diagonalization, change of basis and Jordan canonical form. Determinants and eigenvalues are covered along the way.`, link: 'http://linear.ups.edu/html/fcla.html', avg_rating: 3, imageArea: 'default image'},
        {id: 3, title: 'Discover Psychology 2.0 - A Brief Introductory Text', author: 'Edward Diener', subject: 'science', description: `This textbook presents core concepts common to introductory courses. The 15 units cover the traditional areas of intro-to-psychology; ranging from biological aspects of psychology to psychological disorders to social psychology. This book can be modified: feel free to add or remove modules to better suit your specific needs`, link: 'http://noba.to/5wjrz72n', avg_rating: 3, imageArea: './images/discoverpsychology.png'}
      ]);
    });
};
