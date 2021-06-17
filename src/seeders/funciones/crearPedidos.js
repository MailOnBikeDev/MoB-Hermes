const db = require("../../models/index");
const User = db.user;
const Mobiker = db.mobiker;
const Cliente = db.cliente;
const Pedido = db.pedido;

// Pedidos
const pedidos = require("./pedidos-01.seed");

const crearPedidos = async () => {
  pedidos.forEach(async (pedido) => {
    try {
      pedido.fecha = new Date(pedido.fecha.split("/").reverse().join("-"))
        .toISOString()
        .split("T")[0];
      const distritoPedido = pedido.distritoId;
      const tipoEnvio = pedido.tipoDeEnvioId;
      const modalidadPedido = pedido.modalidadId;
      const estadoPedido = pedido.statusId;

      const nuevoPedido = await Pedido.create(pedido);
      const mobiker = await Mobiker.findOne({
        where: {
          fullName: pedido.mobiker,
        },
      });
      const operador = await User.findOne({
        where: {
          username: pedido.operador,
        },
      });
      let clienteAsignado = await Cliente.findOne({
        where: {
          razonComercial: pedido.empresaRemitente,
        },
      });
      if (!clienteAsignado) {
        clienteAsignado = await Cliente.findOne({
          where: {
            razonComercial: "CLIENTE ÚNICO",
          },
        });
      }

      await nuevoPedido.setMobiker(mobiker);
      await nuevoPedido.setUser(operador);
      await nuevoPedido.setDistrito(distritoPedido);
      await nuevoPedido.setTipoDeEnvio(tipoEnvio);
      await nuevoPedido.setModalidad(modalidadPedido);
      await nuevoPedido.setCliente(clienteAsignado);
      await nuevoPedido.setStatus(estadoPedido);
    } catch (error) {
      console.log(`Ocurrió un error al crear Pedidos: ${error.message}`);
      console.log(error);
    }
  });
};

// Creando los Pedidos
crearPedidos();

// node src/seeders/funciones/crearPedidos.js
