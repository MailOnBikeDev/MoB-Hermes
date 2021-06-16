module.exports = {
	testFile: async (req, res) => {
		try {
			const fs = require('fs'); // filesystem
			const csv = require('csv-parse');// Encargado de parsear
			const pedidos = [];

			const parseador = csv({
				delimiter: ',',//Delimitador, por defecto es la coma ,
				cast: true, // Intentar convertir las cadenas a tipos nativos
				comment: '#' // El carácter con el que comienzan las líneas de los comentarios, en caso de existir
			});

			parseador.on('readable', function () {
				let fila;
				let i = 0;
				while (fila = parseador.read()) {
					if( i != 0 ) {
						let pedido = {
							contactoConsignado: fila[0],
							empresaConsignado: fila[1],
							telefonoConsignado: fila[2],
							direccionConsignado: fila[3],
							distritoConsignado: fila[4],
							otroDatoConsignado: fila[5],
						}
						pedidos.push(pedido);
					}
					i++;
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
					res.json({data: filas});
				});				
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	}
};
