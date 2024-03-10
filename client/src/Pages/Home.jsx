import React from "react";
//import Image3 from "../images/bannière-1.png";
import Image2 from "../images/image1.png";
import Image1 from "../images/bannière-1.png";

function Home(props) {
  return (
    <div>
      <h1>Accueil</h1>

      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={Image1}
              class="d-block w-100"
              alt="..."
              width="253"
              height="600"
            />
          </div>
          <div class="carousel-item">
            <img
              src={Image2}
              class="d-block w-100"
              alt="..."
              width="253"
              height="600"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1585504198199-20277593b94f?q=80&w=1317&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="d-block w-100"
              alt="..."
              width="253"
              height="600"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <p></p>
      <p class="text-center">Suivez nous sur Facebook !!! </p>

      <div class="text-center">
        <a
          href="https://www.facebook.com/ludotheque.cekankonjou"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            decoding="async"
            src="https://www.Cekankonjou.fr/wp-content/uploads/2022/06/facebook-2.png"
            alt=""
            class=""
            width="149"
            height="35"
            srcset="https://www.Cekankonjou.fr/wp-content/uploads/2022/06/facebook-2.png 612w, https://www.Cekankonjou.fr/wp-content/uploads/2022/06/facebook-2-300x71.png 300w"
            sizes="(max-width: 149px) 100vw, 149px"
          />
        </a>
      </div>
      <p></p>
      <div class="text-center">
        <form
          id="sib-form"
          method="POST"
          action="https://b2a056a9.sibforms.com/serve/MUIEAGI6X8yS36oaRWpLiBjvpUAkqS2ZRJg-fi6Dnes4Zf3WFz44-nTzOqphlP3THWgUflbx59Jd9bxbGAqK385Na8wZ8qnQK3JTGklJTrXYATZf4xqWQtAasODrZLX-chfHp5azUNwyJy_lGKElriW1ud7KzBYD3MVPYS4Ib-sprxngj6Lc2X6o_04c_024okqCXGmzWnFLJ7k4"
          data-type="subscription"
          novalidate="true"
        >
          <div>
            <div class="sib-form-block">
              <p>CekankonNEWS !</p>
            </div>
          </div>
          <div>
            <div class="sib-form-block">
              <div class="sib-text-form-block">
                <p>
                  Inscrivez-vous à notre newsletter pour suivre nos actualités.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="sib-input sib-form-block">
              <div class="form__entry entry_block">
                <div class="form__label-row ">
                  <label class="entry__label" for="EMAIL" data-required="*">
                    Veuillez renseigner votre adresse email pour vous inscrire
                  </label>

                  <div>
                    <input
                      class="input"
                      type="text"
                      id="EMAIL"
                      name="EMAIL"
                      autocomplete="off"
                      placeholder="EMAIL"
                      data-required="true"
                      required=""
                    />
                  </div>
                </div>

                <label class="entry__error entry__error--primary"></label>
                <label class="entry__specification">
                  Veuillez renseigner votre adresse email pour vous inscrire.
                  Ex. : abc@xyz.com
                </label>
              </div>
            </div>
          </div>
          <div>
            <div class="sib-form-block">
              <button class="btn btn-primary" form="sib-form" type="submit">
                S’INSCRIRE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
