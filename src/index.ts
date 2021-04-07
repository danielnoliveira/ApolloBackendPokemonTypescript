export {};// UAUUUUUUUUU!!!!!
require('dotenv').config();
const mongoose = require('mongoose');
const {ApolloServer} = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers/Resolvers');

const {dbUri, dbOptions} = require('./database/config');

mongoose
.connect(dbUri, dbOptions)
.then(() => console.log("Database connected"))
.catch((error:Error) => console.log("Databased failed: ", error));


const server = new ApolloServer({typeDefs, resolvers});

server
    .listen()
    .then(({url}:{url:string}) => console.log(`Servidor pronto em ${url}`))
    .catch( (err:Error) => console.log(err));