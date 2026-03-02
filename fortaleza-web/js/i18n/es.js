export default {
  // Verbs (command vocabulary)
  verbs: {
    go: ['ir', 'atravesar', 'cruzar', 'pasar'],
    take: ['tomar', 'coger'],
    drop: ['soltar', 'dejar'],
    open: ['abrir'],
    kill: ['matar', 'asesinar'],
    look: ['observar', 'mirar'],
    see: ['ver', 'leer'],
    break: ['romper', 'forzar', 'destrozar'],
    ask: ['preguntar', 'interrogar'],
    give: ['dar', 'regalar'],
    inventory: ['inventario'],
    weigh: ['pesar'],
    quit: ['abandonar', 'terminar'],
    save: ['salvar', 'guardar'],
    load: ['cargar', 'ejecutar'],
    percent: ['porciento', 'porcentaje'],
    help: ['ayuda'],
    all: ['todo'],
  },

  // Prepositions (filtered during parsing)
  prepositions: {
    with: ['con'],
    to: ['a'],
    saying: ['diciendo', 'respondiendo'],
  },

  // Noise words (removed during parsing)
  noiseWords: ['la', 'el', 'los', 'las', 'por', 'al'],

  // System messages
  messages: {
    welcome: 'Bienvenido a La Fortaleza.',
    whatToDo: '¿Qué desea hacer?',
    ok: 'Ok.',
    dontUnderstand: 'No entiendo lo que usted quiere decir.',
    cantDoThat: 'Usted no puede hacer eso.',
    nothingHappens: 'No ocurre nada.',
    youAreIn: 'Usted se encuentra en ',
    youSee: 'Usted ve:',
    nothingOfInterest: 'No hay nada de interés aquí.',

    // Take/Drop
    taken: 'Ok.',
    dropped: 'Ok.',
    tooHeavy: 'Sería demasiado peso.',
    cantCarry: 'Usted no puede cargar con eso.',
    dontHaveIt: 'Usted no tiene eso.',
    notHere: 'No hay nada con ese nombre aquí.',
    dropAll: 'Usted ha dejado todo en el suelo.',

    // Doors
    doorClosed: 'OUCH! Usted se ha golpeado las narices. Trate de abrir antes.',
    doorAlreadyOpen: 'No es necesario.',
    wrongPassword: 'Esas no son las palabras mágicas.',
    doorOpened: 'Ok.',
    riddleSolved: 'Usted ha descifrado el acertijo correctamente.',
    wrongAnswer: 'Esa no es la respuesta.',
    oneWayWarning: 'Tenga cuidado. Por aquí se puede entrar, pero no se puede salir.',
    needMagicWords: 'Necesita palabras mágicas para abrir esta puerta.',

    // Combat
    guardLaugh: 'Ja ja ja. Todos sus esfuerzos son en vano. No es con eso que me pueden matar.',
    npcDeath: 'AAAAARRRGGGGG!!!',
    cantKill: 'No puede matar eso.',
    killWhat: '¿Matar a quién?',
    killWith: '¿Con qué?',

    // NPCs
    npcSilent: 'No desea hablar con usted.',
    thankYou: 'Muchas gracias. Hace mucho que esperaba por esto.',
    giftRejected: '¡Qué amable! Gracias... pero no es lo que necesito.',
    giveWhat: '¿Dar qué?',
    giveToWhom: '¿A quién?',

    // Hidden objects
    crash: 'CRASSSHHH!!!',
    discovered: '¡Usted ha descubierto algo!',
    cantBreak: 'Usted trata, pero no lo consigue.',
    breakWhat: '¿Romper qué?',
    breakWith: '¿Con qué?',

    // Inventory
    inventoryTitle: 'Inventario:',
    emptyInventory: 'No lleva nada.',
    weightUnit: 'bolsas',
    canCarryMore: 'Usted podría cargar {0} bolsas más.',
    almostFull: 'Usted está a punto de agotar sus capacidades.',
    completelyFull: 'Usted no puede ni con un átomo más.',

    // Weigh
    weighs: '{0} pesa {1} bolsas.',
    needScale: 'Necesita una balanza para pesar objetos.',

    // Progress
    progress: 'Usted ha avanzado un {0}%.',

    // Game state
    youDied: 'Usted ha muerto.',
    funeral: 'Su entierro se efectuará el próximo domingo a las 3:00 am. Está invitado.',
    victory: 'Usted ha vencido a la Bestia.',
    victoryMsg1: 'Parece ser una persona persistente y eso es un mérito muy grande.',
    victoryMsg2: 'La persistencia es indispensable para los que luchan por el bien, sobre todo porque los que luchan por el mal son muy persistentes también.',
    victoryMsg3: 'Veremos si en la próxima versión de La Fortaleza tiene igual suerte.',
    victoryAuthor: '                                             Un servidor:\n                                             M. Cepero',

    // Save/Load
    gameSaved: 'Partida guardada.',
    gameLoaded: 'Partida cargada.',
    noSaveFound: 'No se encontró ninguna partida guardada.',

    // Help
    helpTitle: 'Comandos disponibles:',
    helpCommands: [
      'IR/ATRAVESAR/CRUZAR [puerta] - Ir a través de una puerta',
      'TOMAR/COGER [objeto] - Recoger un objeto',
      'SOLTAR/DEJAR [objeto] - Dejar un objeto (DEJAR TODO para dejar todos)',
      'ABRIR [puerta] CON [clave] - Abrir una puerta con una contraseña',
      'MATAR [enemigo] CON [arma] - Atacar a un enemigo',
      'OBSERVAR/MIRAR - Observar la habitación',
      'VER/LEER [objeto] - Examinar un objeto',
      'ROMPER [objeto] CON [herramienta] - Romper un objeto',
      'PREGUNTAR [personaje] - Hablar con un personaje',
      'DAR [objeto] A [personaje] - Dar un objeto a un personaje',
      'INVENTARIO - Ver lo que lleva',
      'PESAR [objeto] - Pesar un objeto (necesita Balanza)',
      'PORCIENTO - Ver porcentaje de avance',
      'SALVAR - Guardar la partida',
      'CARGAR - Cargar una partida guardada',
    ],

    // Greeting
    goodMorning: 'Buenos días.',
    goodAfternoon: 'Buenas tardes.',
    goodEvening: 'Buenas noches.',

    // Intro
    introTitle: 'LA FORTALEZA',
    introSubtitle: 'En las entrañas de la Bestia',
    introAuthor: 'por Miguel Cepero - Merchise Group',
    introAdaptation: 'Adaptación web por Pedro Calleja con Claude Code AI',
  }
};
