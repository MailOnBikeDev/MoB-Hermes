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
	app.post("/pedidos/crear-nuevo-pedido", controller.storagePedido);

	// Ruta para mostrar todos los Pedidos
	app.get("/pedidos/tablero-pedidos", controller.indexPedidos);

	// Ruta para mostrar UN Pedido
	app.get("/pedidos/tablero-pedidos/:id", controller.getPedidoById);

	// Ruta para editar un Pedido
	app.put("/pedidos/tablero-pedidos/:id", controller.updatePedido);

	// Ruta para buscar Pedidos por su nombre
	app.get("/pedidos", controller.searchPedido);

	// Ruta para buscar Pedidos por el status 1 = programado
	app.get("/pedidos-programados", controller.searchPedidoProgramados);

	// Ruta asignar pedidos programados
	app.put("/pedidos-programados/:id", controller.asignacionPedido);

	// Ruta para obtener los Pedidos por rango de fechas
	app.get("/historial-pedidos", controller.getHistorialPedidos);
};
