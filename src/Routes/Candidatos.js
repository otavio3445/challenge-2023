const express = require('express');
const router = express.Router();
const candidatosController = require('../controllers/CandidatoController');

router.get('/', candidatosController.listCandidatos);
// router.post('/', candidatosController.addCandidato);
// router.put('/:cpf', candidatosController.updateCandidato);
// router.delete('/:cpf', candidatosController.deleteCandidato);

router.post('/verifyCandidato', candidatosController.verifyCandidato);

module.exports = router;
