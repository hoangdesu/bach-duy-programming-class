import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx'
import Rophim from './Rophim.jsx'
import Pokedex from './Pokedex.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import NavigationBar from './NavigationBar.jsx'
import PokemonDetail from './PokemonDetail.jsx'

// StrictMode: 
// - render every component twice -> for debugging
// - will auto be removed in production

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* < /> */}
    <BrowserRouter>
      {/* Shared component   */}
      <NavigationBar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rophim" element={<Rophim />} />

        {/* <Route path="/pokedex" element={<Pokedex />} /> */}

        {/* can have dynamic route as a separate route like this */}
        {/* <Route path="/pokedex/:name" element={<PokemonDetail />} /> */}

        {/* or use a nested route like this */}
        <Route path="/pokedex">
          <Route index element={<Pokedex />} />
          <Route path=":name" element={<PokemonDetail />} />
        </Route>
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
