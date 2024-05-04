import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import DetailedMovieCard from '../elements/DetailedMovieCard';
import Catalog from '../elements/Catalog';
import Header from '../elements/Header';

const DetailMovie = () => {
    const { title } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Lanoriya/json-values/main/films.json')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error(error));
    }, []); 

    return (
        <div className='container'>
            <div className="detailMovie">
            <Header/>
            <Catalog page={"Детали фильма"} title={`/ ${title}`}/>
             {movies.map((movie) => {
                if (movie.title == title) {
                    return (
                        <DetailedMovieCard
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            image={movie.image}
                            full_description={movie.full_description}
                            rating={movie.rating}
                            actors={movie.actors}
                            genres={movie.genres}
                            release_year={movie.release_year}
                            duration={movie.duration}
                            age_rating={movie.age_rating}
                            type={movie.type}
                            comments={movie.comments}
                        />
                    );
                }
                return null;
            })}
            </div>
        </div>
    )
}

export default DetailMovie