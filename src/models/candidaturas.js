// models/Todo.js
const mongoose = require('mongoose');

const CandidaturaSchema = new mongoose.Schema({
    cpf: String,
    idVaga: String,
    external: Boolean,
    empregado: Boolean,
    active: Boolean
});

module.exports = mongoose.model('candidatura', CandidaturaSchema);