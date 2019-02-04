const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const router = require('./router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

//sanity check 
server.get('/', (req, res) => {
    res.status(200).json({message: 'working'})
})
server.use('/oerbooker', router);

module.exports = server