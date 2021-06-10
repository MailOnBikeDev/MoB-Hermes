module.exports = {
	testFile: async (req, res) => {
		try {
			const fs = require('fs'); // filesystem
			const csv = require('csv-parse');// Encargado de parsear
			const filas = [];

			const parseador = csv({
				delimiter: ',',//Delimitador, por defecto es la coma ,
				cast: true, // Intentar convertir las cadenas a tipos nativos
				comment: '#' // El carácter con el que comienzan las líneas de los comentarios, en caso de existir
			});

			parseador.on('readable', function () {
				let fila;
				while (fila = parseador.read()) {
					let a = {
						nombre: fila[0],
						email: fila[1],
						telefono: fila[2],
					}
					console.log("Tenemos una fila:", fila);
					filas.push(a);
					console.log(filas)
				}
			});

			parseador.on('error', function (err) {
				console.error("Error al leer CSV:", err.message);
			});

			fs.createReadStream('src/files/file') // Abrir archivo
				.pipe(parseador) // Pasarlo al parseador a través de una tubería
				.on("end", function () {// Y al finalizar, terminar lo necesario
					console.log("Se ha terminado de leer el archivo");
					parseador.end();
					res.json({ data: filas});
				});				
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	}
};
