const { Schema, model } = require('mongoose');

const animeSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    gender: { type: String, required: true }
});

const Anime = model("Anime", animeSchema);

module.exports = Anime;
