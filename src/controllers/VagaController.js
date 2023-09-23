const Vaga = require('../models/vaga');
const Candidatura = require('../models/candidaturas');

// Listar todos as vagas
exports.listVagas = async (req, res) => {
    try {
        const vagas = await Vaga.find({active: true}).lean();
        res.json(vagas);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar vagas' });
    }
};

exports.applyVaga = async (req, res) => {
    try {
        let isExternal = req.body.vaga.external;
        let vaga = await Vaga.find({idVaga: req.body.vaga.idVaga}).lean();
        let internalCount = vaga[0].candidaturasInternas || 0;
        let externalCount = vaga[0].candidaturasExternas || 0;
        if (isExternal) {
            externalCount += 1;
            await Vaga.updateOne({idVaga: req.body.vaga.idVaga}, {$set: {candidaturasExternas: externalCount}})
        } else {
            internalCount += 1;
            await Vaga.updateOne({idVaga: req.body.vaga.idVaga}, {$set: {candidaturasInternas: internalCount}})
        }
        res.status(201).json({message: "Vaga atualizada com sucesso"});
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar candidato' });
    }
};