const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.render('perfil/index', {
        nome: 'Rodrigo Augusto Gonçalves Dalosto',
        idade: 21,
    });
});

module.exports = router;