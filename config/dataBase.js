const mongoose = require("mongoose");
const colors = require('colors')

const connectDB = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`connected to mongoDB database ${mongoose.connection.host}`.green);
  } catch (error) {
    console.log(`mongoDB Error ${error}`);
  }
};

module.exports = connectDB;