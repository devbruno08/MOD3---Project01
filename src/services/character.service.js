const animes = require('../mocks/animes');
const Anime = require('../database/models/animeSchema');
const AnimeEntity = require('../entities/anime.entity');

async function findAllCharactersService() {
  return await Anime.find();
}

async function findByIdCharacterService(idParam) {
  const animeFinded = await Anime.findOne({ id: idParam });
  return animeFinded;
}

async function createCharacterService(anime) {
  const newAnime = new AnimeEntity(anime);
  newAnime.validate();
  const animeCreate = new Anime({ ...newAnime.getAnime() });
  animeCreate.save();
}

async function updateCharacterService(anime) {
  const updateAnime = new AnimeEntity(anime);

  const updatedAnime = {
    ...updateAnime.getAnime(),
  };

  const animeUpdatedInDatabase = await Anime.findOneAndUpdate(
    { id: anime.id },
    updatedAnime,
    { new: true },
  );

  return animeUpdatedInDatabase;
}

async function deleteCharacterService(idParam) {
  const animeFinded = await Anime.findOneAndDelete({ id: idParam });

  return animeFinded;
}

module.exports = {
  findAllCharactersService,
  findByIdCharacterService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
