const Vaga = require('../models/vaga');
const Candidatura = require('../models/candidaturas');
const Candidato = require('../models/candidato');

// Listar todos as vagas
exports.listVagas = async (req, res) => {
    try {
        const vagas = await Vaga.find({ active: true }).lean();
        res.json(vagas);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar vagas' });
    }
};

exports.applyVaga = async (req, res) => {
    try {
        let isExternal = req.body.data.vaga.external;
        let vaga = await Vaga.find({ idVaga: req.body.data.vaga.idVaga }).lean();
        let internalCount = vaga[0].candidaturasInternas || 0;
        let externalCount = vaga[0].candidaturasExternas || 0;
        let cpf = req.body.data.cpf;
        let url = req.body.data.url;
        let candidato = await Candidato.find({ cpf, active: true }).lean();

        let date = new Date().getFullYear();
        let nascAno = Number(candidato[0].nascimento.substr(6, candidato[0].nascimento.length));
        let idade = Number(date-nascAno) || 0;
        let candidatura = {
            cpf,
            idade,
            "genero": candidato[0].genero || "",
            "lgbt": candidato[0].lgbt || false,
            "pcd": candidato[0].pcd || false,
            "povos": candidato[0].povos || false,
            "etinia": candidato[0].etinia || "",
            "renda": candidato[0].renda || "",
            idVaga: vaga[0].idVaga,
            external: isExternal,
            empregado: false,
            url: url || "",
            active: true
        }

        if (isExternal) {
            externalCount += 1;
            await Vaga.updateOne({ idVaga: req.body.data.vaga.idVaga }, { $set: { candidaturasExternas: externalCount } });
            await Candidatura.create(candidatura);
        } else {
            internalCount += 1;
            await Vaga.updateOne({ idVaga: req.body.data.vaga.idVaga }, { $set: { candidaturasInternas: internalCount } });
            await Candidatura.create(candidatura);
        }
        res.status(201).json({ message: "Vaga atualizada com sucesso" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error });
    }
};