import React, { use, useContext, useState } from 'react'
import { Link, useLocation } from 'react-router'
import ContextProvider from './store/ContextProvider';
import AppContext from './store/AppContext';

const routes = [
    {
        name: 'First React App',
        path: '/'
    },
    {
        name: 'Rophim App',
        path: '/rophim'
    },
    {
        name: 'Pokedex App',
        path: '/pokedex'
    },
    {
        name: 'Pokedex App (NEW)',
        path: '/pokedex-new'
    },
    // {
    //     name: 'Favorites',
    //     path: '/pokedex/favorites'
    // }
];

const style = {
  display: 'flex',
  justifyContent: 'space-around',
};

const NavigationBar = () => {
  const { pathname } = useLocation();
  const ctx = use(AppContext);

  // const [activePath, setActivePath] = useState(pathname); // not necessary

  console.log('ctx:', ctx);
  console.log('location pathname:', pathname);

  return (
    <nav style={style}>
      {/* directly destructure the object in the param */}
      {routes.map(({ name, path }) => (
        <span key={path}>
            {/* using href will trigger document to reload -> not optimized for SPA */}
            {/* <a href={path}>{name}</a> */}

            {/* optimized a tag -> will not reload the page */}
            <Link 
              to={path}
              style={{ padding: '8px', background: pathname === path ? 'red' : 'transparent' }}
              // onClick={() => setActivePath(path)}
            >
                {name}
            </Link>
        </span>
      ))}

      <span>
        <Link 
              to={'/pokedex/favorites'}
              style={{ padding: '8px', background: pathname === '/pokedex/favorites' ? 'red' : 'transparent' }}
            >
                <span>Favorites</span>
                <span style={{ borderRadius: '50%', marginLeft: '8px', padding: '5px', width: '10px', height: '10px', background: 'pink' }}>
                  {ctx.favorites.length}
                </span>
            </Link>
      </span>
    </nav>
  )
}

export default NavigationBar
