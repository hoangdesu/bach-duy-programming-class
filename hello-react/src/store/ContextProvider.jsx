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

    const [deletingPokemon, setDeletingPokemon] = useState(null);

    const [modalOpen, setModalOpen] = useState(false);

    // this ctx is the global state
    const ctx = {
        favorites, 
        setFavorites,
        deletingPokemon,
        setDeletingPokemon,
        modalOpen,
        setModalOpen
    }

    return <AppContext value={ctx}>{children}</AppContext>
}
