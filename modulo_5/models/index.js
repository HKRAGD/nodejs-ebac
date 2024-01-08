const mongoose = require ('mongoose');

const PedidoSchema = require('./pedidos');
const PerfilSchema = require('./perfil');

const Pedido = mongoose.model('Pedido', PedidoSchema);
const Perfil = mongoose.model('Perfil', PerfilSchema);

const connect = (banco) => {
    mongoose.connect(`mongodb://localhost:27017/${banco}`);
};

module.exports = {
    connect,
    Pedido,
    Perfil,
};