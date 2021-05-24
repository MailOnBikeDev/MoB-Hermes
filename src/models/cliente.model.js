module.exports = (sequelize, Sequelize) => {
  const Cliente = sequelize.define(
    "clientes",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      contacto: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      razonSocial: {
        type: Sequelize.STRING(75),
        allowNull: false,
      },
      razonComercial: {
        // Empresa
        type: Sequelize.STRING(75),
        allowNull: false,
      },
      direccion: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      telefono: {
        type: Sequelize.INTEGER(9),
        allowNull: false,
      },
      otroDato: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: true,
        validate: {
          isEmail: {
            msg: "El email tiene que ser un correo válido",
          },
        },
      },
      ruc: {
        type: Sequelize.BIGINT(11),
        allowNull: true,
      },
      biciEnvios: {
        type: Sequelize.INTEGER(6),
        defaultValue: 0,
      },
      kilometros: {
        type: Sequelize.FLOAT(8),
        defaultValue: 0,
      },
      CO2Ahorrado: {
        type: Sequelize.FLOAT(6),
        defaultValue: 0,
      },
      ruido: {
        type: Sequelize.FLOAT(5),
        defaultValue: 0,
      },
    },
    {
      tableName: "clientes",
    }
  );
  return Cliente;
};
