const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear o corpo das requisições
app.use(express.json());

// Rota de teste
app.get('/', (_, res) => {
  res.send('Olá, mundo! Rota de teste funcionando.');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

