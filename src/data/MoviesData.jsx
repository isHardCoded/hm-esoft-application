import { useState, useEffect } from 'react';
import CardMovie from '../components/elements/CardMovie';

const MoviesData = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Lanoriya/json-values/main/films.json')
          .then(response => response.json())
          .then(data => setMovies(data))
          .catch(error => console.error(error));
    })

    return (
        <>
        <h1>Популярные фильмы</h1>
        <div className='moviesList'>
            {movies.map((movie)=> {
                return (
                    <CardMovie
                        title = {movie.title}
                        image = {movie.image}
                        full_description = {movie.full_description}
                        rating = {movie.rating}
                        actors = {movie.actors}
                        genres = {movie.genres}
                    />
                )
            })}
        </div>
        </>
    )
}

export default MoviesData
