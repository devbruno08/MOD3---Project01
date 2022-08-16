const route = require('express').Router();
const controllerCharacters = require('../controllers/character.controller');

route.get('/all-characters', controllerCharacters.findAllCharactersController);
route.get('/character/:id', controllerCharacters.findByIdCharacterController);
route.post('/create', controllerCharacters.createCharacterController);
route.put('/update', controllerCharacters.updateCharacterController);
route.delete('/delete/:id', controllerCharacters.deleteCharacterController);

module.exports = route;
