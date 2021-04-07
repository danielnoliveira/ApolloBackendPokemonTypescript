import { model, Schema, Model } from 'mongoose';
import {ITrainer} from './ITrainer';

function arraySize(arr:Array<object>):boolean{
    return arr.length<=7;
}

const pokemon:object = {
    type: Schema.Types.ObjectId,
    ref: 'Pokemon',
}
const TrainerSchema:Schema = new Schema({
    name: String,
    pokemons:{
        type:[pokemon],
        validate: [arraySize, "Treinadores so podem ter no maximo 7 pokemons"]
    } 
});

const Trainer: Model<ITrainer> = model('Trainer',TrainerSchema);

export = Trainer;