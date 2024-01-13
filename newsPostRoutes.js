const express = require('express');
const Post = require('./models/newsPostModel');
const router = express.Router();




//posts in DB plaatsen
router.post('/', async (req,res) => {
    try {
        const post = await Post.create(req.body)
        res.status(200).json(post);
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

//posts fetchen (limit/offset)
router.get('/', async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10; // default limit to 10
        const offset = parseInt(req.query.offset) || 0; // default offset to 0

        const posts = await Post.find({}).limit(limit).skip(offset);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


//fetch post met id
router.get('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const post = await Post.findById(id);
        res.status(200).json(post);
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})

//posts updaten
router.put('/:id', async(req,res) => {

    try {

    const {id} = req.params;
    const post = await Post.findByIdAndUpdate(id, req.body);
        if(!post){
            return res.status(404).json({message: 'cannot find post with id ${id}'})
        }
    const updatedPost = await Post.findById(id);
    res.status(200).json(updatedPost);
    
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//post deleten van db 
router.delete('/:id', async(req,res) => {

    try {
        const {id} = req.params;
        const post = await Post.findByIdAndDelete(id);
        if(!post){
            return res.status(404).json({message: 'cannot find post with id ${id}'})
        }
        res.status(200).json({post});
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})

module.exports = router;
