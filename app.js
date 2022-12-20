const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const userMasterModel = require("./models/userMasterModel");
const telegramMasterModel = require("./models/telegramMasterModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful"));

//READ JSON FILE
const userMaster = JSON.parse(fs.readFileSync(`userMaster.json`, "utf-8"));
const telegramMaster = JSON.parse(
  fs.readFileSync(`telegramMaster.json`, "utf-8")
);

//WRITE DATA
const addData = async () => {
  try {
    await userMasterModel.create(userMaster);
    console.log("User Data successfully loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//DELETE DATA
const deleteData = async () => {
  try {
    await userMasterModel.deleteMany();
    console.log("Data successfully deleted");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") addData();
else if (process.argv[2] === "--delete") deleteData();
else console.log(`Can't find what are you looking for`);
