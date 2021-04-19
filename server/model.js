var mongoose = require('mongoose');

var videoSchema = new mongoose.Schema({

},{ strict: false })

var videoModel = new mongoose.model('VideoModel', videoSchema);

module.exports = videoModel;