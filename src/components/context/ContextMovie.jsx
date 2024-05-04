import React, { createContext, useState, useContext } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [likedMovies, setLikedMovies] = useState([]);
    const [futureMovies, setFutureMovies] = useState([]);

    return (
        <MovieContext.Provider value={{ likedMovies, setLikedMovies, futureMovies, setFutureMovies }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovieContext = () => {
    return useContext(MovieContext);
};