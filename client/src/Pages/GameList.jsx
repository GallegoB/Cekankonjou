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
  const [filteredGames, setFilteredGame] = useState([]);
  const handleSearch = useCallback((event) => {
    setCriteria(event.target.value);
  }, []);

  useEffect(() => {
    setFilteredGame(
      games.filter((game) =>
        game.nameJeu.toLowerCase().includes(searchCriteria.toLowerCase())
      )
    );
  }, [searchCriteria, games]);

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
      <input
        type="text"
        className="form-control"
        placeholder="Recherche"
        onChange={handleSearch}
      />
      <div className="mb-1"></div>
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
