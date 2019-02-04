const express = require('express');

const users = require('../routes/users.js');
const register = require('../routes/register.js');

const router = express.Router();

router.use('/users', users);
router.use('/register', register);

module.exports = router