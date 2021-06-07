const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  purchasedGames: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "game",
    },
  ],
  clearedGames: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "game",
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "player",
    },
  ],

  points: Number,

  tags: [String],

  joinedDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Player = mongoose.model("player", PlayerSchema);
