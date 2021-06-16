const { authJwt } = require("../middleware/index");
const controller = require("../controller/destino.controller");

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Ruta para buscar Destinos recurrentes por su nombre o empresa
  app.get(
    "/destinos",
    [authJwt.verifyToken, authJwt.isEquipoAdmin],
    controller.searchDestino
  );
};
