import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  ownerName: {
    type: String,
    required: true,
  },
  documentName: {},
});
