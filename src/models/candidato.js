// models/Todo.js
const mongoose = require('mongoose');

const CandidatoSchema = new mongoose.Schema({
    cpf: String,
    nome: String,
    cep: String,
    endereco: String,
    bairro: String,
    uf: String,
    numero: String,
    nascimento: String,
    rg: String,
    genero: String,
    lgbt: Boolean,
    pcd: Boolean,
    povos: Boolean,
    etinia: String,
    renda: String,
    active: Boolean,
});

module.exports = mongoose.model('candidato', CandidatoSchema);