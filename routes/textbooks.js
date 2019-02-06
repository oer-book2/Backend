const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const db = require('../database/dbconfig.js');

const router = express.Router();

router.get('/', async(req,res) => {
    try{
        const data = await db('text-books')
        console.log(data)
        if(data) {
            res.status(200).json(data)
        } else (res.status(400).json(`no text books found`))
    }catch(err){
        res.status(500).json(err)
    }
});

 router.get('/:id', async(req, res) => {
     try{
         const { id } = req.params;
         const bookdata = await db('text-books').where({ id })
         if(bookdata) {
             res.status(200).json(bookdata)
         } else {
             res.status(404).json(`{ sorry that book was not found}`)
         }
     }catch(err){
         res.status(500).json(`error bad request`)
     }
 })

module.exports = router