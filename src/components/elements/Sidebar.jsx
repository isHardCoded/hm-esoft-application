import React from 'react';
import { useMovieContext } from '../context/ContextMovie';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const { likedMovies, futureMovies } = useMovieContext();

    return (
        <div className="sidebar">
            <div className="likedMovies">
                <h4>Любимые фильмы</h4>
                {likedMovies.map((movie, index) => (
                    <div key={index}>
                        {movie}
                    </div>    
                ))}
            </div>
            <div className="futureMovies">
                <h4>Фильмы к просмотру</h4>
                {futureMovies.map((movie, index) => (
                    <div key={index}>
                        {movie}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;