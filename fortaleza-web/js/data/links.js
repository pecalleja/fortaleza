// Links (doors and passages between rooms)
export const links = [
  // Room 1
  {
    type: 'linking',
    id: 'puerta-principal-1',
    nameEs: 'Puerta principal',
    nameEn: 'Main door',
    descEs: 'Inmensa y oprimente.',
    descEn: 'Immense and oppressive.',
    fromRoomId: 1,
    destinationId: 2,
    password: 'abrete sesamo',
    passageMsgEs: 'Su sombra desaparece lentamente al cruzar la puerta. Siente como el miedo se le enreda en los zapatos.',
    passageMsgEn: 'Your shadow slowly disappears as you cross the door. You feel fear tangling in your shoes.',
    isOpen: false
  },
  {
    type: 'openLink',
    id: 'tunel-1',
    nameEs: 'Tunel',
    nameEn: 'Tunnel',
    descEs: 'Parece muy largo.',
    descEn: 'It seems very long.',
    fromRoomId: 1,
    destinationId: 4,
    passageMsgEs: 'El olor de la carne descompuesta lo golpea. Usted siente ganas de vomitar.',
    passageMsgEn: 'The smell of decomposed flesh hits you. You feel like vomiting.',
    isOpen: true
  },

  // Room 2
  {
    type: 'linking',
    id: 'puerta-principal-2',
    nameEs: 'Puerta principal',
    nameEn: 'Main door',
    descEs: 'Es una puerta de hierro negro.',
    descEn: 'It is a black iron door.',
    fromRoomId: 2,
    destinationId: 1,
    password: 'abrete sesamo',
    passageMsgEs: 'Usted se siente de regreso a la vida. Ha salido de La Fortaleza.',
    passageMsgEn: 'You feel back to life. You have left La Fortaleza.',
    isOpen: false
  },
  {
    type: 'linking',
    id: 'puerta-negra-2',
    nameEs: 'Puerta negra',
    nameEn: 'Black door',
    descEs: 'Es una puerta de madera negra.',
    descEn: 'It is a black wooden door.',
    fromRoomId: 2,
    destinationId: 3,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta sin dificultades.',
    passageMsgEn: 'You go through the door without difficulties.',
    isOpen: true
  },

  // Room 3
  {
    type: 'riddleLink',
    id: 'escalera-3',
    nameEs: 'Escalera',
    nameEn: 'Staircase',
    descEs: 'Es una escalera de caracol.',
    descEn: 'It is a spiral staircase.',
    fromRoomId: 3,
    destinationId: 5,
    riddleEs: 'Cuantos peldanos tiene la escalera?',
    riddleEn: 'How many steps does the staircase have?',
    answer: 'treinta y nueve',
    passageMsgEs: 'Usted sube por la escalera. No se explica como, siendo tan larga, solo tiene treinta y nueve escalones.',
    passageMsgEn: 'You climb the staircase. You cannot explain how, being so long, it only has thirty-nine steps.',
    isOpen: false
  },
  {
    type: 'linking',
    id: 'puerta-negra-3',
    nameEs: 'Puerta negra',
    nameEn: 'Black door',
    descEs: 'Es una puerta de madera negra.',
    descEn: 'It is a black wooden door.',
    fromRoomId: 3,
    destinationId: 2,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta sin dificultades.',
    passageMsgEn: 'You go through the door without difficulties.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-azul-3',
    nameEs: 'Puerta azul',
    nameEn: 'Blue door',
    descEs: 'Es una puerta de madera azul.',
    descEn: 'It is a blue wooden door.',
    fromRoomId: 3,
    destinationId: 4,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta sin dificultades.',
    passageMsgEn: 'You go through the door without difficulties.',
    isOpen: true
  },

  // Room 4
  {
    type: 'linking',
    id: 'puerta-azul-4',
    nameEs: 'Puerta azul',
    nameEn: 'Blue door',
    descEs: 'Es una puerta de madera azul.',
    descEn: 'It is a blue wooden door.',
    fromRoomId: 4,
    destinationId: 3,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta sin dificultades.',
    passageMsgEn: 'You go through the door without difficulties.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-verde-4',
    nameEs: 'Puerta verde',
    nameEn: 'Green door',
    descEs: 'Es una puerta de madera verde.',
    descEn: 'It is a green wooden door.',
    fromRoomId: 4,
    destinationId: 6,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta sin dificultades.',
    passageMsgEn: 'You go through the door without difficulties.',
    isOpen: true
  },

  // Room 5
  {
    type: 'linking',
    id: 'escalera-5',
    nameEs: 'Escalera',
    nameEn: 'Staircase',
    descEs: 'Es una escalera de caracol.',
    descEn: 'It is a spiral staircase.',
    fromRoomId: 5,
    destinationId: 3,
    password: 'treinta y nueve',
    passageMsgEs: 'Usted se sorprende: La escalera tiene ahora muchos escalones mas.',
    passageMsgEn: 'You are surprised: The staircase now has many more steps.',
    isOpen: false
  },

  // Room 6
  {
    type: 'linking',
    id: 'puerta-verde-6',
    nameEs: 'Puerta verde',
    nameEn: 'Green door',
    descEs: 'Es una puerta de madera verde.',
    descEn: 'It is a green wooden door.',
    fromRoomId: 6,
    destinationId: 4,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'libro-6',
    nameEs: 'Libro',
    nameEn: 'Book',
    descEs: 'Es un libro muy grande.',
    descEn: 'It is a very large book.',
    fromRoomId: 6,
    destinationId: 13,
    password: '',
    passageMsgEs: 'Usted ha atravesado el libro!',
    passageMsgEn: 'You have gone through the book!',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-6',
    nameEs: 'Puerta',
    nameEn: 'Door',
    descEs: 'Es una puerta de madera.',
    descEn: 'It is a wooden door.',
    fromRoomId: 6,
    destinationId: 7,
    password: 'nombus rostomelaris',
    passageMsgEs: 'Usted se encuentra del otro lado de la puerta.',
    passageMsgEn: 'You find yourself on the other side of the door.',
    isOpen: false
  },

  // Room 7
  {
    type: 'linking',
    id: 'puerta-7',
    nameEs: 'Puerta',
    nameEn: 'Door',
    descEs: 'Es una puerta de madera.',
    descEn: 'It is a wooden door.',
    fromRoomId: 7,
    destinationId: 6,
    password: 'nombus rostomelaris',
    passageMsgEs: 'Usted se encuentra del otro lado de la puerta.',
    passageMsgEn: 'You find yourself on the other side of the door.',
    isOpen: false
  },
  {
    type: 'linking',
    id: 'puerta-vieja-7',
    nameEs: 'Puerta vieja',
    nameEn: 'Old door',
    descEs: 'Es una puerta muy vieja.',
    descEn: 'It is a very old door.',
    fromRoomId: 7,
    destinationId: 8,
    password: '',
    passageMsgEs: 'Usted ha entrado.',
    passageMsgEn: 'You have entered.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-roja-7',
    nameEs: 'Puerta roja',
    nameEn: 'Red door',
    descEs: 'Es una puerta de madera roja.',
    descEn: 'It is a red wooden door.',
    fromRoomId: 7,
    destinationId: 9,
    password: '',
    passageMsgEs: 'Usted se encuentra del otro lado de la puerta.',
    passageMsgEn: 'You find yourself on the other side of the door.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-prohibida-7',
    nameEs: 'Puerta prohibida',
    nameEn: 'Forbidden door',
    descEs: 'Tiene la palabra "Prohibido" escrita en ella.',
    descEn: 'It has the word "Forbidden" written on it.',
    fromRoomId: 7,
    destinationId: 10,
    password: 'luz',
    passageMsgEs: 'Usted se encuentra del otro lado de la puerta.',
    passageMsgEn: 'You find yourself on the other side of the door.',
    isOpen: false
  },
  {
    type: 'linking',
    id: 'puerta-gris-7',
    nameEs: 'Puerta gris',
    nameEn: 'Gray door',
    descEs: 'Es una puerta de madera gris.',
    descEn: 'It is a gray wooden door.',
    fromRoomId: 7,
    destinationId: 15,
    password: '',
    passageMsgEs: 'Usted se encuentra del otro lado de la puerta.',
    passageMsgEn: 'You find yourself on the other side of the door.',
    isOpen: true
  },

  // Room 8
  {
    type: 'linking',
    id: 'puerta-vieja-8',
    nameEs: 'Puerta vieja',
    nameEn: 'Old door',
    descEs: 'Es una puerta muy vieja.',
    descEn: 'It is a very old door.',
    fromRoomId: 8,
    destinationId: 7,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },
  {
    type: 'dangerLink',
    id: 'escaparate-8',
    nameEs: 'Escaparate',
    nameEn: 'Showcase',
    descEs: 'Es un escaparate muy grande.',
    descEn: 'It is a very large showcase.',
    fromRoomId: 8,
    destinationId: 14,
    talisman: 'candelabro',
    passageMsgEs: 'Usted cae durante varios minutos y, gracias al candelabro, cuando toca el suelo no se hace dano. Oye una voz que dice: Sea gentil con la doncella, regalele una flor.',
    passageMsgEn: 'You fall for several minutes and, thanks to the candelabra, when you touch the ground you do not get hurt. You hear a voice that says: Be kind to the maiden, give her a flower.',
    isOpen: true
  },

  // Room 9
  {
    type: 'linking',
    id: 'puerta-roja-9',
    nameEs: 'Puerta roja',
    nameEn: 'Red door',
    descEs: 'Es una puerta de madera roja.',
    descEn: 'It is a red wooden door.',
    fromRoomId: 9,
    destinationId: 7,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },

  // Room 10
  {
    type: 'linking',
    id: 'puerta-prohibida-10',
    nameEs: 'Puerta prohibida',
    nameEn: 'Forbidden door',
    descEs: 'Tiene la palabra "Prohibido" escrita en ella.',
    descEn: 'It has the word "Forbidden" written on it.',
    fromRoomId: 10,
    destinationId: 7,
    password: 'luz',
    passageMsgEs: 'La puerta se abre.',
    passageMsgEn: 'The door opens.',
    isOpen: false
  },

  // Room 11
  {
    type: 'linking',
    id: 'puerta-11',
    nameEs: 'Puerta',
    nameEn: 'Door',
    descEs: 'Es una puerta de madera.',
    descEn: 'It is a wooden door.',
    fromRoomId: 11,
    destinationId: 9,
    password: '',
    passageMsgEs: 'Usted regresa al cuarto del guerrero.',
    passageMsgEn: 'You return to the warrior\'s room.',
    isOpen: true
  },

  // Room 12
  {
    type: 'linking',
    id: 'puerta-verde-12',
    nameEs: 'Puerta verde',
    nameEn: 'Green door',
    descEs: 'Es una puerta de madera verde.',
    descEn: 'It is a green wooden door.',
    fromRoomId: 12,
    destinationId: 13,
    password: '',
    passageMsgEs: 'Usted entra al jardin.',
    passageMsgEn: 'You enter the garden.',
    isOpen: true
  },

  // Room 13
  {
    type: 'linking',
    id: 'puerta-verde-13',
    nameEs: 'Puerta verde',
    nameEn: 'Green door',
    descEs: 'Es una puerta de madera verde.',
    descEn: 'It is a green wooden door.',
    fromRoomId: 13,
    destinationId: 12,
    password: '',
    passageMsgEs: 'Usted sale del jardin.',
    passageMsgEn: 'You leave the garden.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-azul-13',
    nameEs: 'Puerta azul',
    nameEn: 'Blue door',
    descEs: 'Es una puerta de madera azul.',
    descEn: 'It is a blue wooden door.',
    fromRoomId: 13,
    destinationId: 14,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-amarilla-13',
    nameEs: 'Puerta amarilla',
    nameEn: 'Yellow door',
    descEs: 'Es una puerta de madera amarilla.',
    descEn: 'It is a yellow wooden door.',
    fromRoomId: 13,
    destinationId: 15,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-hierro-13',
    nameEs: 'Puerta de hierro',
    nameEn: 'Iron door',
    descEs: 'Es una puerta de hierro.',
    descEn: 'It is an iron door.',
    fromRoomId: 13,
    destinationId: 16,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-madera-13',
    nameEs: 'Puerta de madera',
    nameEn: 'Wooden door',
    descEs: 'Es una puerta de madera.',
    descEn: 'It is a wooden door.',
    fromRoomId: 13,
    destinationId: 23,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },

  // Room 14
  {
    type: 'linking',
    id: 'puerta-azul-14',
    nameEs: 'Puerta azul',
    nameEn: 'Blue door',
    descEs: 'Es una puerta de madera azul.',
    descEn: 'It is a blue wooden door.',
    fromRoomId: 14,
    destinationId: 13,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'escaparate-14',
    nameEs: 'Escaparate',
    nameEn: 'Showcase',
    descEs: 'Es un escaparate muy grande.',
    descEn: 'It is a very large showcase.',
    fromRoomId: 14,
    destinationId: 8,
    password: '',
    passageMsgEs: 'Usted sube durante varios minutos hasta llegar al escaparate de la bruja.',
    passageMsgEn: "You climb for several minutes until you reach the witch's showcase.",
    isOpen: true
  },

  // Room 15
  {
    type: 'linking',
    id: 'puerta-gris-15',
    nameEs: 'Puerta gris',
    nameEn: 'Gray door',
    descEs: 'Es una puerta de madera gris.',
    descEn: 'It is a gray wooden door.',
    fromRoomId: 15,
    destinationId: 7,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-amarilla-15',
    nameEs: 'Puerta amarilla',
    nameEn: 'Yellow door',
    descEs: 'Es una puerta de madera amarilla.',
    descEn: 'It is a yellow wooden door.',
    fromRoomId: 15,
    destinationId: 13,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },

  // Room 16
  {
    type: 'linking',
    id: 'puerta-hierro-16',
    nameEs: 'Puerta de hierro',
    nameEn: 'Iron door',
    descEs: 'Es una puerta de hierro.',
    descEn: 'It is an iron door.',
    fromRoomId: 16,
    destinationId: 13,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },

  // Room 17
  {
    type: 'linking',
    id: 'puerta-triangular-17',
    nameEs: 'Puerta triangular',
    nameEn: 'Triangular door',
    descEs: 'Es una puerta triangular.',
    descEn: 'It is a triangular door.',
    fromRoomId: 17,
    destinationId: 25,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'garganta-17',
    nameEs: 'Garganta',
    nameEn: 'Throat',
    descEs: 'Es la garganta de la Bestia.',
    descEn: 'It is the throat of the Beast.',
    fromRoomId: 17,
    destinationId: 18,
    passageMsgEs: 'Usted atraviesa por la garganta de la Bestia.',
    passageMsgEn: 'You go through the throat of the Beast.',
    isOpen: true
  },

  // Room 18
  {
    type: 'linking',
    id: 'garganta-18',
    nameEs: 'Garganta',
    nameEn: 'Throat',
    descEs: 'Es la garganta de la Bestia.',
    descEn: 'It is the throat of the Beast.',
    fromRoomId: 18,
    destinationId: 17,
    password: '',
    passageMsgEs: 'Usted regresa a la garganta.',
    passageMsgEn: 'You return to the throat.',
    isOpen: true
  },
  {
    type: 'dangerLink',
    id: 'traquea-18',
    nameEs: 'Traquea',
    nameEn: 'Trachea',
    descEs: 'Es la traquea de la Bestia.',
    descEn: 'It is the trachea of the Beast.',
    fromRoomId: 18,
    destinationId: 19,
    talisman: 'talisman-aire',
    passageMsgEs: 'Usted atraviesa por la traquea de la Bestia.',
    passageMsgEn: 'You go through the trachea of the Beast.',
    isOpen: true
  },
  {
    type: 'dangerLink',
    id: 'esofago-18',
    nameEs: 'Esofago',
    nameEn: 'Esophagus',
    descEs: 'Es el esofago de la Bestia.',
    descEn: 'It is the esophagus of the Beast.',
    fromRoomId: 18,
    destinationId: 20,
    talisman: 'pastel-cerezas',
    passageMsgEs: 'Usted atraviesa por el esofago de la Bestia.',
    passageMsgEn: 'You go through the esophagus of the Beast.',
    isOpen: true
  },
  {
    type: 'dangerLink',
    id: 'arteria-principal-18',
    nameEs: 'Arteria principal',
    nameEn: 'Main artery',
    descEs: 'Es la arteria principal de la Bestia.',
    descEn: 'It is the main artery of the Beast.',
    fromRoomId: 18,
    destinationId: 21,
    talisman: 'corazon-unicornio',
    passageMsgEs: 'Usted atraviesa por la arteria principal de la Bestia.',
    passageMsgEn: 'You go through the main artery of the Beast.',
    isOpen: true
  },

  // Room 19
  {
    type: 'linking',
    id: 'traquea-19',
    nameEs: 'Traquea',
    nameEn: 'Trachea',
    descEs: 'Es la traquea de la Bestia.',
    descEn: 'It is the trachea of the Beast.',
    fromRoomId: 19,
    destinationId: 18,
    password: '',
    passageMsgEs: 'Usted regresa a la traquea.',
    passageMsgEn: 'You return to the trachea.',
    isOpen: true
  },

  // Room 20
  {
    type: 'linking',
    id: 'esofago-20',
    nameEs: 'Esofago',
    nameEn: 'Esophagus',
    descEs: 'Es el esofago de la Bestia.',
    descEn: 'It is the esophagus of the Beast.',
    fromRoomId: 20,
    destinationId: 18,
    password: '',
    passageMsgEs: 'Usted regresa al esofago.',
    passageMsgEn: 'You return to the esophagus.',
    isOpen: true
  },

  // Room 21
  {
    type: 'linking',
    id: 'arteria-principal-21',
    nameEs: 'Arteria principal',
    nameEn: 'Main artery',
    descEs: 'Es la arteria principal de la Bestia.',
    descEn: 'It is the main artery of the Beast.',
    fromRoomId: 21,
    destinationId: 18,
    password: '',
    passageMsgEs: 'Usted regresa a la arteria.',
    passageMsgEn: 'You return to the artery.',
    isOpen: true
  },

  // Room 22 has no exit links (brain room - one way entry from room 30)

  // Room 23
  {
    type: 'linking',
    id: 'puerta-madera-23',
    nameEs: 'Puerta de madera',
    nameEn: 'Wooden door',
    descEs: 'Es una puerta de madera.',
    descEn: 'It is a wooden door.',
    fromRoomId: 23,
    destinationId: 13,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-verde-23',
    nameEs: 'Puerta verde',
    nameEn: 'Green door',
    descEs: 'Es una puerta de madera verde.',
    descEn: 'It is a green wooden door.',
    fromRoomId: 23,
    destinationId: 24,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },

  // Room 24
  {
    type: 'linking',
    id: 'puerta-verde-24',
    nameEs: 'Puerta verde',
    nameEn: 'Green door',
    descEs: 'Es una puerta de madera verde.',
    descEn: 'It is a green wooden door.',
    fromRoomId: 24,
    destinationId: 23,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },
  {
    type: 'linking',
    id: 'puerta-cristal-24',
    nameEs: 'Puerta de cristal',
    nameEn: 'Crystal door',
    descEs: 'Es una puerta de cristal.',
    descEn: 'It is a crystal door.',
    fromRoomId: 24,
    destinationId: 25,
    password: 'agua',
    passageMsgEs: 'La puerta se abre.',
    passageMsgEn: 'The door opens.',
    isOpen: false
  },
  {
    type: 'openLink',
    id: 'pozo-24',
    nameEs: 'Pozo',
    nameEn: 'Well',
    descEs: 'Es un pozo muy profundo.',
    descEn: 'It is a very deep well.',
    fromRoomId: 24,
    destinationId: 1,
    passageMsgEs: 'Usted cae vertiginosamente por el pozo y, antes de que pueda darse cuenta, esta en el exterior de la fortaleza.',
    passageMsgEn: 'You fall vertiginously through the well and, before you can realize it, you are outside the fortress.',
    isOpen: true
  },
  {
    type: 'dangerLink',
    id: 'tunel-24',
    nameEs: 'Tunel',
    nameEn: 'Tunnel',
    descEs: 'Es un tunel oscuro.',
    descEn: 'It is a dark tunnel.',
    fromRoomId: 24,
    destinationId: 24,
    talisman: 'nada',
    passageMsgEs: 'Usted entra al tunel de la muerte...',
    passageMsgEn: 'You enter the tunnel of death...',
    isOpen: true
  },

  // Room 25
  {
    type: 'linking',
    id: 'puerta-cristal-25',
    nameEs: 'Puerta de cristal',
    nameEn: 'Crystal door',
    descEs: 'Es una puerta de cristal.',
    descEn: 'It is a crystal door.',
    fromRoomId: 25,
    destinationId: 24,
    password: 'agua',
    passageMsgEs: 'La puerta se abre.',
    passageMsgEn: 'The door opens.',
    isOpen: false
  },
  {
    type: 'linking',
    id: 'puerta-tela-25',
    nameEs: 'Puerta de tela',
    nameEn: 'Cloth door',
    descEs: 'Es una puerta de tela.',
    descEn: 'It is a cloth door.',
    fromRoomId: 25,
    destinationId: 26,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },
  {
    type: 'riddleLink',
    id: 'puerta-triangular-25',
    nameEs: 'Puerta triangular',
    nameEn: 'Triangular door',
    descEs: 'Es una puerta triangular.',
    descEn: 'It is a triangular door.',
    fromRoomId: 25,
    destinationId: 17,
    riddleEs: 'Cual es el nombre del duende?',
    riddleEn: 'What is the name of the elf?',
    answer: 'rumpelstinskin',
    passageMsgEs: 'La puerta se abre.',
    passageMsgEn: 'The door opens.',
    isOpen: false
  },

  // Room 26 has no exit links (death trap cell)

  // Room 27
  {
    type: 'dangerLink',
    id: 'puerta-secreta-27',
    nameEs: 'Puerta secreta',
    nameEn: 'Secret door',
    descEs: 'Es una puerta secreta.',
    descEn: 'It is a secret door.',
    fromRoomId: 27,
    destinationId: 1,
    talisman: 'antorcha',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },
  {
    type: 'dangerLink2',
    id: 'puerta-27',
    nameEs: 'Puerta',
    nameEn: 'Door',
    descEs: 'Es una puerta de madera.',
    descEn: 'It is a wooden door.',
    fromRoomId: 27,
    destinationId: 28,
    forbiddenItem: 'espada',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },

  // Room 28
  {
    type: 'linking',
    id: 'puerta-28',
    nameEs: 'Puerta',
    nameEn: 'Door',
    descEs: 'Es una puerta de madera.',
    descEn: 'It is a wooden door.',
    fromRoomId: 28,
    destinationId: 27,
    password: '',
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-verde-28',
    nameEs: 'Puerta verde',
    nameEn: 'Green door',
    descEs: 'Es una puerta de madera verde.',
    descEn: 'It is a green wooden door.',
    fromRoomId: 28,
    destinationId: 31,
    passageMsgEs: 'Usted entra al laberinto.',
    passageMsgEn: 'You enter the labyrinth.',
    isOpen: true
  },

  // Room 29
  {
    type: 'openLink',
    id: 'puerta-29',
    nameEs: 'Puerta',
    nameEn: 'Door',
    descEs: 'Es una puerta de madera.',
    descEn: 'It is a wooden door.',
    fromRoomId: 29,
    destinationId: 47,
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },

  // Room 30
  {
    type: 'riddleLink',
    id: 'puerta-dorada-30',
    nameEs: 'Puerta dorada',
    nameEn: 'Golden door',
    descEs: 'Es una puerta dorada.',
    descEn: 'It is a golden door.',
    fromRoomId: 30,
    destinationId: 22,
    riddleEs: 'Invente un alfabeto (el mayor que pueda) con el que no pueda crearse a la Bestia.',
    riddleEn: 'Invent an alphabet (the largest you can) with which the Beast cannot be created.',
    answer: 'cdfghjklmnopqruvwxyz',
    passageMsgEs: 'La puerta se abre. Usted entra al cerebro de la Bestia.',
    passageMsgEn: 'The door opens. You enter the brain of the Beast.',
    isOpen: false
  },

  // LABYRINTH (rooms 31-48) - all openLinks with 3 doors each
  // Room 31
  {
    type: 'openLink',
    id: 'puerta-1-31',
    nameEs: 'Puerta 1',
    nameEn: 'Door 1',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 31,
    destinationId: 32,
    passageMsgEs: 'Usted atraviesa la puerta 1.',
    passageMsgEn: 'You go through door 1.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-2-31',
    nameEs: 'Puerta 2',
    nameEn: 'Door 2',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 31,
    destinationId: 28,
    passageMsgEs: 'Usted atraviesa la puerta 2.',
    passageMsgEn: 'You go through door 2.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-3-31',
    nameEs: 'Puerta 3',
    nameEn: 'Door 3',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 31,
    destinationId: 38,
    passageMsgEs: 'Usted atraviesa la puerta 3.',
    passageMsgEn: 'You go through door 3.',
    isOpen: true
  },

  // Room 32
  {
    type: 'openLink',
    id: 'puerta-1-32',
    nameEs: 'Puerta 1',
    nameEn: 'Door 1',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 32,
    destinationId: 31,
    passageMsgEs: 'Usted atraviesa la puerta 1.',
    passageMsgEn: 'You go through door 1.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-2-32',
    nameEs: 'Puerta 2',
    nameEn: 'Door 2',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 32,
    destinationId: 33,
    passageMsgEs: 'Usted atraviesa la puerta 2.',
    passageMsgEn: 'You go through door 2.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-3-32',
    nameEs: 'Puerta 3',
    nameEn: 'Door 3',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 32,
    destinationId: 44,
    passageMsgEs: 'Usted atraviesa la puerta 3.',
    passageMsgEn: 'You go through door 3.',
    isOpen: true
  },

  // Room 33
  {
    type: 'openLink',
    id: 'puerta-1-33',
    nameEs: 'Puerta 1',
    nameEn: 'Door 1',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 33,
    destinationId: 26,
    passageMsgEs: 'Usted atraviesa la puerta 1.',
    passageMsgEn: 'You go through door 1.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-2-33',
    nameEs: 'Puerta 2',
    nameEn: 'Door 2',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 33,
    destinationId: 32,
    passageMsgEs: 'Usted atraviesa la puerta 2.',
    passageMsgEn: 'You go through door 2.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-3-33',
    nameEs: 'Puerta 3',
    nameEn: 'Door 3',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 33,
    destinationId: 34,
    passageMsgEs: 'Usted atraviesa la puerta 3.',
    passageMsgEn: 'You go through door 3.',
    isOpen: true
  },

  // Room 34
  {
    type: 'openLink',
    id: 'puerta-1-34',
    nameEs: 'Puerta 1',
    nameEn: 'Door 1',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 34,
    destinationId: 35,
    passageMsgEs: 'Usted atraviesa la puerta 1.',
    passageMsgEn: 'You go through door 1.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-2-34',
    nameEs: 'Puerta 2',
    nameEn: 'Door 2',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 34,
    destinationId: 41,
    passageMsgEs: 'Usted atraviesa la puerta 2.',
    passageMsgEn: 'You go through door 2.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-3-34',
    nameEs: 'Puerta 3',
    nameEn: 'Door 3',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 34,
    destinationId: 33,
    passageMsgEs: 'Usted atraviesa la puerta 3.',
    passageMsgEn: 'You go through door 3.',
    isOpen: true
  },

  // Room 35
  {
    type: 'openLink',
    id: 'puerta-1-35',
    nameEs: 'Puerta 1',
    nameEn: 'Door 1',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 35,
    destinationId: 34,
    passageMsgEs: 'Usted atraviesa la puerta 1.',
    passageMsgEn: 'You go through door 1.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-2-35',
    nameEs: 'Puerta 2',
    nameEn: 'Door 2',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 35,
    destinationId: 36,
    passageMsgEs: 'Usted atraviesa la puerta 2.',
    passageMsgEn: 'You go through door 2.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-3-35',
    nameEs: 'Puerta 3',
    nameEn: 'Door 3',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 35,
    destinationId: 46,
    passageMsgEs: 'Usted atraviesa la puerta 3.',
    passageMsgEn: 'You go through door 3.',
    isOpen: true
  },

  // Room 36
  {
    type: 'openLink',
    id: 'puerta-1-36',
    nameEs: 'Puerta 1',
    nameEn: 'Door 1',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 36,
    destinationId: 49,
    passageMsgEs: 'Usted atraviesa la puerta 1.',
    passageMsgEn: 'You go through door 1.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-2-36',
    nameEs: 'Puerta 2',
    nameEn: 'Door 2',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 36,
    destinationId: 35,
    passageMsgEs: 'Usted atraviesa la puerta 2.',
    passageMsgEn: 'You go through door 2.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-3-36',
    nameEs: 'Puerta 3',
    nameEn: 'Door 3',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 36,
    destinationId: 37,
    passageMsgEs: 'Usted atraviesa la puerta 3.',
    passageMsgEn: 'You go through door 3.',
    isOpen: true
  },

  // Room 37
  {
    type: 'openLink',
    id: 'puerta-1-37',
    nameEs: 'Puerta 1',
    nameEn: 'Door 1',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 37,
    destinationId: 29,
    passageMsgEs: 'Usted atraviesa la puerta 1.',
    passageMsgEn: 'You go through door 1.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-2-37',
    nameEs: 'Puerta 2',
    nameEn: 'Door 2',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 37,
    destinationId: 31,
    passageMsgEs: 'Usted atraviesa la puerta 2.',
    passageMsgEn: 'You go through door 2.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-3-37',
    nameEs: 'Puerta 3',
    nameEn: 'Door 3',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 37,
    destinationId: 36,
    passageMsgEs: 'Usted atraviesa la puerta 3.',
    passageMsgEn: 'You go through door 3.',
    isOpen: true
  },

  // Room 38
  {
    type: 'openLink',
    id: 'puerta-1-38',
    nameEs: 'Puerta 1',
    nameEn: 'Door 1',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 38,
    destinationId: 26,
    passageMsgEs: 'Usted atraviesa la puerta 1.',
    passageMsgEn: 'You go through door 1.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-2-38',
    nameEs: 'Puerta 2',
    nameEn: 'Door 2',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 38,
    destinationId: 39,
    passageMsgEs: 'Usted atraviesa la puerta 2.',
    passageMsgEn: 'You go through door 2.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-3-38',
    nameEs: 'Puerta 3',
    nameEn: 'Door 3',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 38,
    destinationId: 31,
    passageMsgEs: 'Usted atraviesa la puerta 3.',
    passageMsgEn: 'You go through door 3.',
    isOpen: true
  },

  // Room 39
  {
    type: 'openLink',
    id: 'puerta-1-39',
    nameEs: 'Puerta 1',
    nameEn: 'Door 1',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 39,
    destinationId: 31,
    passageMsgEs: 'Usted atraviesa la puerta 1.',
    passageMsgEn: 'You go through door 1.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-2-39',
    nameEs: 'Puerta 2',
    nameEn: 'Door 2',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 39,
    destinationId: 38,
    passageMsgEs: 'Usted atraviesa la puerta 2.',
    passageMsgEn: 'You go through door 2.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-3-39',
    nameEs: 'Puerta 3',
    nameEn: 'Door 3',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 39,
    destinationId: 40,
    passageMsgEs: 'Usted atraviesa la puerta 3.',
    passageMsgEn: 'You go through door 3.',
    isOpen: true
  },

  // Room 40
  {
    type: 'openLink',
    id: 'puerta-1-40',
    nameEs: 'Puerta 1',
    nameEn: 'Door 1',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 40,
    destinationId: 31,
    passageMsgEs: 'Usted atraviesa la puerta 1.',
    passageMsgEn: 'You go through door 1.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-2-40',
    nameEs: 'Puerta 2',
    nameEn: 'Door 2',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 40,
    destinationId: 26,
    passageMsgEs: 'Usted atraviesa la puerta 2.',
    passageMsgEn: 'You go through door 2.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-3-40',
    nameEs: 'Puerta 3',
    nameEn: 'Door 3',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 40,
    destinationId: 39,
    passageMsgEs: 'Usted atraviesa la puerta 3.',
    passageMsgEn: 'You go through door 3.',
    isOpen: true
  },

  // Room 41
  {
    type: 'openLink',
    id: 'puerta-1-41',
    nameEs: 'Puerta 1',
    nameEn: 'Door 1',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 41,
    destinationId: 33,
    passageMsgEs: 'Usted atraviesa la puerta 1.',
    passageMsgEn: 'You go through door 1.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-2-41',
    nameEs: 'Puerta 2',
    nameEn: 'Door 2',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 41,
    destinationId: 34,
    passageMsgEs: 'Usted atraviesa la puerta 2.',
    passageMsgEn: 'You go through door 2.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-3-41',
    nameEs: 'Puerta 3',
    nameEn: 'Door 3',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 41,
    destinationId: 42,
    passageMsgEs: 'Usted atraviesa la puerta 3.',
    passageMsgEn: 'You go through door 3.',
    isOpen: true
  },

  // Room 42
  {
    type: 'openLink',
    id: 'puerta-1-42',
    nameEs: 'Puerta 1',
    nameEn: 'Door 1',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 42,
    destinationId: 32,
    passageMsgEs: 'Usted atraviesa la puerta 1.',
    passageMsgEn: 'You go through door 1.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-2-42',
    nameEs: 'Puerta 2',
    nameEn: 'Door 2',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 42,
    destinationId: 43,
    passageMsgEs: 'Usted atraviesa la puerta 2.',
    passageMsgEn: 'You go through door 2.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-3-42',
    nameEs: 'Puerta 3',
    nameEn: 'Door 3',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 42,
    destinationId: 41,
    passageMsgEs: 'Usted atraviesa la puerta 3.',
    passageMsgEn: 'You go through door 3.',
    isOpen: true
  },

  // Room 43
  {
    type: 'openLink',
    id: 'puerta-1-43',
    nameEs: 'Puerta 1',
    nameEn: 'Door 1',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 43,
    destinationId: 26,
    passageMsgEs: 'Usted atraviesa la puerta 1.',
    passageMsgEn: 'You go through door 1.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-2-43',
    nameEs: 'Puerta 2',
    nameEn: 'Door 2',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 43,
    destinationId: 42,
    passageMsgEs: 'Usted atraviesa la puerta 2.',
    passageMsgEn: 'You go through door 2.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-3-43',
    nameEs: 'Puerta 3',
    nameEn: 'Door 3',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 43,
    destinationId: 44,
    passageMsgEs: 'Usted atraviesa la puerta 3.',
    passageMsgEn: 'You go through door 3.',
    isOpen: true
  },

  // Room 44
  {
    type: 'openLink',
    id: 'puerta-1-44',
    nameEs: 'Puerta 1',
    nameEn: 'Door 1',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 44,
    destinationId: 45,
    passageMsgEs: 'Usted atraviesa la puerta 1.',
    passageMsgEn: 'You go through door 1.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-2-44',
    nameEs: 'Puerta 2',
    nameEn: 'Door 2',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 44,
    destinationId: 32,
    passageMsgEs: 'Usted atraviesa la puerta 2.',
    passageMsgEn: 'You go through door 2.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-3-44',
    nameEs: 'Puerta 3',
    nameEn: 'Door 3',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 44,
    destinationId: 31,
    passageMsgEs: 'Usted atraviesa la puerta 3.',
    passageMsgEn: 'You go through door 3.',
    isOpen: true
  },

  // Room 45
  {
    type: 'openLink',
    id: 'puerta-1-45',
    nameEs: 'Puerta 1',
    nameEn: 'Door 1',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 45,
    destinationId: 44,
    passageMsgEs: 'Usted atraviesa la puerta 1.',
    passageMsgEn: 'You go through door 1.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-2-45',
    nameEs: 'Puerta 2',
    nameEn: 'Door 2',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 45,
    destinationId: 32,
    passageMsgEs: 'Usted atraviesa la puerta 2.',
    passageMsgEn: 'You go through door 2.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-3-45',
    nameEs: 'Puerta 3',
    nameEn: 'Door 3',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 45,
    destinationId: 31,
    passageMsgEs: 'Usted atraviesa la puerta 3.',
    passageMsgEn: 'You go through door 3.',
    isOpen: true
  },

  // Room 46
  {
    type: 'openLink',
    id: 'puerta-1-46',
    nameEs: 'Puerta 1',
    nameEn: 'Door 1',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 46,
    destinationId: 47,
    passageMsgEs: 'Usted atraviesa la puerta 1.',
    passageMsgEn: 'You go through door 1.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-2-46',
    nameEs: 'Puerta 2',
    nameEn: 'Door 2',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 46,
    destinationId: 33,
    passageMsgEs: 'Usted atraviesa la puerta 2.',
    passageMsgEn: 'You go through door 2.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-3-46',
    nameEs: 'Puerta 3',
    nameEn: 'Door 3',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 46,
    destinationId: 35,
    passageMsgEs: 'Usted atraviesa la puerta 3.',
    passageMsgEn: 'You go through door 3.',
    isOpen: true
  },

  // Room 47
  {
    type: 'openLink',
    id: 'puerta-1-47',
    nameEs: 'Puerta 1',
    nameEn: 'Door 1',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 47,
    destinationId: 46,
    passageMsgEs: 'Usted atraviesa la puerta 1.',
    passageMsgEn: 'You go through door 1.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-2-47',
    nameEs: 'Puerta 2',
    nameEn: 'Door 2',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 47,
    destinationId: 34,
    passageMsgEs: 'Usted atraviesa la puerta 2.',
    passageMsgEn: 'You go through door 2.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-3-47',
    nameEs: 'Puerta 3',
    nameEn: 'Door 3',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 47,
    destinationId: 48,
    passageMsgEs: 'Usted atraviesa la puerta 3.',
    passageMsgEn: 'You go through door 3.',
    isOpen: true
  },

  // Room 48
  {
    type: 'openLink',
    id: 'puerta-1-48',
    nameEs: 'Puerta 1',
    nameEn: 'Door 1',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 48,
    destinationId: 31,
    passageMsgEs: 'Usted atraviesa la puerta 1.',
    passageMsgEn: 'You go through door 1.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-2-48',
    nameEs: 'Puerta 2',
    nameEn: 'Door 2',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 48,
    destinationId: 49,
    passageMsgEs: 'Usted atraviesa la puerta 2.',
    passageMsgEn: 'You go through door 2.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-3-48',
    nameEs: 'Puerta 3',
    nameEn: 'Door 3',
    descEs: 'Es una de las tres puertas simetricas.',
    descEn: 'It is one of the three symmetrical doors.',
    fromRoomId: 48,
    destinationId: 47,
    passageMsgEs: 'Usted atraviesa la puerta 3.',
    passageMsgEn: 'You go through door 3.',
    isOpen: true
  },

  // Room 49 (labyrinth exit)
  {
    type: 'openLink',
    id: 'salida-49',
    nameEs: 'Salida',
    nameEn: 'Exit',
    descEs: 'Es la salida del laberinto.',
    descEn: 'It is the exit of the labyrinth.',
    fromRoomId: 49,
    destinationId: 28,
    passageMsgEs: 'Usted sale del laberinto.',
    passageMsgEn: 'You exit the labyrinth.',
    isOpen: true
  },

  // Room 50 (fake garden - all doors lead to death trap room 26)
  {
    type: 'openLink',
    id: 'puerta-verde-50',
    nameEs: 'Puerta verde',
    nameEn: 'Green door',
    descEs: 'Es una puerta de madera verde.',
    descEn: 'It is a green wooden door.',
    fromRoomId: 50,
    destinationId: 26,
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-azul-50',
    nameEs: 'Puerta azul',
    nameEn: 'Blue door',
    descEs: 'Es una puerta de madera azul.',
    descEn: 'It is a blue wooden door.',
    fromRoomId: 50,
    destinationId: 26,
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-amarilla-50',
    nameEs: 'Puerta amarilla',
    nameEn: 'Yellow door',
    descEs: 'Es una puerta de madera amarilla.',
    descEn: 'It is a yellow wooden door.',
    fromRoomId: 50,
    destinationId: 26,
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },
  {
    type: 'openLink',
    id: 'puerta-madera-50',
    nameEs: 'Puerta de madera',
    nameEn: 'Wooden door',
    descEs: 'Es una puerta de madera.',
    descEn: 'It is a wooden door.',
    fromRoomId: 50,
    destinationId: 26,
    passageMsgEs: 'Usted atraviesa la puerta.',
    passageMsgEn: 'You go through the door.',
    isOpen: true
  },
  {
    type: 'riddleLink',
    id: 'puerta-hierro-50',
    nameEs: 'Puerta de hierro',
    nameEn: 'Iron door',
    descEs: 'Es una puerta de hierro.',
    descEn: 'It is an iron door.',
    fromRoomId: 50,
    destinationId: 30,
    riddleEs: 'Cuantas antorchas iluminan al Minotauro?',
    riddleEn: 'How many torches illuminate the Minotaur?',
    answer: 'seis',
    passageMsgEs: 'La puerta se abre.',
    passageMsgEn: 'The door opens.',
    isOpen: false
  }
];

