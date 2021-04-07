import {Document} from 'mongoose';
export interface ITrainer extends Document {
    name: string;
    pokemons: Array<object>;
}