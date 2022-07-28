const express = require('express');
const morgan = require('morgan');
require("colors");
const path = require("path");
const dotenv = require('dotenv');
const connectDB = require("./config/config")
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;
connectDB();
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/pizzas", require("./router/pizzaRoute"))
app.use("/api/user", require("./router/userRoute"))
app.use("/api/orders", require("./router/orderRoute"))


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client-site/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client-site", "build", "index.html"));
    });
  } else {
    app.get("/", (req, res) => {
      res.send("<h1>Hello From Node Server vai nodemon</h1>");
    });
  }

app.listen(PORT, () => {
    console.log(`${process.env.NODE_ENV} Mode Server Running on http://localhost:${PORT}`.bgGreen.white);
})