import React from "react";
import logo from "../images/cropped-logoooo-4.jpg";
import { Link } from "react-router-dom";

function Header(props) {
  const login = props.user ? (
    <span>Bienvenue {props.user} !</span>
  ) : (
    <span> Connectez-vous !</span>
  );

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img
          src={logo}
          alt="Logo"
          width="10%"
          height="10%"
          className="d-inline-block align-text-top mt-1"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/cekankonjou"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cékankonjou?
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/qui" className="dropdown-item">
                    Qui sommes-nous ?
                  </Link>
                </li>
                <li>
                  <Link to="/itinerance" className="dropdown-item">
                    L’itinérance
                  </Link>
                </li>
                <li>
                  <Link to="/statuts" className="dropdown-item">
                    Statuts
                  </Link>
                </li>
                <li>
                  <Link to="/bliographie" className="dropdown-item">
                    Bibliographie
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                to=""
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Les animations
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/JeuxPourTous" className="dropdown-item">
                    Temps de jeux pour tous
                  </Link>
                </li>
                <li>
                  <Link to="/GrandJeux" className="dropdown-item">
                    Temps de grands jeux en bois
                  </Link>
                </li>
                <li>
                  <Link to="/JeuxTheme" className="dropdown-item">
                    Temps de jeux à thème
                  </Link>
                </li>
                <li>
                  <Link to="/JeuxCooperatifs" className="dropdown-item">
                    Temps de jeux coopératifs
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Le prêt de jeu
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/Particuliers" className="dropdown-item">
                    Prêts aux particuliers
                  </Link>
                </li>
                <li>
                  <Link to="/Structures" className="dropdown-item">
                    Prêts aux structures
                  </Link>
                </li>
                <li>
                  <Link to="/GrandJeuxPret" className="dropdown-item">
                    Prêts grands jeux
                  </Link>
                </li>
                <li>
                  <Link to="/CarteCadeau" className="dropdown-item">
                    La carte cadeau Cékankonjou
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                to="/temporaires"
                className="nav-link active"
                aria-current="page"
              >
                Les Ludothèques temporaires
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/jeux" className="nav-link active" aria-current="page">
                Les jeux de règles
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/demande"
                className="nav-link active"
                aria-current="page"
              >
                Demande d'animation
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link
                to={"/login"}
                className="nav-link active"
                aria-current="page"
              >
                Utilisateur
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="navbar-text">{login}</div>
      </div>
    </nav>
  );
}

export default Header;
