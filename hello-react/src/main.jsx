import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css'
import App from './pages/App.jsx';
import App2 from './App2.jsx';
import Rophim from './pages/Rophim.jsx';
import Pokedex from './pages/Pokedex.jsx';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router';
import NavigationBar from './NavigationBar.jsx';
import PokemonDetail from './pages/PokemonDetail.jsx';
import FavoritePokemons from './pages/FavoritePokemons.jsx';
import ContextProvider from './store/ContextProvider.jsx';

// StrictMode:
// - render every component twice -> for debugging
// - will auto be removed in production

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* < /> */}
    {/* <BrowserRouter> */}

    {/* switch to HashRouter for deployment to Github page */}
    <ContextProvider>
      <HashRouter>
        {/* Shared component   */}

        <NavigationBar />

        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/rophim' element={<Rophim />} />

          {/* <Route path="/pokedex" element={<Pokedex />} /> */}

          {/* can have dynamic route as a separate route like this */}
          {/* <Route path="/pokedex/:name" element={<PokemonDetail />} /> */}

          {/* or use a nested route like this */}
          <Route path='/pokedex'>
            <Route index element={<Pokedex />} />
            <Route path='favorites' element={<FavoritePokemons />} />
            <Route path=':name' element={<PokemonDetail />} />
          </Route>
        </Routes>

        {/* </BrowserRouter> */}
      </HashRouter>

    </ContextProvider>
  </StrictMode>
);
