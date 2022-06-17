const express = require("express");
const {
  registerSubmit,
  loginSubmit,
  ShowAllPro,
} = require("../controllers/usersRouter");
const router = express.Router();

router.route("/").post(registerSubmit);

//login
router.route("/login").post(loginSubmit);

//ShowAllPro
router.route("/ShowAllPro").get(ShowAllPro);

module.exports = router;
