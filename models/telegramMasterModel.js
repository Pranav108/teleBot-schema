const mongoose = require("mongoose");

const telegramMasterSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    unique: true,
  },
  activeUser: Number,
  newUser: Number,
  messageCount: Number,
  quizParticipationCount: Number,
  wordOfTheDayParticipationCount: Number,
  jumbledWordTimesInitiated: Number,
  peopleOnVoiceChannel: Number,
});

const telegramMaster = mongoose.model("TelegramMaster", telegramMasterSchema);
module.exports = telegramMaster;
