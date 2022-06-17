const colors = require("colors");
let dotenv = require("dotenv");

const connectDb = require("./config/connect");
dotenv.config();

const app = require("./app.js");

//color enable
colors.enable();

//mongo connection
connectDb();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`===========================================`.red);
  console.log(` ======= ENV: ${process.env.NODE_ENV} ======`.red);
  console.log(` App listening on the port ${PORT}`.red);
  console.log(`============================================`.red);
});
