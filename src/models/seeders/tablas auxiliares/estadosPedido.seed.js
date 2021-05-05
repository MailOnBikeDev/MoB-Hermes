const estadosPedido = [
	{ id: 1, codigo: 100, status: "Pedido programado", tag: "Programado" },
	{
		id: 2,
		codigo: 200,
		status: "Pedido asignado / Por recoger",
		tag: "Por recoger",
	},
	{ id: 3, codigo: 300, status: "Pedido en tránsito", tag: "En tránsito" },
	{
		id: 4,
		codigo: 401,
		status: "Entregado: al destinatario",
		tag: "Destinatario",
	},
	{
		id: 5,
		codigo: 402,
		status: "Entregado: a un familiar o conocido",
		tag: "Tercero",
	},
	{
		id: 6,
		codigo: 403,
		status: "Entregado: al vigilante / portero",
		tag: "Vigilancia",
	},
	{
		id: 7,
		codigo: 501,
		status: "Falso flete: cliente ausente",
		tag: "FF-1",
	},
	{
		id: 8,
		codigo: 502,
		status: "Falso flete: destinatario ausente",
		tag: "FF-2",
	},
	{ id: 9, codigo: 503, status: "Falso flete: dirección errada", tag: "FF-3" },
	{
		id: 10,
		codigo: 504,
		status: "Falso flete: No aplica a Entidad Institución",
		tag: "FF-4",
	},
	{
		id: 11,
		codigo: 505,
		status: "Falso flete: destinatario rechaza producto / documento",
		tag: "FF-5",
	},
	{
		id: 12,
		codigo: 506,
		status: "Falso flete: discrepancia con recepción",
		tag: "FF-6",
	},
	{
		id: 13,
		codigo: 507,
		status: "Falso flete: documentos incompletos",
		tag: "FF-7",
	},
	{ id: 14, codigo: 508, status: "Falso flete: fuera de horario", tag: "FF-8" },
	{ id: 15, codigo: 509, status: "Falso flete: fuera de fecha", tag: "FF-9" },
	{
		id: 16,
		codigo: 510,
		status: "Falso flete: importe no coincide con tasa",
		tag: "FF-10",
	},
	{ id: 17, codigo: 601, status: "Anulado: cliente declina", tag: "Anulado-1" },
	{
		id: 18,
		codigo: 602,
		status: "Anulado: falta de disponibilidad de MoBikers",
		tag: "Anulado-2",
	},
	{ id: 19, codigo: 700, status: "Devolución del producto", tag: "Devolución" },
];

module.exports = estadosPedido;
