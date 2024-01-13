const express = require('express');
const Faq = require('./models/faqModel');
const router = express.Router();


//faq in DB plaatsen
router.post('/', async (req,res) => {
    try {
        const faq = await Faq.create(req.body)
        res.status(200).json(faq);
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

//faq fetchen
router.get('/', async(req,res) => {

    try {
        const faqs = await Faq.find({});
        res.status(200).json(faqs);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// search for FAQ by more then one field
router.get('/search', async (req, res) => {
    try {
        let searchQuery = {};

        // Add 'question' to search query if provided
        if (req.query.question) {
            searchQuery.question = { $regex: req.query.question, $options: 'i' };
        }

        // Add 'category' to search query if provided
        if (req.query.category) {
            searchQuery.category = { $regex: req.query.category, $options: 'i' };
        }

        const faqs = await Faq.find(searchQuery);
        res.status(200).json(faqs);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


//fetch faq met id
router.get('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const faq = await Faq.findById(id);
        res.status(200).json(faq);
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})

//faq updaten
router.put('/:id', async(req,res) => {

    try {

    const {id} = req.params;
    const faq = await Faq.findByIdAndUpdate(id, req.body);
        if(!faq){
            return res.status(404).json({message: 'cannot find post with id ${id}'})
        }
    const updatedFaq = await Faq.findById(id);
    res.status(200).json(updatedFaq);
    
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//faq deleten van db 
router.delete('/:id', async(req,res) => {

    try {
        const {id} = req.params;
        const faq = await Faq.findByIdAndDelete(id);
        if(!faq){
            return res.status(404).json({message: 'cannot find post with id ${id}'})
        }
        res.status(200).json({faq});
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})




module.exports = router;

