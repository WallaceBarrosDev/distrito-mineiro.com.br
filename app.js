const express = require('express');
const path = require('path');
const gerarLinkDePagamento = require('./mercadoPagoAPI.js');
//const gerarLinkDePagamento = () => "teste";
const app = express();
const port = 3000;

// Middleware para parsear o corpo das requisições
app.use(express.json());

// Configurar o Express para usar EJS como template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Middleware para arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Rota home
app.get('/', async (_, res) => {
    const linkDePagamento = await gerarLinkDePagamento()
    res.render('layout', {title: "Home", page: "home", linkDePagamento: linkDePagamento })

});

// Rota sobre
app.get("/sobre", (_, res) => {
    res.render('layout', { title: "Sobre", page: "sobre" })
});

// Rota compra confirmada
app.get('/confirmada', (_, res) => {
    res.render('layout', { title: 'compra comfirmada', page: 'confirmada', linkDePagamento: ''})
})

app.get('/cancelada', (_, res) => {
    res.render('layout', { title: 'compra cancelada', page: 'cancelada', linkDePagamento: ''})
})

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

