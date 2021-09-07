var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = new Schema(
  {
    article: {type: String, required: true, maxLength: 100},
    partida: {type: String, required: true, maxLength: 100},
  }
);

// Virtual for author's full name
ItemSchema
.virtual('item')
.get(function () {
  return this.article;
});

//Export model
module.exports = mongoose.model('items', ItemSchema);