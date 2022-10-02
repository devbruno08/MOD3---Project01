const Character = require('../database/models/characterSchema');
const CharacterEntity = require('../entities/character.entity');

async function findAllCharactersService() {
  return await Character.find();
}

async function findByIdCharacterService(idParam) {
  const CharacterFinded = await Character.findOne({ id: idParam });
  return CharacterFinded;
}

async function createCharacterService(character) {
  const newCharacter = new CharacterEntity(character);
  newCharacter.validate();
  const characterCreate = new Character({ ...newCharacter.getCharacter() });
  characterCreate.save();
}

async function updateCharacterService(character) {
  const updateCharacter = new CharacterEntity(character);

  const updatedCharacter = {
    ...updateCharacter.getCharacter(),
  };

  const characterUpdatedInDatabe = await Character.findOneAndUpdate(
    { id: character.id },
    updatedCharacter,
    { new: true },
  );

  return characterUpdatedInDatabe;
}

async function deleteCharacterService(idParam) {
  const CharacterFinded = await Character.findOneAndDelete({ id: idParam });

  return CharacterFinded;
}

module.exports = {
  findAllCharactersService,
  findByIdCharacterService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
