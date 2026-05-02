const expressLib2 = require('express');
const router = expressLib2.Router();

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