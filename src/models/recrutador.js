// models/Todo.js
const mongoose = require('mongoose');

const RecrutadorSchema = new mongoose.Schema({
    cpf: String,
    nome: String,
    cargo: String,
    nascimento: String,
    active: Boolean,
});

module.exports = mongoose.model('recrutadore', RecrutadorSchema);