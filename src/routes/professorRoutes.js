const express = require('express');
const router = express.Router();

const {
    listarProfessores,
    buscarProfessorPorId,
    criarProfessor,
    updateProfessor,
    deletarProfessor
} = require('../controllers/professorControllers');

router.get('/', listarProfessores);

router.get('/:id', buscarProfessorPorId);

router.post('/', criarProfessor);

router.put('/:id', updateProfessor);

router.delete('/:id', deletarProfessor);

module.exports = router;