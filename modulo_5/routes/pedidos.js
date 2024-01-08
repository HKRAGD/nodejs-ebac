const express = require('express');

const { Pedido } = require('../models');

const router = express.Router();

router.get('/', (_, res) => {
    Pedido.find({}).then((pedidos) => {
        res.render('pedidos/index', {
            nome: 'Rodrigo Augusto',
            pedidos: pedidos,
        });
    });
});

module.exports = router;