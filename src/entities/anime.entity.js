const crypto = require('node:crypto');

class AnimeEntity {
  constructor(anime) {
    this.id = anime.id ?? crypto.randomUUID();
    this.name = anime.name;
    this.title = anime.title;
    this.gender = anime.gender;
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
  getAnime() {
    return {
      id: this.id,
      name: this.name,
      title: this.title,
      gender: this.gender,
    };
  }
}

module.exports = AnimeEntity;
