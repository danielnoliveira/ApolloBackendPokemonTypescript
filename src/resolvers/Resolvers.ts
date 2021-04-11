const Pokemon = require('../database/models/Pokemom');
const Trainer = require('../database/models/Trainer');
const History = require('../database/models/History');

import {IPokemon} from './../database/models/IPokemon';
import {ITrainer} from './../database/models/ITrainer';

interface QueryPokemons {
    generation: string;
    is_legendary: string;
    type1: string;
    type2: string;
    abilities: Array<string>;
}
interface MutationCreateTrainer {
    trainer: Object;
}

const Resolvers = {
    Query: {
        async pokemons(_:any,{generation , is_legendary, type1, type2, abilities}:QueryPokemons):Promise<Array<IPokemon>>{
            const params:any = {};
            if(generation){
                params.generation = generation;
            }
            if(is_legendary){
                params.is_legendary = is_legendary;
            }
            if(type1){
                params.type1 = type1;
            }
            if(type2){
                params.type2 = type2;
            }
            if(abilities){
                params.abilities = abilities;
            }
            const result: Array<IPokemon> = await Pokemon.aggregate([{$match:params},{$sample: {size: 10}}]).exec();
            
            const rowHistory = new History({pokemons:result.map(p => p._id)});
            rowHistory.save();
            
            return result;
        },
        trainer(_:any,{name}:{name:string}):ITrainer{
            const params: any = {};
            params.name = name;
            return Trainer.findOne(params).populate('pokemons');
        }
    },
    Mutation: {
        createTrainer(_:any, {trainer}:MutationCreateTrainer):ITrainer{
            const newTrainer = new Trainer(trainer);
            return newTrainer.save();
        }
    }
}
export = Resolvers;