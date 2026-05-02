const express = require('express');
const app = express();

const alunoRoutes = require('./routes/alunoRoutes');
const professorRoutes = require('./routes/professorRoutes')

// Middleware para JSON
app.use(express.json());

// Rotas
app.use('/aluno', alunoRoutes);
app.use('/professor', professorRoutes);

module.exports = app;