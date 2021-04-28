const db = require("../models/index");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
	// Register
	signup: async (req, res) => {
		try {
			// Guardar el usuario en la Base de Datos
			const user = await User.create({
				fullName: req.body.fullName,
				username: req.body.username,
				email: req.body.email,
				password: bcrypt.hashSync(req.body.password, 10),
				empresa: req.body.empresa,
			});

			// Asignar los roles
			const roles = await Role.findAll({
				where: {
					name: {
						[Op.or]: req.body.roles,
					},
				},
			});
			user.setRoles(roles);

			res.status(200).json({
				message: "¡El usuario fue registrado satisfactoriamente!",
			});
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},

	// Login
	signin: async (req, res) => {
		try {
			// Buscando al usuario
			const user = await User.findOne({
				where: { username: req.body.username },
			});
			if (!user) {
				return res.status(404).send({ message: "Usuario no encontrado." });
			}

			// Comprobando la password
			const passwordIsValid = bcrypt.compareSync(
				req.body.password,
				user.password
			);
			if (!passwordIsValid) {
				return res.status(401).send({
					accessToken: null,
					message: "¡Usuario o contraseña inválida!",
				});
			}

			// Revisando las autoridades
			const authorities = [];
			const roles = await user.getRoles();

			for (let i = 0; i < roles.length; i++) {
				authorities.push(roles[i].name.toUpperCase());
			}
			user.roles = authorities;

			// Creando el token
			const token = jwt.sign({ data: user }, config.secret, {
				expiresIn: 43200, // 12 horas
			});

			// Enviando el accessToken
			res.status(200).json({
				id: user.id,
				fullName: user.fullName,
				username: user.username,
				email: user.email,
				empresa: user.empresa,
				roles: authorities,
				accessToken: token,
				message: "Inicio de sesión correcto",
			});
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},
};
