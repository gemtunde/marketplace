const express = require("express");
const app = express();

//middleware
app.use(express.json());

const port = process.env.PORT || 5000;
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

//routes
const userRoute = require("./routes/usersRoute");
const productsRoute = require("./routes/productsRoute");

app.use("/api/users", userRoute);
app.use("/api/products", productsRoute);

app.listen(port, () => {
  console.log(`Nodejs server listening on port ${port}`);
});
