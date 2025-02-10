const express = require('express');
const path = require('path');
const {title} = require('process');
const app = express();
const port = 3000;

// Middleware para parsear o corpo das requisições
app.use(express.json());

// Configurar o Express para usar EJS como template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Middleware para arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Rota main
app.get('/', (_, res) => {
    res.render('index', {title: "home", page: "pages/home" })
});

// Rota sobre
app.get("/sobre", (_, res) => {
    res.render('index', { title: "sobre", page: "pages/sobre" })
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

