import React, { use, useContext, useState } from 'react';
import AppContext from '../store/AppContext';

import PokemonCardComponent from '../components/PokemonCard';

import '../pokemon.css';
import { createPortal } from 'react-dom';
import Modal from '../components/Modal';
import DeleteButton from '../components/DeleteButton';

const FavoritePokemons = () => {
  // the `use` hook is the new `useContext` hook in React 19
  const ctx = use(AppContext);

  const deleteHandler = () => {
    ctx.setFavorites((prev) => prev.filter((fav) => fav.id !== ctx.deletingPokemon.id));
    ctx.setDeletingPokemon(null);
  };

  // const closeModal = (evt) => {
  //   // if (evt.)

  //   console.log('target:', evt.target);
  //   console.log('currentTarget:', evt.currentTarget);

  //   if (evt.target === evt.currentTarget) {
  //     setSelectedPkm(null);
  //     evt.stopPropagation();
  //     evt.preventDefault();
  //   }
  // };

  return (
    <div>
      <h1>Favorites: {ctx.favorites.length}</h1>

      <select>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
      </select>

      <div className='pokemon-grid'>
        {ctx.favorites.length > 0 &&
          ctx.favorites.map((pkm) => (
            <span>
              <DeleteButton onClick={() => ctx.setDeletingPokemon(pkm)}>
                Delete {pkm.name}
              </DeleteButton>
              <PokemonCardComponent
                key={pkm.id}
                pokemon={pkm}
                onPokemonClicked={() => {}}
              />
            </span>
          ))}
      </div>

      {/* Modal */}
      {/* double negation: enforce a boolean value */}
      {/* {!!selectedPkm && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className='modal-content'>
            <h1>Delete {selectedPkm?.name || '<error>'}</h1>
            <div>
              <button onClick={deleteHandler}>Delete</button>
              <button onClick={() => setSelectedPkm(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )} */}

      {/* <Modal /> */}

      {/* TODO: refactor this modal to a portal */}

      {/* {!!selectedPkm && createPortal(
        (<div className="modal-overlay" onClick={closeModal}>
          <div className='modal-content'>
            <h1>Delete {selectedPkm?.name || '<error>'}</h1>
            <div>
              <button onClick={deleteHandler}>Delete</button>
              <button onClick={() => setSelectedPkm(null)}>Cancel</button>
            </div>
          </div>
        </div>),
        document.querySelector('#modal-container')
      )} */}

      {!!ctx.deletingPokemon && (
        <Modal>
          <h1>Delete {ctx.deletingPokemon?.name || '<error>'}</h1>
          <div>
            <DeleteButton onClick={deleteHandler} darkmode>Delete</DeleteButton>
            <button onClick={() => ctx.setDeletingPokemon(null)}>Cancel</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FavoritePokemons;
