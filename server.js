const express = require("express");
require("dovenv").config();

const app = express();

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Le serveur est lancé sur le port : ${port}`);
});
