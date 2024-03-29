"use strict";
const {
  db: { host, name, port },
} = require("../configs/config.mongodb");

const mongoose = require("mongoose");

const connectString = `mongodb:/${host}:${port}/${name}`;
const { countConnect } = require("../helpers/check.connect");
class Database {
  constructor() {
    this.connect();
  }

  // connect
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString)
      .then((_) => console.log(`Connected Mongodb Success Pro`, countConnect()))
      .catch((err) => console.log(`Error connect!!!`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
