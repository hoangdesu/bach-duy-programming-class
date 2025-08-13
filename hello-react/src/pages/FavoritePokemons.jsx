import React, { use, useContext, useState } from 'react';
import AppContext from '../store/AppContext';
import PokemonCardComponent from '../components/PokemonCard';

const FavoritePokemons = () => {
  // the `use` hook is the new `useContext` hook in React 19
  const ctx = use(AppContext);

  return (
    <div>
      <h1>Favorites: {ctx.favorites.length}</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {ctx.favorites.map((pkm) => (
          <PokemonCardComponent key={pkm.id} pokemon={pkm} onPokemonClicked={() => {}} />
        ))}
      </div>
      
    </div>
  );
};

export default FavoritePokemons;
