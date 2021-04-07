const query = require('./query');
const mutation = require('./mutation');
const types = require('./types');

const typeDefs = [query,mutation,types];

export = typeDefs;