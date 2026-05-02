const express = require('express');
const router = express.Router();

const {
    listarAlunos,
    buscarAlunoPorId,
    criarAluno,
    updateAluno,
    deletarAluno
} = require('../controllers/alunoControllers');

router.get('/', listarAlunos);

router.get('/:id', buscarAlunoPorId);

router.post('/', criarAluno);

router.put('/:id', updateAluno);

router.delete('/:id', deletarAluno);

module.exports = router;