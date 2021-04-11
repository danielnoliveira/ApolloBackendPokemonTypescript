require('dotenv').config();
const csv = require('csv-parser');
const fs = require('fs');
const path = require("path");
const mongoose = require("mongoose");

const {dbUri, dbOptions} = require('../src/Database/config');

mongoose
    .connect(dbUri, dbOptions)
    .then(() => console.log("Database connected"))
    .catch((error) => console.log("Databased failed: ", error));

const ThePath = path.join(__dirname, 'pokemon.csv');

const Pokemon = require('../src/Database/models/Pokemon');

fs.createReadStream(ThePath)
    .pipe(csv({ delimiter: ',' }))
    .on('data', async (r) => {
        let abilities = r.abilities.slice(1, -1).split(',').map(ab => ab.replace(/'/gm, "").trim());
        var nPokemon = new Pokemon({ ...r, abilities });
        await nPokemon.save();
    })
    .on('end', () => {
        mongoose.disconnect();
    })