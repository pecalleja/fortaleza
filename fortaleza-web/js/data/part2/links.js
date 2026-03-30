// Links (doors and passages between rooms)
export const links = [
  // Room 1 - Cuarto de huéspedes
  {
    type: 'linking',
    id: 'puerta-1-2',
    nameEs: 'Puerta',
    nameEn: 'Door',
    descEs: 'En realidad, lo que usted puede distinguir es el delicado filón de luz que deja escapar la unión de la puerta y el marco.',
    descEn: 'Actually, what you can distinguish is the delicate thread of light escaping from the junction of the door and the frame.',
    fromRoomId: 1,
    destinationId: 2,
    password: '',
    passageMsgEs: 'Usted cierra los ojos, cegado por la luz.',
    passageMsgEn: 'You close your eyes, blinded by the light.',
    isOpen: true
  },

  // Room 2 - Pasillo
  {
    type: 'linking',
    id: 'puerta-2-1',
    nameEs: 'Puerta',
    nameEn: 'Door',
    descEs: 'Es de madera trabajada, una verdadera obra de arte.',
    descEn: 'It is made of carved wood, a true work of art.',
    fromRoomId: 2,
    destinationId: 1,
    password: '',
    passageMsgEs: 'Usted entra a la oscuridad nuevamente.',
    passageMsgEn: 'You enter the darkness again.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-espinos-2-6',
    nameEs: 'Puerta de espinos',
    nameEn: 'Thorn door',
    descEs: 'Está erizada de espinas. Usted tiene miedo hasta de acercarse.',
    descEn: 'It is bristling with thorns. You are afraid to even approach it.',
    fromRoomId: 2,
    destinationId: 6,
    password: '',
    passageMsgEs: 'Usted entra lentamente, tratando de no rozar la puerta.',
    passageMsgEn: 'You enter slowly, trying not to brush against the door.',
    isOpen: true
  },
  {
    type: 'dangerLink',
    id: 'puerta-metal-2-7',
    nameEs: 'Puerta de metal',
    nameEn: 'Metal door',
    descEs: 'Es de acero bruñido. Tiene encima un cartel que dice "Cocina. Cúbrase la nariz."',
    descEn: 'It is made of burnished steel. It has a sign on it that reads "Kitchen. Cover your nose."',
    fromRoomId: 2,
    destinationId: 7,
    talisman: 'Pañuelo',
    passageMsgEs: 'Al pasar siente un olor muy fuerte, que lo envuelve y lo asfixia. Usted sobrevive gracias al pañuelo que lleva consigo.',
    passageMsgEn: 'As you pass through you feel a very strong smell that envelops and suffocates you. You survive thanks to the handkerchief you carry with you.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-negra-2-3',
    nameEs: 'Puerta Negra',
    nameEn: 'Black door',
    descEs: 'Usted ve unas delgadas cortinas de humo saliendo por debajo de la puerta.',
    descEn: 'You see thin curtains of smoke coming from under the door.',
    fromRoomId: 2,
    destinationId: 3,
    password: '',
    passageMsgEs: 'Usted tose fuertemente, ha entrado al Salón de Fumar.',
    passageMsgEn: 'You cough heavily, you have entered the Smoking Room.',
    isOpen: true
  },
  {
    type: 'riddleLink',
    id: 'puerta-azul-2-4',
    nameEs: 'Puerta Azul',
    nameEn: 'Blue door',
    descEs: 'Es más pequeña que las puertas restantes.',
    descEn: 'It is smaller than the remaining doors.',
    fromRoomId: 2,
    destinationId: 4,
    riddleEs: '¿Cuál es el nombre de la hija del Hechicero?',
    riddleEn: 'What is the name of the Sorcerer\'s daughter?',
    answer: 'aura',
    passageMsgEs: 'Usted entra a la alcoba de la hija del Hechicero.',
    passageMsgEn: 'You enter the Sorcerer\'s daughter\'s chamber.',
    isOpen: false
  },
  {
    type: 'linking',
    id: 'puerta-oro-2-8',
    nameEs: 'Puerta de oro',
    nameEn: 'Gold door',
    descEs: 'Usted nunca había visto tanto oro fundido en una misma pieza.',
    descEn: 'You had never seen so much molten gold in a single piece.',
    fromRoomId: 2,
    destinationId: 8,
    password: '',
    passageMsgEs: 'El resplandor del oro lo ciega por un momento. Usted ha salido a las terrazas.',
    passageMsgEn: 'The gleam of the gold blinds you for a moment. You have gone out to the terraces.',
    isOpen: true
  },

  // Room 3 - Salón de Fumar
  {
    type: 'linking',
    id: 'puerta-negra-3-2',
    nameEs: 'Puerta Negra',
    nameEn: 'Black door',
    descEs: 'La puerta por este lado está muy manchada por el humo.',
    descEn: 'The door on this side is very stained by smoke.',
    fromRoomId: 3,
    destinationId: 2,
    password: '',
    passageMsgEs: 'Usted sale del Salón de Fumar. Al fin puede respirar normalmente.',
    passageMsgEn: 'You leave the Smoking Room. At last you can breathe normally.',
    isOpen: true
  },

  // Room 4 - Cuarto de la hija del Hechicero
  {
    type: 'linking',
    id: 'puerta-azul-4-2',
    nameEs: 'Puerta Azul',
    nameEn: 'Blue door',
    descEs: 'Conduce al pasillo.',
    descEn: 'It leads to the hallway.',
    fromRoomId: 4,
    destinationId: 2,
    password: '',
    passageMsgEs: 'Usted sale al pasillo.',
    passageMsgEn: 'You go out to the hallway.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'agujero-4-5',
    nameEs: 'Agujero',
    nameEn: 'Hole',
    descEs: 'Parece una guarida de ratones.',
    descEn: 'It looks like a mouse den.',
    fromRoomId: 4,
    destinationId: 5,
    passageMsgEs: 'Usted se agacha y (con grandes dolores en todos los huesos) atraviesa el agujero.',
    passageMsgEn: 'You crouch down and (with great pain in every bone) go through the hole.',
    isOpen: true
  },

  // Room 5 - Casa de muñecas
  {
    type: 'openLink',
    id: 'agujero-5-4',
    nameEs: 'Agujero',
    nameEn: 'Hole',
    descEs: 'Es la salida de la casa de muñecas.',
    descEn: 'It is the exit of the dollhouse.',
    fromRoomId: 5,
    destinationId: 4,
    passageMsgEs: 'Usted regresa a la alcoba.',
    passageMsgEn: 'You return to the chamber.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-baul-5-10',
    nameEs: 'Puerta del baúl',
    nameEn: 'Trunk door',
    descEs: 'Parece muy antigua. Usted está seguro de que ahí hay "gato encerrado".',
    descEn: 'It looks very old. You are sure there is something fishy about it.',
    fromRoomId: 5,
    destinationId: 10,
    password: 'miau',
    passageMsgEs: '¡Usted ha caído dentro del baúl!',
    passageMsgEn: 'You have fallen into the trunk!',
    isOpen: false
  },

  // Room 6 - Cuarto del Leñador
  {
    type: 'linking',
    id: 'puerta-espinos-6-2',
    nameEs: 'Puerta de espinos',
    nameEn: 'Thorn door',
    descEs: 'Al igual que del otro lado, está erizada de espinas.',
    descEn: 'Just like the other side, it is bristling with thorns.',
    fromRoomId: 6,
    destinationId: 2,
    password: '',
    passageMsgEs: 'Usted sale lentamente, tratando de no rozar la puerta.',
    passageMsgEn: 'You leave slowly, trying not to brush against the door.',
    isOpen: true
  },

  // Room 7 - Cocina
  {
    type: 'dangerLink',
    id: 'puerta-metal-7-2',
    nameEs: 'Puerta de metal',
    nameEn: 'Metal door',
    descEs: 'Conduce al pasillo.',
    descEn: 'It leads to the hallway.',
    fromRoomId: 7,
    destinationId: 2,
    talisman: 'Pañuelo',
    passageMsgEs: 'Al salir puede apartar el pañuelo de la nariz.',
    passageMsgEn: 'On your way out you can remove the handkerchief from your nose.',
    isOpen: true
  },

  // Room 8 - Terrazas
  {
    type: 'linking',
    id: 'puerta-oro-8-2',
    nameEs: 'Puerta de oro',
    nameEn: 'Gold door',
    descEs: 'Usted nunca había visto tanto oro fundido en una misma pieza.',
    descEn: 'You had never seen so much molten gold in a single piece.',
    fromRoomId: 8,
    destinationId: 2,
    password: '',
    passageMsgEs: 'Usted regresa al pasillo. El resplandor del oro lo ciega por un momento.',
    passageMsgEn: 'You return to the hallway. The gleam of the gold blinds you for a moment.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'escalera-caracol-8-11',
    nameEs: 'Escalera de caracol',
    nameEn: 'Spiral staircase',
    descEs: 'Parece la bajada a un oído gigante.',
    descEn: 'It looks like the descent into a giant ear.',
    fromRoomId: 8,
    destinationId: 11,
    passageMsgEs: 'El viento helado que viene del fondo de la escalera lo envuelve en continuos temblores.',
    passageMsgEn: 'The freezing wind coming from the bottom of the staircase wraps you in continuous shivers.',
    isOpen: true
  },

  // Room 9 - Calabozo del Monstruo
  {
    type: 'openLink',
    id: 'escalera-caracol-9-8',
    nameEs: 'Escalera de caracol',
    nameEn: 'Spiral staircase',
    descEs: 'Conduce a las terrazas',
    descEn: 'It leads to the terraces',
    fromRoomId: 9,
    destinationId: 8,
    passageMsgEs: 'Su condicionamiento euclidiano le impide comprender cómo es posible que una misma escalera sea origen y destino de tres lugares distintos a la vez.\nUsted ha subido a las terrazas.',
    passageMsgEn: 'Your Euclidean conditioning prevents you from understanding how the same staircase can be both origin and destination of three different places at once.\nYou have gone up to the terraces.',
    isOpen: true
  },

  // Room 10 - Interior del baúl
  {
    type: 'linking',
    id: 'puerta-baul-10-5',
    nameEs: 'Puerta del baúl',
    nameEn: 'Trunk door',
    descEs: 'Está en el techo.',
    descEn: 'It is on the ceiling.',
    fromRoomId: 10,
    destinationId: 5,
    password: '',
    passageMsgEs: 'Usted sale del baúl y vuelve a sentir la estrechez de la casa de muñecas.',
    passageMsgEn: 'You leave the trunk and feel the narrowness of the dollhouse again.',
    isOpen: true
  },

  // Room 11 - Orilla del Río Negro (1)
  {
    type: 'openLink',
    id: 'escalera-caracol-11-9',
    nameEs: 'Escalera de caracol',
    nameEn: 'Spiral staircase',
    descEs: 'Contrariamente a lo que usted espera, la escalera en este lugar asciende hasta el calabozo del Monstruo.',
    descEn: 'Contrary to what you expect, the staircase in this place ascends to the Monster\'s dungeon.',
    fromRoomId: 11,
    destinationId: 9,
    passageMsgEs: 'Usted sube durante unos minutos y llega al calabozo del Monstruo.',
    passageMsgEn: 'You climb for a few minutes and arrive at the Monster\'s dungeon.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'rio-negro-11-12',
    nameEs: 'Río Negro',
    nameEn: 'Black River',
    descEs: 'Es el Estigia.',
    descEn: 'It is the Styx.',
    fromRoomId: 11,
    destinationId: 12,
    passageMsgEs: 'Usted se sumerge en las oscuras aguas del Estigia (tiene miedo de montar el bote de Caronte). Pocos mortales se han atrevido a tanto. Al poco rato está del otro lado.',
    passageMsgEn: 'You plunge into the dark waters of the Styx (you are afraid to ride Charon\'s boat). Few mortals have dared so much. Shortly after, you are on the other side.',
    isOpen: true
  },

  // Room 12 - Orilla del Río Negro (2)
  {
    type: 'openLink',
    id: 'rio-negro-12-11',
    nameEs: 'Río Negro',
    nameEn: 'Black River',
    descEs: 'Es el Estigia.',
    descEn: 'It is the Styx.',
    fromRoomId: 12,
    destinationId: 11,
    passageMsgEs: 'Usted regresa nadando a la otra orilla.',
    passageMsgEn: 'You swim back to the other shore.',
    isOpen: true
  },

  // Room 13 - Jardines del Hechicero
  {
    type: 'openLink',
    id: 'avenida-hierro-13-12',
    nameEs: 'Avenida de hierro',
    nameEn: 'Iron avenue',
    descEs: 'Toda la avenida está rodeada de árboles de metal. Usted se cubre los oídos tratando de escapar de los chirridos provocados por el viento en las hojas.',
    descEn: 'The entire avenue is surrounded by metal trees. You cover your ears trying to escape the screeching caused by the wind in the leaves.',
    fromRoomId: 13,
    destinationId: 12,
    passageMsgEs: 'Usted camina durante varios minutos hasta regresar al río.',
    passageMsgEn: 'You walk for several minutes until you return to the river.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-madera-13-14',
    nameEs: 'Puerta de madera',
    nameEn: 'Wooden door',
    descEs: 'Es una puerta bastante vulgar. Conduce al comedor.',
    descEn: 'It is a rather common door. It leads to the dining room.',
    fromRoomId: 13,
    destinationId: 14,
    password: '',
    passageMsgEs: 'Usted entra al comedor.',
    passageMsgEn: 'You enter the dining room.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-amarilla-13-17',
    nameEs: 'Puerta amarilla',
    nameEn: 'Yellow door',
    descEs: 'Conduce al cuarto del tesoro.',
    descEn: 'It leads to the treasure room.',
    fromRoomId: 13,
    destinationId: 17,
    password: 'omicuos ihanti',
    passageMsgEs: 'Usted entra al cuarto del tesoro. Los resplandores de las piedras preciosas lo ciegan por unos instantes.',
    passageMsgEn: 'You enter the treasure room. The glow of the precious stones blinds you for a few moments.',
    isOpen: false
  },
  {
    type: 'linking',
    id: 'puerta-tela-13-15',
    nameEs: 'Puerta de tela',
    nameEn: 'Cloth door',
    descEs: 'La tela de la puerta es tan dura como cualquier acero.',
    descEn: 'The fabric of the door is as hard as any steel.',
    fromRoomId: 13,
    destinationId: 15,
    password: '',
    passageMsgEs: 'Usted entra a las habitaciones del sastre.',
    passageMsgEn: 'You enter the tailor\'s quarters.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-verde-13-16',
    nameEs: 'Puerta verde',
    nameEn: 'Green door',
    descEs: 'Conduce a las habitaciones del jardinero.',
    descEn: 'It leads to the gardener\'s quarters.',
    fromRoomId: 13,
    destinationId: 16,
    password: '',
    passageMsgEs: 'Usted entra a las habitaciones del jardinero.',
    passageMsgEn: 'You enter the gardener\'s quarters.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-roja-13-18',
    nameEs: 'Puerta roja',
    nameEn: 'Red door',
    descEs: 'Conduce al salón de las velas. La puerta está caliente.',
    descEn: 'It leads to the candle hall. The door is hot.',
    fromRoomId: 13,
    destinationId: 18,
    password: '',
    passageMsgEs: 'Usted entra al salón de las velas.',
    passageMsgEn: 'You enter the candle hall.',
    isOpen: true
  },

  // Room 14 - Comedor
  {
    type: 'linking',
    id: 'puerta-madera-14-13',
    nameEs: 'Puerta de Madera',
    nameEn: 'Wooden door',
    descEs: 'Usted distingue algunas manchas de salsa en la puerta. Parece los comensales acostumbran a lanzarse la comida.',
    descEn: 'You notice some sauce stains on the door. It seems the diners are accustomed to throwing food at each other.',
    fromRoomId: 14,
    destinationId: 13,
    password: '',
    passageMsgEs: 'Usted sale del comedor.',
    passageMsgEn: 'You leave the dining room.',
    isOpen: true
  },
  {
    type: 'dangerLink',
    id: 'tunel-14-49',
    nameEs: 'Túnel',
    nameEn: 'Tunnel',
    descEs: 'Usted se pregunta qué hace un túnel en un comedor. ¡No intente cruzar desprotegido!',
    descEn: 'You wonder what a tunnel is doing in a dining room. Do not try to cross unprotected!',
    fromRoomId: 14,
    destinationId: 49,
    talisman: 'Arco',
    passageMsgEs: 'Casi a mitad de camino usted es atacado por una bandada de murciélagos gigantes. Gracias al arco, usted logra ahuyentarlos.',
    passageMsgEn: 'Almost halfway through you are attacked by a flock of giant bats. Thanks to the bow, you manage to scare them away.',
    isOpen: true
  },

  // Room 15 - Sastrería
  {
    type: 'linking',
    id: 'puerta-tela-15-13',
    nameEs: 'Puerta de Tela',
    nameEn: 'Cloth door',
    descEs: 'La tela de la puerta es tan dura como cualquier acero.',
    descEn: 'The fabric of the door is as hard as any steel.',
    fromRoomId: 15,
    destinationId: 13,
    password: '',
    passageMsgEs: 'Usted regresa al jardín.',
    passageMsgEn: 'You return to the garden.',
    isOpen: true
  },

  // Room 16 - Cuarto del jardinero
  {
    type: 'linking',
    id: 'puerta-verde-16-13',
    nameEs: 'Puerta verde',
    nameEn: 'Green door',
    descEs: 'Conduce al jardín.',
    descEn: 'It leads to the garden.',
    fromRoomId: 16,
    destinationId: 13,
    password: '',
    passageMsgEs: 'Usted sale de las habitaciones del jardinero.',
    passageMsgEn: 'You leave the gardener\'s quarters.',
    isOpen: true
  },

  // Room 17 - Habitación de los tesoros
  {
    type: 'linking',
    id: 'puerta-amarilla-17-13',
    nameEs: 'Puerta amarilla',
    nameEn: 'Yellow door',
    descEs: 'Conduce al jardín.',
    descEn: 'It leads to the garden.',
    fromRoomId: 17,
    destinationId: 13,
    password: '',
    passageMsgEs: 'Usted regresa a los jardines.',
    passageMsgEn: 'You return to the gardens.',
    isOpen: true
  },

  // Room 18 - Salón de las velas
  {
    type: 'linking',
    id: 'puerta-roja-18-13',
    nameEs: 'Puerta roja',
    nameEn: 'Red door',
    descEs: 'Conduce a los jardines.',
    descEn: 'It leads to the gardens.',
    fromRoomId: 18,
    destinationId: 13,
    password: '',
    passageMsgEs: 'Usted regresa a los jardines.',
    passageMsgEn: 'You return to the gardens.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-blanca-18-20',
    nameEs: 'Puerta blanca',
    nameEn: 'White door',
    descEs: 'Conduce al cuarto de juguetes.',
    descEn: 'It leads to the toy room.',
    fromRoomId: 18,
    destinationId: 20,
    password: '',
    passageMsgEs: 'Usted entra al cuarto de juguetes.',
    passageMsgEn: 'You enter the toy room.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'escalera-18-19',
    nameEs: 'Escalera',
    nameEn: 'Staircase',
    descEs: 'Baja hasta el cuarto del Inmortal.',
    descEn: 'It descends to the Immortal\'s room.',
    fromRoomId: 18,
    destinationId: 19,
    passageMsgEs: 'Usted desciende las escaleras y entra al cuarto del Inmortal.',
    passageMsgEn: 'You descend the stairs and enter the Immortal\'s room.',
    isOpen: true
  },

  // Room 19 - Cuarto del Inmortal
  {
    type: 'openLink',
    id: 'escalera-19-18',
    nameEs: 'Escalera',
    nameEn: 'Staircase',
    descEs: 'Lleva hasta el salón de las velas.',
    descEn: 'It leads up to the candle hall.',
    fromRoomId: 19,
    destinationId: 18,
    passageMsgEs: 'Usted sube lentamente hasta ver el resplandor de las velas otra vez.',
    passageMsgEn: 'You climb slowly until you see the glow of the candles again.',
    isOpen: true
  },

  // Room 20 - Cuarto de juguetes
  {
    type: 'linking',
    id: 'puerta-blanca-20-18',
    nameEs: 'Puerta blanca',
    nameEn: 'White door',
    descEs: 'Conduce al salón de las velas.',
    descEn: 'It leads to the candle hall.',
    fromRoomId: 20,
    destinationId: 18,
    password: '',
    passageMsgEs: 'Usted sale del cuarto de juguetes.',
    passageMsgEn: 'You leave the toy room.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-piedra-20-21',
    nameEs: 'Puerta de piedra',
    nameEn: 'Stone door',
    descEs: 'Es muy antigua. Probablemente sea más vieja que el propio cuarto de juguetes.',
    descEn: 'It is very old. It is probably older than the toy room itself.',
    fromRoomId: 20,
    destinationId: 21,
    password: '',
    passageMsgEs: 'Usted sale del cuarto de juguetes y entra a las ruinas.',
    passageMsgEn: 'You leave the toy room and enter the ruins.',
    isOpen: true
  },

  // Room 21 - Ruinas
  {
    type: 'linking',
    id: 'puerta-piedra-21-20',
    nameEs: 'Puerta de piedra',
    nameEn: 'Stone door',
    descEs: 'Está muy a tono con el lugar. Las ruinas están más cerca de ser el juego del viento en las piedras que cualquier otra cosa.',
    descEn: 'It fits the place well. The ruins are closer to being the play of wind on stones than anything else.',
    fromRoomId: 21,
    destinationId: 20,
    password: '',
    passageMsgEs: 'Usted sale de las ruinas y regresa al cuarto de juguetes.',
    passageMsgEn: 'You leave the ruins and return to the toy room.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-hierro-21-22',
    nameEs: 'Puerta de hierro',
    nameEn: 'Iron door',
    descEs: 'Es la entrada a la casa del Ogro.',
    descEn: 'It is the entrance to the Ogre\'s house.',
    fromRoomId: 21,
    destinationId: 22,
    password: '',
    passageMsgEs: 'Usted entra a la casa del Ogro.',
    passageMsgEn: 'You enter the Ogre\'s house.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'escalera-21-27',
    nameEs: 'Escalera',
    nameEn: 'Staircase',
    descEs: 'Desde el final asciende un aire frío y húmedo.',
    descEn: 'From the bottom rises a cold and humid air.',
    fromRoomId: 21,
    destinationId: 27,
    passageMsgEs: 'Los peldaños están llenos de musgo. Usted desciende cuidadosamente hasta llegar a los subterráneos.',
    passageMsgEn: 'The steps are covered in moss. You descend carefully until you reach the underground.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'desierto-21-34',
    nameEs: 'Desierto',
    nameEn: 'Desert',
    descEs: 'Promete ser largo y abrasador.',
    descEn: 'It promises to be long and scorching.',
    fromRoomId: 21,
    destinationId: 34,
    passageMsgEs: 'Usted camina durante muchos días. El sol y el roce de la arena llagan todo su cuerpo. Por las noches, el viento helado del desierto no lo deja dormir. La sed invade su cuerpo y su mente.\nY cuando cree que nunca llegará descubre que está en un Oasis.',
    passageMsgEn: 'You walk for many days. The sun and the friction of the sand wound your entire body. At night, the freezing desert wind keeps you from sleeping. Thirst invades your body and your mind.\nAnd when you believe you will never arrive, you discover you are in an Oasis.',
    isOpen: true
  },

  // Room 22 - Salón de Recepciones
  {
    type: 'linking',
    id: 'puerta-hierro-22-21',
    nameEs: 'Puerta de hierro',
    nameEn: 'Iron door',
    descEs: 'Usted no comprende cómo puede estar tan sucia. Conduce a las ruinas.',
    descEn: 'You do not understand how it can be so dirty. It leads to the ruins.',
    fromRoomId: 22,
    destinationId: 21,
    password: '',
    passageMsgEs: 'Usted regresa a las ruinas.',
    passageMsgEn: 'You return to the ruins.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-gris-22-24',
    nameEs: 'Puerta gris',
    nameEn: 'Gray door',
    descEs: 'Conduce al patio.',
    descEn: 'It leads to the courtyard.',
    fromRoomId: 22,
    destinationId: 24,
    password: '',
    passageMsgEs: 'Usted sale al patio.',
    passageMsgEn: 'You go out to the courtyard.',
    isOpen: true
  },

  // Room 23 - Cuarto del pintor
  {
    type: 'linking',
    id: 'puerta-azul-23-24',
    nameEs: 'Puerta azul',
    nameEn: 'Blue door',
    descEs: 'Conduce al patio.',
    descEn: 'It leads to the courtyard.',
    fromRoomId: 23,
    destinationId: 24,
    password: '',
    passageMsgEs: 'Usted sale al patio.',
    passageMsgEn: 'You go out to the courtyard.',
    isOpen: true
  },

  // Room 24 - Patio Interior
  {
    type: 'linking',
    id: 'puerta-gris-24-22',
    nameEs: 'Puerta gris',
    nameEn: 'Gray door',
    descEs: 'Conduce al Salón de Recepciones.',
    descEn: 'It leads to the Reception Hall.',
    fromRoomId: 24,
    destinationId: 22,
    password: '',
    passageMsgEs: 'Usted sale al Salón de Recepciones.',
    passageMsgEn: 'You go out to the Reception Hall.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-azul-24-23',
    nameEs: 'Puerta azul',
    nameEn: 'Blue door',
    descEs: 'Conduce al cuarto del pintor.',
    descEn: 'It leads to the painter\'s room.',
    fromRoomId: 24,
    destinationId: 23,
    password: '',
    passageMsgEs: 'Usted entra al cuarto del pintor. El olor del óleo golpea sus narices.',
    passageMsgEn: 'You enter the painter\'s room. The smell of oil paint hits your nostrils.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-verde-24-25',
    nameEs: 'Puerta verde',
    nameEn: 'Green door',
    descEs: 'Conduce al cuarto del juglar.',
    descEn: 'It leads to the jester\'s room.',
    fromRoomId: 24,
    destinationId: 25,
    password: '',
    passageMsgEs: 'Usted entra al cuarto del juglar.',
    passageMsgEn: 'You enter the jester\'s room.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-negra-24-26',
    nameEs: 'Puerta negra',
    nameEn: 'Black door',
    descEs: 'Conduce a la alcoba del Ogro.',
    descEn: 'It leads to the Ogre\'s chamber.',
    fromRoomId: 24,
    destinationId: 26,
    password: '',
    passageMsgEs: 'Usted entra la alcoba del Ogro.',
    passageMsgEn: 'You enter the Ogre\'s chamber.',
    isOpen: true
  },

  // Room 25 - Habitaciones del Juglar
  {
    type: 'linking',
    id: 'puerta-verde-25-24',
    nameEs: 'Puerta verde',
    nameEn: 'Green door',
    descEs: 'Conduce al patio.',
    descEn: 'It leads to the courtyard.',
    fromRoomId: 25,
    destinationId: 24,
    password: '',
    passageMsgEs: 'Usted sale al patio.',
    passageMsgEn: 'You go out to the courtyard.',
    isOpen: true
  },
  {
    type: 'dangerLink',
    id: 'escalera-25-28',
    nameEs: 'Escalera',
    nameEn: 'Staircase',
    descEs: 'Conduce a las Catacumbas.',
    descEn: 'It leads to the Catacombs.',
    fromRoomId: 25,
    destinationId: 28,
    talisman: 'Escudo de Aquiles',
    passageMsgEs: 'Casi al llegar al final, los peldaños se abrieron dejando abierto un precipicio lleno de lava. Por suerte, el escudo de Aquiles quedó trabado en un saliente y usted pudo regresar a la superficie.',
    passageMsgEn: 'Almost at the bottom, the steps opened up revealing a precipice full of lava. Luckily, the shield of Achilles got stuck on a ledge and you were able to return to the surface.',
    isOpen: true
  },

  // Room 26 - Alcoba del Ogro
  {
    type: 'linking',
    id: 'puerta-negra-26-24',
    nameEs: 'Puerta negra',
    nameEn: 'Black door',
    descEs: 'Conduce al patio.',
    descEn: 'It leads to the courtyard.',
    fromRoomId: 26,
    destinationId: 24,
    password: '',
    passageMsgEs: 'Usted sale al patio.',
    passageMsgEn: 'You go out to the courtyard.',
    isOpen: true
  },

  // Room 27 - Subterráneos
  {
    type: 'openLink',
    id: 'escalera-27-21',
    nameEs: 'Escalera',
    nameEn: 'Staircase',
    descEs: 'Asciende hasta las ruinas.',
    descEn: 'It ascends to the ruins.',
    fromRoomId: 27,
    destinationId: 21,
    passageMsgEs: 'Los peldaños están llenos de musgo. Usted asciende cuidadosamente hasta regresar a las ruinas.',
    passageMsgEn: 'The steps are covered in moss. You ascend carefully until you return to the ruins.',
    isOpen: true
  },
  {
    type: 'dangerLink',
    id: 'tunel-27-28',
    nameEs: 'Túnel',
    nameEn: 'Tunnel',
    descEs: 'Conduce a las catacumbas. Usted huele alguna trampa.',
    descEn: 'It leads to the catacombs. You smell a trap.',
    fromRoomId: 27,
    destinationId: 28,
    talisman: 'Escudo de Aquiles',
    passageMsgEs: 'Al dar el tercer paso, usted activó un mecanismo que lanzó un dardo envenenado hacia su pecho. Usted sobrevive gracias al escudo de Aquiles.',
    passageMsgEn: 'On the third step, you triggered a mechanism that launched a poisoned dart at your chest. You survive thanks to the shield of Achilles.',
    isOpen: true
  },

  // Room 28 - Catacumbas
  {
    type: 'dangerLink',
    id: 'tunel-28-27',
    nameEs: 'Túnel',
    nameEn: 'Tunnel',
    descEs: 'Conduce a los subterráneos. Usted recuerda que debe llevar el Escudo de Aquiles.',
    descEn: 'It leads to the underground. You remember you must carry the Shield of Achilles.',
    fromRoomId: 28,
    destinationId: 27,
    talisman: 'Escudo de Aquiles',
    passageMsgEs: 'Al dar el tercer paso, usted activó un mecanismo que lanzó un dardo envenenado hacia su pecho. Usted sobrevive gracias al escudo de Aquiles.',
    passageMsgEn: 'On the third step, you triggered a mechanism that launched a poisoned dart at your chest. You survive thanks to the shield of Achilles.',
    isOpen: true
  },
  {
    type: 'dangerLink',
    id: 'escalera-28-25',
    nameEs: 'Escalera',
    nameEn: 'Staircase',
    descEs: 'Conduce a una de las habitaciones de la casa del Ogro.',
    descEn: 'It leads to one of the rooms in the Ogre\'s house.',
    fromRoomId: 28,
    destinationId: 25,
    talisman: 'Escudo de Aquiles',
    passageMsgEs: 'Casi al llegar al final, los peldaños se abrieron dejando abierto un precipicio lleno de lava. Por suerte, el escudo de Aquiles quedó trabado en un saliente y usted pudo regresar a la superficie.',
    passageMsgEn: 'Almost at the top, the steps opened up revealing a precipice full of lava. Luckily, the shield of Achilles got stuck on a ledge and you were able to return to the surface.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'pasadizo-28-29',
    nameEs: 'Pasadizo',
    nameEn: 'Passageway',
    descEs: 'Parece más seguro que la escalera y el túnel.',
    descEn: 'It seems safer than the staircase and the tunnel.',
    fromRoomId: 28,
    destinationId: 29,
    passageMsgEs: 'Usted cruza esperando algo terrible, pero no sucede nada.',
    passageMsgEn: 'You cross expecting something terrible, but nothing happens.',
    isOpen: true
  },

  // Room 29 - Cataratas
  {
    type: 'openLink',
    id: 'pasadizo-29-28',
    nameEs: 'Pasadizo',
    nameEn: 'Passageway',
    descEs: 'Conduce a las Catacumbas.',
    descEn: 'It leads to the Catacombs.',
    fromRoomId: 29,
    destinationId: 28,
    passageMsgEs: 'Usted regresa a las Catacumbas sin mayores contratiempos.',
    passageMsgEn: 'You return to the Catacombs without further setbacks.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'catarata-29-31',
    nameEs: 'Catarata',
    nameEn: 'Waterfall',
    descEs: 'Usted siente mareos de tan solo pensar en ella.',
    descEn: 'You feel dizzy just thinking about it.',
    fromRoomId: 29,
    destinationId: 31,
    passageMsgEs: 'Usted hace un acopio de valor, cierra los ojos y se lanza al abismo. Al cabo de varias horas, usted cae en un profundo lago.',
    passageMsgEn: 'You summon your courage, close your eyes and throw yourself into the abyss. After several hours, you fall into a deep lake.',
    isOpen: true
  },

  // Room 30 - Bajos de las cataratas (no links in SetData)

  // Room 31 - Fondo del Lago
  {
    type: 'dangerLink',
    id: 'grieta-31-32',
    nameEs: 'Grieta',
    nameEn: 'Crack',
    descEs: 'Usted logra ver algunos destellos de una luz muy fuerte al otro lado.',
    descEn: 'You can see some flashes of a very strong light on the other side.',
    fromRoomId: 31,
    destinationId: 32,
    talisman: 'Talismán de Nieve',
    passageMsgEs: 'Usted cruza sin problemas, protegido con el Talismán de Nieve.',
    passageMsgEn: 'You cross without problems, protected by the Snow Talisman.',
    isOpen: true
  },
  {
    type: 'dangerLink2',
    id: 'sendero-dorado-31-33',
    nameEs: 'Sendero dorado',
    nameEn: 'Golden path',
    descEs: 'Es muy hermoso.',
    descEn: 'It is very beautiful.',
    fromRoomId: 31,
    destinationId: 33,
    forbiddenItem: 'Marmidosa',
    passageMsgEs: 'Usted sale del Lago.',
    passageMsgEn: 'You leave the Lake.',
    isOpen: true
  },

  // Room 32 - Cueva de Cristal
  {
    type: 'openLink',
    id: 'grieta-32-31',
    nameEs: 'Grieta',
    nameEn: 'Crack',
    descEs: 'Es la salida de la Cueva de Cristal.',
    descEn: 'It is the exit of the Crystal Cave.',
    fromRoomId: 32,
    destinationId: 31,
    passageMsgEs: 'Usted sale de la Cueva de Cristal.',
    passageMsgEn: 'You leave the Crystal Cave.',
    isOpen: true
  },

  // Room 33 - Orilla del Lago
  {
    type: 'dangerLink2',
    id: 'sendero-dorado-33-31',
    nameEs: 'Sendero dorado',
    nameEn: 'Golden path',
    descEs: 'Es muy hermoso.',
    descEn: 'It is very beautiful.',
    fromRoomId: 33,
    destinationId: 31,
    forbiddenItem: 'Marmidosa',
    passageMsgEs: 'Usted se sumerge en el lago.',
    passageMsgEn: 'You plunge into the lake.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'camino-33-36',
    nameEs: 'Camino',
    nameEn: 'Path',
    descEs: 'El camino se pierde como una serpiente en la rectitud del horizonte.',
    descEn: 'The path disappears like a snake into the straightness of the horizon.',
    fromRoomId: 33,
    destinationId: 36,
    passageMsgEs: 'Usted nota como el paisaje va cambiando a medida que avanza. Cada vez se va pareciendo más a un desierto.',
    passageMsgEn: 'You notice how the landscape changes as you advance. It increasingly resembles a desert.',
    isOpen: true
  },

  // Room 34 - Oasis
  {
    type: 'openLink',
    id: 'desierto-34-21',
    nameEs: 'Desierto',
    nameEn: 'Desert',
    descEs: 'Usted se estremece al recordar la última vez que atravesó el desierto.',
    descEn: 'You shudder remembering the last time you crossed the desert.',
    fromRoomId: 34,
    destinationId: 21,
    passageMsgEs: 'Usted camina durante muchos días. El sol y el roce de la arena llagan todo su cuerpo. Por las noches, el viento helado del desierto no lo deja dormir. La sed invade su cuerpo y su mente.\nPero al final logra regresar a las ruinas.',
    passageMsgEn: 'You walk for many days. The sun and the friction of the sand wound your entire body. At night, the freezing desert wind keeps you from sleeping. Thirst invades your body and your mind.\nBut in the end you manage to return to the ruins.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'ruta-camellos-34-35',
    nameEs: 'Ruta de los camellos',
    nameEn: 'Camel route',
    descEs: 'Está formada por miles de pisadas de camellos. Seguramente conduce a algún lugar agradable.',
    descEn: 'It is formed by thousands of camel footprints. It surely leads to some pleasant place.',
    fromRoomId: 34,
    destinationId: 35,
    passageMsgEs: 'Usted avanza siguiendo las huellas que oscilan de un lado a otro y hasta describen círculos. Todo parece indicar que los camellos estaban ebrios.\nUsted arriba a la Catedral.',
    passageMsgEn: 'You advance following the tracks that sway from side to side and even describe circles. Everything seems to indicate that the camels were drunk.\nYou arrive at the Cathedral.',
    isOpen: true
  },

  // Room 35 - Catedral
  {
    type: 'openLink',
    id: 'ruta-camellos-35-34',
    nameEs: 'Ruta de los camellos',
    nameEn: 'Camel route',
    descEs: 'Es la única vía de regresar a las ruinas.',
    descEn: 'It is the only way to return to the ruins.',
    fromRoomId: 35,
    destinationId: 34,
    passageMsgEs: 'Luego de varios días de camino; usted regresa, más muerto que vivo, al Oasis.',
    passageMsgEn: 'After several days of walking, you return, more dead than alive, to the Oasis.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-35-36',
    nameEs: 'Puerta',
    nameEn: 'Door',
    descEs: 'Es la salida de la Catedral.',
    descEn: 'It is the exit of the Cathedral.',
    fromRoomId: 35,
    destinationId: 36,
    password: '',
    passageMsgEs: 'Usted sale de la Catedral y el viento seco del desierto le golpea la cara.',
    passageMsgEn: 'You leave the Cathedral and the dry desert wind hits your face.',
    isOpen: true
  },

  // Room 36 - Desierto otra vez
  {
    type: 'dangerLink2',
    id: 'camino-36-33',
    nameEs: 'Camino',
    nameEn: 'Path',
    descEs: 'El camino se pierde como una serpiente en la rectitud del horizonte.',
    descEn: 'The path disappears like a snake into the straightness of the horizon.',
    fromRoomId: 36,
    destinationId: 33,
    forbiddenItem: 'Talismán de Nieve',
    passageMsgEs: 'Usted nota como el paisaje va cambiando a medida que avanza. El desierto va perdiendo terreno y cada vez hay más vegetación.',
    passageMsgEn: 'You notice how the landscape changes as you advance. The desert loses ground and there is more and more vegetation.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-36-35',
    nameEs: 'Puerta',
    nameEn: 'Door',
    descEs: 'Es la puerta de salida de la Catedral.',
    descEn: 'It is the exit door of the Cathedral.',
    fromRoomId: 36,
    destinationId: 35,
    password: '',
    passageMsgEs: 'Usted entra a la Catedral',
    passageMsgEn: 'You enter the Cathedral',
    isOpen: true
  },

  // Room 37 - Valle
  {
    type: 'openLink',
    id: 'avenida-flores-37-36',
    nameEs: 'Avenida de las flores',
    nameEn: 'Flower avenue',
    descEs: 'Toda la avenida está sembrada de flores carnívoras.',
    descEn: 'The entire avenue is planted with carnivorous flowers.',
    fromRoomId: 37,
    destinationId: 36,
    passageMsgEs: 'Usted regresa corriendo al desierto.',
    passageMsgEn: 'You run back to the desert.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'montanas-37-38',
    nameEs: 'Montañas',
    nameEn: 'Mountains',
    descEs: 'Las montañas rodean todo el sur del Valle. Parece el espinazo de un dragón gigantesco.',
    descEn: 'The mountains surround the entire south of the Valley. It looks like the spine of a gigantic dragon.',
    fromRoomId: 37,
    destinationId: 38,
    passageMsgEs: 'Luego de varios días de camino usted llega al punto más alto de la cordillera.',
    passageMsgEn: 'After several days of walking you reach the highest point of the mountain range.',
    isOpen: true
  },

  // Room 38 - Pico Negro
  {
    type: 'openLink',
    id: 'montanas-38-37',
    nameEs: 'Montañas',
    nameEn: 'Mountains',
    descEs: 'Desde este lugar, las montañas lucen como grandes piedras envueltas en nubes.',
    descEn: 'From this place, the mountains look like large stones wrapped in clouds.',
    fromRoomId: 38,
    destinationId: 37,
    passageMsgEs: 'Luego de varios días de camino usted regresa al valle.',
    passageMsgEn: 'After several days of walking you return to the valley.',
    isOpen: true
  },
  {
    type: 'dangerLink',
    id: 'precipicio-38-40',
    nameEs: 'Precipicio',
    nameEn: 'Precipice',
    descEs: 'Usted se inclina en el borde del precipicio, pero no consigue ver el fondo.',
    descEn: 'You lean over the edge of the precipice, but you cannot see the bottom.',
    fromRoomId: 38,
    destinationId: 40,
    talisman: 'Saltador',
    passageMsgEs: 'Usted logra sobreponerse al temblor de sus manos, se aferra al saltador y se lanza al vacío. Al tercer día de caída, el muelle del saltador rebota suavemente en el suelo.',
    passageMsgEn: 'You manage to overcome the trembling of your hands, hold on to the pogo stick and throw yourself into the void. On the third day of falling, the pogo stick\'s spring bounces softly on the ground.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'ladera-38-42',
    nameEs: 'Ladera',
    nameEn: 'Hillside',
    descEs: 'La ladera desciende suavemente hasta un campo sembrado.',
    descEn: 'The hillside descends gently to a cultivated field.',
    fromRoomId: 38,
    destinationId: 42,
    passageMsgEs: 'Usted desciende cuidadosamente hasta las tierras del Labrador.',
    passageMsgEn: 'You descend carefully to the Farmer\'s lands.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-madera-38-39',
    nameEs: 'Puerta de Madera',
    nameEn: 'Wooden door',
    descEs: 'Es la entrada a la choza del Monje.',
    descEn: 'It is the entrance to the Monk\'s hut.',
    fromRoomId: 38,
    destinationId: 39,
    password: '',
    passageMsgEs: 'Usted entra a la choza del Monje.',
    passageMsgEn: 'You enter the Monk\'s hut.',
    isOpen: true
  },

  // Room 39 - Choza del Monje
  {
    type: 'linking',
    id: 'puerta-madera-39-38',
    nameEs: 'Puerta de Madera',
    nameEn: 'Wooden door',
    descEs: 'Conduce a la cima del Pico Negro.',
    descEn: 'It leads to the peak of the Black Peak.',
    fromRoomId: 39,
    destinationId: 38,
    password: '',
    passageMsgEs: 'Usted sale de la choza del Monje.',
    passageMsgEn: 'You leave the Monk\'s hut.',
    isOpen: true
  },

  // Room 40 - Ciudad Abandonada
  {
    type: 'openLink',
    id: 'tunel-40-21',
    nameEs: 'Túnel',
    nameEn: 'Tunnel',
    descEs: 'Conduce a las ruinas.',
    descEn: 'It leads to the ruins.',
    fromRoomId: 40,
    destinationId: 21,
    passageMsgEs: 'Usted camina hasta regresar a las ruinas.',
    passageMsgEn: 'You walk until you return to the ruins.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'escalera-40-37',
    nameEs: 'Escalera',
    nameEn: 'Staircase',
    descEs: 'Usted se pregunta a dónde conducirá.',
    descEn: 'You wonder where it leads.',
    fromRoomId: 40,
    destinationId: 37,
    passageMsgEs: 'Usted sube hasta regresar al Valle.',
    passageMsgEn: 'You climb until you return to the Valley.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-hierro-40-41',
    nameEs: 'Puerta de Hierro',
    nameEn: 'Iron door',
    descEs: 'Es la entrada de la casa del sabio.',
    descEn: 'It is the entrance to the wise man\'s house.',
    fromRoomId: 40,
    destinationId: 41,
    password: '',
    passageMsgEs: 'Usted ha entrado a la casa del sabio.',
    passageMsgEn: 'You have entered the wise man\'s house.',
    isOpen: true
  },

  // Room 41 - Choza del Sabio
  {
    type: 'linking',
    id: 'puerta-hierro-41-40',
    nameEs: 'Puerta de Hierro',
    nameEn: 'Iron door',
    descEs: 'Conduce a la Ciudad Abandonada.',
    descEn: 'It leads to the Abandoned City.',
    fromRoomId: 41,
    destinationId: 40,
    password: '',
    passageMsgEs: 'Usted regresa a la Ciudad Abandonada.',
    passageMsgEn: 'You return to the Abandoned City.',
    isOpen: true
  },

  // Room 42 - Campo cultivado
  {
    type: 'openLink',
    id: 'ladera-42-38',
    nameEs: 'Ladera',
    nameEn: 'Hillside',
    descEs: 'Es por dónde único se puede subir al Pico Negro de este lado de la cordillera.',
    descEn: 'It is the only way to climb the Black Peak from this side of the mountain range.',
    fromRoomId: 42,
    destinationId: 38,
    passageMsgEs: 'Usted asciende el Pico Negro.',
    passageMsgEn: 'You ascend the Black Peak.',
    isOpen: true
  },
  {
    type: 'dangerLink',
    id: 'rio-42-43',
    nameEs: 'Río',
    nameEn: 'River',
    descEs: 'La corriente es tan fuerte que arrastraría hasta la embarcación más pesada.',
    descEn: 'The current is so strong it would drag even the heaviest vessel.',
    fromRoomId: 42,
    destinationId: 43,
    talisman: 'Cuerda',
    passageMsgEs: 'Usted lanza la soga con el garfio hasta la otra orilla y forma una especie de cuerda floja. Luego cruza el río haciendo una impresionante demostración de equilibrio.',
    passageMsgEn: 'You throw the rope with the hook to the other shore and form a sort of tightrope. Then you cross the river making an impressive display of balance.',
    isOpen: true
  },

  // Room 43 - Exterior de la Torre de Cristal
  {
    type: 'dangerLink',
    id: 'rio-43-42',
    nameEs: 'Río',
    nameEn: 'River',
    descEs: 'La corriente es tan fuerte que arrastraría hasta la embarcación más pesada.',
    descEn: 'The current is so strong it would drag even the heaviest vessel.',
    fromRoomId: 43,
    destinationId: 42,
    talisman: 'Cuerda',
    passageMsgEs: 'Usted lanza la soga con el garfio hasta la otra orilla y forma una especie de cuerda floja. Luego cruza el río haciendo una impresionante demostración de equilibrio.',
    passageMsgEn: 'You throw the rope with the hook to the other shore and form a sort of tightrope. Then you cross the river making an impressive display of balance.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-hierro-43-47',
    nameEs: 'Puerta de Hierro',
    nameEn: 'Iron door',
    descEs: 'Es la entrada a los calabozos.',
    descEn: 'It is the entrance to the dungeons.',
    fromRoomId: 43,
    destinationId: 47,
    password: '',
    passageMsgEs: 'Usted entra a los calabozos.',
    passageMsgEn: 'You enter the dungeons.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'escalera-caracol-43-44',
    nameEs: 'Escalera de Caracol',
    nameEn: 'Spiral staircase',
    descEs: 'Sube hasta el tope de la Torre de Cristal.',
    descEn: 'It climbs to the top of the Crystal Tower.',
    fromRoomId: 43,
    destinationId: 44,
    passageMsgEs: 'Usted asciende durante varias horas.',
    passageMsgEn: 'You ascend for several hours.',
    isOpen: true
  },

  // Room 44 - Punta de la Torre de Cristal
  {
    type: 'openLink',
    id: 'escalera-caracol-44-43',
    nameEs: 'Escalera de Caracol',
    nameEn: 'Spiral staircase',
    descEs: 'Conduce a la parte inferior de la Torre de Cristal.',
    descEn: 'It leads to the lower part of the Crystal Tower.',
    fromRoomId: 44,
    destinationId: 43,
    passageMsgEs: 'Usted regresa a la orilla del río.',
    passageMsgEn: 'You return to the river bank.',
    isOpen: true
  },
  {
    type: 'riddleLink',
    id: 'puerta-cristal-44-45',
    nameEs: 'Puerta de Cristal',
    nameEn: 'Crystal door',
    descEs: 'Es de un cristal muy grueso y opaco.',
    descEn: 'It is made of very thick and opaque crystal.',
    fromRoomId: 44,
    destinationId: 45,
    riddleEs: '¿Cuál es el nombre completo de la hija del Hechicero?',
    riddleEn: 'What is the full name of the Sorcerer\'s daughter?',
    answer: 'aura srka',
    passageMsgEs: 'Usted entra a la alcoba.',
    passageMsgEn: 'You enter the chamber.',
    isOpen: false
  },

  // Room 45 - Alcoba de la hija del Hechicero
  {
    type: 'linking',
    id: 'puerta-cristal-45-44',
    nameEs: 'Puerta de Cristal',
    nameEn: 'Crystal door',
    descEs: 'Es la salida de la alcoba.',
    descEn: 'It is the exit of the chamber.',
    fromRoomId: 45,
    destinationId: 44,
    password: '',
    passageMsgEs: 'Usted sale de la alcoba.',
    passageMsgEn: 'You leave the chamber.',
    isOpen: true
  },

  // Room 46 - Alcoba Secreta
  {
    type: 'linking',
    id: 'puerta-secreta-46-45',
    nameEs: 'Puerta Secreta',
    nameEn: 'Secret door',
    descEs: 'Conduce a la alcoba.',
    descEn: 'It leads to the chamber.',
    fromRoomId: 46,
    destinationId: 45,
    password: '',
    passageMsgEs: 'Usted regresa a la alcoba.',
    passageMsgEn: 'You return to the chamber.',
    isOpen: true
  },

  // Room 47 - Calabozos
  {
    type: 'linking',
    id: 'puerta-hierro-47-43',
    nameEs: 'Puerta de Hierro',
    nameEn: 'Iron door',
    descEs: 'Es la salida de los calabozos. Conduce a la orilla del río.',
    descEn: 'It is the exit of the dungeons. It leads to the river bank.',
    fromRoomId: 47,
    destinationId: 43,
    password: '',
    passageMsgEs: 'Usted regresa al río.',
    passageMsgEn: 'You return to the river.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'reja-47-48',
    nameEs: 'Reja',
    nameEn: 'Grate',
    descEs: 'Conduce a la celda. Los barrotes son tan gruesos que la reja es prácticamente una puerta maciza.',
    descEn: 'It leads to the cell. The bars are so thick that the grate is practically a solid door.',
    fromRoomId: 47,
    destinationId: 48,
    password: 'grifo',
    passageMsgEs: 'Usted estornuda. Ha entrado a la celda.',
    passageMsgEn: 'You sneeze. You have entered the cell.',
    isOpen: false
  },
  {
    type: 'linking',
    id: 'puerta-gris-47-49',
    nameEs: 'Puerta Gris',
    nameEn: 'Gray door',
    descEs: 'Conduce a la sala de La Prueba.',
    descEn: 'It leads to the Trial room.',
    fromRoomId: 47,
    destinationId: 49,
    password: '',
    passageMsgEs: 'Usted entra a la sala de La Prueba.',
    passageMsgEn: 'You enter the Trial room.',
    isOpen: true
  },

  // Room 48 - Celda
  {
    type: 'linking',
    id: 'reja-48-47',
    nameEs: 'Reja',
    nameEn: 'Grate',
    descEs: 'Es la salida de la celda.',
    descEn: 'It is the exit of the cell.',
    fromRoomId: 48,
    destinationId: 47,
    password: 'grifo',
    passageMsgEs: 'Usted sale de la celda.',
    passageMsgEn: 'You leave the cell.',
    isOpen: false
  },

  // Room 49 - Antesala de la Prueba
  {
    type: 'linking',
    id: 'puerta-gris-49-47',
    nameEs: 'Puerta Gris',
    nameEn: 'Gray door',
    descEs: 'Conduce a los calabozos.',
    descEn: 'It leads to the dungeons.',
    fromRoomId: 49,
    destinationId: 47,
    password: '',
    passageMsgEs: 'Usted entra a los calabozos.',
    passageMsgEn: 'You enter the dungeons.',
    isOpen: true
  },
  {
    type: 'dangerLink',
    id: 'tunel-49-14',
    nameEs: 'Túnel',
    nameEn: 'Tunnel',
    descEs: 'Parece ser muy largo. Usted no se atrevería a cruzarlo sin el arco.',
    descEn: 'It seems to be very long. You would not dare cross it without the bow.',
    fromRoomId: 49,
    destinationId: 14,
    talisman: 'Arco',
    passageMsgEs: 'Casi a mitad de camino usted es atacado por una bandada de murciélagos gigantes. Gracias al arco, usted logra ahuyentarlos.',
    passageMsgEn: 'Almost halfway through you are attacked by a flock of giant bats. Thanks to the bow, you manage to scare them away.',
    isOpen: true
  },
  {
    type: 'dangerLink2',
    id: 'puerta-verde-49-50',
    nameEs: 'Puerta Verde',
    nameEn: 'Green door',
    descEs: 'Es la primera puerta de la prueba.',
    descEn: 'It is the first door of the trial.',
    fromRoomId: 49,
    destinationId: 50,
    forbiddenItem: 'Anillo de oro',
    passageMsgEs: 'Usted cierra los ojos y cruza la puerta. Dejar el anillo de oro fue una idea excelente.',
    passageMsgEn: 'You close your eyes and cross the door. Leaving the gold ring behind was an excellent idea.',
    isOpen: true
  },

  // Room 50 - Salón Verde
  {
    type: 'dangerLink2',
    id: 'puerta-verde-50-49',
    nameEs: 'Puerta Verde',
    nameEn: 'Green door',
    descEs: 'Conduce al primer salón.',
    descEn: 'It leads to the first hall.',
    fromRoomId: 50,
    destinationId: 49,
    forbiddenItem: 'Anillo de oro',
    passageMsgEs: 'Usted atraviesa la puerta sin dificultades.',
    passageMsgEn: 'You go through the door without difficulties.',
    isOpen: true
  },
  {
    type: 'dangerLink2',
    id: 'puerta-azul-50-51',
    nameEs: 'Puerta Azul',
    nameEn: 'Blue door',
    descEs: 'Es la segunda puerta de la prueba.',
    descEn: 'It is the second door of the trial.',
    fromRoomId: 50,
    destinationId: 51,
    forbiddenItem: 'Anillo de plata',
    passageMsgEs: 'Usted piensa durante unos segundos antes de avanzar. Hizo bien en dejar el anillo de plata.',
    passageMsgEn: 'You think for a few seconds before advancing. You did well to leave the silver ring behind.',
    isOpen: true
  },

  // Room 51 - Salón Azul
  {
    type: 'dangerLink2',
    id: 'puerta-azul-51-50',
    nameEs: 'Puerta Azul',
    nameEn: 'Blue door',
    descEs: 'Conduce al salón verde.',
    descEn: 'It leads to the green hall.',
    fromRoomId: 51,
    destinationId: 50,
    forbiddenItem: 'Anillo de plata',
    passageMsgEs: 'Usted atraviesa la puerta sin dificultades.',
    passageMsgEn: 'You go through the door without difficulties.',
    isOpen: true
  },
  {
    type: 'dangerLink2',
    id: 'puerta-blanca-51-52',
    nameEs: 'Puerta Blanca',
    nameEn: 'White door',
    descEs: 'Es la tercera puerta de la prueba.',
    descEn: 'It is the third door of the trial.',
    fromRoomId: 51,
    destinationId: 52,
    forbiddenItem: 'Anillo de bronce',
    passageMsgEs: 'Usted levanta los ojos buscando valor y da los primeros pasos. Usted se alegra de no haber traído el anillo de bronce.',
    passageMsgEn: 'You raise your eyes seeking courage and take the first steps. You are glad you did not bring the bronze ring.',
    isOpen: true
  },

  // Room 52 - Salón Blanco
  {
    type: 'dangerLink2',
    id: 'puerta-blanca-52-51',
    nameEs: 'Puerta Blanca',
    nameEn: 'White door',
    descEs: 'Conduce al salón azul.',
    descEn: 'It leads to the blue hall.',
    fromRoomId: 52,
    destinationId: 51,
    forbiddenItem: 'Anillo de bronce',
    passageMsgEs: 'Usted atraviesa la puerta sin dificultades.',
    passageMsgEn: 'You go through the door without difficulties.',
    isOpen: true
  },
  {
    type: 'dangerLink',
    id: 'puerta-triangular-52-53',
    nameEs: 'Puerta triangular',
    nameEn: 'Triangular door',
    descEs: 'Es la última puerta de la prueba.',
    descEn: 'It is the last door of the trial.',
    fromRoomId: 52,
    destinationId: 53,
    talisman: 'Cinta de Moebius',
    passageMsgEs: 'Esta vez usted no se detiene a pensarlo y avanza decididamente. Todo parece indicar que eligió el anillo correcto: la cinta de Moebius.',
    passageMsgEn: 'This time you do not stop to think about it and advance decisively. Everything seems to indicate that you chose the correct ring: the Moebius strip.',
    isOpen: true
  },

  // Room 53 - Límites de la Fortaleza
  {
    type: 'dangerLink',
    id: 'puerta-triangular-53-52',
    nameEs: 'Puerta triangular',
    nameEn: 'Triangular door',
    descEs: 'Conduce al salón blanco.',
    descEn: 'It leads to the white hall.',
    fromRoomId: 53,
    destinationId: 52,
    talisman: 'Cinta de Moebius',
    passageMsgEs: 'Usted atraviesa la puerta sin dificultades y regresa al salón blanco.',
    passageMsgEn: 'You go through the door without difficulties and return to the white hall.',
    isOpen: true
  },
  {
    type: 'dangerLink',
    id: 'puente-53-54',
    nameEs: 'Puente',
    nameEn: 'Bridge',
    descEs: 'Está hecho de madera y soga. Bajo él se abre, infinito, el Abismo Infranqueable. Del otro lado se divisa una pirámide.',
    descEn: 'It is made of wood and rope. Below it opens, infinite, the Impassable Abyss. On the other side a pyramid can be seen.',
    fromRoomId: 53,
    destinationId: 54,
    talisman: 'Grabado',
    passageMsgEs: 'Usted logra cruzar el puente gracias a la protección del grabado.',
    passageMsgEn: 'You manage to cross the bridge thanks to the protection of the engraving.',
    isOpen: true
  },

  // Room 54 - Pirámide del Hechicero
  {
    type: 'dangerLink',
    id: 'puente-54-53',
    nameEs: 'Puente',
    nameEn: 'Bridge',
    descEs: 'De este lado se puede apreciar mejor lo frágil que es el puente y lo infinito que es el Abismo.',
    descEn: 'From this side you can better appreciate how fragile the bridge is and how infinite the Abyss is.',
    fromRoomId: 54,
    destinationId: 53,
    talisman: 'Grabado',
    passageMsgEs: 'Usted logra cruzar el puente gracias a la protección del grabado.',
    passageMsgEn: 'You manage to cross the bridge thanks to the protection of the engraving.',
    isOpen: true
  },

  // Room 55 - Habitaciones del Hechicero
  {
    type: 'linking',
    id: 'puerta-roble-55-54',
    nameEs: 'Puerta de Roble',
    nameEn: 'Oak door',
    descEs: 'Es de un roble tan sólido que mellaría cualquier acero.',
    descEn: 'It is made of such solid oak that it would dent any steel.',
    fromRoomId: 55,
    destinationId: 54,
    password: '',
    passageMsgEs: 'Usted sale de las habitaciones del Hechicero.',
    passageMsgEn: 'You leave the Sorcerer\'s quarters.',
    isOpen: true
  }
];

