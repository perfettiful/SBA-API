require('dotenv').config();
const mongoose = require('mongoose');
const dbConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/sba-api_db'

console.log(">>> Connecting to ",dbConnection, " ..." )

mongoose.connect(dbConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
