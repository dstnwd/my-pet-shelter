const PetController = require('../controllers/pet.controller');

module.exports = (app) => {
    app.get('/api/pet', PetController.findAllPets);
    app.get('/api/pets/:id', PetController.findOnePet);
    app.post('/api/pet/new', PetController.createPet);
    app.put('/api/pet/:id/update', PetController.updatePet);
    app.delete('/api/pets/:id/delete', PetController.deletePet);
}