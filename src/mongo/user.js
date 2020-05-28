const { Schema } = require('mongoose');
const db = require('./db');

module.exports = db.model(
  'user',
  new Schema(
    {
      userId: { type: String, index: true },
      username: { type: String, required: true, index: { unique: true } },
      password: { type: String, required: true },
      profile: new Schema({
        avatar: { type: String },
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String },
      }),
    },
    {
      strict: false,
      versionKey: false,
    },
  ),
);