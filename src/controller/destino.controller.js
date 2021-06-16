const db = require("../models/index");
const Destino = db.destino;
const Distrito = db.distrito;

const Op = db.Sequelize.Op;

module.exports = {
  searchDestino: async (req, res) => {
    try {
      const query = req.query.q;

      const destinos = await Destino.findAll({
        order: [["empresa", "ASC"]],
        where: {
          [Op.or]: [
            { contacto: { [Op.like]: `%${query}%` } },
            { empresa: { [Op.like]: `%${query}%` } },
          ],
        },
        limit: 10,
        include: [
          {
            model: Distrito,
          },
        ],
      });

      res.json(destinos);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
};
