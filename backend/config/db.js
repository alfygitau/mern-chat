const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDb connected: ${conn.connection.host}`.blue.bold);
  } catch (error) {
    console.log(error.message.red.bold);
    process.exit();
  }
};

module.exports = connectDb;
