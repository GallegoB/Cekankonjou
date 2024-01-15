import React from "react";

function Demande(props) {
  return (
    <form>
      <h1>Demande d'animation</h1>
      <div className="mb-3">
        <label for="" className="form-label">
          Nom de la structure
        </label>
        <input type="text" className="form-control" />
        <div className="col-md-6">
          <label for="inputTel" className="form-label">
            Téléphone
          </label>
          <input type="text" className="form-control" id="inputTel" />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            Personne responsable
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Adresse
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Rue ..."
          />
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            Adresse 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Appartement, studio ou étage"
          />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            Ville
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">
            Code Postal
          </label>
          <input type="text" className="form-control" id="CodePostal" />
        </div>

        <label for="exampleFormControlInput1" className="form-label">
          Adresse email
        </label>
        <input
          name="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
        />
        <label className="form-check-label" for="inlineCheckbox1">
          Jeux à thème
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
        />
        <label className="form-check-label" for="inlineCheckbox2">
          Jeux géants
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox3"
          value="option3"
        />
        <label className="form-check-label" for="inlineCheckbox3">
          Jeux pour tous
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox4"
          value="option4"
        />
        <label className="form-check-label" for="inlineCheckbox4">
          Jeux coopératifs
        </label>
      </div>

      <div className="container">
        Date
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="form-group">
              <div className="datepicker date input-group">
                <input
                  type="text"
                  placeholder="Choisir une date"
                  className="form-control"
                  id="reservationDate"
                />
                <div className="input-group-append">
                  <span className="input-group-text px-4">
                    <i className="bi-calendar"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <label for="inputLieu" className="form-label">
          Lieu de l'animation
        </label>
        <input type="text" className="form-control" id="inputLieu" />
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-xs-6 mb-1">
          <label for="inputCity" className="form-label">
            Heure de debut de l'animation
          </label>

          <input type="text" className="form-control" id="inputCity" />
        </div>

        <div className="col-lg-3 col-md-4 col-xs-6 mb-1">
          <label for="inputCity" className="form-label">
            Heure de fin
          </label>

          <input type="text" className="form-control" id="inputCity" />
        </div>
      </div>

      <div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="Interieur"
          />
          <label className="form-check-label" for="inlineCheckbox1">
            Interieur
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="Extérieur"
          />
          <label className="form-check-label" for="inlineCheckbox2">
            Extérieur
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="Tonnelle"
          />
          <label className="form-check-label" for="inlineCheckbox2">
            Tonnelle
          </label>
        </div>
      </div>
      <div> Publique</div>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-xs-6 mb-1">
          <label for="inputAge" className="form-label">
            Tranche d'âge
          </label>

          <input type="text" className="form-control" id="inputAge" />
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 mb-1">
          <label for="inputNombre" className="form-label">
            Nombre de visiteur
          </label>

          <input type="text" className="form-control" id="inputNombre" />
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 mb-1">
          <label for="inputSpc" className="form-label">
            Spècificité
          </label>

          <input type="text" className="form-control" id="inputSpc" />
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Note
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="button" class="btn btn-primary">
        Envoyer
      </button>
    </form>
  );
}

export default Demande;
