const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para parsear o corpo das requisições
app.use(express.json());

// Rota de teste
app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'index.html'))
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

