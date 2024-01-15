import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Simulation from "./components/Simulation";
import Home from "./Pages/Home";
import QuiSommeNous from "./Pages/Cekankonjou/QuiSommeNous";
import Itinerance from "./Pages/Cekankonjou/Itinerance";
import Statuts from "./Pages/Cekankonjou/Statuts";
import Cekankonjou from "./Pages/Cekankonjou";
import Bibliographie from "./Pages/Cekankonjou/Bibliographie";
import Game from "./Pages/Game";
import GameList from "./Pages/GameList";
import Demande from "./Pages/Demande";
import Temporaires from "./Pages/Temporaires";
import JeuxPourTous from "./Pages/Animations/JeuxPourTous";
import GrandJeux from "./Pages/Animations/GrandJeux";
import JeuxTheme from "./Pages/Animations/JeuxTheme";
import JeuxCooperatifs from "./Pages/Animations/JeuxCooperatifs";
import Particuliers from "./Pages/PretJeu/Particuliers";
import Structures from "./Pages/PretJeu/Structures";
import GrandJeuxPret from "./Pages/PretJeu/GrandJeuxPret";
import CarteCadeau from "./Pages/PretJeu/CarteCadeau";

function App() {
  const [user, setUser] = useState("");

  return (
    <div>
      <Header user={user} />
      <div className="p-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Simulation setUser={setUser} />} />
          <Route path="/cekankonjou" element={<Cekankonjou />} />
          <Route path="/qui" element={<QuiSommeNous />} />
          <Route path="/itinerance" element={<Itinerance />} />
          <Route path="/statuts" element={<Statuts />} />
          <Route path="/bliographie" element={<Bibliographie />} />
          <Route path="/jeux" element={<GameList />} />
          <Route path="/jeux/:id" element={<Game />} />
          <Route path="/demande" element={<Demande />} />
          <Route path="/temporaires" element={<Temporaires />} />
          <Route path="/JeuxPourTous" element={<JeuxPourTous />} />
          <Route path="/GrandJeux" element={<GrandJeux />} />
          <Route path="/JeuxTheme" element={<JeuxTheme />} />
          <Route path="/JeuxCooperatifs" element={<JeuxCooperatifs />} />
          <Route path="/Particuliers" element={<Particuliers />} />
          <Route path="/Structures" element={<Structures />} />
          <Route path="/GrandJeuxPret" element={<GrandJeuxPret />} />
          <Route path="CarteCadeau" element={<CarteCadeau />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
