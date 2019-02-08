const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');

const users = require('../database/dbconfig.js');

const router = express.Router();

router.use(helmet());
router.use(express.json());
router.use(cors());

function authenticate(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: `invalid token` });
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({ message: `no token provided` });
    }
}

router.get('/', async (req, res) => {
    try {
        const data = await users('users');
        console.log(data);
        if (data) {
            res.status(200).json(data);
        } else res.status(400).json(`no users found`);
    } catch (err) {}
});

module.exports = router;
