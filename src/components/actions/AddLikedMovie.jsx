import React from 'react';
import { useMovieContext } from '../context/ContextMovie';

const AddLikedMovie = ({title}) => {
    const { setLikedMovies } = useMovieContext();

    const handleAddLikedMovie = () => {
        setLikedMovies(prevMovies => [...prevMovies, title]);
    };

    return (
        <button className='addBtn' onClick={handleAddLikedMovie}>Добавить в избранное</button>
    );
};

export default AddLikedMovie;