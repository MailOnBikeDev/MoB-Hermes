const db = require("../models/index");
const Pedido = db.pedido;
const Distrito = db.distrito;
const Mobiker = db.mobiker;
const Cliente = db.cliente;
const Envio = db.envio;
const Modalidad = db.modalidad;
const Status = db.status;
const User = db.user;

const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? +size : 50;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};
const getPagingData = (data, page, limit) => {
  const { count: totalPedidos, rows: pedidos } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalPedidos / limit);

  return { totalPedidos, pedidos, totalPages, currentPage };
};

module.exports = {
  storagePedido: async (req, res) => {
    try {
      let pedido = {
        fecha: req.body.fecha,
        contactoRemitente: req.body.contactoRemitente,
        empresaRemitente: req.body.empresaRemitente,
        direccionRemitente: req.body.direccionRemitente,
        distritoRemitente: req.body.distritoRemitente,
        telefonoRemitente: req.body.telefonoRemitente,
        otroDatoRemitente: req.body.otroDatoRemitente,
        contactoConsignado: req.body.contactoConsignado,
        empresaConsignado: req.body.empresaConsignado,
        direccionConsignado: req.body.direccionConsignado,
        telefonoConsignado: req.body.telefonoConsignado,
        otroDatoConsignado: req.body.otroDatoConsignado,
        tipoCarga: req.body.tipoCarga,
        formaPago: req.body.formaPago,
        tarifa: req.body.tarifa,
        recaudo: req.body.recaudo,
        tramite: req.body.tramite,
        comision: req.body.comision,
        distancia: req.body.distancia,
        CO2Ahorrado: req.body.CO2Ahorrado,
        ruido: req.body.ruido,
        status: req.body.status,
        rolCliente: req.body.rolCliente,
      };

      let distritoPedido = await Distrito.findOne({
        where: {
          distrito: req.body.distritoConsignado,
        },
      });

      let mobiker = await Mobiker.findOne({
        where: {
          fullName: req.body.mobiker,
        },
      });
      let tipoEnvio = await Envio.findOne({
        where: {
          tipo: req.body.tipoEnvio,
        },
      });

      let modalidadPedido = await Modalidad.findOne({
        where: {
          tipo: req.body.modalidad,
        },
      });

      let clienteAsignado = await Cliente.findOne({
        where: {
          razonComercial: req.body.empresaRemitente,
        },
      });

      let estadoPedido = await Status.findOne({
        where: {
          id: req.body.status,
        },
      });

      let operador = await User.findOne({
        where: {
          username: req.body.operador,
        },
      });

      if (
        distritoPedido &&
        mobiker &&
        tipoEnvio &&
        modalidadPedido &&
        clienteAsignado
      ) {
        try {
          let nuevoPedido = await Pedido.create(pedido);

          await nuevoPedido.setDistrito(distritoPedido);
          await nuevoPedido.setMobiker(mobiker);
          await nuevoPedido.setTipoDeEnvio(tipoEnvio);
          await nuevoPedido.setModalidad(modalidadPedido);
          await nuevoPedido.setCliente(clienteAsignado);
          await nuevoPedido.setStatus(estadoPedido);
          await nuevoPedido.setUser(operador);

          res
            .status(200)
            .json({ message: "¡Se ha creado el Pedido con éxito!" });

          // Asignar al MoBiker
          let cantidadPedidosDelMoBiker = await Pedido.count({
            where: {
              [Op.and]: [
                { mobikerId: mobiker.id },
                { statusId: { [Op.between]: [4, 5] } },
              ],
            },
          });

          let kilometrosAsignadosMobiker = await Pedido.sum("distancia", {
            where: {
              [Op.and]: [
                { mobikerId: mobiker.id },
                { statusId: { [Op.between]: [4, 5] } },
              ],
            },
          });

          let CO2AsignadosMobiker = await Pedido.sum("CO2Ahorrado", {
            where: {
              [Op.and]: [
                { mobikerId: mobiker.id },
                { statusId: { [Op.between]: [4, 5] } },
              ],
            },
          });

          let ruidoAsignadosMobiker = await Pedido.sum("ruido", {
            where: {
              [Op.and]: [
                { mobikerId: mobiker.id },
                { statusId: { [Op.between]: [4, 5] } },
              ],
            },
          });

          await Mobiker.update(
            {
              biciEnvios: cantidadPedidosDelMoBiker,
              kilometros: kilometrosAsignadosMobiker,
              CO2Ahorrado: CO2AsignadosMobiker,
              ruido: ruidoAsignadosMobiker,
            },
            {
              where: { id: mobiker.id },
            }
          );

          // Asignar al Cliente
          let cantidadPedidosDelCliente = await Pedido.count({
            where: {
              [Op.and]: [
                { clienteId: clienteAsignado.id },
                { statusId: { [Op.between]: [1, 5] } },
              ],
            },
          });

          let kilometrosAsignados = await Pedido.sum("distancia", {
            where: {
              [Op.and]: [
                { clienteId: clienteAsignado.id },
                { statusId: { [Op.between]: [1, 5] } },
              ],
            },
          });

          let CO2Asignados = await Pedido.sum("CO2Ahorrado", {
            where: {
              [Op.and]: [
                { clienteId: clienteAsignado.id },
                { statusId: { [Op.between]: [1, 5] } },
              ],
            },
          });

          let ruidoAsignados = await Pedido.sum("ruido", {
            where: {
              [Op.and]: [
                { clienteId: clienteAsignado.id },
                { statusId: { [Op.between]: [1, 5] } },
              ],
            },
          });

          await Cliente.update(
            {
              biciEnvios: cantidadPedidosDelCliente,
              kilometros: kilometrosAsignados,
              CO2Ahorrado: CO2Asignados,
              ruido: ruidoAsignados,
            },
            {
              where: { id: clienteAsignado.id },
            }
          );
        } catch (err) {
          res.status(500).send({ message: err.message });
        }
      } else {
        res
          .status(500)
          .json({ message: "¡Error! No se ha podido crear el pedido..." });
      }
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },

  // Mostrar todos los Pedidos por la fecha
  indexPedidos: async (req, res) => {
    try {
      const { page, size, fecha } = req.query;
      let condition = { fecha: { [Op.startsWith]: `${fecha}` } };
      const { limit, offset } = getPagination(page, size);

      const data = await Pedido.findAndCountAll({
        where: condition,
        limit,
        offset,
        order: [["id", "DESC"]],
        include: [
          {
            model: Distrito,
          },
          {
            model: Mobiker,
            attributes: ["fullName"],
          },
          {
            model: Cliente,
            attributes: ["contacto", "razonComercial"],
          },
          {
            model: Envio,
          },
          {
            model: Modalidad,
          },
          {
            model: Status,
          },
        ],
      });

      const pedidos = getPagingData(data, page, limit);

      res.send(pedidos);
    } catch (error) {
      res.status(500).send({ message: error.message });
      console.log(
        `Error al llamar los pedidos por rangos de Fechas: ${error.message}`
      );
    }
  },

  // Mostrar 1 Pedido por id
  getPedidoById: async (req, res) => {
    try {
      const id = req.params.id;

      let pedido = await Pedido.findByPk(id, {
        include: [
          {
            model: Distrito,
          },
          {
            model: Mobiker,
            attributes: ["fullName"],
          },
          {
            model: Cliente,
            attributes: ["contacto", "razonComercial"],
          },
          {
            model: Envio,
          },
          {
            model: Modalidad,
          },
          {
            model: Status,
          },
        ],
      });

      if (!pedido) {
        res.status(404).json({ msg: "No se ha encontrado el Pedido" });
      } else {
        res.json(pedido);
      }
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },

  // Editar Pedido
  updatePedido: async (req, res) => {
    try {
      const id = req.params.id;

      let distritoPedido = await Distrito.findOne({
        where: {
          distrito: req.body.distritoConsignado,
        },
      });

      let mobiker = await Mobiker.findOne({
        where: {
          fullName: req.body.mobiker,
        },
      });

      let tipoEnvio = await Envio.findOne({
        where: {
          tipo: req.body.tipoEnvio,
        },
      });

      let modalidadPedido = await Modalidad.findOne({
        where: {
          tipo: req.body.modalidad,
        },
      });

      let pedido = {
        fecha: req.body.fecha,
        contactoRemitente: req.body.contactoRemitente,
        empresaRemitente: req.body.empresaRemitente,
        direccionRemitente: req.body.direccionRemitente,
        distritoRemitente: req.body.distritoRemitente,
        telefonoRemitente: req.body.telefonoRemitente,
        otroDatoRemitente: req.body.otroDatoRemitente,
        contactoConsignado: req.body.contactoConsignado,
        empresaConsignado: req.body.empresaConsignado,
        direccionConsignado: req.body.direccionConsignado,
        telefonoConsignado: req.body.telefonoConsignado,
        otroDatoConsignado: req.body.otroDatoConsignado,
        tipoCarga: req.body.tipoCarga,
        formaPago: req.body.formaPago,
        tarifa: req.body.tarifa,
        recaudo: req.body.recaudo,
        tramite: req.body.tramite,
        comision: req.body.comision,
        distancia: req.body.distancia,
        CO2Ahorrado: req.body.CO2Ahorrado,
        ruido: req.body.ruido,
        statusId: req.body.status,
        statusFinanciero: req.body.statusFinanciero,
        distritoId: distritoPedido.id,
        mobikerId: mobiker.id,
        tipoDeEnvioId: tipoEnvio.id,
        modalidadId: modalidadPedido.id,
        rolCliente: req.body.rolCliente,
      };

      let pedidoActualizado = await Pedido.update(pedido, {
        where: { id: id },
      });

      if (pedidoActualizado) {
        res.json({ message: "¡Se ha actualizado el Pedido con éxito!" });

        // Asignar al MoBiker
        let cantidadPedidosDelMoBiker = await Pedido.count({
          where: {
            [Op.and]: [
              { mobikerId: mobiker.id },
              { statusId: { [Op.between]: [4, 5] } },
            ],
          },
        });

        let kilometrosAsignadosMobiker = await Pedido.sum("distancia", {
          where: {
            [Op.and]: [
              { mobikerId: mobiker.id },
              { statusId: { [Op.between]: [4, 5] } },
            ],
          },
        });

        let CO2AsignadosMobiker = await Pedido.sum("CO2Ahorrado", {
          where: {
            [Op.and]: [
              { mobikerId: mobiker.id },
              { statusId: { [Op.between]: [4, 5] } },
            ],
          },
        });

        let ruidoAsignadosMobiker = await Pedido.sum("ruido", {
          where: {
            [Op.and]: [
              { mobikerId: mobiker.id },
              { statusId: { [Op.between]: [4, 5] } },
            ],
          },
        });

        await Mobiker.update(
          {
            biciEnvios: cantidadPedidosDelMoBiker,
            kilometros: kilometrosAsignadosMobiker,
            CO2Ahorrado: CO2AsignadosMobiker,
            ruido: ruidoAsignadosMobiker,
          },
          {
            where: { id: mobiker.id },
          }
        );

        // Asignar al Cliente
        let clienteAsignado = await Cliente.findOne({
          where: {
            contacto: req.body.contactoRemitente,
          },
        });

        let cantidadPedidosDelCliente = await Pedido.count({
          where: {
            [Op.and]: [
              { clienteId: clienteAsignado.id },
              { statusId: { [Op.between]: [1, 5] } },
            ],
          },
        });

        let kilometrosAsignados = await Pedido.sum("distancia", {
          where: {
            [Op.and]: [
              { clienteId: clienteAsignado.id },
              { statusId: { [Op.between]: [1, 5] } },
            ],
          },
        });

        let CO2Asignados = await Pedido.sum("CO2Ahorrado", {
          where: {
            [Op.and]: [
              { clienteId: clienteAsignado.id },
              { statusId: { [Op.between]: [1, 5] } },
            ],
          },
        });

        let ruidoAsignados = await Pedido.sum("ruido", {
          where: {
            [Op.and]: [
              { clienteId: clienteAsignado.id },
              { statusId: { [Op.between]: [1, 5] } },
            ],
          },
        });

        await Cliente.update(
          {
            biciEnvios: cantidadPedidosDelCliente,
            kilometros: kilometrosAsignados,
            CO2Ahorrado: CO2Asignados,
            ruido: ruidoAsignados,
          },
          {
            where: { id: clienteAsignado.id },
          }
        );
      } else {
        res.json({
          message: "¡Error! No se ha podido actualizar el Pedido...",
        });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  // Cambiar la asignacion de un MoBiker y el estado del pedido
  asignacionPedido: async (req, res) => {
    try {
      const id = req.params.id;

      let mobiker = await Mobiker.findOne({
        where: {
          fullName: req.body.mobiker,
        },
      });

      let pedidoAsignado = {
        mobikerId: mobiker.id,
        statusId: req.body.status,
      };

      let pedidoActualizado = await Pedido.update(pedidoAsignado, {
        where: { id: id },
      });

      if (pedidoActualizado) {
        res.json({ message: "¡Se ha actualizado el Pedido con éxito!" });

        // Asignar al MoBiker
        let cantidadPedidosDelMoBiker = await Pedido.count({
          where: {
            [Op.and]: [
              { mobikerId: mobiker.id },
              { statusId: { [Op.between]: [4, 5] } },
            ],
          },
        });

        let kilometrosAsignadosMobiker = await Pedido.sum("distancia", {
          where: {
            [Op.and]: [
              { mobikerId: mobiker.id },
              { statusId: { [Op.between]: [4, 5] } },
            ],
          },
        });

        let CO2AsignadosMobiker = await Pedido.sum("CO2Ahorrado", {
          where: {
            [Op.and]: [
              { mobikerId: mobiker.id },
              { statusId: { [Op.between]: [4, 5] } },
            ],
          },
        });

        let ruidoAsignadosMobiker = await Pedido.sum("ruido", {
          where: {
            [Op.and]: [
              { mobikerId: mobiker.id },
              { statusId: { [Op.between]: [4, 5] } },
            ],
          },
        });

        await Mobiker.update(
          {
            biciEnvios: cantidadPedidosDelMoBiker,
            kilometros: kilometrosAsignadosMobiker,
            CO2Ahorrado: CO2AsignadosMobiker,
            ruido: ruidoAsignadosMobiker,
          },
          {
            where: { id: mobiker.id },
          }
        );
      } else {
        res.json({
          message: "¡Error! No se ha podido actualizar el Pedido...",
        });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  // Buscar pedido por id, cliente, etc
  searchPedido: async (req, res) => {
    try {
      const query = req.query.q;

      const mob = await Mobiker.findOne({
        where: { fullName: { [Op.like]: `%${query}%` } },
      });

      if (mob) {
        const pedido = await Pedido.findAll({
          where: {
            mobikerId: mob.id,
          },
          include: [
            {
              model: Distrito,
            },
            {
              model: Mobiker,
              attributes: ["fullName"],
            },
            {
              model: Cliente,
              attributes: ["contacto", "razonComercial"],
            },
            {
              model: Envio,
            },
            {
              model: Modalidad,
            },
            {
              model: Status,
            },
          ],
        });

        res.json(pedido);
      }

      const pedido = await Pedido.findAll({
        where: {
          [Op.or]: [
            { id: { [Op.like]: `%${query}%` } },
            { contactoRemitente: { [Op.like]: `%${query}%` } },
            { empresaRemitente: { [Op.like]: `%${query}%` } },
            { contactoConsignado: { [Op.like]: `%${query}%` } },
            { empresaConsignado: { [Op.like]: `%${query}%` } },
          ],
        },
        include: [
          {
            model: Distrito,
          },
          {
            model: Mobiker,
            attributes: ["fullName"],
          },
          {
            model: Cliente,
            attributes: ["contacto", "razonComercial"],
          },
          {
            model: Envio,
          },
          {
            model: Modalidad,
          },
          {
            model: Status,
          },
        ],
      });

      res.json(pedido);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  searchPedidoProgramados: async (req, res) => {
    try {
      let { desde, hasta } = req.query;
      let condition = { fecha: { [Op.between]: [desde, hasta] } };

      let pedido = await Pedido.findAll({
        where: condition,
        include: [
          {
            model: Distrito,
          },
          {
            model: Mobiker,
            attributes: ["fullName"],
          },
          {
            model: Cliente,
            attributes: ["contacto", "razonComercial"],
          },
          {
            model: Envio,
          },
          {
            model: Modalidad,
          },
          {
            model: Status,
          },
        ],
      });

      res.json(pedido);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  getHistorialPedidos: async (req, res) => {
    try {
      let { desde, hasta, page, size } = req.query;
      let condition = { fecha: { [Op.between]: [`%${desde}%`, `%${hasta}%`] } };
      const { limit, offset } = getPagination(page, size);

      const data = await Pedido.findAndCountAll({
        where: condition,
        limit,
        offset,
        order: [["id", "DESC"]],
        include: [
          {
            model: Distrito,
          },
          {
            model: Mobiker,
            attributes: ["fullName"],
          },
          {
            model: Cliente,
            attributes: ["contacto", "razonComercial"],
          },
          {
            model: Envio,
          },
          {
            model: Modalidad,
          },
          {
            model: Status,
          },
        ],
      });

      const pedidos = getPagingData(data, page, limit);

      res.json(pedidos);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
};
