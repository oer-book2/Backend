const express = require('express');

const users = require('../routes/users.js');
const register = require('../routes/register.js');
const login = require('../routes/login.js');
const textbooks = require('../routes/textbooks.js');
const reviews = require('../routes/reviews.js');


const router = express.Router();

router.use('/users', users);
router.use('/register', register);
router.use('/login', login);
router.use('/textbooks', textbooks);
router.use('/reviews', reviews);

module.exports = router