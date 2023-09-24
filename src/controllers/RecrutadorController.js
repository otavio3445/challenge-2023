const Recrutador = require('../models/recrutador');
const Candidato = require('../models/candidato');
const Vaga = require('../models/vaga');
const Candidatura = require('../models/candidaturas');
const JSZip = require('jszip');

exports.verifyRecrutador = async (req, res) => {
    try {
        const { cpf } = req.body;
        const recrutadores = await Recrutador.find({ cpf, active: true }).lean();
        res.json(recrutadores);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao procurar recrutador ' });
    }
}

exports.denyCandidato = async (req, res) => {
    try {
        const { cpf, reason } = req.body.data;
        await Candidato.updateOne({ cpf }, { $set: { razaoReprovacao: reason, active: false } })

        res.json({ message: "sucesso" });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao procurar recrutador ' });
    }
}
exports.approveCandidato = async (req, res) => {
    try {
        const { cpf, reason } = req.body.data;
        await Candidato.updateOne({ cpf }, { $set: { programasRecomendados: reason, active: true } },
            { upsert: true })
        res.json({ message: "sucesso" });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao procurar recrutador ' });
    }
}

exports.listHomeData = async (req, res) => {
    try {
        const candidatos = await Candidato.countDocuments({ active: false });
        const candidaturas = await Candidatura.countDocuments({ empregado: true, active: false });
        const vagas = await Vaga.countDocuments({ active: true });

        res.json({ candidatos, candidaturas, vagas });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar candidatos' });
    }
};


exports.downloadCVs = async (req, res) => {
    try {
        const { filtros } = req.body.data;
        let candidaturas = await Candidatura.find(filtros).lean();
        let urls = [];
        let blobs = [];


        candidaturas.forEach(el => {
            urls.push(el.url)
        });


        res.send(urls);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

exports.encerrarVaga = async (req, res) => {
    try {
        const { cpf, vaga } = req.body.data;
        await Candidato.updateOne({ cpf }, { $set: { active: false } });

        await Vaga.updateOne({ idVaga: vaga.idVaga }, { $set: { active: false, candidato: cpf } })

        await Candidatura.updateOne({cpf, idVaga: vaga.idVaga }, {$set: {active: false, empregado: true}})
        res.json({ message: "sucesso" });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao procurar recrutador ' });
    }
}
