import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Rophim from "./Rophim.jsx";
import App from "./App.jsx";
import Pokedex from "./Pokedex.jsx";
import { Route, Routes, BrowserRouter, HashRouter } from "react-router";
import PokemonDetail from "./PokemonDetail.jsx";
import Navbar from "./NavBar.jsx";
import { ContextProvider } from "./appContext.jsx";
import PokemonFav from "./PokemonFav.jsx";
import './index.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/rophim" element={<Rophim />} />
          <Route path="/pokedex">
            <Route index element={<Pokedex />} />
            <Route path=":name" element={<PokemonDetail />} />
            <Route path="favorite" element={<PokemonFav />} />
          </Route>
        </Routes>
      </HashRouter>
    </ContextProvider>
  </StrictMode>
);
