const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const app = express();

const port = process.env.port || 7000;

const bd = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cekankonjou",
});

bd.connect(function (err) {
  if (err) throw err;
  console.log("Connecté à la base de donnée Mysql!");
});

app.use(cors());
// lecture complete json
app.get("/api/games", async (re, res) => {
  const sql =
    "SELECT `id`,`nameJeu`,`NbJoueurs`,`AgeJoueurs`,`TypeJeu`,`TempsJeu`, `LienImage` FROM `games` WHERE `id` like 'R%' OR `id` like 'A%'";
  bd.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Lecture d'un par l'id
app.get("/api/games/:gameId", async (req, res) => {
  const id = req.params.gameId;
  const sql = `SELECT * FROM games where id ='${id}'`;
  bd.query(sql, (err, data) => {
    if (err) {
      console.error("Erreur lors de la requête SQL :", err);
      return res
        .status(500)
        .send("Erreur lors de la récupération des données.");
    }
    if (!data || data.length === 0) {
      return res.status(404).send("Jeux non trouver");
    } else {
      return res.json(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Le serveur est lancé sur le port : ${port}`);
});
