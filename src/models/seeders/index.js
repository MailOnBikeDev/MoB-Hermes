const db = require("../index");
const User = db.user;
const Mobiker = db.mobiker;
const Cliente = db.cliente;
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

// Usuarios
const users = require("./usuarios.seed");

// MoBiker
const mobikers = require("./mobikers.seed");

// Clientes
const clientes = require("./clientes.seed");

// Roles
const roles = require("./tablas auxiliares/roles.seed");

// Rangos
const rangos = require("./tablas auxiliares/rangosMoB.seed");

// Tipo de Comprobante
const tipoDeComprobante = require("./tablas auxiliares/comprobantes.seed");

// Tipo de Carga
const tipoDeCarga = require("./tablas auxiliares/tipoCarga.seed");

// Modalidad
const modalidades = require("./tablas auxiliares/modalidad.seed");

// Formas de Pago
const formasDePago = require("./tablas auxiliares/formasPago.seed");

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

// Códigos Postales
const codigosPostales = require("./tablas auxiliares/codigosPostales.seed");

const ejecutarSeed = async () => {
	try {
		// Crear conexión
		await db.sequelize.sync({ force: true });
		console.log("Borrando la data y creando nuevas tablas...");

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

		// Creando los Códigos Postales
		codigosPostales.forEach((codigo) => CodigoPostal.create(codigo));

		// Creando usuarios
		users.forEach(async (user) => {
			const roles = user.roles;

			const usuario = await User.create(user);
			await usuario.addRoles(roles);
		});

		// Creando los MoBikers
		mobikers.forEach(async (mobiker) => {
			const distrito = mobiker.distrito;
			const rangoInicial = 1;

			const nuevoMobiker = await Mobiker.create(mobiker);
			await nuevoMobiker.setDistrito(distrito);
			await nuevoMobiker.setRango(rangoInicial);
		});

		// Creando los clientes
		clientes.forEach(async (cliente) => {
			const distrito = cliente.distrito;
			const comprobante = cliente.comprobante;
			const rolDelCliente = cliente.rol;
			const tipoEnvio = cliente.tipoEnvio;
			const tipoDeCarga = cliente.carga;
			const pago = cliente.pago;

			const nuevoCliente = await Cliente.create(cliente);
			await nuevoCliente.setDistrito(distrito);
			await nuevoCliente.setTipoDeComprobante(comprobante);
			await nuevoCliente.setRolCliente(rolDelCliente);
			await nuevoCliente.setTipoDeCarga(tipoDeCarga);
			await nuevoCliente.setFormaDePago(pago);
			await nuevoCliente.setTipoDeEnvio(tipoEnvio);
		});
	} catch (error) {
		console.log(`Ha ocurrido un error al ejecutar la Seed: ${error.message}`);
		console.log(error);
	}
};

ejecutarSeed();
