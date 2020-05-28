const { Schema } = require('mongoose');
const db = require('./db');

module.exports = db.model(
  'client',
  new Schema(
    {
      clientId: { type: String, required: true, index: { unique: true } },
      clientSecret: { type: String, required: true },
      name: { type: String },
      avatar: { type: String },
      grants: { type: Array },
      redirectUris: { type: Array },
      scopes: { type: Array },
    },
    {
      strict: false,
      versionKey: false,
    },
  ),
);