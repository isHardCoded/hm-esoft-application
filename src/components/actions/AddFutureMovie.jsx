import React from 'react';
import { useMovieContext } from '../context/ContextMovie';

const AddFutureMovie = ({title}) => {
    const { futureMovies, setFutureMovies } = useMovieContext();

    const handleAddFutureMovie = () => {
        if (!futureMovies.includes(title)) {
            setFutureMovies(prevMovies => [...prevMovies, title]);
        } else {
            alert(`Фильм "${title}" уже есть в списке фильмов к просмотру.`);
        }
    };

    return (
        <button className='addBtn' onClick={handleAddFutureMovie}>Смотреть позже</button>
    );
};

export default AddFutureMovie;