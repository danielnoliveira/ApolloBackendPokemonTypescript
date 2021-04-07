import { model, Schema, Model } from 'mongoose';
import {ITrainer} from './ITrainer';

const pokemon:object = {
    type: Schema.Types.ObjectId,
    ref: 'Pokemon',
}
const TrainerSchema:Schema = new Schema({
    name: String,
    pokemons: [pokemon]
});

const Trainer: Model<ITrainer> = model('Trainer',TrainerSchema);

export = Trainer;