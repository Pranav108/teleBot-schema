const mongoose = require("mongoose");

const UserMasterSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: [true, "A user must have an userID"],
    unique: true,
  },
  user_name: "string",
  first_name: "string",
  last_name: "string",
  date_of_joining: Date,
  date_of_leave: Date,
});

const UserMaster = mongoose.model("UserMaster", UserMasterSchema);
module.exports = UserMaster;
