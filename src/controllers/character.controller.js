const charactersService = require('../services/character.service');

const findAllCharactersController = (req, res) => {
  const characters = charactersService.findAllCharactersService();
  res.send(characters);
};

const findByIdCharacterController = (req, res) => {
  const idParam = +req.params.id;
  const chosenCharacter = charactersService.findByIdCharacterService(idParam);
  res.send(chosenCharacter);
};

const createCharacterController = (req, res) => {
  const character = req.body;
  const newCharacter = charactersService.createCharacterService(character);
  res.send(newCharacter);
};

const updateCharacterController = (req, res) => {
  const idParam = +req.params.id;
  const characterEdit = req.body;
  const updatedCharacter = charactersService.updateCharacterService(
    idParam,
    characterEdit,
  );
  res.send(updatedCharacter);
};

const deleteCharacterController = (req, res) => {
  const idParam = req.params.id;
  charactersService.deleteCharacterService(idParam);
  res.send({ message: 'Character delete successfully!' });
};

module.exports = {
  findAllCharactersController,
  findByIdCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
