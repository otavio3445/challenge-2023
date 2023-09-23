const express = require('express');
const router = express.Router();
const recrutadoresControllers = require('./RecrutadorController');

// router.put('/:cpf', candidatosController.updateCandidato);
// router.delete('/:cpf', candidatosController.deleteCandidato);

router.post('/verifyRecrutador', recrutadoresControllers.verifyRecrutador);
router.post('/denyCandidato', recrutadoresControllers.denyCandidato);
router.post('/approveCandidato', recrutadoresControllers.approveCandidato);
router.get('/listHomeData', recrutadoresControllers.listHomeData);

module.exports = router;
