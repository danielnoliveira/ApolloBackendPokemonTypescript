const {gql} = require("apollo-server");

const query:string = gql`
    type Query {
        pokemons(generation: String,is_legendary: String, type1: String, type2: String, abilities: [String]):[Pokemon]
        trainer(name: String): Trainer
    }
`;

export = query;