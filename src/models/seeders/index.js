const db = require("../index");
const User = db.user;
const Mobiker = db.mobiker;
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

db.sequelize
	.sync({ force: true })
	.then(() => {
		// Crear conexión
		console.log("Borrando data y creando nuevas tablas...");
	})
	.then(() => {
		// Creando roles
		roles.forEach((rol) => Role.create(rol));
	})
	.then(() => {
		// Creando los rangos
		rangos.forEach((rango) => Rango.create(rango));
	})
	.then(() => {
		// Creando los distritos
		distritos.forEach((distrito) => Distrito.create(distrito));
	})
	.then(() => {
		// Creando tabla de comprobante
		tipoDeComprobante.forEach((comprobante) => Comprobante.create(comprobante));
	})
	.then(() => {
		// Creando tabla de tipo de Carga
		tipoDeCarga.forEach((carga) => Carga.create(carga));
	})
	.then(() => {
		// Creando tabla de Modalidad
		modalidades.forEach((modalidad) => Modalidad.create(modalidad));
	})
	.then(() => {
		// Creando tabla de Forma de Pago
		formasDePago.forEach((pago) => FormaDePago.create(pago));
	})
	.then(() => {
		// Creando tabla de Roles del Cliente
		rolesCliente.forEach((rolCliente) => RolCliente.create(rolCliente));
	})
	.then(() => {
		// Creando tabla de Tipo de Envío
		tipoEnvio.forEach((envio) => Envio.create(envio));
	})
	.then(() => {
		// Creando Tabla Entidades financieras
		entidadesFinancieras.forEach((banco) => Bancos.create(banco));
	})
	.then(() => {
		// Creando la tabla de status del Pedido
		estadosPedido.forEach((status) => Status.create(status));
	})
	.then(() => {
		// Creando usuarios
		users.forEach((user) => {
			let roles = user.roles;
			User.create(user).then((usuario) => {
				usuario.addRoles(roles);
			});
		});
	})
	.then(() => {
		// Creando los MoBikers
		mobikers.forEach((mobiker) => {
			let distrito = mobiker.distrito;
			let rangoInicial = 1;
			Mobiker.create(mobiker).then((nuevoMobiker) => {
				nuevoMobiker.setDistrito(distrito);
				nuevoMobiker.setRango(rangoInicial);
			});
		});
	})
	.catch((err) => console.log(err))
	.then(() => {
		// Creando los Códigos Postales
		codigosPostales.forEach((codigo) => CodigoPostal.create(codigo));
	});
