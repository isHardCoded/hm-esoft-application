import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import DetailedCardMovie from '../elements/cards/DetailedCardMovie';
import Catalog from '../elements/Catalog';
import Header from '../elements/Header';
import Comment from '../elements/Comment';
import Similar from '../elements/Similar';

const DetailMovie = () => {
    const { title, genres } = useParams();
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
                        <>
                        <DetailedCardMovie
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
                        
                        <Comment comments={movie.comments}/>
                            
                        </>
                    );
                }
            })}
            
            <ul className='similarCard'>
                <h4>Похожее</h4>
                <div>
                {movies.map((movie)=>{
                        if (movie.genres == genres) {
                            return (
                                <li key={movie.id}>
                                    <Similar image={movie.image}
                                             genres={movie.genres}
                                             title={movie.title}/>
                                </li>
                            )
                        }
                        return null;
                    })}
                </div>
            </ul>
            </div>
        </div>
    )
}

export default DetailMovie