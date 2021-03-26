const controller = require("../controller/cliente.controller");

module.exports = (app) => {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	// Ruta para crear nuevo Cliente
	app.post("/clientes/crear-nuevo-cliente", controller.storageCliente);

	// Ruta para mostrar todos los Clientes
	app.get("/clientes/tablero-clientes", controller.indexClientes);

	// Ruta para mostrar un Cliente por su id
	app.get("/clientes/tablero-clientes/:id", controller.getClienteById);

	// Ruta para mostrar los Pedidos Asignados al MoBiker
	app.get("/clientes/pedidos/:id", controller.getPedidosDelCliente);

	// Ruta para actualizar un Cliente por su id
	app.put("/clientes/tablero-clientes/:id", controller.updateCliente);

	// Ruta para buscar clientes por contacto o empresa
	app.get("/clientes", controller.searchCliente);
};
