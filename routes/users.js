const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const users = require('../database/dbconfig.js');

const router = express.Router();

router.use(helmet());
router.use(express.json());
router.use(cors());

router.get('/', async(req, res) => {
    try{
        const data = await users('users')
        console.log(data)
        if(data) {
            res.status(200).json(data)
        } else (res.status(400).json(`no users found`))
    }catch(err){}
});

module.exports = router