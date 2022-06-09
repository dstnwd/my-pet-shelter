const Pet = require("../models/pet.model");

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
    .then(pet => res.json(pet))
    .catch(err => res.status(400).json(err))
}

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allThePets => res.json(allThePets))
        .catch(err => res.status(400).json(err));
};

module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(onePet => res.json(onePet))
        .catch(err => res.status(400).json(err));
};

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json(err))
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}