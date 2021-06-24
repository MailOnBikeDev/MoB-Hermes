const { authJwt } = require("../middleware/index");
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
  app.post(
    "/clientes/crear-nuevo-cliente",
    [authJwt.verifyToken, authJwt.isEquipoAdmin],
    controller.storageCliente
  );

  // Ruta para mostrar todos los Clientes
  app.get(
    "/clientes/tablero-clientes",
    [authJwt.verifyToken, authJwt.isEquipoAdmin],
    controller.indexClientes
  );

  // Ruta para mostrar un Cliente por su id
  app.get(
    "/clientes/tablero-clientes/:id",
    [authJwt.verifyToken, authJwt.isEquipoAdmin],
    controller.getClienteById
  );

  app.get(
    "/clientes/pedidos",
    [authJwt.verifyToken, authJwt.isEquipoAdmin],
    controller.getPedidosDelCliente
  );

  // Ruta para mostrar los Pedidos Asignados al MoBiker
  app.get(
    "/clientes/pedidos-del-cliente/:id",
    [authJwt.verifyToken, authJwt.isEquipoAdmin],
    controller.getPedidosDelClienteById
  );

  // Ruta para actualizar un Cliente por su id
  app.put(
    "/clientes/tablero-clientes/:id",
    [authJwt.verifyToken, authJwt.isEquipoAdmin],
    controller.updateCliente
  );

  // Ruta para buscar clientes por contacto o empresa
  app.get(
    "/clientes",
    [authJwt.verifyToken, authJwt.isEquipoAdmin],
    controller.searchCliente
  );
};
