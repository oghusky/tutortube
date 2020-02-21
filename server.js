const express = require("express"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  path = require("path"),
  app = express(),
  PORT = 5000 || process.env.PORT;

require("dotenv").config();

const indexRoutes = require("./routes/indexRoutes");

app.use("/", indexRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});