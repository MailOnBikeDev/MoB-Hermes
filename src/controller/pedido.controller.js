const { sequelize } = require("../models/index");
const db = require("../models/index");
const Pedido = db.pedido;
const Distrito = db.distrito;
const Mobiker = db.mobiker;
const Cliente = db.cliente;
const Envio = db.envio;
const Modalidad = db.modalidad;
const Status = db.status;

const Op = db.Sequelize.Op;

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
				statusFinanciero: req.body.statusFinanciero,
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
					contacto: req.body.contactoRemitente,
				},
			});

			let estadoPedido = await Status.findOne({
				where: {
					id: req.body.status,
				},
			});

			let numeroDeBiciEnvios = clienteAsignado.biciEnvios + 1;

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

					await Cliente.update(
						{ biciEnvios: numeroDeBiciEnvios },
						{
							where: { id: clienteAsignado.id },
						}
					);

					res.json({ message: "¡Se ha creado el Pedido con éxito!" });
				} catch (err) {
					res.status(500).send({ message: err.message });
				}
			} else {
				res.json({ message: "¡Error! No se ha podido crear el pedido..." });
			}
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},

	// Mostrar todos los Pedidos
	indexPedidos: async (req, res) => {
		const pedidos = await Pedido.findAll({
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
					attributes: ["contacto", "empresa"],
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

		res.json(pedidos);
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
						attributes: ["contacto", "empresa"],
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

			if (
				req.body.status !== 1 ||
				req.body.status !== 2 ||
				req.body.status !== 3 ||
				req.body.status !== 17 ||
				req.body.status !== 18 ||
				req.body.status !== 19
			) {
				const cantidadPedidos = await Pedido.count({
					where: {
						mobikerId: mobiker.id,
					},
				});
				let mobikerActualizado = await Mobiker.update(
					{ biciEnvios: cantidadPedidos },
					{
						where: { id: mobiker.id },
					}
				);
			}

			if (pedidoActualizado) {
				res.json({ message: "¡Se ha actualizado el Pedido con éxito!" });
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

			let pedido = await Pedido.findAll({
				where: {
					[Op.or]: [
						{ id: { [Op.like]: `%${query}%` } },
						{ contactoConsignado: { [Op.like]: `%${query}%` } },
						{ empresaConsignado: { [Op.like]: `%${query}%` } },
						{ distritoRemitente: { [Op.like]: `%${query}%` } },
						{ fecha: { [Op.like]: `%${query}%` } },
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
						attributes: ["contacto", "empresa"],
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
			const query = req.query.q;

			let pedido = await Pedido.findAll({
				where: { statusId: { [Op.like]: `%${query}%` } },
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
						attributes: ["contacto", "empresa"],
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
};
