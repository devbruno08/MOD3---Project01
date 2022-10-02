const charactersService = require('../services/character.service');

async function findAllCharactersController(req, res) {
  try {
    const allCharacters = await charactersService.findAllCharactersService();
    res.status(200).send(allCharacters);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

async function findByIdCharacterController(req, res) {
  const idParam = req.params.id;
  const oneCharacter = await charactersService.findByIdCharacterService(idParam);
  if (oneCharacter) {
    res.status(200).send(oneCharacter);
  } else {
    res.status(400).send({ message: 'Não existe nenhum character com esse id' });
  }
}

async function createCharacterController(req, res) {
  try {
    const character = req.body;
    const characterCreated = await charactersService.createCharacterService(
      character,
    );
    res.status(201).send(characterCreated);
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ message: err.message });
  }
}

async function updateCharacterController(req, res) {
  try {
    const character = req.body;
    const characterUpdated = await charactersService.updateCharacterService(character);
    res.status(200).send(characterUpdated);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}

async function deleteCharacterController(req, res) {
  const idParam = req.params.id;
  const deletedCharacter = await charactersService.deleteCharacterService(idParam);
  if (deletedCharacter) {
    res.status(200).send(deletedCharacter);
  } else {
    res
      .status(400)
      .send({ message: 'Nenhum character com esse id foi encontrado' });
  }
}

module.exports = {
  findAllCharactersController,
  findByIdCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
