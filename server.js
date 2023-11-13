const express = require("express");
require("dotenv").config();

const app = express();

const games = require("./bd.json");

const port = process.env.port || 7000;

app.use(express.json());
// lecture complete json
app.get("/api/games", async (req, res) => {
  res.json(games);
});
// Lecture d'un par l'id
app.get("/api/games/:gameId", async (req, res) => {
  const id = req.params.gameId;
  const game = games.find((game) => game.id === id);

  if (!game) {
    return res.status(404).send("Jeux non trover");
  }
  res.json(game);
});

app.listen(port, () => {
  console.log(`Le serveur est lancé sur le port : ${port}`);
});
