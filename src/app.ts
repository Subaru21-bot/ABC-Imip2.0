const express = require('express');
const app1 = express();

const alunoRoutes = require('./routes/alunoRoutes');
const professorRoutes = require('./routes/professorRoutes')

// Middleware para JSON
app1.use(express.json());

// Rotas
app1.use('/aluno', alunoRoutes);
app1.use('/professor', professorRoutes);

module.exports = app1;