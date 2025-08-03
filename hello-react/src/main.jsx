import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx'
import Rophim from './Rophim.jsx'
import Pokedex from './Pokedex.jsx'

// StrictMode: 
// - render every component twice -> for debugging
// - will auto be removed in production

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Rophim /> */}
    {<Pokedex />}
  </StrictMode>,
)
