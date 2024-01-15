import React from "react";

function Bibliographie(props) {
  return (
    <div>
      <h1>Bibliographie</h1>

      <p>
        <strong>
          <span>Le système ESAR :</span>
        </strong>
      </p>
      <div className="row">
        <div className="col-8">
          {" "}
          Il se présente comme une structure classificatoire organisée en
          facettes et composée de descripteurs psychopédagogiques permettant
          l’indexation, la classification et le classement d’objets ludiques.
          Cet outil de travail s’adresse principalement aux ludothécaires et aux
          éducateurs préoccupés par la qualité éducative du matériel ludique.
          Différent des manuels de psychologie, plus élaboré qu’un ouvrage
          technique, ce livre veut avant tout accompagner la réflexion des
          professionnels du jeu et les réunir autour d’un langage commun.
        </div>

        <div className="col-2">
          {" "}
          <a href="https://www.Cekankonjou.fr/wp-content/uploads/2014/07/le-systeme-esar.jpg">
            <img
              decoding="async"
              class="wp-image-369 alignright"
              src="https://www.Cekankonjou.fr/wp-content/uploads/2014/07/le-systeme-esar-300x300.jpg"
              alt="le-systeme-esar"
              width="138"
              height="138"
              srcset="https://www.Cekankonjou.fr/wp-content/uploads/2014/07/le-systeme-esar-300x300.jpg 300w, https://www.Cekankonjou.fr/wp-content/uploads/2014/07/le-systeme-esar-150x150.jpg 150w, https://www.Cekankonjou.fr/wp-content/uploads/2014/07/le-systeme-esar.jpg 475w"
              sizes="(max-width: 138px) 100vw, 138px"
            />
          </a>
        </div>
        <div className="col-2">
          Denise Garon
          <br />
          Avec la collaboration de
          <br />
          Rolande Filion
          <br />
          et Robert Chiasson
        </div>
      </div>

      <p>
        <strong>
          <span>Musique à construire :</span>
        </strong>
      </p>
      <p>
        Parents, éducateurs, musiciens, ce livre s’adresse à vous.
        <br />
        Voici 80 instruments de musique et objets sonores à fabriquer pour les
        très jeunes enfants, dès leur premier âge. Grâce à ce livre, vous saurez
        comment transformer un anneau de rideau, un capuchon de biberon et
        toutes sortes d’objets quotidiens en instruments de musique aux sons
        étonnants. Simples dans leur fabrication, ils sont particulièrement bien
        adaptés pour les tout-petits. Construire soi-même un instrument de
        musique pour son enfant, voilà sans doute une agréable manière de
        partager ses premiers pas dans la musique. Ces objets ont été imaginés
        et sont utilisés par les musiciens de l’association Enfance et Musique,
        spécialisés dans l’éveil musical et la formation des professionnels de
        la petite enfance.
      </p>
      <p>Agnès Chaumié</p>
      <p>
        <strong>
          <span>L&#8217;explorateur nu :</span>
        </strong>
      </p>
      <div className="row">
        <div className="col-7">
          Ce livre s’adresse à toutes les personnes concernées de près ou de
          loin par la petite enfance : parents, professionnels et autres…
          <br />
          A partir d’un rappel clair des points importants du développement de
          l’enfant au cours des 3 premières années de sa vie, « L’explorateur nu
          » propose de nombreuses activités de jeu, susceptibles de
          l’accompagner à tout moment dans ses multiples explorations motrices,
          sensorielles, sociales, qu’il soit à la maison ou dans toute structure
          d’accueil.
          <br />« L’explorateur nu » n’a pas pour objectif d’être un catalogue
          de jeux ou de donner des modèles. Il espère simplement attirer
          l’attention sur l’harmonie du développement propre à chaque enfant,
          sur le rôle de tout ce qui l’entoure (personnes, objets, espaces…)
          pour le maintien de cette harmonie, et constituer un « outil »
          permettant l’improvisation de nouveaux jeux.« L’explorateur nu », un
          livre qui souhaite accompagner adultes et enfants dans un monde à
          découvrir ensemble.
        </div>
        <div className="col-3">
          <img
            fetchpriority="high"
            decoding="async"
            class="size-medium wp-image-370 alignright"
            src="https://www.Cekankonjou.fr/wp-content/uploads/2014/07/explorateur-nu-222x300.jpg"
            alt="explorateur-nu"
            width="222"
            height="300"
            srcset="https://www.Cekankonjou.fr/wp-content/uploads/2014/07/explorateur-nu-222x300.jpg 222w, https://www.Cekankonjou.fr/wp-content/uploads/2014/07/explorateur-nu.jpg 334w"
            sizes="(max-width: 222px) 100vw, 222px"
          />
        </div>

        <div className="col-2">
          <p>
            Jean Epstein
            <br />
            Chloé Radiguet
          </p>
        </div>
      </div>
      <p>
        <strong>
          <span>Le bébé et le jeu :</span>
        </strong>
      </p>
      <div className="row">
        <div className="col-10">
          Le bébé et le jeu sous la direction de Patrick B en Soussan, le
          dossier de Spirale, aux éditions érès.
        </div>
        <div className="col-2">
          <a href="https://www.Cekankonjou.fr/wp-content/uploads/2014/07/téléchargement.png">
            <img
              decoding="async"
              class="wp-image-1339 alignright"
              src="https://www.Cekankonjou.fr/wp-content/uploads/2014/07/téléchargement.png"
              alt=""
              width="99"
              height="154"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Bibliographie;
