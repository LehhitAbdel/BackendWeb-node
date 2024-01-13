const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({

    title: { type: String, required: true },
    content: { type: String, required: true }

  });

  const Faq = mongoose.model('FAQ', faqSchema);
  module.exports = Faq; 

