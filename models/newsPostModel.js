const mongoose = require('mongoose');

const newsPostSchema = new mongoose.Schema({

    title: { type: String, required: true },
    content: { type: String, required: true }

  });

  const Post = mongoose.model('Post', newsPostSchema);
  module.exports = Post; 

