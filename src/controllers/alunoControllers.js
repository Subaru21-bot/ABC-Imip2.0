const { v4: uuidv4 } = require('uuid');

// Simulando banco de dados em memória
let alunos = [
    {
        id: '550e8400-e29b-41d4-a716-446655440000',
        nome: 'Example 1',
        password: 'password123@'
    },
    {
        id: '550e8400-e29b-41d4-a716-446655440001',
        nome: 'Example 2',
        password: 'password456@'
    }
];

const listarAlunos = (req, res) => {
    res.status(200).json(alunos);
};

const buscarAlunoPorId = (req, res) => {
    const { id } = req.params;

    const aluno = alunos.find(u => u.id === id);

    if (!aluno) {
        return res.status(404).json({
            mensagem: 'Aluno não encontrado'
        });
    }

    res.status(200).json(aluno);
};

const criarAluno = (req, res) => {
    const { nome, password } = req.body;

    const novoAluno = {
        id: uuidv4(),
        nome,
        password
    }

    alunos.push(novoAluno);

    res.status(201).json({
        mensagem: 'Aluno criado com sucesso',
        aluno: novoAluno
    });
};

const updateAluno = (req, res) => {
    const { id } = req.params;
    const { nome, password } = req.body;

    const alunoIndex = alunos.findIndex(a => a.id === id);

    if (alunoIndex === -1) {
        return res.status(404).json({
            mensagem: 'Aluno não encontrado'
        });
    }

    const alunoAtualizado = {
        ...alunos[alunoIndex],
        nome,
        password
    };

    alunos[alunoIndex] = alunoAtualizado;

    res.status(200).json({
        mensagem: 'Registro de aluno atualizado com sucesso',
        aluno: alunoAtualizado
    });
};

const deletarAluno = (req, res) => {
    const { id } = req.params;

    const alunoIndex = alunos.findIndex(u => u.id == id);

    alunos.splice(alunoIndex, 1);

    res.status(200).json({
        mensagem: `Aluno ${id} removido com sucesso`
    });
};

module.exports = {
    listarAlunos,
    buscarAlunoPorId,
    criarAluno,
    updateAluno,
    deletarAluno
};