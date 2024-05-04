import { useState, useEffect } from 'react';

import CardMovie from '../components/elements/CardMovie';

const MoviesData = ({ selectedGenres, sortBy }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Lanoriya/json-values/main/films.json')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error(error));
    }, []); 

    const filteredMovies = selectedGenres.length > 0 ? movies.filter((movie) => selectedGenres.some((genre) => movie.genres.includes(genre))) : movies;

    const sortedMovies = () => {
        if (sortBy === 'ratingAsc') {
            return [...filteredMovies].sort((a, b) => a.rating - b.rating);
        } else if (sortBy === 'ratingDesc') {
            return [...filteredMovies].sort((a, b) => b.rating - a.rating);
        } else {
            return filteredMovies;
        }
    };

    return (
        <>
            <ul className='moviesList'>
                {sortedMovies().map((movie) => (
                    <li key={movie.id}>
                        <CardMovie
                            id={movie.id}
                            title={movie.title}
                            image={movie.image}
                            full_description={movie.full_description}
                            rating={movie.rating}
                            actors={movie.actors}
                            genres={movie.genres}
                            type={movie.type}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MoviesData;