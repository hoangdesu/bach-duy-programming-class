import { useState } from "react"
import MovieCard from "./components/MovieCard"
import Footer from "./components/Footer";

const movieData = [
    {
        poster: 'https://static.nutscdn.com/vimg/400-0/6851d117d10b27330999205e42568126.webp',
        title: 'The Fantastic Four: First Steps',
        genres: ['Chiếu Rạp', 'Siêu Anh Hùng']
    },
    {
        poster: 'https://static.nutscdn.com/vimg/400-0/e638f641bb9792173cab22cb5f4ce738.jpg',
        title: 'Thám Tử Lừng Danh Conan Movie 27: Ngôi Sao 5 Cánh 1 Triệu Đô',
        genres: ['Chiếu Rạp', 'Siêu Anh Hùng']
    },
    {
        poster: 'https://static.nutscdn.com/vimg/400-0/58193a004ba1bf56b271215bd51c093c.jpg',
        title: 'Bí Kíp Luyện Rồng',
        genres: ['Chiếu Rạp', 'Siêu Anh Hùng']
    },
    {
        poster: 'https://static.nutscdn.com/vimg/400-0/58193a004ba1bf56b271215bd51c093c.jpg',
        title: 'Bí Kíp Luyện Rồng',
        genres: ['Chiếu Rạp', 'Siêu Anh Hùng']
    },
    {
        poster: 'https://static.nutscdn.com/vimg/400-0/58193a004ba1bf56b271215bd51c093c.jpg',
        title: 'Bí Kíp Luyện Rồng',
        genres: ['Chiếu Rạp', 'Siêu Anh Hùng']
    },
    {
        poster: 'https://static.nutscdn.com/vimg/400-0/58193a004ba1bf56b271215bd51c093c.jpg',
        title: 'Bí Kíp Luyện Rồng',
        genres: ['Chiếu Rạp', 'Siêu Anh Hùng']
    },
    {
        poster: 'https://static.nutscdn.com/vimg/400-0/58193a004ba1bf56b271215bd51c093c.jpg',
        title: 'Bí Kíp Luyện Rồng',
        genres: ['Chiếu Rạp', 'Siêu Anh Hùng']
    },
]

export default function Rophim() {
    const [movies, setMovies] = useState(movieData);

    const [searchQuery, setSearchQuery] = useState('');

    // input will trigger component re-render on every keystroke
    console.log('Rophim component re-renders');

    
    const onDeleteHandler = (index) => {
        console.log('deleting from parent', movies[index].title);
        
        const updatedMovies = [...movies];

        updatedMovies.splice(index, 1);

        setMovies(updatedMovies);
    }

    // Controlled vs Uncontrolled Components
    
    const searchHandler = (evt) => {
        console.log(evt.target.value);

        // Two-way binding
        setSearchQuery(evt.target.value);
        
        // Revert the list to og
        if (evt.target.value === '') {
            setMovies(movieData);
            return;
        }

        // Filter the og list
        const filteredMovies = movieData.filter(m => m.title.toLowerCase().includes(evt.target.value));

        setMovies(filteredMovies);
    }

    const resetSearchHandler = () => {
        setSearchQuery('');
        setMovies(movieData);
    }

    return (
        <div>
            <div style={{ width: '100%', textAlign: 'center', position: 'relative' }}>
                <input 
                    type="text" 
                    style={{ width: '90%', padding: '16px', margin: '16px', fontSize: '1.5rem' }} 
                    onChange={searchHandler}
                    value={searchQuery}
                    placeholder="Search movie..."
                />
                <button style={{ position: 'absolute', top: '36px', right: '64px' }} onClick={resetSearchHandler}>X</button>
            </div>

            <div style={{ display: 'flex', gap: '20px', overflow: 'scroll', width: '100%' }}>
                {movies.map((mov, i) => (
                    <MovieCard 
                        movie={mov}
                        key={Math.random()}
                        ranking={i+1}
                        onDelete={() => onDeleteHandler(i)}
                    />
                ))}
            </div>

            <button onClick={() => console.log(searchQuery)}>Show search query</button>

            <Footer />
        </div>
    )
}