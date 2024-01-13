const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/newsPostModel');
const newsPostRoutes = require('./newsPostRoutes');
const faqRoutes = require('./faqRoutes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/newspost', newsPostRoutes);
app.use('/faq', faqRoutes);


mongoose.
connect('mongodb+srv://admin:admin123@nodeapi.1dzfhcd.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    const PORT = 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    console.log('connected to db')
}).catch((error) => {
    console.log(error)
})


app.get('/test',(req,res)=> {
    res.send('test')
})

/*
app.post('/newspost', async (req,res) => {
    try {
        const post = await Post.create(req.body)
        res.status(200).json(post);
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

//posts fetchen
app.get('/newspost', async(req,res) => {

    try {
        const posts = await Post.find({});
        res.status(200).json(posts);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//fetch post met id
app.get('/newspost/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const post = await Post.findById(id);
        res.status(200).json(post);
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})

//posts updaten
app.put('/newspost/:id', async(req,res) => {

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
app.delete('/newspost/:id', async(req,res) => {

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
*/




