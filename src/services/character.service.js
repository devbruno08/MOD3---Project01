const characters = [
  {
    id: 1,
    name: 'Monkey D. Luffy',
    title: 'Captain of straw hat',
    gender: 'male',
  },
  {
    id: 2,
    name: 'Roronoa Zoro',
    title: 'Bounty Hunter',
    gender: 'male',
  },
  {
    id: 3,
    name: 'Nami',
    title: 'Thief Pirate',
    gender: 'female',
  },
];

const findAllCharactersService = () => {
  return characters;
};

const findByIdCharacterService = (idParam) => {
  return characters.find((character) => character.id === idParam);
};

const createCharacterService = (newCharacter) => {
  const newId = characters.length + 1;
  newCharacter.id = newId;
  characters.push(newCharacter);
  return newCharacter;
};

const updateCharacterService = (id, characterEdited) => {
  characterEdited['id'] = id;
  const characterIndex = characters.findIndex(
    (character) => character.id == id,
  );
  characters[characterIndex] = characterEdited;
  return characterEdited;
};

const deleteCharacterService = (id) => {
  const characterIndex = characters.findIndex(
    (character) => character.id == id,
  );
  return characters.splice(characterIndex, 1);
};

module.exports = {
  findAllCharactersService,
  findByIdCharacterService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
