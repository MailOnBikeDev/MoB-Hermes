const db = require("../../models/index");
const Mobiker = db.mobiker;
const Pedido = db.pedido;

const Op = db.Sequelize.Op;

const contarPedidosMoBiker = async () => {
  const mobikers = await Mobiker.findAll();

  mobikers.forEach(async (mobiker) => {
    try {
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
    } catch (error) {
      console.log(
        `Ocurrió un error al asignar los Pedidos al MoBiker: ${error.message}`
      );
      console.log(error);
    }
  });
};

// Asignar al Cliente
contarPedidosMoBiker();
