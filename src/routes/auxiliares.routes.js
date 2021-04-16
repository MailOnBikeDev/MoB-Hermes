const { authJwt } = require("../middleware/index");
const controller = require("../controller/auxiliares.controller");

module.exports = (app) => {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	// Ruta para obtener los roles de los usuarios
	app.get(
		"/auxiliares/roles-usuarios",
		[authJwt.verifyToken],
		controller.sendRolesUsuarios
	);

	// Ruta para obtener los distritos
	app.get(
		"/auxiliares/distritos",
		[authJwt.verifyToken],
		controller.sendDistritos
	);

	// Ruta para obtener los tipo de carga
	app.get(
		"/auxiliares/tipos-de-carga",
		[authJwt.verifyToken],
		controller.sendTipoCarga
	);

	// Ruta para obtener los tipo de comprobante
	app.get(
		"/auxiliares/tipos-de-comprobantes",
		[authJwt.verifyToken],
		controller.sendTiposComprobantes
	);

	// Ruta para obtener los tipos de envios
	app.get(
		"/auxiliares/tipos-de-envios",
		[authJwt.verifyToken],
		controller.sendTipoEnvio
	);

	// Ruta para obtener las formas de pago
	app.get(
		"/auxiliares/formas-de-pago",
		[authJwt.verifyToken],
		controller.sendFormaPago
	);

	// Ruta para obtener la modalidad
	app.get(
		"/auxiliares/modalidad",
		[authJwt.verifyToken],
		controller.sendTipoModalidad
	);

	// Ruta para obtener los rangos de MoBikers
	app.get(
		"/auxiliares/rangos-MoBiker",
		[authJwt.verifyToken],
		controller.sendRangosMoB
	);

	// Ruta para obtener los roles de los clientes
	app.get(
		"/auxiliares/roles-clientes",
		[authJwt.verifyToken],
		controller.sendRolCliente
	);

	// Ruta para obtener las Entidades Bancarias
	app.get(
		"/auxiliares/entidades-financieras",
		[authJwt.verifyToken],
		controller.sendBancos
	);

	// Ruta para obtener los estados del Pedido
	app.get("/auxiliares/status", [authJwt.verifyToken], controller.sendStatus);
};
