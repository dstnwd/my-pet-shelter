const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema(
    {
        petName: {
            type: String,
            required: [true, "Pet name is Required."],
            minLength: [3, "Pet name must be at least 3 characters long."],
        },
        petType: {
            type: String,
            required: [true, "Pet type is Required"],
            minLength: [3, "Pet type must be at least 3 characters long."],
        },
        petDescription: {
            type: String,
            required: [true, "Pet description is Required."],
            minLength: [3, "Pet description must be at least 3 characters long.",]
        },
        petPictureUrl: {
            type: String,
            required: [true, "Pet picture url is Required."]
        },
        petSkillOne: {
            type: String,
        },
        petSkillTwo: {
            type: String,
        },
        petSkillThree: {
            type: String,
        }
    }, { timestamps: true }
);

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;