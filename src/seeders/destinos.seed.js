const destinos = [
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MITSUI AUTOMOTRIZ",
    "direccion": "CALLE SAN INGNACIO DE LOYOLA - PUERTA A",
    "telefono": "Sin Teléfono",
    "otroDato": "ALT.CDRA 60 AV. JAVIER PRADO ESTE LA MOLINA-LIMA",
    "distrito": 12
  },
  {
    "contacto": "MARTIN KANN",
    "empresa": "STUDIO TIGRES - KC TECH LATAM S.A.C. - MARTIN KANN",
    "direccion": "AV. PARDO Y ALIAGA 540",
    "telefono": "Sin Teléfono",
    "otroDato": "(ESQUINA CONQUISTADORES)",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "CONDESAN - CONSORCIO PARA EL DESARROLLO SOSTENIBLE DE LA ECORREGION ANDINA",
    "direccion": "AV LA MOLINA 1895",
    "telefono": "Sin Teléfono",
    "otroDato": "(REF. PUERTA 3 DE CIP)",
    "distrito": 12
  },
  {
    "contacto": "ENAGUAFLOR - CAROLINA DENEGRI",
    "empresa": "ENAGUAFLOR - CAROLINA DENEGRI",
    "direccion": "CALLE JULIO RAMÓN RIBEYRO 999",
    "telefono": "Sin Teléfono",
    "otroDato": "1 CUADRA DE LA CDRA 12 DE 28 DE JULIO",
    "distrito": 18
  },
  {
    "contacto": "KATHERINA DONOFRIO",
    "empresa": "KATHERINA DONOFRIO",
    "direccion": "GENERAL SILVA 604",
    "telefono": "Sin Teléfono",
    "otroDato": 2642375,
    "distrito": 18
  },
  {
    "contacto": "MONICA MARINA ROJO",
    "empresa": "MONICA MARINA ROJO",
    "direccion": "JOSÉ GABRIEL CHARIARSE 224 DPTO 405",
    "telefono": "Sin Teléfono",
    "otroDato": "28 DE JULIO CON PASEO DE LA REPUBLICA",
    "distrito": 18
  },
  {
    "contacto": "KARIL PANISSO",
    "empresa": "KARIL PANISSO",
    "direccion": "JIRÓN DE LA UNIÓN 415",
    "telefono": "Sin Teléfono",
    "otroDato": "2DO PISO DE LA PIZZERÍA",
    "distrito": 1
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "AGRORURAL",
    "direccion": "AV. SALAVERRY 1388",
    "telefono": "Sin Teléfono",
    "otroDato": "8-1PM/2-4:30PM.",
    "distrito": 14
  },
  {
    "contacto": "MARIA LUISA RENDON",
    "empresa": "MARIA LUISA RENDON",
    "direccion": "AV. AREQUIPA 4971 (301-A)",
    "telefono": "Sin Teléfono",
    "otroDato": "A 1 CUADRA DE COMPUPALACE, AL LADO DEL COLEGIO DE INGENIEROS",
    "distrito": 18
  },
  {
    "contacto": "MOSTRADOR",
    "empresa": "QUOKKA",
    "direccion": "CALLE PALMERAS 443",
    "telefono": "Sin Teléfono",
    "otroDato": "AL COSTADO DEL HOTEL ATTON",
    "distrito": 27
  },
  {
    "contacto": "JOSE URBINA",
    "empresa": "JOSE URBINA",
    "direccion": "COMBATE DE ABTAO 140",
    "telefono": "Sin Teléfono",
    "otroDato": "AL FINAL DE PROLONGACIÓN LA CASTELLANA",
    "distrito": 33
  },
  {
    "contacto": "VALERIA ALEJANDRA RÍOS RÍOS",
    "empresa": "VALERIA ALEJANDRA RÍOS RÍOS",
    "direccion": "CALLE BUENOS AIRES 218",
    "telefono": "Sin Teléfono",
    "otroDato": "ALT 11 Y 12 DE LARCO, 1 DE JUAN FANNING",
    "distrito": 18
  },
  {
    "contacto": "MARIA CRISTINA FEIJOO",
    "empresa": "MARIA CRISTINA FEIJOO",
    "direccion": "LARCO HERRERA 1081 DPTO 402",
    "telefono": "Sin Teléfono",
    "otroDato": "ALT. CRUCE DE JAVIER PRADO CON BRASIL",
    "distrito": 17
  },
  {
    "contacto": "RAÚL ROSSI",
    "empresa": "NGR",
    "direccion": "JIRÓN CAMINO REAL 1801 MZB LT17Z1",
    "telefono": "Sin Teléfono",
    "otroDato": "ALT. MERCADO JORGE CHÁVEZ SURCO VIEJO",
    "distrito": 33
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "DERCO CENTER",
    "direccion": "AV. NICOLAS AYLLON 2648",
    "telefono": "Sin Teléfono",
    "otroDato": "ALT. PUENTE SANTA ANITA CON NICOLÁS AYLLÓN",
    "distrito": 3
  },
  {
    "contacto": "ISRAEL AJEN",
    "empresa": "ISRAEL AJEN",
    "direccion": "LAS TURQUESAS 265",
    "telefono": "Sin Teléfono",
    "otroDato": "ALT. VIA EXPRESA CON CANADA",
    "distrito": 13
  },
  {
    "contacto": "MARTIN DAVALOS",
    "empresa": "MARTIN DAVALOS",
    "direccion": "CALLE FRANCISCO DEL CASTILLO 506 MIRAFLORES",
    "telefono": "Sin Teléfono",
    "otroDato": "ALTURA DE LA AV 28 DE JULIO CON VIA EXPRESA",
    "distrito": 18
  },
  {
    "contacto": "CRISTINA CRIADO",
    "empresa": "CRISLA - CRISTINA CRIADO",
    "direccion": "CALLE TENIENTE JOSE ROMANET 352",
    "telefono": "Sin Teléfono",
    "otroDato": "ALTURA DE LA CUADRA 11 DE PEZET",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "SERFOR",
    "direccion": "SERFOR",
    "telefono": "Sin Teléfono",
    "otroDato": "AV 7 229 RINCONADA BAJA",
    "distrito": 12
  },
  {
    "contacto": "MARÍA FLORES ALVAREZ",
    "empresa": "OFICINA DE TURISMO - MUNICIPALIDAD DE BARRANCO",
    "direccion": "PARQUE MUNICIPAL DE BARRANCO",
    "telefono": "Sin Teléfono",
    "otroDato": "AV. SAN MARTIN S/N",
    "distrito": 4
  },
  {
    "contacto": "ANTONELLA CARVAJAL",
    "empresa": "ANTONELLA CARVAJAL",
    "direccion": "EL ROSARIO 170 DPTO 201",
    "telefono": "Sin Teléfono",
    "otroDato": "BASADRE CUADRA 8",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "HIPERMERCADOS TOTTUS - FACTURACIÓN",
    "direccion": "AV. ANGAMOS",
    "telefono": "Sin Teléfono",
    "otroDato": "C.C. OPEN PLAZA ANGAMOS - 5TO PISO",
    "distrito": 34
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "HIPERMERCADOS TOTTUS",
    "direccion": "AV. ANGAMOS ESTE 1805 PISO 5",
    "telefono": "Sin Teléfono",
    "otroDato": "C.C. OPEN PLAZA ANGAMOS- LUNES MIÉRCOLES Y VIERNES DE 9 A 11",
    "distrito": 34
  },
  {
    "contacto": "ANA MONTALVAN",
    "empresa": "BZ KEYS",
    "direccion": "AV GUARDIA CIVIL CDRA 9",
    "telefono": "Sin Teléfono",
    "otroDato": "C.C. REAL PLAZA - MODULO EN PROMART",
    "distrito": 9
  },
  {
    "contacto": "ARTURO NADALES",
    "empresa": "BZ KEY",
    "direccion": "AV. EDUARDO AVAROA S/N",
    "telefono": "Sin Teléfono",
    "otroDato": "C.C. REAL PLAZA - MODULO EN PROMART",
    "distrito": 11
  },
  {
    "contacto": "OCTAVIO ZEGARRA",
    "empresa": "LA BICICLETERÍA",
    "direccion": "AV. SALAVERRY 2300",
    "telefono": "Sin Teléfono",
    "otroDato": "CENTRO COMERCIAL SALAVERRY",
    "distrito": 11
  },
  {
    "contacto": "ADMINISTRADORA",
    "empresa": "QUINOA CENTRO EMPRESARIAL",
    "direccion": "VÍA REAL",
    "telefono": "Sin Teléfono",
    "otroDato": "CENTRO EMPRESARIAL CAMINO REAL",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "CIRSA",
    "direccion": "AV. RICARDO PALMA 341 2DO PISO",
    "telefono": "Sin Teléfono",
    "otroDato": "CENTRO EMPRESARIAL PLATINO - LUN/MIE/VIER 12PM - 1.30PM / 2.3 - 4PM",
    "distrito": 18
  },
  {
    "contacto": "UBER",
    "empresa": "UBER",
    "direccion": "COLINA 107",
    "telefono": "Sin Teléfono",
    "otroDato": "COMUNAL COWORKING",
    "distrito": 4
  },
  {
    "contacto": "DANIELA NICHOLSON",
    "empresa": "COLECTIVO CURIOSIDAD",
    "direccion": "JIRÓN COLINA 111",
    "telefono": "Sin Teléfono",
    "otroDato": "COMUNAL COWORKING BARRANCO",
    "distrito": 4
  },
  {
    "contacto": "JORGE ALEXANDER CHUNG CHAVEZ",
    "empresa": "IRLA INVERSIONES - ALEX CHUNG",
    "direccion": "COLINA 107",
    "telefono": "Sin Teléfono",
    "otroDato": "COMUNAL COWORKING BARRANCO",
    "distrito": 4
  },
  {
    "contacto": "CARLOS ANAVITARTE",
    "empresa": "FORTIN IMAGEN Y PUBLICIDAD -CARLO ANAVITARTE",
    "direccion": "CALLE GENERAL RECAVARREN 111 OF. 703",
    "telefono": "Sin Teléfono",
    "otroDato": "COMUNAL COWORKING MIRAFLORES",
    "distrito": 18
  },
  {
    "contacto": "GABRIELA CARRILLO",
    "empresa": "LABERINTO PUBLICIDAD",
    "direccion": "CALLE GENERAL RECAVARREN 111 OF 703",
    "telefono": "Sin Teléfono",
    "otroDato": "COMUNAL COWORKING MIRAFLORES",
    "distrito": 18
  },
  {
    "contacto": "ALLÍ TE INDICAN",
    "empresa": "HOSPITAL DEL NIÑO SAN BORJA",
    "direccion": "AV. JAVIER PRADO ESTE 3166",
    "telefono": "Sin Teléfono",
    "otroDato": "CRUCE CON AV. LA ROSA TORO",
    "distrito": 41
  },
  {
    "contacto": "KARINA PEREZ",
    "empresa": "PANADERIA MARÍA MAGDALENA / PANIDELY",
    "direccion": "JIRON GUARDIA CIVIL SUR MZ B LT 5",
    "telefono": "Sin Teléfono",
    "otroDato": "CRUCE CON JIRON VISTA ALEGRE",
    "distrito": 33
  },
  {
    "contacto": "ALEJANDRO SUNI",
    "empresa": "ALEJANDRO SUNI",
    "direccion": "JUAN XXIII CALLE ALFA B-37",
    "telefono": "Sin Teléfono",
    "otroDato": "CRUCE DE AMGAMOS CON AVIACIÓN",
    "distrito": 41
  },
  {
    "contacto": "MARIA FLORIAN",
    "empresa": "MARIA FLORIAN",
    "direccion": "AVENIDA DEL PARQUE NORTE 480 OF 402",
    "telefono": "Sin Teléfono",
    "otroDato": "CRUCE PARQUE NORTE CON GALVEZ BARNECHEA",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "RADIO PROGRAMAS DEL PERÚ - RPP",
    "direccion": "AVENIDA PASEO DE LA REPÚBLICA 3866",
    "telefono": "Sin Teléfono",
    "otroDato": "CRUCE VÍA EXPRESA CON ARAMBURÚ",
    "distrito": 27
  },
  {
    "contacto": "DIEGO GODOY",
    "empresa": "BROS CREATIVO SAC",
    "direccion": "JIRÓN LAS UVAS 100",
    "telefono": "Sin Teléfono",
    "otroDato": "CUADRA 1 MZ X LT11 - CASA NARANJA",
    "distrito": 33
  },
  {
    "contacto": "VERÓNICA MURO",
    "empresa": "VERÓNICA MURO",
    "direccion": "DIEGO FERRÉ 273 DPTO 301",
    "telefono": "Sin Teléfono",
    "otroDato": "CUADRA 12 DE AV. LARCO",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "AUTOFONDO",
    "direccion": "MEIGGS 2365",
    "telefono": "Sin Teléfono",
    "otroDato": "DETRAS DEL HOSPITAL BARTON  - ESSALUD",
    "distrito": 44
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "OSINFOR",
    "direccion": "AV. JAVIER PRADO OESTE 692",
    "telefono": "Sin Teléfono",
    "otroDato": "DIRECCIÓN DE SUPERVISIÓN DE PERMISOS Y AUTORIZACIONES FORESTALES Y DE FAUNA SILVESTRE",
    "distrito": 17
  },
  {
    "contacto": "GLADYS NUÑEZ",
    "empresa": "GLADYS NUÑEZ",
    "direccion": "CONDOMINIO DEL AIRE BLOCK G2",
    "telefono": "Sin Teléfono",
    "otroDato": "DPTO 503 (ENTRE AV SAN LUIS Y AV EL AIRE)",
    "distrito": 30
  },
  {
    "contacto": "EVELYN THOMAS",
    "empresa": "EVELYN THOMAS",
    "direccion": "AV. DEL PINAR 182 OF804",
    "telefono": "Sin Teléfono",
    "otroDato": "EDIFICIO KIMBERLY CLARK",
    "distrito": 33
  },
  {
    "contacto": "DOCTOR JUAN CARLOS RUIZ",
    "empresa": "ESTUDIO LEMA ABOGADOS",
    "direccion": "AV JOSÉ PARDO 434 OF 405",
    "telefono": "Sin Teléfono",
    "otroDato": "EDIFICIO LIT ONE",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "PROINVERSIÓN",
    "direccion": "AV. ENRIQUE CANAVAL Y MOREYRA 150",
    "telefono": "Sin Teléfono",
    "otroDato": "EDIFICIO PETROPERÚ.",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "TIKKI - GRIFOS REPSOL",
    "direccion": "AV. JOSE GALVEZ BARRENECHEA ESQ CALLE 32 N° 1146",
    "telefono": "Sin Teléfono",
    "otroDato": "EN EL MISMO GRIFO",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "PERUANA DE ESTACIONES DE SERVICIO SAC",
    "direccion": "ANDRES REYES 360 OF 205",
    "telefono": "Sin Teléfono",
    "otroDato": "EN PANTALON HASTA LAS 11.30AM SOLO MARTES Y JUEVES",
    "distrito": 27
  },
  {
    "contacto": "CAROLINA FU",
    "empresa": "DIACSA",
    "direccion": "EMILIO ALTHAUS 121 OF 1001",
    "telefono": "Sin Teléfono",
    "otroDato": "ENTRE LA CDRA 15 DE AREQUIPA Y CDRA 15 DE ARENALES",
    "distrito": 14
  },
  {
    "contacto": "GUILIANA CAROLINA  GARCIA CABRERA",
    "empresa": "GUILIANA CAROLINA  GARCIA CABRERA",
    "direccion": "CALLE LIMA 140",
    "telefono": "Sin Teléfono",
    "otroDato": "ESCUELA DE VANIA MASÍAS - D1",
    "distrito": 9
  },
  {
    "contacto": "CARLOS BARREDA",
    "empresa": "TRUE CAFE",
    "direccion": "CALLE BOLIVAR 153",
    "telefono": "Sin Teléfono",
    "otroDato": "ESPALDA CASINO ATLANTIC CITY",
    "distrito": 18
  },
  {
    "contacto": "MELINA FIGUEROA",
    "empresa": "MELINA FIGUEROA",
    "direccion": "LAS AMATISTAS 349",
    "telefono": "Sin Teléfono",
    "otroDato": "ESPALDA DE LA 3 DE MÉXICO",
    "distrito": 1
  },
  {
    "contacto": "SECRETARIA",
    "empresa": "LIBÉLULA COMUNICACIONES",
    "direccion": "JUAN DE LA FUENTE 625",
    "telefono": "Sin Teléfono",
    "otroDato": "ESPALDA PARQUE REDUCTO",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DE DEFENSA",
    "direccion": "AV DE LA PERUANIDAD",
    "telefono": "Sin Teléfono",
    "otroDato": "FRENTE AL CAMPOR DE MARTE",
    "distrito": 11
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "BELCORP",
    "direccion": "AV. PARDO Y ALIAGA 652",
    "telefono": "Sin Teléfono",
    "otroDato": "H: 8:30AM A 12PM",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DE LA MUJER Y POBLACIONES VULNERABLES",
    "direccion": "JIRÓN CAMANÁ 616",
    "telefono": "Sin Teléfono",
    "otroDato": "H:L-V 8AM-4PM.",
    "distrito": 1
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "BBVA - BANCO CONTINENTAL",
    "direccion": "AV. REPUBLICA DE PANAMA 3055",
    "telefono": "Sin Teléfono",
    "otroDato": "HALL 2",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "KING GLOBAL TRADING",
    "direccion": "JIRÓN PARURO 865",
    "telefono": "Sin Teléfono",
    "otroDato": "INTERIOR 201",
    "distrito": 1
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "APPCACAO",
    "direccion": "JR. CARLOS ALAYZA Y ROEL 2112",
    "telefono": "Sin Teléfono",
    "otroDato": "INTERIOR M - 3ER PISO",
    "distrito": 14
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "BANCO DE CRÉDITO - BCP SEDE CENTRAL",
    "direccion": "CENTENARIO 156",
    "telefono": "Sin Teléfono",
    "otroDato": "IR EN PANTALÓN.",
    "distrito": 12
  },
  {
    "contacto": "VENTANILLA",
    "empresa": "BANBIF - BANCO PICHINCHA",
    "direccion": "AV. AVIACIÓN 5000",
    "telefono": "Sin Teléfono",
    "otroDato": "JUNTO A POLVOS ROSADOS",
    "distrito": 33
  },
  {
    "contacto": "GUILIANA CAROLINA  GARCIA CABRERA",
    "empresa": "GUILIANA CAROLINA  GARCIA CABRERA",
    "direccion": "CALLE LIMA 140",
    "telefono": "Sin Teléfono",
    "otroDato": "KIOSKO DE LA ESCUELA DE VANIA MASÍAS D1",
    "distrito": 9
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "GREAT RETAIL - EL TAMBO",
    "direccion": "CALLE BAJADA BALTA N° 169, PISO 6",
    "telefono": "Sin Teléfono",
    "otroDato": "L-M-J-V: 9-12/2:30-5PM MIE:9-12",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MIRABICI",
    "direccion": "PARQUE SALAZAR",
    "telefono": "Sin Teléfono",
    "otroDato": "LARCOMAR",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "CLASE 3 SAC",
    "direccion": "AV. MANUEL OLGUIN 211 OF 303",
    "telefono": "Sin Teléfono",
    "otroDato": "LUNES A VIERNES 9AM - 5PM",
    "distrito": 33
  },
  {
    "contacto": "CONTABILIDAD",
    "empresa": "MAQUINARIAS S.A",
    "direccion": "AV. VICTOR ANDRES BELAUNDE 147-SAN ISIDRO (VÍA REAL 185 EDIFICIO REAL 12",
    "telefono": "Sin Teléfono",
    "otroDato": "LUNES, MIERCOLES, VIERNES DE 9 A 12M",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "COESTI",
    "direccion": "CIRCUNVALACIÓN EL GOLF 134",
    "telefono": "Sin Teléfono",
    "otroDato": "MARTES Y JUEVES HASTA LAS 12",
    "distrito": 33
  },
  {
    "contacto": "XIMENA DELGADO",
    "empresa": "XIMENA DELGADO",
    "direccion": "Calle Vigo 135",
    "telefono": "Sin Teléfono",
    "otroDato": "Mayorazgo, tercera etapa - Ate Vitarte - Altura del colegio Dalton",
    "distrito": 3
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "DERCO CENTRER",
    "direccion": "AV. NICOLAS AYLLON 2648",
    "telefono": "Sin Teléfono",
    "otroDato": "MESA DE PARTES DE 9 - 12 PM)",
    "distrito": 3
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "CORPORACION TURISTICA PERUANA SAC",
    "direccion": "CALLE BOLIVAR 121",
    "telefono": "Sin Teléfono",
    "otroDato": "MIE Y VIE 9.30 - 12.30 / 2.30 - 4PM",
    "distrito": 18
  },
  {
    "contacto": "ANDRÉS UREÑA",
    "empresa": "VENGO VENTURES",
    "direccion": "COMERCIO 193",
    "telefono": "Sin Teléfono",
    "otroDato": "MINISTERIO DE EDUCACIÓN",
    "distrito": 41
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "LA IBÉRICA",
    "direccion": "AV MARISCAL DOMINGO NIETO 267",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 3
  },
  {
    "contacto": "SECRETARIA",
    "empresa": "COMUNAL COWORKING - BARRANCO",
    "direccion": "JIRÓN COLINA 111",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 4
  },
  {
    "contacto": "ALEXIS",
    "empresa": "ALEXIS",
    "direccion": "SAN MARTÍN 207 OF. 201",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 4
  },
  {
    "contacto": "KARINA PEREZ",
    "empresa": "PANADERÍA MARÍA MAGDALENA/PANADERÍA PANIDELY",
    "direccion": "AV. GRAU 990",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 4
  },
  {
    "contacto": "AURELIE NALET <AURELIE@INCAINVEST.COM>",
    "empresa": "INCAINVEST",
    "direccion": "SAN MARTÍN 207 OFICINA 201",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 4
  },
  {
    "contacto": "ADMINISTRADOR",
    "empresa": "TOSTADURÍA BISETTI",
    "direccion": "AVENIDA PEDRO DE OSMA 116",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 4
  },
  {
    "contacto": "ADMINISTRADOR",
    "empresa": "HOTEL B",
    "direccion": "AVENIDA SÁENZ PEÑA 204",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 4
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "BIBLIOTECA MUNICIPAL DE BARRANCO",
    "direccion": "AV. SAN MARTÍN S/N",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 4
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "ACCA",
    "direccion": "BATTA ISOLA 272",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 4
  },
  {
    "contacto": "CECI CORDOVA/MIRIAN DELGADO",
    "empresa": "KO LAB",
    "direccion": "AV. SAN MARTIN 790",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 4
  },
  {
    "contacto": "Jenny Validivia",
    "empresa": "Jenny Validivia",
    "direccion": "Jiron Napo 865 dpto 302",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 5
  },
  {
    "contacto": "LLERLY SOUZA MORENO",
    "empresa": "CASINO GOLDEN CARD",
    "direccion": "AVENIDA ARICA 538",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 5
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "TOYOTA DEL PERU",
    "direccion": "AV. ELMER FAUCETT 3548",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 44
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "HONDA DEL PERU",
    "direccion": "AV ELMER FACUCETT 3737",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 44
  },
  {
    "contacto": "RECEPCION",
    "empresa": "MICHELL",
    "direccion": "AV OSCAR R BENAVIDES 5849",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 44
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "UNIVERSIDAD NACIONAL MAYOR DE SAN MARCO - UNMSM",
    "direccion": "AV. GERMÁN AMÉZAGA 375",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "CONGRESO DE LA REPÚBLICA",
    "direccion": "JIRON JUNIN 670",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "PROTRANSPORTE",
    "direccion": "Jiron Cusco 286",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "EDWIN TORRECILLA",
    "empresa": "EDWIN TORRECILLA",
    "direccion": "Jr. Puno 411",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "IMPRENTA QUIMA - STAND 3115",
    "empresa": "CENTRO COMERCIAL CENTRO LIMA",
    "direccion": "AV BOLIVIA 148",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "ENCARGADO",
    "empresa": "ROLLOS DE PAPEL",
    "direccion": "CAMANA 991",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "DEFENSORÍA DEL PUEBLO",
    "direccion": "JR. UCAYALI 388",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "ALLÍ TE INDICAN",
    "empresa": "GALERÍA EMANCIPACIÓN - MERCADO DE BICICLETAS",
    "direccion": "AVENIDA EMANCIPACIÓN 835",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DE AGRICULTURA - MINAGRI",
    "direccion": "JIRON YAUYOS 258",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "JENNY SAMANEZ",
    "empresa": "MUNICIPALIDAD DE LIMA - GERENCIA DE TRANSPORTE NO MOTORIZADO",
    "direccion": "PASAJE ACUÑA 127, 2° PISO, OFICINA 210",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "DIARIO EL COMERCIO",
    "direccion": "JIRÓN MIRO QUESADA 300",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "SUPERINTENDENCIA DE ADMINISTRACIÓN TRIBUTARIA - SAT",
    "direccion": "JIRÓN CAMANÁ 370",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DE ECONOMÍA Y FINANZAS - MEF",
    "direccion": "JIRÓN JUNÍN 319",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "PRESIDENTE DEL CONSEJO DE MINISTROS",
    "direccion": "CARABAYA 100",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DE RELACIONES EXTERIORES",
    "direccion": "LAMPA 580",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DE TRANSPORTES Y COMUNICACIONES",
    "direccion": "JIRON ZORRITOS 1203",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO PUBLICO",
    "direccion": "AV. ABANCAY 5",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "FUERZA AEREA DEL PERÚ",
    "direccion": "AV. DE LA PERUANIDAD S/N",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "JOSE REYES PAREDES",
    "empresa": "CAJA MUNICIPAL DE CREDITO POPULAR DE LIMA",
    "direccion": "AV. NICOLAS DE PIEROLA 1785",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "KIOSKO - ESTUDIO DE DANZA D1 - VANIA MASÍAS",
    "direccion": "CALLE LIMA 140",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 9
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "SENAMHI",
    "direccion": "JIRÓN CAHUIDE 721",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 11
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DE TRABAJO Y PROMOCIÓN SOCIAL",
    "direccion": "AV. SALAVERRY 655",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 11
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DE SALUD",
    "direccion": "AV SALAVERRY 801",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 11
  },
  {
    "contacto": "ASTRID SARMIENTO",
    "empresa": "PRINT.PE",
    "direccion": "AV HORACIO URTEAGA 944 OF D",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 11
  },
  {
    "contacto": "BRIAN PONCE",
    "empresa": "ESTUDIO CONTABLE PÉREZ",
    "direccion": "AV. SALAVERRY 957 OF 208",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 11
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "CAMARA DE COMERCIO DE LIMA",
    "direccion": "AV. GIUSEPPE GARIBALDI 396",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 11
  },
  {
    "contacto": "MESA DE PARTERS",
    "empresa": "PLADES",
    "direccion": "JIRÓN GENERAL CÓRDOVA 1198",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 11
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "JUNTA NACIONAL DEL CAFÉ",
    "direccion": "JR. RAMÓN DAGNINO 369",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 11
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "JUNTA NACIONAL CAFÉ",
    "direccion": "RAMON DAGNINO 369",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 11
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "UNIVERSIDAD DEL PACIFICO",
    "direccion": "AV. FELIPE SALAVERRY 2050",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 11
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "JUNTA NACIONAL CAFÉ",
    "direccion": "JR. RAMON DAGNINO 369",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 11
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "UNIVERSIDAD NACIONAL AGRARIA LA MOLINA",
    "direccion": "AV. LA MOLINA S/N",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 12
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "UNIVERSIDAD AGRARIA LA MOLINA",
    "direccion": "AV. LA MOLINA S/N",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 12
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "UNIVERSIDAD DE CIENCIAS Y ARTES DE AMÉRCIA LATINA - UCAL",
    "direccion": "AV. LA MOLINA 3755",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 12
  },
  {
    "contacto": "PREGUNTAR POR TONY",
    "empresa": "HOTEL LA MOLINA",
    "direccion": "AV. LOS CONSTRUCTORES 1027",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 12
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DE AGRICULTURA",
    "direccion": "AV ALAMEDA DEL CORREGIDOR 155",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 12
  },
  {
    "contacto": "DR. JOSÉ ELOY CUELLAR BAUTISTA",
    "empresa": "INSTITUTO NACIONAL DE INNOVACIÓN AGRARIA – INIA",
    "direccion": "AVENIDA LA MOLINA 1981",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 12
  },
  {
    "contacto": "CAROLINE KINDLIMANN",
    "empresa": "TEAM LM",
    "direccion": "ISLAS VÍRGENES 115",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 12
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "UNIVERSIDAD SAN IGNACION DE LOYOLA",
    "direccion": "AV. LA FONTANA 550",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 12
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "IMARPE - INSTITUO DEL MAR DEL PERÚ",
    "direccion": "ESQUINA GAMARRA Y GENERAL VALLE S/N CHUCUITO",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 48
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "CELEPSA",
    "direccion": "CARLOS VILLARÁN 514",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "JUAN CARLOS GUERRA",
    "empresa": "PUNTO PUBLICIDAD & TEXTIL",
    "direccion": "JR. ANTONIO BAZO 792",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "LILY",
    "empresa": "PASAMERÍAS SAC",
    "direccion": "JIRÓN HIPÓLITO UNANUE 1565",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "ENCOMIENDAS",
    "empresa": "MOVIL TOURS - SEDE JAVIER PRADO",
    "direccion": "AV JAVIER PRADO ESTE 1095",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MELINA FIGUEROA",
    "empresa": "MELINA FIGUEROA",
    "direccion": "LAS AMATISTAS 346",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "INTERBANK SEDE CENTRAL",
    "direccion": "CARLOS VILLARÁN 140",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "GISELL VASQUEZ",
    "empresa": "DIARIOS DE PROVINCIAS",
    "direccion": "AV. SAN EUGENIO 857",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "GIZELI",
    "empresa": "NABILA",
    "direccion": "GIRIBALDI 704",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "ENCOMIENDAS",
    "empresa": "CRUZ DEL SUR",
    "direccion": "AV JAVIER PRADO ESTE 1109",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "SUNARP",
    "direccion": "AV EDGARDO REBAGLIATI (FRENTE AL HOSPITAL REBAGLIATI)",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 14
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "WAYRA PERÚ",
    "direccion": "AV. AREQUIPA 1155",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 14
  },
  {
    "contacto": "RECEPCION",
    "empresa": "HOTEL CARRERA",
    "direccion": "Jr. León Velarde 123",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 14
  },
  {
    "contacto": "SOFÍA VIZCONDE FLORES",
    "empresa": "MANPOWER PROFESSIONAL SERVICES S.A.",
    "direccion": "AV. JOSE PARDO DE ZELA 274 PISO 3",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 14
  },
  {
    "contacto": "MARIELA GANDOLFO",
    "empresa": "HERMES",
    "direccion": "MANCO SEGUNDO 2699",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 14
  },
  {
    "contacto": "CESAR QUISPE",
    "empresa": "CESAR QUISPE",
    "direccion": "JULIO C TELLO 728",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 14
  },
  {
    "contacto": "ISRAEL POYENIZ",
    "empresa": "ANDES EXPRESS",
    "direccion": "AV. IGNACIO MERINO 1554",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 14
  },
  {
    "contacto": "LEONARDO BORDA",
    "empresa": "LEONARDO BORDA",
    "direccion": "TRINIDAD MORAN 765",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 14
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "OSINFOR",
    "direccion": "AV JAVIER PRADO OESTE 692",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 17
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "INSTITUTO DE PRENSA DE LA PUCP",
    "direccion": "TOMAS RANSEY 925",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 17
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "PNUD - PROGRAMA DE LAS NACIONES UNIDAS PARA EL DESARROLLO",
    "direccion": "AV PEREZ ARANÍBAR 750",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 17
  },
  {
    "contacto": "CESAR CONTRERAS O EDUARDO MENDOZA",
    "empresa": "360 BTL",
    "direccion": "JOSÉ COSSIO 337",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 17
  },
  {
    "contacto": "NICOLE MATALLANA",
    "empresa": "TEAM LAS BEGONIAS",
    "direccion": "ALBERTO DEL CAMPO 413",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 17
  },
  {
    "contacto": "RECEPCIÓN",
    "empresa": "KO MAGDALENA",
    "direccion": "ALBERTO DEL CAMPO 413",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 17
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DEL AMBIENTE",
    "direccion": "AV. ANTONIO MIRO QUESADA 425 4TO PISO",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 17
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "SUNASS",
    "direccion": "BERNARDO MONTEAGUDO 216",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 17
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "EMBAJADA DE SUIZA",
    "direccion": "AV. SALAVERRY 3240",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 17
  },
  {
    "contacto": "SECRETARIA",
    "empresa": "COMUNAL COWORKING MIRAFLORES",
    "direccion": "CALLE GENERAL RECAVARREN 111 OF. 701",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "CENCOSUD",
    "direccion": "AUGUSTO ANGULO 130",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "ADMINISTRADORA",
    "empresa": "LA MATILDA",
    "direccion": "DOS DE MAYO 535",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "CAMARA PERUANA CAFÉ Y CACAO",
    "direccion": "CALLE ALCANFORES 1245",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "Ana María",
    "empresa": "Constructora Bragagnini",
    "direccion": "Av. Vasco Núñez de Balboa 241",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "NATURA",
    "direccion": "Av. Del Ejército 801",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "CHRISTIAN ACUÑA",
    "empresa": "RETROVISOR",
    "direccion": "AV LARCO 742 OF C3",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MORANDI ARCELA",
    "empresa": "BRANDFOOD - MORANDI ARCELA",
    "direccion": "AV ALFREDO BENAVIDES 266 DPTO 901",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "TITA UREÑA",
    "empresa": "TITA UREÑA",
    "direccion": "BUENOS AIRES 198 DPTO 401",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "SPIJ - PODER JUDICIAL",
    "direccion": "SCIPIÓN LLONA 350",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MARTIN KANN",
    "empresa": "STUDIO TIGRES",
    "direccion": "AVENIDA REDUCTO 1518",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "TITA UREÑA",
    "empresa": "TITA UREÑA",
    "direccion": "BUENOS AIRES 198 DPTO 401",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "CYNTHIA SÁNCHEZ",
    "empresa": "DUPREE",
    "direccion": "CALLE RECABARREN 111 OF. 902",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "GUILLERMO IZAGUIRRE",
    "empresa": "ACERINOX",
    "direccion": "ALFONSO UGARTE 349",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "NOEMÍ CUADRADO",
    "empresa": "GESTIRIEGO",
    "direccion": "ITALIA 265 DEP 701",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MUNICIPALIDAD DE MIRAFLORES",
    "direccion": "AV. JOSE LARCO 400",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "ALIANZA FRANCESA MIRAFLORES",
    "direccion": "AV. AREQUIPA 4595",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "YURIKO SHIOMURA",
    "empresa": "TOUCH PERU SAC",
    "direccion": "AV. MARISCAL LA MAR 662 OF 504",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "ARACELLY CRUZ",
    "empresa": "OCEANA",
    "direccion": "AV. DEL EJÉRCITO 250 OF 302",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "ACPI",
    "direccion": "AV. JOSÉ PARDO 261",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MARGARITA",
    "empresa": "EPICO PRODUCCIONES",
    "direccion": "CALLE COLÓN 110 DPTO 401",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "VECO ANDINO",
    "direccion": "CALLE BOLOGNESI 321",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINAGRI",
    "direccion": "AV. BENAVIDES 1535",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "EMBAJADA DE AUSTRALIA",
    "direccion": "AV. LA PAZ 1048 PISO 10",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "RECEPCIONISTA",
    "empresa": "COMUNAL COWORKING BENAVIDES",
    "direccion": "AV. BENAVIDES 1180 PISO 6",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "SUSANA RUEDA",
    "empresa": "CENTRO CULTURAL RICARDO PALMA - MUNICIPALIDAD DE MIRAFLORES",
    "direccion": "AV. LARCO 770",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DE JUSTICIA Y DERECHOS HUMANOS",
    "direccion": "SCIPION LLONA 350",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "APCI - AGENCIA PERUANA DE COOPERACION INTERNACIONAL",
    "direccion": "AV JOSE PARDO 261",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "UNICEF",
    "direccion": "PARQUE MELITÓN PORRAS 350",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "ESTUDIO DE ABOGADOS LEMA",
    "direccion": "AV JOSÉ PARDO 434 OF 405",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "SRA. NORMA",
    "empresa": "SRA. NORMA",
    "direccion": "GENERAL CORDOVA 775 OF 401",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MARITE",
    "empresa": "FLORIAN",
    "direccion": "AV. MARISCAL LA MAR 329",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "SECRETARIA",
    "empresa": "COMUNAL BENAVIDES",
    "direccion": "AV. BENAVIDES 1180 PISO 6",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "JESSICA ONA / PABLO URBANO",
    "empresa": "TAWA",
    "direccion": "MARISCAL LA MAR 1120 PISO 7",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "NIKE",
    "direccion": "AV. LARCO 1301 INT 201",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "JUAN ALBERTO WU",
    "empresa": "PIKANGO SAC",
    "direccion": "AV. DEL EJERCITO 250 OF 501",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "SERFOR CAF",
    "direccion": "CALLE MANCO CAPAC 551",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "ADMINISTRADORA",
    "empresa": "QUINOA ALOFT",
    "direccion": "VASCO NUÑEZ DE BALBOA 785",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "ADMINISTRADORA",
    "empresa": "THIKA THANI",
    "direccion": "AV. BENAVIDES 474",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "RECEPCION",
    "empresa": "CORTEXTIL",
    "direccion": "CHICLAYO 985",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "UNIVERSIDAD ANTONIO RUIZ DE MONTOYA",
    "direccion": "AV. PASO DE LOS ANDES 970",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 21
  },
  {
    "contacto": "LUIS SANCHEZ",
    "empresa": "MALENA CUPCAKES & CAKES",
    "direccion": "CALLE BAYOVAR SUR 349",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "SENACE",
    "direccion": "AVENIDA GUARDIA CIVIL 115",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DE CULTURA",
    "direccion": "AV. JAVIER PRADO ESTE 2465",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DE EDUCACIÓN",
    "direccion": "EL COMERCIO 193",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "SECRETARIA",
    "empresa": "SUPERMERCADOS PERUANOS SA",
    "direccion": "CALLE MORELLI 139",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "CARLOS LAZO",
    "empresa": "CARLOS LAZO",
    "direccion": "La Rambla San Borja",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DE ENERGÍA Y MINAS - MINEM",
    "direccion": "AVENIDA DE LAS ARTES SUR 260",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "FONDAM",
    "direccion": "AV. PRIMAVERA 1053",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "FONDAM",
    "direccion": "AV. PRIMAVERA 1053",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "JOSÉ RÍOS",
    "empresa": "JOSMART PRODUCCIONES SAC",
    "direccion": "AV. GUARDIA CIVIL 390",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MUNICIPALIDAD DE SAN BORJA",
    "direccion": "AV JOAQUIN DE LA MADRID 200",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "DR. CARLOS FALCONI",
    "empresa": "ESTUDIO  ALVA HART",
    "direccion": "AV DE LAS ARTES NORTE 1417",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "ALLÍ TE INDICAN",
    "empresa": "UNE3",
    "direccion": "CALLE LOPEZ DE AYALA 158",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "PÍA MONTENEGRO",
    "empresa": "PÍA MONTENEGRO",
    "direccion": "CALLE PASTOR 124",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "INDECOPI",
    "direccion": "DE LA PROSA 104,",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "ESTUDIO ECHECOPAR",
    "direccion": "AV. DE LA FLORESTA 497",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "MAGALY ZAMBRANO",
    "empresa": "TIENDA MAGIC FIESTAS",
    "direccion": "AV. AVIACIÓN 2615",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "MARIEL RUBINI",
    "empresa": "PORTO LEGAL",
    "direccion": "AV. PRIMAVERA 517, OF 302",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "PIETRO MALFITANO MALFITANO",
    "empresa": "BANCO DE LA NACION",
    "direccion": "AV. JAVIER PRADO ESTE 2479",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "ADMINISTRADORA",
    "empresa": "THIKA THANI",
    "direccion": "AV. AVIACIÓN 2808",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 41
  },
  {
    "contacto": "ADMINISTRADORA",
    "empresa": "QUINOA PARDO Y ALIAGA",
    "direccion": "AV PARDO Y ALIAGA 664",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "ADMINISTRADORA",
    "empresa": "QUINOA DEAN VALDIVIA",
    "direccion": "CALLE DEAN VALDIVIA 135",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "SERNANP",
    "direccion": "CALLE DIECISIETE 355",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DE LA PRODUCCIÓN",
    "direccion": "CALLE UNO OESTE 60",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "EMBAJADA SUIZA",
    "direccion": "AV. SALAVERRY 3240",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "BBVA BANCO CONTINENTAL",
    "direccion": "AV. REPÚBLICA DE PANAMÁ 3055",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "INNOVATE PERÚ",
    "direccion": "CALLE MANUEL GONZALES OLAECHEA 435",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DEL AMBIENTE",
    "direccion": "AV. JAVIER PRADO OESTE 1440",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "SWISSCONTACT",
    "direccion": "JR. JUAN DELLEPIANI 585",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "FONCODES",
    "direccion": "Av. Paseo de la República 3101",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "RECEPCION",
    "empresa": "CEPLAN",
    "direccion": "Av. Canaval y Moreyra 480 – Piso 11",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MUNICIPALIDAD DE SAN ISIDRO",
    "direccion": "AUGUSTO TAMAYO 180",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "SUSANA JARA",
    "empresa": "ECSA - SUSANA JARA-RUTH AIQUIPA",
    "direccion": "RICARDO ANGULO 776 OF 301",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "PERÚ PETRO",
    "direccion": "AVENIDA CANAVAL Y MOREYRA 150 - PISO 7",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "VENTANILLA",
    "empresa": "OLVA COURIER",
    "direccion": "AV. ARAMBURU 978",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "CITIBANK",
    "direccion": "AVENIDA ENRIQUE CANAVAL Y MOREYRA 498",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "LUIS DONGO",
    "empresa": "LDV GROUP SAC",
    "direccion": "AV. CONQUISTADORES 995 OF 13",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "ANDREA LENZ",
    "empresa": "MAYO PUBLICIDAD",
    "direccion": "AV. SALAVERRY 2423",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "SERNANP-SERVICIO NACIONAL DE ÁREAS NATURALES PROTEGIDAS POR EL ESTADO",
    "direccion": "LOS PETIRROJOS 355",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "UNIÓN EUROPEA",
    "direccion": "AV. VÍCTOR ANDRES BELAUNDE 332 PISO 5",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "DELOSI",
    "direccion": "DOS DE MAYO 1590",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "ELIZABETH RODRIGUEZ / CARLOS ROMAN",
    "empresa": "ADDECO CONSULTING SA",
    "direccion": "AMADOR MERINO REYNA 285 OF 301",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DEL AMBIENTE",
    "direccion": "AMADOR MERINO REYNA 267",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DEL AMBIENTE",
    "direccion": "DOS DE MAYO 1545",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "SOCIEDAD NACIONAL DE INDUSTRIAS - SNI",
    "direccion": "CALLE LOS LAURELES 365",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "CONDOIR TRAVEL",
    "direccion": "CALLE ARMANDO BLONDET 249",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "RECEPCIÓN",
    "empresa": "COMUNAL COWORKING SAN ISIDRO",
    "direccion": "CALLE LAS ORQUÍDEAS 444 PISO 7",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "BID-FOMIN - BANCO INTERAMERICANO DE DESARROLLO",
    "direccion": "DEAN VALDIVIA 148 PISO 10",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "SRA. NATTY",
    "empresa": "ESTUDIO CONTABLE TABOADA",
    "direccion": "MARIANO DE LOS SANTOS 198 - INT 302",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MAYRA LLABRES",
    "empresa": "PIENSA VERDE",
    "direccion": "CALLE LAS PALMERAS 207",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "ANA LUCÍA PÏNTO",
    "empresa": "FEPCMAC-FEDERACIÓN PERUANA DE CAJAS MUNICIPALES DE AHORRO Y CRÉDITO",
    "direccion": "CHINCHON 918",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "GIZ",
    "direccion": "AV LOS INCAS 172 PISO 6",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "COSUDE",
    "direccion": "AV SALAVERRY 3240",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DE DESARROLLO E INCLUSIÓN SOCIAL",
    "direccion": "AV PASEO DE LA REPUBLICA 3101",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DE VIVIENDA Y CONSTRUCCIÓN",
    "direccion": "AV PASEO DE LA REPUBLICA 3361",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DEL INTERIOR",
    "direccion": "AVENIDA ENRIQUE CANAVAL Y MOREYRA 30",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MINISTERIO DE COMERCIO Y TURISMO",
    "direccion": "CALLE UNO OESTE 50",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "AGROBANCO",
    "direccion": "AV REPÚBLICA PANAMÁ 3680 PISO 4",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "SOCIEDAD PERUANDA DE DERECHO AMBIENTAL - SPDA",
    "direccion": "PROLONGACIÓN ARENALES 437",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "SECRETARIA",
    "empresa": "FUNDACIÓN OLI",
    "direccion": "LOS ALAMOS 595",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "SRTA. RAFAELLA",
    "empresa": "NOTARIA SIERRALTA",
    "direccion": "AV PETIT THOUARS 3699",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "ELVIS ROJAS",
    "empresa": "ELVIS ROJAS",
    "direccion": "CALLE DEAN VALDIVIA 148 PISO 15",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "TORRE SURA",
    "direccion": "AV CANAVAL Y MOREYRA 522",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "CRISTINA RISSO",
    "empresa": "WOTTOLINE",
    "direccion": "AV JORGE BASADRE 607 OFICINA 428",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "JUDITH MINANO.",
    "empresa": "JUDITH MINANO.",
    "direccion": "AV. DEL PARQUE NORTE  Nº 480 , OFICINA 404",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "ELIZABETH O ROMINA DE LANEY",
    "empresa": "ESTUDIO CONTABLE LIMA - LANEY,",
    "direccion": "MANZANOS 649",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "APORTA",
    "direccion": "LA BEGONIAS 415, PIDO 8",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "RIPLEY",
    "direccion": "LAS BEGONIAS 545 PISO 9",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "ESTUDIO FERNANDINI",
    "direccion": "LAS BEGONIAS 455",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "BCP",
    "direccion": "AV JUAN DE ARONA 889,",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "PAIFICO SEGUROS SA",
    "direccion": "AV JUAN DE ARONA 830",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "JUDITH MIÑANO",
    "empresa": "JUDITH MIÑANO",
    "direccion": "AV. DEL PARQUE NORTE  Nº 480 , OFICINA 404",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "ADMINISTRADOR",
    "empresa": "QUINOA TORRE PANAMA",
    "direccion": "AV. REPUBLICA DE PANAMA 3483",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "NEWPORT",
    "direccion": "AV. REPUBLICA DE PANAMA 3030",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 27
  },
  {
    "contacto": "ANA QUISPE - ADMINISTRADORA",
    "empresa": "TRAFFIK FCP SAC",
    "direccion": "CALLE LÉRIDA 227",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 30
  },
  {
    "contacto": "VENTANILLA",
    "empresa": "OLVA COURIER",
    "direccion": "AV DEL AIRE 1322",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 30
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "INTRASERV CINCO S.A.C.",
    "direccion": "CALLE MARISCAL ORBEGOSO 120",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 30
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "UNIVERSIDAD PERUANA CAYETANO HEREDIA",
    "direccion": "AV. HONORIO DELGADO 430",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 31
  },
  {
    "contacto": "JESSICA RUIZ",
    "empresa": "FINANCIAL INNOVATIONS - JESSICA RUIZ",
    "direccion": "AV. LA MAR 2591 - DPTO 1201",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 32
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "PONTIFICIA UNIVERSIDAD CATÓLICA DEL PERÚ",
    "direccion": "AV. UNIVERSITARIA 1800",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 32
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "PONTIFICIA UNIVERSIDAD CATÓLICA DEL PERÚ - PUCP",
    "direccion": "AV. UNIVERSITARIA 1801",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 32
  },
  {
    "contacto": "JESSICA RUIZ",
    "empresa": "FINANCIAL INNOVATIONS",
    "direccion": "AV. LA MAR 2591 DPTO 1201",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 32
  },
  {
    "contacto": "JESSICA VACCA",
    "empresa": "JESSICA VACCA",
    "direccion": "PADRE URRACA 381 PISO 2",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 32
  },
  {
    "contacto": "IRMA SISIWASI",
    "empresa": "IRMA SISIWASI",
    "direccion": "PASAJE BAHIA SAN JUAN 160",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 32
  },
  {
    "contacto": "IRMA SISIWASI TEJEDORA",
    "empresa": "IRMA SISIWASI TEJEDORA",
    "direccion": "PASAJE BAHIA SAN JUAN 160",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 32
  },
  {
    "contacto": "IRMA SISIWASI SAN MIGUEL",
    "empresa": "IRMA SISIWASI SAN MIGUEL",
    "direccion": "PASAJE BAHIA SAN JUAN 160",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 32
  },
  {
    "contacto": "ENCARGADO",
    "empresa": "MONARK PERU SA",
    "direccion": "AV. EL DERBY 258",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "Sra. Violeta",
    "empresa": "La Casa de Violeta",
    "direccion": "Calle Los Antares 361",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "Malu",
    "empresa": "Malu",
    "direccion": "Av. Velasco Astete 312 Dpto 103",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "SUNARP - SURCO",
    "direccion": "AVENIDA ALFREDO BENAVIDES 3759",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "EMBAJADA DE ESTADOS UNIDOS",
    "direccion": "AVENIDA LA ENCALADA, CUADRA 17 S/N",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "ROSARIO LAZON",
    "empresa": "SAGA FALABELLA JOCKEY PLAZA",
    "direccion": "AV. JAVIER PRADO 4200 - ANCLA 2",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MAKRO SURCO",
    "direccion": "AV. JORGE CHAVEZ 1218",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "VENTANILLA",
    "empresa": "BANCO DE LA NACION",
    "direccion": "AVENIDA ALFREDO BENAVIDES 3790",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "CLINICA PADRE LUIS TEZZA",
    "direccion": "EL POLO 570",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "CÉSAR ORTEGA",
    "empresa": "PERÚ BIKE",
    "direccion": "CALLE PUNTA SAL 506",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "UNIVERSIDAD DE LIMA",
    "direccion": "AV. JAVIER PRADO ESTE 4600",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "SOLEDAD MENÉNDEZ",
    "empresa": "COMUNICA CON A PERU SAC",
    "direccion": "AV. DEL PINAR 134 OF 701",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "PATRICK VAUGHAN",
    "empresa": "ANDIAMO PRODUCCIONES SAC",
    "direccion": "JIRÓN ALONSO DE MOLINA 930 DPTO 102",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "GONZALO DURAN",
    "empresa": "GMRC SA",
    "direccion": "AV. PRIMAVERA 1437",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "MARIO MENDOZA",
    "empresa": "GLOBO ROJO",
    "direccion": "LOMA UMBROSA 853",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "SERVITEBCA",
    "direccion": "AV. EL DERBY 250 OF 1501",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "SRTA. NELLA - CONTABILIDAD",
    "empresa": "CINESTAR BENAVIDES",
    "direccion": "AV ALFREDO BENAVIDES 4981",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "UPC SURCO",
    "direccion": "PROLONGACIÓN PRIMAVERA 2390",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "UNIVERSIDAD ESAN",
    "direccion": "ALONSO DE MOLINA 1652",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "SUPERINTENDENCIA NACIONAL DE EDUCACIÓN SUPERIOR UNIVERSITARIA (SUNEDU)",
    "direccion": "CALLE ALDABAS 337",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "FIORELLA CELI",
    "empresa": "GRUPO KO",
    "direccion": "CALLE TOMASAL 1145",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "MODULO",
    "empresa": "PURIY DEL PERU",
    "direccion": "C.C. JOCKEY PLAZA",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "JIMENA QUISPE",
    "empresa": "JIMENA QUISPE",
    "direccion": "LAS GALICIAS 140",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "ADMINISTRADORA",
    "empresa": "QUINOA JOCKEY PLZA",
    "direccion": "AV. JAVIER PRADO 4200",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "WALDER CERON",
    "empresa": "INCATOPS",
    "direccion": "INTIHUATANA 843",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MOTOR MUNDO",
    "direccion": "AV. CRISTOBAL DE PERALTA NORTE 968",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "FERNANDO CARBAJAL",
    "empresa": "SERVICIOS INTEGRADOS Y MERCADEO EIRL",
    "direccion": "LOMA UMBORSA 853",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "CREDICORP CAPITAL",
    "direccion": "AV. EL DERBY 055 TORRE 4 PISO 8",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "ADMINISTRADORA",
    "empresa": "QUINOA CRONOS",
    "direccion": "AV. EL DERBY 055",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "JOSÉ VILCHEZ",
    "empresa": "SEGUROS FALABELLA",
    "direccion": "C.C. OPEN PLAZA ANGAMOS PISO 8",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 34
  },
  {
    "contacto": "JESSICA PIMENTEL",
    "empresa": "PHILIP MORRIS PERÚ - MARLBORO",
    "direccion": "ORQUIDEAS 103",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 34
  },
  {
    "contacto": "ADMINISTRADOR",
    "empresa": "CAFÉ ORIGEN",
    "direccion": "CALLE LAS TIENDAS 295",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 34
  },
  {
    "contacto": "ANTONIO OLASCOAGA",
    "empresa": "LIMAUTOS AUTOMOTRIZ DEL PERÚ SAC",
    "direccion": "AV. REPÚBLICA DE PANAMÁ 4628",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 34
  },
  {
    "contacto": "RAYHULL AREVALO",
    "empresa": "AUTOLAND S.A.",
    "direccion": "AV. REPÚBLICA DE PANAMÁ 4545",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 34
  },
  {
    "contacto": "MARTIN PAUCAR",
    "empresa": "GRUPO PANA SA",
    "direccion": "AV. REPÚBLICA DE PANAMÁ 4628",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 34
  },
  {
    "contacto": "VENTANILLA DE PAGO",
    "empresa": "LUZ DEL SUR INTIHUATANA SURQUILLO",
    "direccion": "INTIHUATANA 290",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 34
  },
  {
    "contacto": "VENTANILLA",
    "empresa": "OLTURSA",
    "direccion": "AV. ANDRÉS ARAMBURU 1160",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 34
  },
  {
    "contacto": "VENTANILLA",
    "empresa": "OLTURSA",
    "direccion": "AV. ANDRÉS ARAMBURU 1160",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 34
  },
  {
    "contacto": "ARTURO NADALES",
    "empresa": "MODULO EN PROMART JESUS MARIA",
    "direccion": "JESUS MARIA",
    "telefono": "Sin Teléfono",
    "otroDato": "",
    "distrito": 1
  },
  {
    "contacto": "SANTIAGO PLAZA",
    "empresa": "NEXT PLACEMENT",
    "direccion": "CENTRO EMPRESARIAL NUEVO TRIGAL",
    "telefono": "Sin Teléfono",
    "otroDato": "OF 20 SOTANO",
    "distrito": 33
  },
  {
    "contacto": "CAROLA MALASQUEZ",
    "empresa": "XPERTA GESTIÓN EMPRESARIAL",
    "direccion": "CALLE PABLO BERMUDEZ 143",
    "telefono": "Sin Teléfono",
    "otroDato": "OF. 301 - SANTA BEATRIZ",
    "distrito": 14
  },
  {
    "contacto": "GENKI HIRAOKA",
    "empresa": "ESTUDIO DE ABOGADOS HIRAOKA Y ASOCIADOS",
    "direccion": "AV. CANADÁ 3527",
    "telefono": "Sin Teléfono",
    "otroDato": "OFICINA 302",
    "distrito": 33
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "LAMSAC",
    "direccion": "AV EL DERBY 250",
    "telefono": "Sin Teléfono",
    "otroDato": "OFICINAS 1701 – 1801",
    "distrito": 33
  },
  {
    "contacto": "LUCIA MARIA CANCIOBELLO ECHEVARRIA",
    "empresa": "LUCIA MARIA CANCIOBELLO ECHEVARRIA",
    "direccion": "MONTE CARMELO 259 DPTO 301",
    "telefono": "Sin Teléfono",
    "otroDato": "PARALELA A LA 11 DE VELASCO ASTETE",
    "distrito": 33
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MUSEO DE ARTE DE LIMA",
    "direccion": "AV PASEO COLON 125",
    "telefono": "Sin Teléfono",
    "otroDato": "PARQUE DE LA EXPOSICIÓN",
    "distrito": 1
  },
  {
    "contacto": "JESSICA MOSCOSO",
    "empresa": "CITE MADERA",
    "direccion": "JR. SOLIDARIDAD 300",
    "telefono": "Sin Teléfono",
    "otroDato": "PARQUE INDUSTRIAL VES",
    "distrito": 42
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "DIVINROB-DIRINCRI",
    "direccion": "AV. ESPAÑA 323",
    "telefono": "Sin Teléfono",
    "otroDato": "PISO 1",
    "distrito": 1
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "GREAT RETAIL",
    "direccion": "AV. JAVIER PRADO ESTE 6210",
    "telefono": "Sin Teléfono",
    "otroDato": "PISO 12",
    "distrito": 12
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "PROMPERÚ",
    "direccion": "CALLE UNO OESTE 60",
    "telefono": "Sin Teléfono",
    "otroDato": "PISO 13",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "CONVERGIA",
    "direccion": "AV. LIBERTADORES 155",
    "telefono": "Sin Teléfono",
    "otroDato": "PISO 2",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "ESTUDIO DE ABOGADOS MUÑIZ",
    "direccion": "AV. LAS BEGONIAS 475",
    "telefono": "Sin Teléfono",
    "otroDato": "PISO 6",
    "distrito": 27
  },
  {
    "contacto": "ROCÍO PUIGGROS",
    "empresa": "KALLPA",
    "direccion": "AV SANTO TORIBIO 115",
    "telefono": "Sin Teléfono",
    "otroDato": "PISO 7. INGRESAR POR VÍCTOR ANDRÉS BELAÚNDE.",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "SOCIEDAD NACIONAL DE PESQUERÍA",
    "direccion": "REPÚBLICA DE PANAMÁ 3591",
    "telefono": "Sin Teléfono",
    "otroDato": "PISO 9",
    "distrito": 27
  },
  {
    "contacto": "SECRETARIA",
    "empresa": "PMP HOLDING",
    "direccion": "AV. MANUEL OLGUÍN 373",
    "telefono": "Sin Teléfono",
    "otroDato": "PISO 9 - INGRESAR EN PANTALÓN",
    "distrito": 33
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "MUNICIPALIDAD DE SANTIAGO DE SURCO",
    "direccion": "JR. BOLOGNESI 275",
    "telefono": "Sin Teléfono",
    "otroDato": "PLAZA DE ARMAS SURCO VIEJO",
    "distrito": 33
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "SUPERMERCADOS PERUANOS - FACTURAS",
    "direccion": "AV. AVIACION 5150",
    "telefono": "Sin Teléfono",
    "otroDato": "PLAZA VEA OVALO HIGUERETA (TDA B)",
    "distrito": 33
  },
  {
    "contacto": "ANTONELLA CARVAJAL",
    "empresa": "BAMBINA MONELLA",
    "direccion": "EL ROSARIO 170, DPTO 201",
    "telefono": "Sin Teléfono",
    "otroDato": "POR LA HUACA HUALLAMARCA",
    "distrito": 27
  },
  {
    "contacto": "DANIELA NICHOLSON",
    "empresa": "COLECTIVO PUBLICIDAD",
    "direccion": "JIRÓN COLINA 113 OF 501",
    "telefono": "Sin Teléfono",
    "otroDato": "PREGUNTAR EN PORTERÍA",
    "distrito": 4
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "CONDESAN",
    "direccion": "AV LA MOLINA 1895",
    "telefono": "Sin Teléfono",
    "otroDato": "PUERTA 3 DEL CENTRO INTERNACIONAL DE LA PAPA",
    "distrito": 12
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "HOSPITAL NACIONAL DOS DE MAYO",
    "direccion": "AV. MIGUEL GRAU 13",
    "telefono": "Sin Teléfono",
    "otroDato": "PUERTA PRINCIPAL-PARQUE DE LA HISTORIA DE LA MEDICINA PERUANA",
    "distrito": 1
  },
  {
    "contacto": "ANDRES CACERES",
    "empresa": "OXXO",
    "direccion": "JR. EL POLO 401, PISO 9",
    "telefono": "Sin Teléfono",
    "otroDato": "RECIBEN FACTURAS JU Y VI DE 9.30 A 13.30,",
    "distrito": 33
  },
  {
    "contacto": "MÓNICA CÁRDENAS",
    "empresa": "GLOBAL TPA S.A.",
    "direccion": "AV. PASEO DE LA REPUBLICA 3195 - OFICINA 70",
    "telefono": "Sin Teléfono",
    "otroDato": "RUC: 20517063585",
    "distrito": 27
  },
  {
    "contacto": "WENDY MONTEVERDE",
    "empresa": "BOOM BTL",
    "direccion": "MANUEL MENDIBURU 1248 OF 402",
    "telefono": "Sin Teléfono",
    "otroDato": "SANTA BEATRIZ",
    "distrito": 18
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "FARMACIA PERUANA",
    "direccion": "VÍCTOR ALZAMORA 147",
    "telefono": "Sin Teléfono",
    "otroDato": "SANTA CATALINA",
    "distrito": 33
  },
  {
    "contacto": "JAVIER MARTINEZ",
    "empresa": "JAPAN AUTOS S.A.",
    "direccion": "AV. JAVIER PRADO ESTE 1197",
    "telefono": "Sin Teléfono",
    "otroDato": "SANTA CATALINA",
    "distrito": 13
  },
  {
    "contacto": "DRA. JENNIFER SORIANO O EL DR. MIGUEL",
    "empresa": "ESTUDIO ABOGADOS SORIANO",
    "direccion": "AV. SAN LUIS 2546",
    "telefono": "Sin Teléfono",
    "otroDato": "SEGUNDO PISO 2B",
    "distrito": 41
  },
  {
    "contacto": "ADMINISTRADORA",
    "empresa": "TIEMDA ALOBEBE",
    "direccion": "CENTENARIO 179",
    "telefono": "Sin Teléfono",
    "otroDato": "TIENDA 102",
    "distrito": 4
  },
  {
    "contacto": "LESLIE",
    "empresa": "TIENDA VBG",
    "direccion": "CENTRO COMERCIAL EL POLO",
    "telefono": "Sin Teléfono",
    "otroDato": "TIENDA 228B",
    "distrito": 33
  },
  {
    "contacto": "DANIEL ALVARADO",
    "empresa": "DANIEL ALVARADO",
    "direccion": "DOMENICO MORELLI 110",
    "telefono": "Sin Teléfono",
    "otroDato": "TORRE 1 CENTRO COMERCIAL LA RAMBLA",
    "distrito": 41
  },
  {
    "contacto": "ADRIANA GIUDICE",
    "empresa": "AUSTRAL GROUP",
    "direccion": "CENTRO EMPRESARIAL REAL",
    "telefono": "Sin Teléfono",
    "otroDato": "TORRE 1 PISO 3",
    "distrito": 27
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "BDO AUDITORES",
    "direccion": "CAMINO REAL 456",
    "telefono": "Sin Teléfono",
    "otroDato": "TORRE 4 PISO 12",
    "distrito": 27
  },
  {
    "contacto": "MANUEL QUINTANA",
    "empresa": "TCA - TOTAL CALIDAD AMERICA",
    "direccion": "LUIS GALVANI 234",
    "telefono": "Sin Teléfono",
    "otroDato": "URB SANTA ROSA",
    "distrito": 3
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "REPRESENTACIÓN DE LA FAO EN PERÚ",
    "direccion": "MANUEL ALMENARA 328",
    "telefono": "Sin Teléfono",
    "otroDato": "URB. AURORA",
    "distrito": 18
  },
  {
    "contacto": "HUGO SILVA BELTRÁN",
    "empresa": "RED DE COMBUSTIBLES LÍQUIDOS SAC",
    "direccion": "CALLE MONTEROSA 717",
    "telefono": "Sin Teléfono",
    "otroDato": "URB. CHACARILLA DEL ESTANQUE",
    "distrito": 33
  },
  {
    "contacto": "ROGER LESCANO",
    "empresa": "ISOPETROL LUBRICANTS DEL PERU SAC",
    "direccion": "CALLE 25 195",
    "telefono": "Sin Teléfono",
    "otroDato": "URB. CORPAC",
    "distrito": 27
  },
  {
    "contacto": "JUDITH MINANO",
    "empresa": "JUDITH MINANO",
    "direccion": "AV. DEL PARQUE NORTE  Nº 480 OFICINA 404",
    "telefono": "Sin Teléfono",
    "otroDato": "URB. CORPAC. CRUCE AV. JOSE GÁLVEZ BARRENECHEA FRENTE GRIFO REPSOL",
    "distrito": 27
  },
  {
    "contacto": "VANESSA ORTEGA",
    "empresa": "SERVICIOS INTEGRALES VALPARAISO SRL",
    "direccion": "PASAJE SAN FERNANDO 140",
    "telefono": "Sin Teléfono",
    "otroDato": "URB. EL CÓNDOR",
    "distrito": 34
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "AUTORIDAD NACIONAL DEL AGUA",
    "direccion": "LOS PETIRROJOS 355",
    "telefono": "Sin Teléfono",
    "otroDato": "URB. EL PALOMAR",
    "distrito": 27
  },
  {
    "contacto": "KRISTINA PAYHUA",
    "empresa": "MEXPORT",
    "direccion": "CALLE CIUDAD REAL 269",
    "telefono": "Sin Teléfono",
    "otroDato": "URB. HIGUERETA. ALT. CRUCE DE AV. HIGUERETA CON PEDRO VENTURO.",
    "distrito": 33
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "ASOCIACIÓN SALGALU PARA EL DESARROLLO",
    "direccion": "CALLE LOS HALCONES 249",
    "telefono": "Sin Teléfono",
    "otroDato": "URB. LIMATAMBO",
    "distrito": 27
  },
  {
    "contacto": "SRA. BETSI MEZA",
    "empresa": "HOTEL YEYAS",
    "direccion": "AV. MELGAREJO 633",
    "telefono": "Sin Teléfono",
    "otroDato": "URB. SANTA PATRICIA",
    "distrito": 12
  },
  {
    "contacto": "MESA DE PARTES",
    "empresa": "COLEGIO JEAN LE BOULCH",
    "direccion": "RODRIGO DE TRIANA 150",
    "telefono": "Sin Teléfono",
    "otroDato": "URB. SANTA PATRICIA, 3RA. ETAPA",
    "distrito": 12
  },
  {
    "contacto": "ROSARIO MALAGA",
    "empresa": "CIRCUS GREY",
    "direccion": "AV. PEDRO DE OSMA 205",
    "telefono": "Sin Teléfono",
    "otroDato": "URB. SAUZALITO",
    "distrito": 4
  },
  {
    "contacto": "ROSSANA ROSALES",
    "empresa": "DUPREE - ALMACENES",
    "direccion": "LA MAR 240",
    "telefono": "Sin Teléfono",
    "otroDato": "URB. VULCANO",
    "distrito": 3
  },
  {
    "contacto": "CARLOS ESPINOZA",
    "empresa": "ESTUDIO REBAZZA",
    "direccion": "AV VÍCTOR ANDRES BELAUNDE 147",
    "telefono": "Sin Teléfono",
    "otroDato": "VÍA PRINCIPAL 133 EDIFICIO REAL 2  PISOS 2 Y 3",
    "distrito": 27
  },
  {
    "contacto": "EL QUE SE INDICA",
    "empresa": "WEWORK REAL 2",
    "direccion": "AV. VICTOR ANDRÉS BELAÚNDE 147",
    "telefono": "Sin Teléfono",
    "otroDato": "VIA PRINCIPAL 133 EDIFICIO REAL DOS",
    "distrito": 27
  },
  {
    "contacto": "SOFIA ZEGARRA",
    "empresa": "MAIL ON BIKE",
    "direccion": "JIRON LOMA UMBROSA 853",
    "telefono": 967238429,
    "otroDato": "",
    "distrito": 33
  },
  {
    "contacto": "JOSE",
    "empresa": "JOSE",
    "direccion": "CALLE ESTOCOLMO 169 URB LOS PORTALES DE JAVIER PRADO",
    "telefono": 974166255,
    "otroDato": "REF A 10 MIN PASANDO EL REAL PLAZA PURUCHUCO",
    "distrito": 3
  }
];

module.exports = destinos;
