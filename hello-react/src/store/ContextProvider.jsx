import { useState } from "react";

import AppContext from "./AppContext";

export default function ContextProvider({ children }) {
    const [favorites, setFavorites] = useState([
        {
            "id": 4,
            "name": "charmander",
            "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
            "types": []
        }
    ]);

    // this ctx is the global state
    const ctx = {
        favorites, 
        setFavorites
    }

    return <AppContext value={ctx}>{children}</AppContext>
}
