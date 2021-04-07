const {gql} = require('apollo-server');

const mutation:string = gql`
    type Mutation {
        createTrainer(trainer: TrainerInput): Trainer
    }
    input TrainerInput {
        name: String
        pokemons: [String]
    }
`;
export = mutation;