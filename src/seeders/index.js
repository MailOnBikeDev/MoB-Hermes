const db = require("../models/index");
const User = db.user;
const Mobiker = db.mobiker;
const Cliente = db.cliente;
const Pedido = db.pedido;
const Role = db.role;
const Distrito = db.distrito;
const CodigoPostal = db.codigoPostal;
const Rango = db.rango;
const Comprobante = db.comprobante;
const Carga = db.carga;
const Modalidad = db.modalidad;
const FormaDePago = db.formaDePago;
const RolCliente = db.rolCliente;
const Envio = db.envio;
const Bancos = db.bancos;
const Status = db.status;
const Empresa = db.empresa;

// Usuarios
const usuarios = require("./usuarios.seed");

// MoBikers
const mobikers = require("./mobikers.seed");

// Clientes
const clientes = require("./clientes.seed");

// Pedidos
const pedidos = require("./pedidos.seed");

// Roles del Usuario
const roles = require("./tablas auxiliares/roles.seed");

// Rangos
const rangos = require("./tablas auxiliares/rangos.seed");

// Tipo de Comprobante
const tipoDeComprobante = require("./tablas auxiliares/tipoDeComprobante.seed");

// Tipo de Carga
const tipoDeCarga = require("./tablas auxiliares/tipoDeCarga.seed");

// Modalidad
const modalidades = require("./tablas auxiliares/modalidades.seed");

// Formas de Pago
const formasDePago = require("./tablas auxiliares/formasDePago.seed");

// Roles de Cliente
const rolesCliente = require("./tablas auxiliares/rolesCliente.seed");

// Tipo de Envío
const tipoEnvio = require("./tablas auxiliares/tipoEnvio.seed");

// Bancos
const entidadesFinancieras = require("./tablas auxiliares/entidadesFinancieras.seed");

// Estados del Pedido
const estadosPedido = require("./tablas auxiliares/estadosPedido.seed");

// Distritos
const distritos = require("./tablas auxiliares/distritos.seed");

// Empresas
const empresas = require("./empresas.seed");

// Códigos Postales
const codigosPostales = require("./tablas auxiliares/codigosPostales.seed");

//
const ejecutarSeed = async () => {
  try {
    await db.sequelize.sync({ force: false });
    console.log("Borrando data y creando nuevas tablas...");

    // Creando roles
    roles.forEach(async (rol) => await Role.create(rol));

    // Creando los rangos
    rangos.forEach(async (rango) => await Rango.create(rango));

    // Creando los distritos
    distritos.forEach(async (distrito) => await Distrito.create(distrito));

    // Creando tabla de comprobante
    tipoDeComprobante.forEach(
      async (comprobante) => await Comprobante.create(comprobante)
    );

    // Creando tabla de tipo de Carga
    tipoDeCarga.forEach(async (carga) => await Carga.create(carga));

    // Creando tabla de Modalidad
    modalidades.forEach(async (modalidad) => await Modalidad.create(modalidad));

    // Creando tabla de Forma de Pago
    formasDePago.forEach(async (pago) => await FormaDePago.create(pago));

    // Creando tabla de Roles del Cliente
    rolesCliente.forEach(
      async (rolCliente) => await RolCliente.create(rolCliente)
    );

    // Creando tabla de Tipo de Envío
    tipoEnvio.forEach(async (envio) => await Envio.create(envio));

    // Creando Tabla Entidades financieras
    entidadesFinancieras.forEach(async (banco) => await Bancos.create(banco));

    // Creando la tabla de status del Pedido
    estadosPedido.forEach(async (status) => await Status.create(status));

    // Creando la tabla de status del Pedido
    empresas.forEach(async (empresa) => await Empresa.create(empresa));

    // Creando los Códigos Postales
    codigosPostales.forEach(
      async (codigo) => await CodigoPostal.create(codigo)
    );

    // Creando los Usuarios
    await crearUsuarios();

    // Creando los MoBikers
    await crearMobikers();

    // Creando los Clientes
    await crearClientes();

    // Creando los Destinos Recurrentes

    // Creando los Pedidos
    await crearPedidos();
  } catch (error) {
    console.log(
      `Ha ocurrido un error en la ejecución de la Seed: ${error.message}`
    );
    console.log(error);
  }
};

const crearUsuarios = async () => {
  try {
    usuarios.forEach(async (usuario) => {
      const roles = usuario.roles;

      const user = await User.create(usuario);
      await user.addRoles(roles);
    });
  } catch (error) {
    console.log(`Ocurrió un error al crear Usuarios: ${error.message}`);
  }
};

const crearMobikers = async () => {
  mobikers.forEach(async (mobiker) => {
    try {
      const distrito = mobiker.distrito;
      const rangoInicial = mobiker.rango;

      const nuevoMobiker = await Mobiker.create(mobiker);
      await nuevoMobiker.setDistrito(distrito);
      await nuevoMobiker.setRango(rangoInicial);
    } catch (error) {
      console.log(`Ocurrió un error al crear Mobikers: ${error.message}`);
      console.log(error);
    }
  });
};

const crearClientes = async () => {
  orEach(async (cliente) => {
    try {
      const distrito = cliente.distrito;
      const comprobante = cliente.comprobante;
      const rolDelCliente = cliente.rol;
      const tipoEnvio = cliente.tipoEnvio;
      const tipoDeCarga = cliente.carga;
      const pago = cliente.pago;

      const nuevoCliente = await Cliente.create(cliente);
      const operador = await User.findOne({
        where: { username: cliente.operador },
      });

      await nuevoCliente.setDistrito(distrito);
      await nuevoCliente.setTipoDeComprobante(comprobante);
      await nuevoCliente.setRolCliente(rolDelCliente);
      await nuevoCliente.setTipoDeCarga(tipoDeCarga);
      await nuevoCliente.setFormaDePago(pago);
      await nuevoCliente.setTipoDeEnvio(tipoEnvio);
      await nuevoCliente.setUser(operador);
    } catch (error) {
      console.log(`Ocurrió un error al crear Usuarios: ${error.message}`);
      console.log(error);
    }
  });
};

const crearPedidos = async () => {
  pedidos.forEach(async (pedido) => {
    try {
      pedido.fecha = new Date(pedido.fecha.split("/").reverse().join("-"))
        .toISOString()
        .split("T")[0];
      const distritoPedido = pedido.distritoId;
      const tipoEnvio = pedido.tipoDeEnvioId;
      const modalidadPedido = pedido.modalidadId;
      const clienteAsignado = pedido.empresaRemitente;
      const estadoPedido = pedido.statusId;

      const nuevoPedido = await Pedido.create(pedido);
      const mobiker = await Mobiker.findOne({
        where: {
          fullName: pedido.mobiker,
        },
      });
      const operador = await User.findOne({
        where: {
          username: pedido.operador,
        },
      });

      await nuevoPedido.setMobiker(mobiker);
      await nuevoPedido.setUser(operador);
      await nuevoPedido.setDistrito(distritoPedido);
      await nuevoPedido.setTipoDeEnvio(tipoEnvio);
      await nuevoPedido.setModalidad(modalidadPedido);
      await nuevoPedido.setCliente(clienteAsignado);
      await nuevoPedido.setStatus(estadoPedido);
    } catch (error) {
      console.log(`Ocurrió un error al crear Pedidos: ${error.message}`);
      console.log(error);
    }
  });
};

// Funciones
ejecutarSeed();
