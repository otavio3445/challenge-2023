const Candidato = require('../models/candidato');

// Listar todos os candidatos
exports.listCandidatos = async (req, res) => {
    try {
        const candidatos = await Candidato.find({}).lean();
        res.json(candidatos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar candidatos' });
    }
};

exports.verifyCandidato = async (req, res) => {
    try {
        const { cpf } = req.body;
        const candidatos = await Candidato.countDocuments({ cpf, active: true });
        res.json(candidatos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao procurar candidato candidato' });
    }
}

// Adicionar um novo candidato
exports.addCandidato = async (req, res) => {
    try {
        const novoCandidato = await Candidato.create(req.body);
        res.status(201).json(novoCandidato);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar candidato' });
    }
};

// Atualizar candidato por CPF
exports.updateCandidato = async (req, res) => {
    try {
        const { cpf } = req.params;
        const candidatoAtualizado = await Candidato.findOneAndUpdate(
            { cpf },
            req.body,
            { new: true }
        );
        res.json(candidatoAtualizado);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar candidato' });
    }
};

// Deletar candidato por CPF
exports.deleteCandidato = async (req, res) => {
    try {
        const { cpf } = req.params;
        await Candidato.findOneAndDelete({ cpf });
        res.json({ message: 'Candidato deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar candidato' });
    }
};
