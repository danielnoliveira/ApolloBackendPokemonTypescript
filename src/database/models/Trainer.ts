const mongoose = require('mongoose');

const pokemon = {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pokemon',
}
const TrainerSchema = mongoose.Schema({
    name: String,
    pokemons: [pokemon]
});

const Trainer = mongoose.model('Trainer',TrainerSchema);

export = Trainer;