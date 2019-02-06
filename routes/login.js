require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../database/dbconfig.js');

const router = express.Router();

router.use(express.json());
router.use(cors());
router.use(helmet());

// function authenticate(req, res, next) {
//     const token = req.headers.authorization;

//     if(token) {
//         jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
//             if(err) {
//                 res.status(401).json({message: `invalid token`})
//             } else {
//                 req.decodedToken = decodedToken;
//                 next();
//             }
//         })
//     } else {
//         res.status(401).json({ message: `no token provided` })
//     }
// };

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


router.post('/',  async(req, res) => {  //login
    const creds = req.body;
    try{
        const data = await db('users').where({ name: creds.name} ).first()
        if(data && bcrypt.compareSync(creds.password, data.password)) {
            const token = generateToken(data);
            res.status(201).json({ message: `welcome ${creds.name}`, token})
        } else {
            res.status(401).json({ message: `invalid name or password`})
        }
    }catch(err){
        res.status(500).json({message: `login information not found`});
    }
})
module.exports = router