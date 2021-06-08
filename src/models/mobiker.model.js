module.exports = (sequelize, Sequelize) => {
  const Mobiker = sequelize.define(
    "mobikers",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      nombres: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      apellidos: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      fullName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      telefono: {
        type: Sequelize.STRING(12),
        allowNull: false,
      },
      telegram: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      direccion: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      tipoDocumento: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      numeroDocumento: {
        type: Sequelize.STRING(10),
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
      genero: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      banco: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      tipoCuenta: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      numeroCuentaBancaria: {
        type: Sequelize.BIGINT(14),
        allowNull: true,
      },
      equipo: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      tipoBicicleta: {
        type: Sequelize.STRING(15),
        allowNull: false,
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
      status: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      fechaNacimiento: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        get() {
          return this.getDataValue("fechaNacimiento");
        },
        set(fecha) {
          this.setDataValue(
            "fechaNacimiento",
            new Date(fecha).toISOString().split("T")[0]
          );
        },
      },
      fechaIngreso: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        get() {
          return this.getDataValue("fechaIngreso");
        },
        set(fecha) {
          this.setDataValue(
            "fechaIngreso",
            new Date(fecha).toISOString().split("T")[0]
          );
        },
      },
    },
    {
      tableName: "mobikers",
    }
  );
  return Mobiker;
};
