const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');

const users = require('../database/dbconfig.js');

const router = express.Router();

router.use(helmet());
router.use(express.json());
router.use(cors());

router.post('/', async (req, res) => {
    const userInfo = req.body;
    const hash = bcrypt.hashSync(userInfo.password, 14);

    userInfo.password = hash;
    try{
        const userData = await users('users').insert(userInfo)
        if(userData) {
            res.status(200).json(userData)
        } else {
            res.status(400).json(`{please register to view information}`)
        }
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router