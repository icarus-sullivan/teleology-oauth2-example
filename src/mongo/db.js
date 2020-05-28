const mongoose = require('mongoose');

module.exports = mongoose.createConnection(process.MONGO_CONNECTION_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