// Hidden objects (containers that must be broken to reveal contents)
export const hiddenObjects = [
  {
    type: 'hidden',
    id: 'pared-solitaria',
    nameEs: 'Pared solitaria',
    nameEn: 'Lonely wall',
    descEs: 'Usted no puede imaginar con que motivo fue colocada ahi.',
    descEn: 'You cannot imagine why it was placed there.',
    roomId: 1,
    breakerItem: 'ariete',
    revealedThingData: {
      type: 'dangerLink',
      id: 'puerta-secreta-1',
      nameEs: 'Puerta secreta',
      nameEn: 'Secret door',
      descEs: 'Es una puerta secreta.',
      descEn: 'It is a secret door.',
      fromRoomId: 1,
      destinationId: 27,
      talisman: 'antorcha',
      passageMsgEs: 'Usted atraviesa la puerta.',
      passageMsgEn: 'You go through the door.',
      isOpen: true
    }
  },
  {
    type: 'hidden',
    id: 'monolito-marmol',
    nameEs: 'Monolito de marmol',
    nameEn: 'Marble monolith',
    descEs: 'Es un monolito de marmol.',
    descEn: 'It is a marble monolith.',
    roomId: 2,
    breakerItem: 'maza',
    revealedThingData: {
      type: 'troll',
      id: 'trebol',
      nameEs: 'Trebol',
      nameEn: 'Clover',
      descEs: 'Es un duende muy pequeño.',
      descEn: 'It is a very small elf.',
      wantsItem: 'vaso-agua',
      unhappyMsgEs: 'Dame agua, por favor...',
      unhappyMsgEn: 'Give me water, please...',
      happyMsgEs: 'Busca a la doncella al lado del espejo que romperas con un hueso. Ella te dira donde esta el final de la Bestia.',
      happyMsgEn: 'Look for the maiden next to the mirror that you will break with a bone. She will tell you where the end of the Beast is.'
    }
  },
  {
    type: 'hidden',
    id: 'espejo-opaco',
    nameEs: 'Espejo opaco',
    nameEn: 'Opaque mirror',
    descEs: 'Es un espejo opaco.',
    descEn: 'It is an opaque mirror.',
    roomId: 5,
    breakerItem: 'hueso-gato',
    revealedThingData: {
      type: 'linking',
      id: 'puerta-oculta-5',
      nameEs: 'Puerta oculta',
      nameEn: 'Hidden door',
      descEs: 'Es una puerta oculta.',
      descEn: 'It is a hidden door.',
      fromRoomId: 5,
      destinationId: 14,
      password: '',
      passageMsgEs: 'Usted atraviesa la puerta.',
      passageMsgEn: 'You go through the door.',
      isOpen: true
    }
  },
  {
    type: 'hidden',
    id: 'cama',
    nameEs: 'Cama',
    nameEn: 'Bed',
    descEs: 'Es una cama muy grande.',
    descEn: 'It is a very large bed.',
    roomId: 9,
    breakerItem: 'hacha',
    revealedThingData: {
      type: 'linking',
      id: 'puerta-9',
      nameEs: 'Puerta',
      nameEn: 'Door',
      descEs: 'Es una puerta de madera.',
      descEn: 'It is a wooden door.',
      fromRoomId: 9,
      destinationId: 11,
      password: '',
      passageMsgEs: 'Usted entra a la armeria.',
      passageMsgEn: 'You enter the armory.',
      isOpen: true
    }
  },
  {
    type: 'hidden',
    id: 'estatua-satanas',
    nameEs: 'Estatua de Satanas',
    nameEn: 'Statue of Satan',
    descEs: 'Es una estatua de marmol negro.',
    descEn: 'It is a black marble statue.',
    roomId: 27,
    breakerItem: 'cuadro',
    revealedThingData: {
      type: 'linking',
      id: 'puerta-oculta-27',
      nameEs: 'Puerta oculta',
      nameEn: 'Hidden door',
      descEs: 'Es una puerta oculta.',
      descEn: 'It is a hidden door.',
      fromRoomId: 27,
      destinationId: 28,
      password: '',
      passageMsgEs: 'Usted atraviesa la puerta.',
      passageMsgEn: 'You go through the door.',
      isOpen: true
    }
  },
  {
    type: 'hidden',
    id: 'columna-cristal',
    nameEs: 'Columna de Cristal',
    nameEn: 'Crystal Column',
    descEs: 'Es una columna de cristal.',
    descEn: 'It is a crystal column.',
    roomId: 28,
    breakerItem: 'antorcha-3',
    revealedThingData: {
      type: 'hidden',
      id: 'puerta-madera-hidden',
      nameEs: 'Puerta de madera',
      nameEn: 'Wooden door',
      descEs: 'Es una puerta de madera.',
      descEn: 'It is a wooden door.',
      roomId: 28,
      breakerItem: 'martillo',
      revealedThingData: {
        type: 'linking',
        id: 'puerta-negra-28',
        nameEs: 'Puerta negra',
        nameEn: 'Black door',
        descEs: 'Es una puerta de madera negra.',
        descEn: 'It is a black wooden door.',
        fromRoomId: 28,
        destinationId: 50,
        password: '',
        passageMsgEs: 'Usted atraviesa la puerta.',
        passageMsgEn: 'You go through the door.',
        isOpen: true
      }
    }
  }
];
