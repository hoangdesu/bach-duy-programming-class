import React, { use, useContext, useState } from 'react';
import AppContext from '../store/AppContext';

import PokemonCardComponent from '../components/PokemonCard';

import '../pokemon.css';

const FavoritePokemons = () => {
  // the `use` hook is the new `useContext` hook in React 19
  const ctx = use(AppContext);

  const [selectedPkm, setSelectedPkm] = useState(null);

  const deleteHandler = () => {
    ctx.setFavorites(prev => prev.filter(fav => fav.id !== selectedPkm.id));
    setSelectedPkm(null);
  }

  const closeModal = (evt) => {
    // if (evt.)

    console.log('target:', evt.target);
    console.log('currentTarget:', evt.currentTarget)

    if (evt.target === evt.currentTarget) {
      setSelectedPkm(null);
      evt.stopPropagation();
      evt.preventDefault();
    }
  }

  return (
    <div>
      <h1>Favorites: {ctx.favorites.length}</h1>

      <div className='pokemon-grid'>
        {ctx.favorites.length > 0 && ctx.favorites.map((pkm) => (

          <span>
            <button onClick={() => setSelectedPkm(pkm)}>Delete {pkm.name}</button>
            <PokemonCardComponent key={pkm.id} pokemon={pkm} onPokemonClicked={() => {}} />
          </span>
        ))}
      </div>


      {/* Modal */}
      {/* double negation: enforce a boolean value */}
      {!!selectedPkm && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className='modal-content'>
            <h1>Delete {selectedPkm?.name || '<error>'}</h1>
            <div>
              <button onClick={deleteHandler}>Delete</button>
              <button onClick={() => setSelectedPkm(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* TODO: refactor this modal to a portal */}
      
      
    </div>
  );
};

export default FavoritePokemons;
