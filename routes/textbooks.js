const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const db = require('../database/dbconfig.js');

const router = express.Router();

router.use(express.json());
router.use(cors());
router.use(helmet());

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
 });

 router.post('/:id/reviews', async(req, res) => {
    try{
        const { id } = req.params;
        const bookdata = await db('text-books').where({ id })
        console.log(bookdata)
        if(bookdata) {
            const reviews = await db('reviews').where({ textbook_id: id }).insert(req.body)
            console.log(reviews)
            res.status(201).json({ bookdata, reviews })
        } else {
            res.status(404).json(`{ sorry that book does not have any reviews }`)
        }
    }catch(err){
        console.log(err)
        res.status(500).json(`error bad request`)
    }
});

router.get('/:id/reviews', async(req, res) => {
    try{
        const { id } = req.params
        const bookData = await db('text-books').where({ id })
        if(bookData) {
            const reviews = await db('reviews').where({ review_id: id })
            res.status(200).json({ bookData, reviews })
        }
    }catch(err){
        console.log(err, 'from get id/reviews')
        res.status(500).json(err)
    }
})
module.exports = router