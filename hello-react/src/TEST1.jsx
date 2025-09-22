import { use, useEffect } from "react";

let cache = new Map();

function fetchData(url) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url);
}

async function getData(url) {
await new Promise(resolve => {
    setTimeout(resolve, 3000);
});

return "OK";
//   if (url === '/the-beatles/albums') {
    

    
//   } else {
//     throw Error('Not implemented huhu');
//   }
}

export default function TEST1(props) {
    const { pokemons, setPokemons } = props;
    
    const data = use(fetchData());

    useEffect(() => {
        setPokemons([...pokemons, ...pokemons]);
    }, [])

    return (<></>);
}