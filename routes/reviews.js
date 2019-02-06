const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const db = require('../database/dbconfig.js');

const router = express.Router();

router.use(express.json());
router.use(cors());
router.use(helmet());

router.get('/', async(req, res) => {
    try{
        const data = await db('reviews')
        if(data) {
            res.status(200).json(data)
        }
    }catch(err){}
})
router.post('/', async(req, res) => {
    try{
        const review = req.body
        const reviewData = await db('reviews').insert(review)

        if(reviewData) {
            res.status(201).json(reviewData)
        } else {
            res.status(404).json(`{error: please enter review}`)
        }
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
});

router.put('/:id', async(req, res) => {
    try{
        const data = req.body
        //const { comment } = req.body
        const reviews = await db('reviews').where({ id: req.params.id }).update(data)

        if(reviews) {
            res.status(200).json(reviews)
        } else {
            res.status(404).json(`{error: review was not edited}`)
        }
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
});

router.delete('/:id', async(req, res) => {
    try{
        const { id } = req.params
        db(id)
        const data = await db('reviews').where({ id: req.params.id }).del()
        if(data) {
            res.status(204).json(data)
        } else {
            res.status(404).json(`{ your review was not deleted }`)
        }
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router