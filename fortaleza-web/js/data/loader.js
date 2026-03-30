export async function loadPartData(partId) {
  const [roomsMod, itemsMod, npcsMod, linksMod, configMod] = await Promise.all([
    import(`./${partId}/rooms.js`),
    import(`./${partId}/items.js`),
    import(`./${partId}/npcs.js`),
    import(`./${partId}/links.js`),
    import(`./${partId}/config.js`),
  ]);
  return {
    rooms: roomsMod.rooms,
    items: itemsMod.items,
    npcs: npcsMod.npcs,
    links: linksMod.links,
    hiddenObjects: linksMod.hiddenObjects,
    config: configMod.config,
  };
}
