const { v4: uuidv4 } = require('uuid');
const { Request, Response } = require('express');

interface Aluno {
    id: string;
    nome: string;
    password: string;
}

// Simulando banco de dados em memória
let alunos: Aluno[] = [
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

const listarAlunos = (req: typeof Request, res: typeof Response): void => {
    res.status(200).json(alunos);
};

const buscarAlunoPorId = (req: typeof Request, res: typeof Response): void => {
    const { id } = req.params;

    const aluno = alunos.find((u: Aluno) => u.id === id);

    if (!aluno) {
        res.status(404).json({
            mensagem: 'Aluno não encontrado'
        });
        return;
    }

    res.status(200).json(aluno);
};

const criarAluno = (req: typeof Request, res: typeof Response): void => {
    const { nome, password } = req.body;

    const novoAluno: Aluno = {
        id: uuidv4(),
        nome,
        password
    };

    alunos.push(novoAluno);

    res.status(201).json({
        mensagem: 'Aluno criado com sucesso',
        aluno: novoAluno
    });
};

const updateAluno = (req: typeof Request, res: typeof Response): void => {
    const { id } = req.params;
    const { nome, password } = req.body;

    const alunoIndex = alunos.findIndex((a: Aluno) => a.id === id);

    if (alunoIndex === -1) {
        res.status(404).json({
            mensagem: 'Aluno não encontrado'
        });
        return;
    }

    const alunoAtualizado: Aluno = {
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

const deletarAluno = (req: typeof Request, res: typeof Response): void => {
    const { id } = req.params;

    const alunoIndex = alunos.findIndex((u: Aluno) => u.id === id);

    if (alunoIndex === -1) {
        res.status(404).json({
            mensagem: 'Aluno não encontrado'
        });
        return;
    }

    alunos.splice(alunoIndex, 1);

    res.status(200).json({
        mensagem: `Aluno ${id} removido com sucesso`
    });
};

export = {
    listarAlunos,
    buscarAlunoPorId,
    criarAluno,
    updateAluno,
    deletarAluno
};