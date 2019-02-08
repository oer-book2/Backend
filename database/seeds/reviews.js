exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('reviews')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('reviews').insert([
                {
                    id: 1,
                    comment: 'Good',
                    textbook_id: 1,
                    rating: 3,
                    name: 'Luna',
                },
                {
                    id: 2,
                    comment: 'It was ok',
                    textbook_id: 2,
                    rating: 3,
                    name: 'Luna',
                },
                {
                    id: 3,
                    comment: 'Loved it!',
                    textbook_id: 3,
                    rating: 5,
                    name: 'Luna',
                },
            ]);
        });
};
