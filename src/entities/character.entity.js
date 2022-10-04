const crypto = require('node:crypto');

class CharacterEntity {
  constructor(character) {
    this.id = character.id ?? crypto.randomUUID();
    this.name = character.name;
    this.title = character.title;
    this.gender = character.gender;
    this.imageURL = character.imageURL;
  }
  validate() {
    if (!this.name) {
      throw new Error('Nome precisa ser informado!');
    }
    if (!this.title) {
      throw new Error('Título precisa ser informado!');
    }
    if (!this.gender) {
      throw new Error('Genero precisa ser informado!');
    }
  }
  getCharacter() {
    return {
      id: this.id,
      name: this.name,
      title: this.title,
      gender: this.gender,
      imageURL: this.imageURL,
    };
  }
}

module.exports = CharacterEntity;
