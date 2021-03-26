const db = require("../models/index");
const Mobiker = db.mobiker;
const Distrito = db.distrito;
const Rango = db.rango;
const Pedido = db.pedido;
const Cliente = db.cliente;
const Envio = db.envio;
const Modalidad = db.modalidad;
const Status = db.status;

const Op = db.Sequelize.Op;

module.exports = {
	storageMobiker: async (req, res) => {
		try {
			const mobiker = {
				nombres: req.body.nombres,
				apellidos: req.body.apellidos,
				telefono: req.body.telefono,
				telegram: req.body.telegram,
				direccion: req.body.direccion,
				tipoDocumento: req.body.tipoDocumento,
				numeroDocumento: req.body.numeroDocumento,
				email: req.body.email,
				genero: req.body.genero,
				banco: req.body.banco,
				tipoCuenta: req.body.tipoCuenta,
				numeroCuentaBancaria: req.body.numeroCuentaBancaria,
				equipo: req.body.equipo,
				tipoBicicleta: req.body.tipoBicicleta,
				fechaNacimiento: req.body.fechaNacimiento,
				fechaIngreso: req.body.fechaIngreso,
				status: req.body.status,
			};

			mobiker.fullName = `${req.body.nombres.split(" ")[0]} ${
				req.body.apellidos.split(" ")[0]
			}`;

			let distrito = await Distrito.findOne({
				where: {
					distrito: req.body.distrito,
				},
			});

			let rangoInicial = await Rango.findOne({
				where: {
					rangoMoBiker: req.body.rango,
				},
			});

			if (distrito && rangoInicial) {
				try {
					let nuevoMobiker = await Mobiker.create(mobiker);

					await nuevoMobiker.setDistrito(distrito);
					await nuevoMobiker.setRango(rangoInicial);

					res.json({ message: "¡Se ha creado el MoBiker con éxito!" });
				} catch (err) {
					res.status(500).send({ message: err.message });
				}
			} else {
				res.json({ message: "¡Error! No se ha podido crear el mobiker..." });
			}
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},

	// Mostrar todos los MoBikers
	equipoMobiker: async (req, res) => {
		try {
			let mobikers = await Mobiker.findAll({
				include: [
					{
						model: Distrito,
					},
					{
						model: Rango,
					},
				],
			});

			res.json(mobikers);
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},

	// Mostrar 1 MoBiker por id
	getMobikerById: async (req, res) => {
		try {
			const id = req.params.id;

			let mobiker = await Mobiker.findByPk(id, {
				include: [
					{
						model: Distrito,
					},
					{
						model: Rango,
					},
				],
			});

			if (!mobiker) {
				res.status(404).json({ msg: "No se ha encontrado el MoBiker" });
			} else {
				res.json(mobiker);
			}
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},

	getPedidosDelMobiker: async (req, res) => {
		try {
			const id = req.params.id;

			let pedidosDelMobiker = await Pedido.findAll({
				order: [["id", "DESC"]],
				where: {
					[Op.and]: [
						{ mobikerId: id },
						{ statusId: { [Op.between]: [4, 16] } },
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

			res.json(pedidosDelMobiker);
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},

	// Editar MoBiker
	updateMobiker: async (req, res) => {
		try {
			const id = req.params.id;

			let distrito = await Distrito.findOne({
				where: {
					distrito: req.body.distrito,
				},
			});

			let rangoInicial = await Rango.findOne({
				where: {
					rangoMoBiker: req.body.rango,
				},
			});

			let mobiker = {
				nombres: req.body.nombres,
				apellidos: req.body.apellidos,
				telefono: req.body.telefono,
				telegram: req.body.telegram,
				direccion: req.body.direccion,
				distritoId: distrito.id,
				tipoDocumento: req.body.tipoDocumento,
				numeroDocumento: req.body.numeroDocumento,
				email: req.body.email,
				genero: req.body.genero,
				banco: req.body.banco,
				tipoCuenta: req.body.tipoCuenta,
				numeroCuentaBancaria: req.body.numeroCuentaBancaria,
				rangoId: rangoInicial.id,
				equipo: req.body.equipo,
				tipoBicicleta: req.body.tipoBicicleta,
				fechaNacimiento: req.body.fechaNacimiento,
				fechaIngreso: req.body.fechaIngreso,
				status: req.body.status,
			};

			mobiker.fullName = `${req.body.nombres.split(" ")[0]} ${
				req.body.apellidos.split(" ")[0]
			}`;

			let mobikerActualizado = await Mobiker.update(mobiker, {
				where: {
					id: id,
				},
			});

			if (mobikerActualizado) {
				res.json({ message: "¡Se ha actualizado el MoBiker con éxito!" });
			} else {
				res.json({
					message: "¡Error! No se ha podido actualizar el mobiker...",
				});
			}
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},

	searchMobiker: async (req, res) => {
		try {
			const query = req.query.q;

			let mobiker = await Mobiker.findAll({
				where: {
					fullName: { [Op.like]: `%${query}%` },
				},
				include: [
					{
						model: Distrito,
					},
					{
						model: Rango,
					},
				],
			});

			res.json(mobiker);
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},
};
