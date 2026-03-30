# La Fortaleza - Web Version

A modern web browser rebuild of the classic Cuban text adventure games
"La Fortaleza" by Miguel Cepero (Merchise Group).

- **Part I: En las entranas de la Bestia** (In the Bowels of the Beast) - 50 rooms
- **Part II: La venganza de la Bestia** (The Revenge of the Beast) - 55 rooms

## How to Run

The game uses ES modules, so it must be served via HTTP (not opened as a local file).

### Option 1: Python (built-in on macOS)

```bash
cd fortaleza-web
python3 -m http.server 8080
```

Then open: http://localhost:8080

### Option 2: Node.js (npx)

```bash
cd fortaleza-web
npx serve .
```

Then open the URL shown in the terminal (usually http://localhost:3000).

### Option 3: VS Code Live Server

If you have the "Live Server" extension in VS Code, right-click `index.html` and select "Open with Live Server".

## How to Play

- Select Part I or Part II from the intro screen
- Type commands in the input field at the bottom and press Enter
- Or click the quick-action buttons (colored buttons above the input)
- Toggle language between Spanish (ES) and English (EN) using the buttons in the header

### Commands (Spanish / English)

| Action | Spanish | English |
|--------|---------|---------|
| Go through a door | `ir [puerta]` | `go [door]` |
| Pick up an item | `tomar [objeto]` | `take [object]` |
| Drop an item | `dejar [objeto]` | `drop [object]` |
| Open a door | `abrir [puerta] con [clave]` | `open [door] with [key]` |
| Kill an enemy | `matar [enemigo] con [arma]` | `kill [enemy] with [weapon]` |
| Look around | `mirar` | `look` |
| Examine something | `ver [objeto]` | `see [object]` |
| Break something | `romper [objeto] con [herramienta]` | `break [object] with [tool]` |
| Talk to someone | `preguntar [personaje]` | `ask [character]` |
| Give an item | `dar [objeto] a [personaje]` | `give [object] to [character]` |
| Check inventory | `inventario` | `inventory` |
| Weigh an item | `pesar [objeto]` | `weigh [object]` |
| Check progress | `porciento` | `percent` |
| Save game | `salvar` | `save` |
| Load game | `cargar` | `load` |
| Help | `ayuda` | `help` |

## Architecture

The game engine is data-driven — both parts share the same engine code, with game data loaded dynamically:

```
js/
  data/
    loader.js          # Dynamic part loader
    part1/             # Part I game data
      config.js        # Title, victory conditions, map layout
      rooms.js         # 50 rooms
      items.js         # Items and their placements
      npcs.js          # NPCs (trolls, guards)
      links.js         # Room connections and hidden objects
    part2/             # Part II game data (same structure, 55 rooms)
  engine/
    GameEngine.js      # Core game logic
    CommandParser.js   # Bilingual command parsing
    Player.js          # Player state and inventory
    Room.js            # Room container
    GameObject.js      # Base game object
    Linking.js         # Door/passage types
    NPC.js             # NPC types (Troll, Guard, Daughter, Hidden)
  i18n/
    i18n.js            # Internationalization
```

## Running Tests

```bash
npm test          # Watch mode
npm run test:ci   # Single run (used in CI)
```
