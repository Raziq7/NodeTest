let path = require("path");

// var fileupload = require("express-fileupload");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const multer = require("multer");

//multer
const upload = multer();
//fileUpload
app.use(fileUpload());

//static folder path
app.use(express.static(path.resolve(__dirname, "public")));

const user = require("./router/user");
const admin = require("./router/admin");

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(upload.array("images", 5));
app.use("/api/user", user);
app.use("/api/admin", admin);

module.exports = app;
