const Vaga = require('../models/vaga');

// Listar todos as vagas
exports.listVagas = async (req, res) => {
    try {
        const vagas = await Vaga.find({}).lean();
        res.json(vagas);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar vagas' });
    }
};
