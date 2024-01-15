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

      <p class="has-text-align-center">Suivez nous sur Facebook !!! </p>

      <div class="">
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
    </div>
  );
}

export default Home;
