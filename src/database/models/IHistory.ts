import {Document} from 'mongoose';

export interface IHistory extends Document {
    pokemons:[object]
}