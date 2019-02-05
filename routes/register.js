const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');

const db = require('../database/dbconfig.js');
const users = require('./users.js');

const router = express.Router();

router.use(helmet());
router.use(express.json());
router.use(cors());

function generateToken(user) {
    const payload = {
        name: user.name
    };
    const secret = process.env.JWT_SECRET;
    const options = {
        expiresIn: '45m'
    };
    return jwt.sign(payload, secret, options)
}

router.post('/', (req, res) => {
	const userInfo = req.body;

	const hash = bcrypt.hashSync(userInfo.password, 12);

    userInfo.password = hash;
    
    // users.create({
    //     name: req.body.name,
    //     password: hash
    // })

	db('users')
		.insert(userInfo)
		.then(ids => {
            if(ids) {
                // const token = generateToken(user)
            res.status(201).json(ids)
            }
		})
		.catch(err => res.status(500).json(err));
});



module.exports = router