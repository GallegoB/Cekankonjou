import React, { useCallback, useEffect, useState } from "react";
import GameProfile from "../components/GameProfile";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GameList(props) {
  const [games, setGames] = useState([]);
  console.log(games);
  useEffect(() => {
    // version Fecth
    //fetch("/api/games")
    //  .then((res) => res.json())
    //  .then((res) => setGames(res.data));

    // version Axios
    axios.get("/api/games").then((result) => setGames(result.data));
  }, []);

  const [searchCriteria, setCriteria] = useState("");
  const [ageCriteria, setAgeCriteria] = useState("");
  const [nbPlayerCriteria, setNbPlayerCriteria] = useState("");
  const [filteredGames, setFilteredGame] = useState([]);
  //Recherche titre
  const handleSearch = useCallback((event) => {
    setCriteria(event.target.value);
  }, []);
  // recherche Age
  const handleAge = useCallback((event) => {
    setAgeCriteria(event.target.value);
  }, []);
  // recherche Nombre de joueur
  const handleNbPlayer = useCallback((event) => {
    setNbPlayerCriteria(event.target.value);
  }, []);

  useEffect(() => {
    setFilteredGame(
      games.filter((game) =>
        game.nameJeu.toLowerCase().includes(searchCriteria.toLowerCase())
      )
    );
  }, [searchCriteria, games]);
  // recherche Nombre de joueur
  useEffect(() => {
    setFilteredGame(
      games.filter(
        (game) =>
          game.NbJoueurs.charAt(0) <= nbPlayerCriteria.toLowerCase() &&
          game.NbJoueurs.charAt(4) >= nbPlayerCriteria.toLowerCase()
      )
    );
  }, [nbPlayerCriteria, games]);
  // filtre age des joueurs
  useEffect(() => {
    setFilteredGame(
      games.filter((game) =>
        game.AgeJoueurs.toLowerCase().includes(ageCriteria.toLowerCase())
      )
    );
  }, [ageCriteria, games]);

  const deleteGame = useCallback(
    (gameId) => {
      setGames(games.filter((game) => game.id !== gameId));
    },
    [games]
  );

  const navigate = useNavigate();
  return (
    <div>
      <h1>Liste des Jeux</h1>
      <div className="mb-1">
        <input
          type="text"
          className="form-control"
          placeholder="Recherche titre jeu"
          onChange={handleSearch}
        />
      </div>

      <div className="row">
        <div className="col-2">
          <div className="align-items-center">
            <h4>Ages</h4>
            <select
              class="btn btn-primary dropdown-toggle"
              type="button"
              value={ageCriteria}
              onChange={handleAge}
            >
              <option value="+">Tous les ages</option>
              <option value="3 +">3 +</option>
              <option value="4 +">4 +</option>
              <option value="5 +">5 +</option>
              <option value="6 +">6 +</option>
              <option value="7 +">7 +</option>
              <option value="8 +">8 +</option>
              <option value="9 +">9 +</option>
              <option value="10 +">10 +</option>
            </select>
          </div>
        </div>
        <div className="col-2 align-items-center">
          <div className="align-items-center">
            <h5>Nombre de Joueur</h5>
            <select
              class="btn btn-primary dropdown-toggle"
              type="button"
              value={nbPlayerCriteria}
              onChange={handleNbPlayer}
            >
              <option value="">Tous</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {games.length ? (
            filteredGames.map((game, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-xs-6 mb-1"
                onClick={() => navigate("/Jeux/" + game.id)}
                style={{ cursor: "pointer" }}
              >
                <GameProfile
                  game={game}
                  deleteGame={deleteGame}
                  className="col-3"
                />{" "}
              </div>
            ))
          ) : (
            <div className="d-flex col-3 mb-3-justifity-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loding...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameList;
