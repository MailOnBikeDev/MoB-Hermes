const { authJwt, verifySignUp } = require("../middleware/index");
const controller = require("../controller/auth.controller");

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.post(
		"/registro",
		[
			authJwt.verifyToken,
			authJwt.isAdmin,
			verifySignUp.checkDuplicateUsernameOrEmail,
			verifySignUp.checkRolesExisted,
		],
		controller.signup
	);

	app.post("/login", controller.signin);
};
