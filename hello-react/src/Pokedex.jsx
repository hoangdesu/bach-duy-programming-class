import { use, useEffect, useRef, useState } from 'react';

// PokemonCard component uses default export
// -> we can import under any name
import PKMCard from './components/PokemonCard';

import './pokemon.css';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [favoritePokemons, setFavoritePokemons] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  // preserve this ref value over renders
  const isFirstRender = useRef(true);

  // can also save the reference to an HTML element
  const inputSearchRef = useRef(null);
  const timeoutRef = useRef(null);

  console.log('inputSearchRef:', inputSearchRef);

  
  

  // let isTrue = true;

  // console.log('isTrueRef', isTrueRef);

  const [page, setPage] = useState(1);
  const limit = 12;
  const offset = (page - 1) * limit; // derived value

  const QUERY = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`;

  // Put fetch inside a useEffect to fetch data on initial render only
  useEffect(() => {
    // console.log('fetching pokemons...');

    console.log('useeffect with no deps');

    // inputSearchRef.current.value => NULL

    // isTrue = false;
    // isTrueRef.current = false;

    // before fetching the data
    setIsLoading(true);

    // Artificial delay
    // setTimeout(() => {
    //     ...
    // }, 0);

    // Fetch API
    fetch(QUERY)
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data);
        const { results } = data;

        // setTimeout(() => {
        // }, 3000);

        // setPokemons(pokemonList);
        // setIsLoading(false);

        console.log(results);

        const pokemonList = [];

        // results.forEach(pkm => {
        //     const fetchData = async (pkm) => {
        //         try {
        //             const pokemonDetailResponse = await fetch(pkm.url);
        //             const pokemonDetailData = await pokemonDetailResponse.json();
        //             // console.log('> result for:', pkm.name);
        //             // console.log('> pokemonDetailData:', pokemonDetailData);
        //             pokemonList.push(pokemonDetailData.name)

        //         } catch (err) {
        //             console.log(err);

        //         }
        //     }

        //     fetchData(pkm);

        // });

        for (const pkm of results) {
          try {
            const pokemonDetailResponse = await fetch(pkm.url);
            const pokemonDetailData = await pokemonDetailResponse.json();
            // console.log('> result for:', pkm.name);
            // console.log('> pokemonDetailData:', pokemonDetailData);
            const pokemonObject = {
              id: pokemonDetailData.id,
              name: pokemonDetailData.name,
              sprite:
                pokemonDetailData['sprites']['other']['official-artwork'][
                  'front_default'
                ],
              types: [],
            };
            pokemonList.push(pokemonObject);
          } catch (err) {
            console.log(err);
          }
        }

        console.log('pokemonlist: ', pokemonList);
        setPokemons(pokemonList);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('network error');
        setFailed(true);
        setIsLoading(false);
      });
  }, []);

  // must use useEffect to wait for pokemons state finish updating
  useEffect(() => {
    console.log(pokemons);
  }, [pokemons]);

  // console.log('Render Pokedex');

  // Handle loading state using early return
  // if (isLoading) {
  //     return (
  //         <div>Loading pokemons...</div>
  //     )
  // }

  // pokemons[] -> pokemon = {
  //     name: '',
  //     url: '',
  //     sprite: '.img'
  // }

  const fetchMoreData = () => {
    // setIsLoading(true);
    fetch(QUERY)
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data);
        const { results } = data;

        console.log(results);

        const pokemonList = [...pokemons];

        for (const pkm of results) {
          try {
            const pokemonDetailResponse = await fetch(pkm.url);
            const pokemonDetailData = await pokemonDetailResponse.json();
            const pokemonObject = {
              id: pokemonDetailData.id,
              name: pokemonDetailData.name,
              sprite:
                pokemonDetailData['sprites']['other']['official-artwork'][
                  'front_default'
                ],
              types: [],
            };
            pokemonList.push(pokemonObject);
          } catch (err) {
            console.log(err);
          }
        }

        console.log('pokemonlist: ', pokemonList);
        setPokemons(pokemonList);
        // setIsLoading(false);
      })
      .catch((err) => {
        console.log('network error');
        setFailed(true);
        setIsLoading(false);
      });
  };

  // This will ALSO run on initial load AND when state of page changes!
  useEffect(() => {
    console.log('useeffect with page changes');

    // prevent duplicated fetching with useRef
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    console.log('fetching more pokemons...');

    fetchMoreData();
    // setTimeout(() => {

    // }, 2000);
  }, [page]);

  // Lifting the state up
  const onPokemonClickedHandler = (pokemon, selected) => {
    if (selected) {
      console.log();
      console.log('selected pokemon: ', pokemon.name);

      setSelectedPokemons([...selectedPokemons, pokemon]);
    } else {
      console.log('removing...', pokemon.name);
    }
  };

  const searchHandler = () => {
    // setTimeout(() => {
    //      if (inputSearchRef) {
    //          console.log('search:', inputSearchRef.current.value);
        
    // }
    //     }, 500);

    // Button debounce

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(async () => {
      if (inputSearchRef.current) {
        // console.log("search:", inputSearchRef.current.value);
        const searchValue = inputSearchRef.current.value;
        if (!searchValue) {
            setSearchResults([]);
            return
        }

        try {
            const res = await fetch('http://localhost:4321/pokemons')
            const pokemonsDataList = await res.json();

            // console.log('searching:', pokemonsDataList);

            const matchedPokemons = pokemonsDataList.filter(pkm => pkm.name.toLowerCase().includes(searchValue))


            console.log('matchedPokemons',matchedPokemons);
            setSearchResults(matchedPokemons);
            

        } catch (err) {
            console.log(err);
            
        }
      }
    }, 500);

  }

  return (
    <>
      <div>
        <h1>My Pokemons</h1>
        {/* {...} */}
        <div>
          {selectedPokemons.map((pkm) => (
            <div>{pkm.name}</div>
          ))}
        </div>
      </div>

      <div>
        <h1>Pokédex</h1>

        <div className='search-container'>
            <input 
                type="text" 
                className='input-search' 
                ref={inputSearchRef}
                onChange={searchHandler}
            />

            {searchResults.length > 0 && (
                <div className='search-result-box'>
                    {searchResults.map(pkm => (
                        <div>
                            {pkm.id}. {pkm.name}
                        </div>
                    ))}
                </div>
            )}
        </div>

        {isLoading && <div>Loading...</div>}

        {failed && <div>Fetch failed {':('}</div>}

        {!isLoading && pokemons.length > 0 && (
          <div className='pokemon-grid'>
            {pokemons.map((pkm) => (
              <PKMCard
                key={pkm.name}
                pokemon={pkm}
                onPokemonClicked={onPokemonClickedHandler}
              />
            ))}

            <div onClick={() => console.log('clickme btn')}>click me</div>
          </div>
        )}

        <button onClick={() => setPage(page + 1)}>Show more</button>
      </div>
    </>
  );
}
