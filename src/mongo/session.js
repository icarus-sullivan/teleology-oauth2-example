const { Schema } = require('mongoose');
const db = require('./db');

module.exports = db.model(
  'session',
  new Schema(
    {
      accessToken: { type: String, required: true, index: true },
      refreshToken: { type: String, required: true, index: true },
      compoundId: { type: String, required: true, index: { unique: true } },
      createdAt: {
        type: Date,
        expires: parseInt(process.env.SESSION_EXPIRY || '3600', 10),
        default: Date.now,
      },
    },
    {
      strict: false,
      versionKey: false,
    },
  ),
);