// Hidden objects (containers that must be broken to reveal contents)
export const hiddenObjects = [
  // Room 5 - Casa de muñecas
  {
    type: 'hidden',
    id: 'ventana-5',
    nameEs: 'Ventana',
    nameEn: 'Window',
    descEs: 'Es de un cristal muy grueso. Usted trata de ver al otro lado, pero la ventana es tan opaca que solo puede divisar algunas sombras moviéndose.',
    descEn: 'It is made of very thick glass. You try to see the other side, but the window is so opaque you can only make out some shadows moving.',
    roomId: 5,
    breakerItem: 'Corta-cristales',
    revealedThingData: {
      type: 'openLink',
      id: 'pasadizo-5-13',
      nameEs: 'Pasadizo',
      nameEn: 'Passageway',
      descEs: '¿A dónde conducirá?',
      descEn: 'Where will it lead?',
      fromRoomId: 5,
      destinationId: 13,
      passageMsgEs: 'Usted oye una voz que le dice: "Usa tu equilibrio para vencer la corriente". Al cabo de varios minutos encuentra la salida.',
      passageMsgEn: 'You hear a voice telling you: "Use your balance to defeat the current". After several minutes you find the exit.',
      isOpen: true
    }
  },

  // Room 12 - Orilla del Río Negro (2)
  {
    type: 'hidden',
    id: 'arbol-marfil-12',
    nameEs: 'Arbol de marfil',
    nameEn: 'Ivory tree',
    descEs: 'Es infinitamente blanco.',
    descEn: 'It is infinitely white.',
    roomId: 12,
    breakerItem: 'Hacha',
    revealedThingData: {
      type: 'item',
      id: 'maza',
      nameEs: 'Maza',
      nameEn: 'Mace',
      descEs: 'Es muy pesada.',
      descEn: 'It is very heavy.',
      weight: 37
    }
  },
  {
    type: 'hidden',
    id: 'muralla-12',
    nameEs: 'Muralla',
    nameEn: 'Wall',
    descEs: 'Al lado de esta, la Gran Muralla China es el juego de un niño en la arena.',
    descEn: 'Next to this one, the Great Wall of China is a child\'s game in the sand.',
    roomId: 12,
    breakerItem: 'Maza',
    revealedThingData: {
      type: 'openLink',
      id: 'avenida-hierro-12-13',
      nameEs: 'Avenida de hierro',
      nameEn: 'Iron avenue',
      descEs: 'Toda la avenida está rodeada de árboles de metal. Usted se cubre los oídos tratando de escapar de los chirridos provocados por el viento en las hojas.',
      descEn: 'The entire avenue is surrounded by metal trees. You cover your ears trying to escape the screeching caused by the wind in the leaves.',
      fromRoomId: 12,
      destinationId: 13,
      passageMsgEs: 'Usted camina durante varios minutos hasta salir de la avenida.',
      passageMsgEn: 'You walk for several minutes until you exit the avenue.',
      isOpen: true
    }
  },

  // Room 14 - Comedor
  {
    type: 'hidden',
    id: 'huevo-14',
    nameEs: 'Huevo',
    nameEn: 'Egg',
    descEs: 'Por el tamaño debe ser el huevo de un dinosaurio. Y de uno grande.',
    descEn: 'By its size it must be a dinosaur egg. And a big one.',
    roomId: 14,
    breakerItem: 'Piedra',
    revealedThingData: {
      type: 'troll',
      id: 'dinosaurio',
      nameEs: 'Dinosaurio',
      nameEn: 'Dinosaur',
      descEs: 'Debía sentirse muy apretado en el huevo. Es un pequeño tiranosaurio.',
      descEn: 'It must have felt very cramped in the egg. It is a small tyrannosaur.',
      wantsItem: 'Sonajero',
      unhappyMsgEs: '¡Guaaaaaa! ¡Guaaaaaa!\nUsted se pregunta con qué podría calmarlo.',
      unhappyMsgEn: 'Waaaaaah! Waaaaaah!\nYou wonder what could calm it down.',
      happyMsgEs: 'Maúllale al gato.\nUsted se sonríe. Es una respuesta típica en un cachorro de dinosaurio.',
      happyMsgEn: 'Meow at the cat.\nYou smile. It is a typical answer from a baby dinosaur.'
    }
  },

  // Room 31 - Fondo del Lago
  {
    type: 'hidden',
    id: 'reja-31',
    nameEs: 'Reja',
    nameEn: 'Grate',
    descEs: 'Los barrotes de la reja son muy gruesos. Al otro lado se divisa una escalera.',
    descEn: 'The bars of the grate are very thick. On the other side a staircase can be seen.',
    roomId: 31,
    breakerItem: 'Tenazas',
    revealedThingData: {
      type: 'openLink',
      id: 'escalera-31-35',
      nameEs: 'Escalera',
      nameEn: 'Staircase',
      descEs: 'Esta es la única vía de sacar a Marmidosa del Lago.',
      descEn: 'This is the only way to take Marmidosa out of the Lake.',
      fromRoomId: 31,
      destinationId: 35,
      passageMsgEs: 'Usted sube hasta la Catedral.',
      passageMsgEn: 'You climb up to the Cathedral.',
      isOpen: true
    }
  },

  // Room 36 - Desierto otra vez
  {
    type: 'hidden',
    id: 'muralla-36',
    nameEs: 'Muralla',
    nameEn: 'Wall',
    descEs: 'Es algo más pequeña que la muralla anterior.',
    descEn: 'It is somewhat smaller than the previous wall.',
    roomId: 36,
    breakerItem: 'Piedra verde',
    revealedThingData: {
      type: 'openLink',
      id: 'avenida-flores-36-37',
      nameEs: 'Avenida de las flores',
      nameEn: 'Flower avenue',
      descEs: 'Toda la avenida está sembrada de flores carnívoras.',
      descEn: 'The entire avenue is planted with carnivorous flowers.',
      fromRoomId: 36,
      destinationId: 37,
      passageMsgEs: 'Usted se ve obligado a echarse a correr para escapar de los constantes mordiscos.',
      passageMsgEn: 'You are forced to break into a run to escape the constant bites.',
      isOpen: true
    }
  },

  // Room 40 - Ciudad Abandonada
  {
    type: 'hidden',
    id: 'estatua-cristal-40',
    nameEs: 'Estatua de Cristal',
    nameEn: 'Crystal statue',
    descEs: 'Usted no logra descubrir qué representa.',
    descEn: 'You cannot figure out what it represents.',
    roomId: 40,
    breakerItem: 'Corta-Cristales',
    revealedThingData: {
      type: 'troll',
      id: 'horante',
      nameEs: 'Horante',
      nameEn: 'Horante',
      descEs: 'Es el último de los horantes.',
      descEn: 'It is the last of the Horantes.',
      wantsItem: 'Muñeco diabólico',
      unhappyMsgEs: 'El horante trata de articular algo, pero un terrible dolor en su pierna derecha no lo deja.',
      unhappyMsgEn: 'The Horante tries to speak, but a terrible pain in his right leg does not let him.',
      happyMsgEs: 'Busca las dos mitades del Manuscrito de los Horantes y descífralo. Luego coloca las marcas para abrir la Fortaleza.',
      happyMsgEn: 'Find the two halves of the Horante Manuscript and decipher it. Then place the marks to open the Fortress.'
    }
  },

  // Room 43 - Exterior de la Torre de Cristal
  {
    type: 'hidden',
    id: 'ebano-43',
    nameEs: 'Ebano',
    nameEn: 'Ebony',
    descEs: 'Es muy alto.',
    descEn: 'It is very tall.',
    roomId: 43,
    breakerItem: null,
    revealedThingData: null
  },

  // Room 44 - Punta de la Torre de Cristal
  {
    type: 'hidden',
    id: 'esfera-44',
    nameEs: 'Esfera',
    nameEn: 'Sphere',
    descEs: 'Tiene aproximadamente tres metros de diámetro y parece ser de carne. Es algo realmente insólito.',
    descEn: 'It is approximately three meters in diameter and appears to be made of flesh. It is truly unusual.',
    roomId: 44,
    breakerItem: 'Marmidosa',
    revealedThingData: {
      type: 'item',
      id: 'tablilla-madera',
      nameEs: 'Tablilla de Madera',
      nameEn: 'Wooden tablet',
      descEs: 'Tiene las siguientes palabras grabadas:\n\n "A acsd o oatssn\n  Oadaat lfnodllg\n  Oed aot nl rlaousa\n  Nocae lcat eh\u00edpds\n  Lail lgd ut l\u00edao\n  Suod qie nl iddd o oats\n  Seod ahj e ehcr ns uro\n  Edl ne a\u00ed efmr"',
      descEn: 'It has the following words engraved:\n\n "A acsd o oatssn\n  Oadaat lfnodllg\n  Oed aot nl rlaousa\n  Nocae lcat eh\u00edpds\n  Lail lgd ut l\u00edao\n  Suod qie nl iddd o oats\n  Seod ahj e ehcr ns uro\n  Edl ne a\u00ed efmr"',
      weight: 2
    }
  },

  // Room 45 - Alcoba de la hija del Hechicero
  {
    type: 'hidden',
    id: 'carta-45',
    nameEs: 'Carta',
    nameEn: 'Letter',
    descEs: 'La carta dice:\n"Mi querido salvador:\n¿Por qué has demorado tanto? Hace mucho que mi padre me llevó al Abismo Infranqueable. Ahora no podré marcharme contigo. La único que puedes hacer para salir es matarlo con Marmidosa. Por favor, trata de que no sufra."',
    descEn: 'The letter reads:\n"My dear savior:\nWhy have you taken so long? My father took me to the Impassable Abyss long ago. Now I will not be able to leave with you. The only thing you can do to get out is kill him with Marmidosa. Please, try not to make him suffer."',
    roomId: 45,
    breakerItem: null,
    revealedThingData: {
      type: 'dangerLink',
      id: 'puerta-secreta-45-46',
      nameEs: 'Puerta Secreta',
      nameEn: 'Secret door',
      descEs: 'Es muy negra y tiene una tela de araña dibujada. Está abierta.',
      descEn: 'It is very black and has a spider web drawn on it. It is open.',
      fromRoomId: 45,
      destinationId: 46,
      talisman: 'Lienzo',
      passageMsgEs: 'Usted atraviesa la puerta lentamente. Los pelos de la nuca se le erizan sin poder evitarlo.',
      passageMsgEn: 'You go through the door slowly. The hairs on the back of your neck stand up involuntarily.',
      isOpen: true
    }
  },

  // Room 53 - Límites de la Fortaleza
  {
    type: 'hidden',
    id: 'muralla-53',
    nameEs: 'Muralla',
    nameEn: 'Wall',
    descEs: 'Es la tercera muralla con que usted tropieza en su camino. Algo le dice que también es la última.',
    descEn: 'It is the third wall you encounter on your path. Something tells you it is also the last.',
    roomId: 53,
    breakerItem: null,
    revealedThingData: null
  },

  // Room 54 - Pirámide del Hechicero
  {
    type: 'hidden',
    id: 'columna-hielo-54',
    nameEs: 'Columna de Hielo',
    nameEn: 'Ice column',
    descEs: 'Es una ancha estructura de hielo pegada a la pared.',
    descEn: 'It is a wide ice structure attached to the wall.',
    roomId: 54,
    breakerItem: 'Antorcha',
    revealedThingData: {
      type: 'riddleLink',
      id: 'puerta-roble-54-55',
      nameEs: 'Puerta de Roble',
      nameEn: 'Oak door',
      descEs: 'Usted presiente que el Hechicero se encuentra detrás de esa puerta.',
      descEn: 'You sense that the Sorcerer is behind that door.',
      fromRoomId: 54,
      destinationId: 55,
      riddleEs: '¿Quién invirtió el reloj de Caronte?',
      riddleEn: 'Who turned Charon\'s hourglass?',
      answer: 'yo',
      passageMsgEs: 'Usted entra a las habitaciones del Hechicero.',
      passageMsgEn: 'You enter the Sorcerer\'s quarters.',
      isOpen: false
    }
  }
];
