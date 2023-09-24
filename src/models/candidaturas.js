// models/Todo.js
const mongoose = require('mongoose');

const CandidaturaSchema = new mongoose.Schema({
    cpf: String,
    idade: Number,
    genero : String,
	lgbt : Boolean,
	pcd : Boolean,
	povos : Boolean,
	etinia : String,
	renda : String,
    idVaga: String,
    external: Boolean,
    empregado: Boolean,
    url: String,
    active: Boolean
});

module.exports = mongoose.model('candidatura', CandidaturaSchema);