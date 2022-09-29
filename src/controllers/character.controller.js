const charactersService = require('../services/character.service');

async function findAllCharactersController(req, res) {
  try {
    const allAnimes = await charactersService.findAllCharactersService();
    res.status(200).send(allAnimes);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

async function findByIdCharacterController(req, res) {
  const idParam = req.params.id;
  const uniqueAnime = await charactersService.findByIdCharacterService(idParam);
  if (uniqueAnime) {
    res.status(200).send(uniqueAnime);
  } else {
    res.status(400).send({ message: 'Não existe nenhum anime com esse id' });
  }
}

async function createCharacterController(req, res) {
  try {
    const character = req.body;
    const animeCreated = await charactersService.createCharacterService(
      character,
    );
    res.status(201).send(animeCreated);
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ message: err.message });
  }
}

async function updateCharacterController(req, res) {
  try {
    const anime = req.body;
    const animeUpdated = await charactersService.updateCharacterService(anime);
    res.status(200).send(animeUpdated);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}

async function deleteCharacterController(req, res) {
  const idParam = req.params.id;
  const deletedAnime = await charactersService.deleteCharacterService(idParam);
  if (deletedAnime) {
    res.status(200).send(deletedAnime);
  } else {
    res
      .status(400)
      .send({ message: 'Nenhum anime com esse id foi encontrado' });
  }
}

module.exports = {
  findAllCharactersController,
  findByIdCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
