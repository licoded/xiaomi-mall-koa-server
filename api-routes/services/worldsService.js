let worlds = {
  Earth: {
    name: 'Earth'
  }
};

// just a tool/util function, invoked by `paths/worlds.js`
const worldsService = {
  getWorlds(name) {
    return worlds[name] ? [worlds[name]] : [];
  }
};

module.exports = worldsService;