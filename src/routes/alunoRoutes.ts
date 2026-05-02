const expressLib = require('express');
const alunoRouter = expressLib.Router();

const {
    listarAlunos,
    buscarAlunoPorId,
    criarAluno,
    updateAluno,
    deletarAluno
} = require('../controllers/alunoControllers');

// GET /alunos
alunoRouter.get('/', listarAlunos);

// GET /alunos/:id
alunoRouter.get('/:id', buscarAlunoPorId);

// POST /alunos
alunoRouter.post('/', criarAluno);

// PUT /alunos/:id
alunoRouter.put('/:id', updateAluno);

// DELETE /alunos/:id
alunoRouter.delete('/:id', deletarAluno);

module.exports = alunoRouter;