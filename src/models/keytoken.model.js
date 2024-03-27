// luu lai ID_user, publicKey_user, refresh_token user ma nguoi ta da su dung
"use strict";

const { Schema, model } = require("mongoose");

// declare the schema of the Mongo model
var keyTokenSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Shop",
    },
    publicKey: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: Array,
      default: [],
    },
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  }
);

//module exports
module.exports = model(DOCUMENT_NAME, keyTokenSchema);
