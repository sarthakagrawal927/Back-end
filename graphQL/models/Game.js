const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  prequels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "game",
    },
  ],
  sequels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "game",
    },
  ],

  tier: String,

  maxPoints: Number,

  tags: [String],
});

module.exports = Game = mongoose.model("game", GameSchema);
