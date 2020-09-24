const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const bookRoute = require("./routes/RoutesBook");
dotenv.config({ path: "./convig.env" });

// midlewar
app.use(express.json());
app.use("/api/v2/book", bookRoute);
// akhir midlewar
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("succes");
  });
app.listen(process.env.PORT, (err) => {
  console.log(`connected ${process.env.port}`);
});
