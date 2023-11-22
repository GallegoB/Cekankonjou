import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Simulation from "./components/Simulation";
import Home from "./Pages/Home";
import QuiSommeNous from "./Pages/QuiSommeNous";
import Itinerance from "./Pages/Itinerance";
import Statuts from "./Pages/Statuts";
import Cekankonjou from "./Pages/Cekankonjou";
import Bibliographie from "./Pages/Bibliographie";
import Game from "./Pages/Game";
import GameList from "./Pages/GameList";
import Demande from "./Pages/Demande";

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
