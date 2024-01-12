const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.get('/',(req,res) => {

    res.send('test')
})

app.get('/test',(req,res) => {

    res.send('testing')
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

