import React, { useCallback } from "react";

function GameProfile(props) {
  const handleDelete = useCallback(
    (event) => {
      event.stopPropagation();
      props.deleteGame(props.game.id);
    },
    [props]
  );
  let image;
  try {
    image = require(`../images/jeux/${props.game.LienImage}`);
  } catch (err) {
    image = require("../images/cropped-logoooo-4.jpg");
  }
  console.log(`../images/jeux/${props.game.LienImage}`);
  return (
    <div className="card">
      <img
        id="image-originale"
        src={image}
        className="card-img-top"
        alt="..."
        onError={(event) => {
          event.target.src = "../images/cropped-logoooo-4.jpg";
        }}
      />

      <div className="card-body">
        <h5 className="card-title">{props.game.nameJeu}</h5>
        <div className="card-text">
          <strong>Nombre de joueur: </strong> {props.game.NbJoueurs}
        </div>
        <div>
          <strong> Age préconisé: </strong>
          {props.game.AgeJoueurs}
        </div>
        <div>
          <strong>Type de jeu:</strong>
          {props.game.TypeJeu}
        </div>
        <div>
          <strong>Durée de jeu prévue: </strong>
          {props.game.TempsJeu}
        </div>
        {props.complete && (
          <p className="card-text">
            <div>
              {" "}
              <strong>Marque:</strong> {props.game.Marque}
            </div>
            <div className="fw-bold">Déscriptif:</div>
            <div>{props.game.Descriptif}</div>
          </p>
        )}
        {props.deletegame ? (
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary" onClick={handleDelete}>
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default GameProfile;
