const express = require('express');
const path = require('path');

const routerPrincipal = require('./routes/principal');
const routerPedidos = require('./routes/pedidos');
const routerPerfil = require('./routes/perfil');

const app = express();
const port = 3000;

//Configurações
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/perfil', routerPerfil);
app.use('/pedidos', routerPedidos);
app.use('/', routerPrincipal);

app.listen(port, () => {
    console.log(`Servidor subiu na porta: ${port}`);
});