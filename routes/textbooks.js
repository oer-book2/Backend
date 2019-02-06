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
             const reviews = await db('reviews').where({textbook_id: id}).select()
             res.status(200).json({bookdata, reviews })
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
        console.log(id, 'id/reviews')
        let bookdata = await db('text-books').where({ id })
    
        if(bookdata) {
            const reviews = await db('reviews').where({ textbook_id: id }).insert({...req.body, textbook_id: id})
            const average = await db('reviews').where({textbook_id: id }).avg({'avg-rating': 'rating'}).first()
            
            const textbook = await db('text-books').where({id}).update(average)
            // textbook.then(res => {console.log(res)}).catch( err => {console.log(err)})
            
            //  bookdata = await db('text-books').where({ id })
            res.status(201).json({message: 'your review has been posted' }) //must do get after update post or delete
        } else {
            res.status(404).json(`{ sorry that book does not have any reviews }`)
        }
    }catch(err){
        console.log(err)
        res.status(500).json(`error bad request`)
    }
});

module.exports = router