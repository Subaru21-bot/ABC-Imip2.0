const { v4: uuidv4 } = require('uuid');

let professores = [
    {
        id: '550e8401-e30c-41d4-a716-446655441111',
        nome: 'Example 3',
        password: 'password321@'
    },
    {
        id: '550e7500-e57z-41d4-a716-449955440001',
        nome: 'Example 4',
        password: 'password654@'
    }
];

const listarProfessores = (req, res) => {

    res.status(200).json(professores);
}

const buscarProfessorPorId = (req, res) => {

    const { id } = req.params;

    const professor = professores.find(p => p.id === id);

    if (!professor) {
        return res.status(404).json({
            mensagem: 'Professor não encontrado'
        });
    }

    res.status(200).json(professor)
}

const criarProfessor = (req, res) => {

    const { nome, password } = req.body;
    
    const novoProfessor = {
        id: uuidv4(),
        nome,
        password
    };

    professores.push(novoProfessor);

    res.status(201).json({
        mensagem: 'Professor criado com sucesso',
        aluno: novoProfessor
    });
};

const updateProfessor = (req, res) => {

    const { id } = req.params;

    const professorIndex = professores.findIndex(p => p.id === id);

    if (professorIndex === -1) {
        return res.status(404).json({
            mensagem: 'Professor não encontrado'
        });
    };

    const professorAtualizado = {
        ...professores[professorIndex],
        nome,
        password
    };

    professores[professorIndex] = professorAtualizado;

    res.status(200).json({
        mensagem: 'Registro de professor atualizado com sucesso',
        professor: professorAtualizado
    });
};

const deletarProfessor = (req, res) => {

    const { id } = req.params;

    const professorIndex = professores.findIndex(p => p.id === id);

    professores.splice(professorIndex, 1);

    res.status(200).json({
        mensagem: `Professor ${id} removido com sucesso`
    });
};

module.exports = {
    listarProfessores,
    buscarProfessorPorId,
    criarProfessor,
    updateProfessor,
    deletarProfessor
}