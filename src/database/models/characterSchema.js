const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  gender: { type: String, required: true },
  imageURL:{ type: String, required: true},
});

const character = model('characters', characterSchema);

module.exports = character;
