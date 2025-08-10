import React, { useState } from 'react'
import { Link, useLocation } from 'react-router'

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
];

const style = {
  display: 'flex',
  justifyContent: 'space-around',
};

const NavigationBar = () => {
  const { pathname } = useLocation();
  
  // const [activePath, setActivePath] = useState(pathname); // not necessary


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
    </nav>
  )
}

export default NavigationBar
