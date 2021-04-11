import {Model, model, Schema} from 'mongoose';

import {IHistory} from './IHistory';

const pokemon: object = {
    type: Schema.Types.ObjectId,
    ref: 'Pokemon'
}

const HistorySchema:Schema = new Schema({
    pokemons:[pokemon]
});

const History:Model<IHistory> = model('History',HistorySchema);

export = History;