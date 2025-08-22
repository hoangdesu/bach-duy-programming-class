import { createPortal } from 'react-dom';
import '../pokemon.css';
import { use, useEffect, useState } from 'react';
import AppContext from '../store/AppContext';

export default function Modal(props) {
  const { title, description, yesButtonText, yesHandler } = props;
  const ctx = use(AppContext);

  const closeModal = (evt) => {
    console.log('target:', evt.target);
    console.log('currentTarget:', evt.currentTarget);

    if (evt.target === evt.currentTarget) {
      ctx.setDeletingPokemon(null);
      ctx.setModalOpen(false);
      evt.stopPropagation();
      evt.preventDefault();
    }
  };

  console.log('modal >> ', props.children, ctx.modalOpen);
  

  if (props.children)
    return (
      <>
        {createPortal(
          <div className='modal-overlay' onClick={closeModal}>
            <div className='modal-content'>
              <h5>...Modal component</h5>
              {props.children}
            </div>
          </div>,
          document.querySelector('#modal-container')
        )}
      </>
    );
  // Generic UI
  else {
    return (
      <>
        {ctx.modalOpen && createPortal(
          <div className='modal-overlay' onClick={closeModal}>
            <div className='modal-content' style={{ textAlign: 'center' }}>
              <h2>{title}</h2>
              <p>{description}</p>
              <div>
                <button onClick={yesHandler}>{yesButtonText || 'Yes'}</button>
                <button onClick={() => ctx.setModalOpen(false)}>No</button>
              </div>
            </div>
          </div>,
          document.querySelector('#modal-container')
        )}
      </>
    );
  }
}
