const express = require('express');

const users = require('../routes/users.js');
const register = require('../routes/register.js');
const login = require('../routes/login.js');
const auth = require('../authenticate/authenticate.js');

const router = express.Router();

router.use('/users', users);
router.use('/register', register);
router.use('/login', login);

module.exports = router