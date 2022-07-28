const mongoose = require("mongoose")
require("colors");

const connectDB=async()=>{
try {
    const url = process.env.MONGO_URI
    const conn = await mongoose.connect(url);
    console.log(`MongoDB connected On ${conn.connection.host}`.bgGreen.white);
} catch (error) {
    console.log(`${error}`.bgRed.white);
}
}
module.exports = connectDB;