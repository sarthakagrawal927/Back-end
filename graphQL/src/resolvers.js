const Game = require("../models/Game");
const Player = require("../models/Player");
let idCount = 0;
module.exports = {
  Query: {
    //get requests
    players: () => Player.find(),
    games: () => Game.find(),
    player: () => Player.findOne({ id: "id here" }),
    game: () => Game.findOne({ id: "id here" }),
  },
  Mutation: {
    //put or post requests
    addPlayer: async (parent, args) => {
      const newPlayer = new Player({
        id: "id_is_" + toString(idCount++),
        name: args.name,
        emailId: args.emailId,
        tags: args.tags,
        points: args.points,
      });
      newPlayer.save();
      return newPlayer;
    },

    addGame: (parent, args) => {
      const newGame = new Game({
        id: "id_is_" + toString(idCount++),
        name: args.name,
        tags: args.tags,
        maxPoints: args.maxPoints,
      });
      newGame.save();
      return newGame;
    },
  },
};
