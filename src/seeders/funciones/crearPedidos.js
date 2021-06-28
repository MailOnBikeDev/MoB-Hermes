const db = require("../../models/index");
const User = db.user;
const Mobiker = db.mobiker;
const Cliente = db.cliente;
const Pedido = db.pedido;
const Distrito = db.distrito;
const Envio = db.envio;
const Modalidad = db.modalidad;
const Status = db.status;
const RolCliente = db.rolCliente;
const FormaDePago = db.formaDePago;

const Op = db.Sequelize.Op;

// Pedidos
const pedidos = require("./pedidos-seed/pedidos-01.seed");
// const pedidos = require("./pedidos-seed/pedidos-02.seed");
// const pedidos = require("./pedidos-seed/pedidos-03.seed");
// const pedidos = require("./pedidos-seed/pedidos-04.seed");
// const pedidos = require("./pedidos-seed/pedidos-05.seed");
// const pedidos = require("./pedidos-seed/pedidos-06.seed");
// const pedidos = require("./pedidos-seed/pedidos-07.seed");
// const pedidos = require("./pedidos-seed/pedidos-08.seed");
// const pedidos = require("./pedidos-seed/pedidos-09.seed");

const crearPedidos = async () => {
  pedidos.forEach(async (pedido) => {
    try {
      // Formatear Fecha
      pedido.fecha = new Date(pedido.fecha.split("/").reverse().join("-"))
        .toISOString()
        .split("T")[0];

      // Agregar Rol del Cliente tal cual aparece en la Base de Datos
      const buscarRolCliente = await RolCliente.findOne({
        where: { rol: { [Op.like]: `%${pedido.rolCliente}%` } },
      });
      pedido.rolCliente = buscarRolCliente.rol;

      // Agregar forma de Pago tal cual aparece en la Base de Datos
      const buscarFormaPago = await FormaDePago.findOne({
        where: { pago: { [Op.like]: `%${pedido.formaPago}%` } },
      });
      pedido.formaPago = buscarFormaPago.pago;

      // Ajustando el Booleano de Compensado y Facturado
      pedido.compensado = pedido.compensado === "SI" ? true : false;
      pedido.facturado = pedido.facturado === "SI" ? true : false;

      const nuevoPedido = await Pedido.create(pedido);

      const distritoPedido = await Distrito.findOne({
        where: { distrito: { [Op.like]: `%${pedido.distritoConsignado}%` } },
      });
      const tipoEnvio = await Envio.findOne({
        where: { tipo: { [Op.like]: `%${pedido.tipoDeEnvio}%` } },
      });
      const modalidadPedido = await Modalidad.findOne({
        where: { tipo: { [Op.like]: `%${pedido.modalidad}%` } },
      });
      const estadoPedido = await Status.findOne({
        where: { id: pedido.status },
      });

      let mobiker = await Mobiker.findOne({
        where: {
          fullName: { [Op.like]: `%${pedido.mobiker}%` },
        },
      });
      if (!mobiker) {
        mobiker = await Mobiker.findOne({
          where: {
            fullName: "zzMoBiker Retirado",
          },
        });
      }
      const operador = await User.findOne({
        where: {
          username: pedido.operador,
        },
      });
      let clienteAsignado = await Cliente.findOne({
        where: {
          razonComercial: { [Op.like]: `%${pedido.empresaRemitente}%` },
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
