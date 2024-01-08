const mongoose = require ('mongoose');
const { Schema } = mongoose;

const Perfil = new Schema({
    nome: {
        type: String,
        required: true,
    },
    sobrenome: {
        type: String,
        required: true,
    },
    idade: {
        type: Number,
        required: true,
    },
});

module.exports = Perfil;