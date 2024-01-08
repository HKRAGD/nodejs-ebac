const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.send('<a href="/Pedidos">Pedidos</a>');
});

module.exports = router;