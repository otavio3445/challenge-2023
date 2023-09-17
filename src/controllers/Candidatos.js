const express = require('express');
const router = express.Router();
const candidatosController = require('./CandidatoController');

router.get('/listCandidatos', candidatosController.listCandidatos);
router.post('/add/candidato', candidatosController.addCandidato);
// router.put('/:cpf', candidatosController.updateCandidato);
// router.delete('/:cpf', candidatosController.deleteCandidato);

router.post('/verifyCandidato', candidatosController.verifyCandidato);

module.exports = router;
