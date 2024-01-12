const mongoose = require('mongoose');

const newsPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('NewsPost', newsPostSchema);
