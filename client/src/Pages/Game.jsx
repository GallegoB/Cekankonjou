import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameProfile from "../components/GameProfile";

function Game(props) {
  const { id } = useParams();
  const [game, setGame] = useState([]);
  console.log(id);
  useEffect(() => {
    axios.get("/api/games/" + id).then((result) => setGame(result.data));
  }, [id]);
  console.log(game.length);
  return (
    <div className="col-lg-4 col-md-5 col-xs-6 mb-2">
      {game.length ? (
        <GameProfile game={game[0]} complete />
      ) : (
        <div className="d-flex col-3 mb-3-justifity-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loding...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
