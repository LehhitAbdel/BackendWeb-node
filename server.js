const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/newsPostModel')
const app = express()

app.use(express.json());

app.get('/test',(req,res)=> {
    res.send('test')
})



app.post('/newspost', async (req,res) => {
    try {
        const post = await Post.create(req.body)
        res.status(200).json(post);
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})


mongoose.
connect('mongodb+srv://admin:admin123@nodeapi.1dzfhcd.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    const PORT = 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    console.log('connected to db')
}).catch((error) => {
    console.log(error)
})

