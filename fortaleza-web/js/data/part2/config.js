export const config = {
  id: 'part2',
  titleEs: 'La Fortaleza II - La venganza de la Bestia',
  titleEn: 'The Fortress II - The Revenge of the Beast',
  subtitleEs: 'La venganza de la Bestia',
  subtitleEn: 'The Revenge of the Beast',
  totalRooms: 55,
  startRoom: 1,
  maxWeight: 40,
  victoryConditions: [
    // Items must be in specific rooms (At(N) = room N+1)
    { type: 'itemInRoom', roomId: 31, itemName: 'Rosa diamante' },
    { type: 'itemInRoom', roomId: 12, itemName: 'Bote' },
    { type: 'itemInRoom', roomId: 1, itemName: 'Antorcha' },
    { type: 'itemInRoom', roomId: 43, itemName: 'Cinta de Moebius' },
    { type: 'itemInRoom', roomId: 40, itemName: 'Escudo de Aquiles' },
    { type: 'itemInRoom', roomId: 4, itemName: 'Espejo' },
    { type: 'itemInRoom', roomId: 3, itemName: 'P\u00e9ndulo' },
    // NPCs must be gone
    { type: 'gone', roomId: 46, name: 'Hija del Hechicero' },
    { type: 'gone', roomId: 9, name: 'Monstruo' },
  ],
  turnEffects: [
    // If Pa\u00f1uelo is in room 7 (Cocina), player dies
    {
      type: 'itemPresenceKills',
      roomId: 7,
      itemName: 'Pa\u00f1uelo',
      messageEs: 'El olor de la cocina lo ha matado. Deb\u00eda haber dejado el pa\u00f1uelo.',
      messageEn: 'The smell of the kitchen has killed you. You should have left the handkerchief.',
    },
  ],
  storyEs: [
    'Bien, esta es la primera secuela de La Fortaleza. Pudi\u00e9ramos llamarla "El regreso de la Fortaleza" por ser una segunda parte (\u00bfnunca fueron buenas?) y porque su misi\u00f3n no es otra que regresar al mundo exterior.',
    '',
    'Ante todo haremos un peque\u00f1o resumen de la primera parte, para que los que no tuvieron la buena (o mala) fortuna de adentrarse en ella:',
    '',
    'Usted, un pobre terr\u00edcola sumido en el anonimato, fue elegido para eliminar a la Bestia, una de las criaturas m\u00e1s horribles y temidas del universo. La Bestia habitaba la Fortaleza de una forma muy singular. Estaba embotada en la Fortaleza misma, en cada pared, en cada habitaci\u00f3n, en el aire y en la luz. Su misi\u00f3n era eliminar a la Bestia.',
    '',
    'Si bien en la primera parte usted deb\u00eda acabar con una vida, ahora est\u00e1 obligado a salvar otra: la suya.',
    '',
    'La Bestia hab\u00eda planeado una venganza terrible. En el mismo instante en que usted la destruy\u00f3, ella ech\u00f3 a andar su diab\u00f3lico plan. Usted qued\u00f3 profundamente dormido mientras la Fortaleza cambiaba. Cada cosa se descompuso en un caudal \u00fanico y luego, a partir de esa masa gigantesca, reapareci\u00f3 la Fortaleza.',
    '',
    'Usted despierta en un cuarto, habiendo perdido toda noci\u00f3n de tiempo y espacio, y debe tratar de salir. La Bestia ha dejado una persona (si se le puede llamar as\u00ed) encargada de que usted perezca irremediablemente.',
    '',
    'Mantenga la mente abierta.',
  ],
  storyEn: [
    'Well, this is the first sequel to The Fortress. We could call it "The Return of the Fortress" since it is a second part (were they ever good?) and because your mission is none other than to return to the outside world.',
    '',
    'First, a brief summary of the first part, for those who did not have the good (or bad) fortune of venturing into it:',
    '',
    'You, a poor earthling lost in anonymity, were chosen to eliminate the Beast, one of the most horrible and feared creatures in the universe. The Beast inhabited the Fortress in a very singular way. It was embedded in the Fortress itself, in every wall, in every room, in the air and in the light. Your mission was to eliminate the Beast.',
    '',
    'While in the first part you had to end a life, now you are obligated to save another: your own.',
    '',
    'The Beast had planned a terrible revenge. At the very moment you destroyed it, it set its diabolical plan in motion. You fell deeply asleep while the Fortress changed. Everything decomposed into a single torrent and then, from that gigantic mass, the Fortress reappeared.',
    '',
    'You wake up in a room, having lost all sense of time and space, and must try to find your way out. The Beast has left a person (if you can call it that) in charge of ensuring your irremediable demise.',
    '',
    'Keep an open mind.',
  ],
  mapConfig: {
    // Circular layout - rooms evenly spaced on an ellipse with some interior rooms
    outerFace: [1, 2, 8, 21, 34, 37, 38, 53, 54],
    outerPositions: (function() {
      var ids = [1, 2, 8, 21, 34, 37, 38, 53, 54];
      var cx = 700, cy = 500, rx = 600, ry = 450;
      var p = {};
      for (var i = 0; i < ids.length; i++) {
        var angle = -Math.PI/2 + (2*Math.PI*i/ids.length);
        p[ids[i]] = {x: Math.round(cx + rx*Math.cos(angle)), y: Math.round(cy + ry*Math.sin(angle))};
      }
      return p;
    })(),
    interiorRooms: [3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 36, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 55],
    zones: {
      1:'start', 2:'start', 3:'start', 4:'start', 5:'start',
      6:'start', 7:'start', 8:'riverside', 9:'start', 10:'start',
      11:'riverside', 12:'riverside', 13:'gardens', 14:'start',
      15:'start', 16:'gardens', 17:'start', 18:'start', 19:'start',
      20:'start', 21:'ruins', 22:'ruins', 23:'start', 24:'start',
      25:'start', 26:'ruins', 27:'ruins', 28:'ruins',
      29:'waterfall', 30:'waterfall', 31:'lake', 32:'lake', 33:'lake',
      34:'desert', 35:'cathedral', 36:'desert', 37:'valley',
      38:'mountain', 39:'mountain', 40:'city', 41:'city', 42:'city',
      43:'tower', 44:'tower', 45:'tower', 46:'tower', 47:'dungeon',
      48:'dungeon', 49:'trial', 50:'trial', 51:'trial', 52:'trial',
      53:'fortress', 54:'pyramid', 55:'pyramid'
    },
  },
};
