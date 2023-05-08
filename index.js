const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const authRoutes = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {

// });

app.use("/admin", authRoutes);
app.use(shopRoutes);

// mongoose
//   .connect(
//     "mongodb+srv://maximilian:9u4biljMQc4jjqbe@cluster0-ntrwp.mongodb.net/shop?retryWrites=true"
//   )
//   .then((result) => {
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.listen(3000);
