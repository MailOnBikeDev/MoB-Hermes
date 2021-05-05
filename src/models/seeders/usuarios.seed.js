const bcrypt = require("bcryptjs");

const users = [
	{
		fullName: "Daniel Colmenares",
		username: "dcolmenares",
		email: "dacolmenares93@gmail.com",
		password: bcrypt.hashSync("123123", 10),
		empresa: "Mail On Bike",
		roles: [1, 5],
	},
	{
		fullName: "Fernando Carbajal",
		username: "fcarbajal",
		email: "fcarbajal@dan.com",
		password: bcrypt.hashSync("123123", 10),
		empresa: "Mail On Bike",
		roles: [1, 5],
	},
	{
		fullName: "Gaby Vilorio",
		username: "gvilorio",
		email: "gvil@dan.com",
		password: bcrypt.hashSync("123123", 10),
		empresa: "Mail On Bike",
		roles: [3, 5],
	},
	{
		fullName: "Anderson Vallejo",
		username: "avallejo",
		email: "avell@dan.com",
		password: bcrypt.hashSync("123123", 10),
		empresa: "Mail On Bike",
		roles: [2, 5],
	},
	{
		fullName: "Angélica Moreno",
		username: "amoreno",
		email: "amoreno@dan.com",
		password: bcrypt.hashSync("123123", 10),
		empresa: "Mail On Bike",
		roles: [2, 5],
	},
];

module.exports = users;
