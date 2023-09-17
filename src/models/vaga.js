// models/Todo.js
const mongoose = require('mongoose');

const VagaSchema = new mongoose.Schema({
    titulo: String,
    level: String,
    publicacao: String,
    local: String,
    salario: String,
    responsavel: String,
    setor: String,
    idVaga: String,
    candidaturasInternas: Number,
    candidaturasExternas: Number,
    active: Boolean,
    candidato: String
});

module.exports = mongoose.model('vaga', VagaSchema);