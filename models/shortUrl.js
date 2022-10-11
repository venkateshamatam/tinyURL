const mongoose = require('mongoose')
const shortId = require('shortid')

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  },
  created: {
    type: Date,
    required: true,
    default: new Date().toLocaleString()
  }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)