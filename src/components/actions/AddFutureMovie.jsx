import React from 'react';
import { useMovieContext } from '../context/ContextMovie';

const AddFutureMovie = ({title}) => {
    const { setFutureMovies } = useMovieContext();

    const handleAddFutureMovie = () => {
        setFutureMovies(prevMovies => [...prevMovies, title]);
    };

    return (
        <button className='addBtn' onClick={handleAddFutureMovie}>Смотреть позже</button>
    );
};

export default AddFutureMovie;