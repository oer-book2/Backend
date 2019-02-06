const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../database/dbconfig.js');
const users = require('./users.js');

const router = express.Router();

router.use(helmet());
router.use(express.json());
router.use(cors());

function generateToken(user) {
    const payload = {
        name: user.name,
        password: user.password
    };
    const secret = process.env.JWT_SECRET;
    const options = {
        expiresIn: '45m'
    };
    return jwt.sign(payload, secret, options)
}

router.post('/', async(req, res) => {
    const userInfo = req.body;
    console.log('userinfo' , userInfo)
	const hash = bcrypt.hashSync(userInfo.password, 12);
    userInfo.password = hash;
    
    //const users = await db('users')
    
    try{
        const data = await db('users').insert(userInfo)
        if(data) {
            const token = generateToken(data);
            res.status(201).json({data, token})
        } else {
            res.status(400).json({message: `please enter name and password.`})
        }
    }catch(err){
        console.log(err)

        res.status(500).json({message: `there was an error entering name or password.`})
    }
});



module.exports = router