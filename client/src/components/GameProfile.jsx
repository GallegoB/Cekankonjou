// import axios from "axios";
import React, { useCallback } from "react";
//import img1 from "../images/jeux/43.png";

function GameProfile(props) {
  // const handleClick =  useCallback(() => {
  //     axios.delete('https://jsonplaceholder.typicode.com/games' + props.game.id)
  //     props.deletegame(props.game.id)
  // }, [props])
  //https://images.unsplash.com/photo-1606167668584-78701c57f13d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80
  const handleDelete = useCallback(
    (event) => {
      event.stopPropagation();
      props.deleteGame(props.game.id);
    },
    [props]
  );

  return (
    <div className="card">
      <img
        src={require(`../images/jeux/${props.game.LienImage}`)}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.game.nameJeu}</h5>
        <div>Nombre de joueur: {props.game.NbJoueurs} </div>
        <div>Age préconisé: {props.game.AgeJoueurs}</div>
        <div>Type de jeu: {props.game.TypeJeu}</div>
        <div>Durée de jeu prévue: {props.game.TempsJeu}</div>
        {props.complete && (
          <p className="card-text">
            <div>Marque: {props.game.Marque}</div>
            <div>Nombre de joueur: {props.game.NbJoueurs} </div>
            <div>Déscriptif:</div>
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
