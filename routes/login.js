require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../database/dbconfig.js');

const router = express.Router();

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
	const creds = req.body;

	db('users')
		.where({ name: creds.name })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(creds.password, user.password)) {
				// login is successful
				// create the token
				const token = generateToken(user);

				res.status(200).json({ message: `welcome ${user.name}`, token });
			} else {
				res.status(401).json({ you: 'shall not pass!!' });
			}
		})
		.catch(err => res.status(500).json(err));
});

// router.post('/', async(req, res) => {  //login
//     const creds = req.body;
//     try{
//         const data = await db('users').where({ name: creds.name} ).first()
//         if(data && bcrypt.compareSync(creds.password, data.password)) {
//             const token = generateToken(data);
//             res.status(200).json({ message: `welcome ${data.name}`, token})
//         } else {
//             res.status(401).json({ you: `shall not pass!!!`})
//         }
//     }catch(err){
//         res.status(500).json(err);
//     }
// })
module.exports = router