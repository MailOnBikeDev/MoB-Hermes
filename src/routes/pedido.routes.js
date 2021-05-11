const { authJwt } = require("../middleware/index");
const controller = require("../controller/pedido.controller");

module.exports = (app) => {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	// Ruta para crear nuevo Pedido
	app.post(
		"/pedidos/crear-nuevo-pedido",
		[authJwt.verifyToken],
		controller.storagePedido
	);

	// Ruta para mostrar todos los Pedidos, filtrados por fecha
	app.get(
		"/pedidos/tablero-pedidos",
		[authJwt.verifyToken],
		controller.indexPedidos
	);

	// Ruta para mostrar UN Pedido
	app.get(
		"/pedidos/tablero-pedidos/:id",
		[authJwt.verifyToken],
		controller.getPedidoById
	);

	// Ruta para editar un Pedido
	app.put(
		"/pedidos/tablero-pedidos/:id",
		[authJwt.verifyToken],
		controller.updatePedido
	);

	// Ruta para buscar Pedidos por su nombre
	app.get("/pedidos", [authJwt.verifyToken], controller.searchPedido);

	// Ruta para buscar Pedidos por el status 1 = programado
	app.get(
		"/pedidos-programados",
		[authJwt.verifyToken],
		controller.searchPedidoProgramados
	);

	// Ruta asignar pedidos programados
	app.put(
		"/pedidos-programados/:id",
		[authJwt.verifyToken],
		controller.asignacionPedido
	);

	// Ruta para obtener los Pedidos por rango de fechas
	app.get(
		"/historial-pedidos",
		[authJwt.verifyToken, authJwt.isEquipoAdmin],
		controller.getHistorialPedidos
	);
};
