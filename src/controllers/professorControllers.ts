const { v4: uuidv4 } = require('uuid');
const { Request, Response } = require('express');

interface Professor {
    id: string;
    nome: string;
    password: string;
}

// Simulando banco de dados em memória
let professores: Professor[] = [
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

const listarProfessores = (req: typeof Request, res: typeof Response): void => {
    res.status(200).json(professores);
};

const buscarProfessorPorId = (req: typeof Request, res: typeof Response): void => {
    const { id } = req.params;

    const professor = professores.find((p: Professor) => p.id === id);

    if (!professor) {
        res.status(404).json({
            mensagem: 'Professor não encontrado'
        });
        return;
    }

    res.status(200).json(professor);
};

const criarProfessor = (req: typeof Request, res: typeof Response): void => {
    const { nome, password } = req.body;

    const novoProfessor: Professor = {
        id: uuidv4(),
        nome,
        password
    };

    professores.push(novoProfessor);

    res.status(201).json({
        mensagem: 'Professor criado com sucesso',
        professor: novoProfessor
    });
};

const updateProfessor = (req: typeof Request, res: typeof Response): void => {
    const { id } = req.params;
    const { nome, password } = req.body;

    const professorIndex = professores.findIndex((p: Professor) => p.id === id);

    if (professorIndex === -1) {
        res.status(404).json({
            mensagem: 'Professor não encontrado'
        });
        return;
    }

    const professorAtualizado: Professor = {
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

const deletarProfessor = (req: typeof Request, res: typeof Response): void => {
    const { id } = req.params;

    const professorIndex = professores.findIndex((p: Professor) => p.id === id);

    if (professorIndex === -1) {
        res.status(404).json({
            mensagem: 'Professor não encontrado'
        });
        return;
    }

    professores.splice(professorIndex, 1);

    res.status(200).json({
        mensagem: `Professor ${id} removido com sucesso`
    });
};

export = {
    listarProfessores,
    buscarProfessorPorId,
    criarProfessor,
    updateProfessor,
    deletarProfessor
};