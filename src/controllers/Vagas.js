const express = require('express');
const router = express.Router();
const vagasController = require('./VagaController');

router.get('/listVagas', vagasController.listVagas);;

module.exports = router;
