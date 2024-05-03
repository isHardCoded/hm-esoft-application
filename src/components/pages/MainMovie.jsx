import { useState } from 'react';
import { MovieProvider } from '../context/ContextMovie';

import genresData from '../../data/GenresData';
import FilterMovie from '../actions/FilterMovie';
import SortMovie from '../actions/SortMovie';
import MoviesData from '../../data/MoviesData';
import Sidebar from '../elements/Sidebar';
import Header from '../elements/Header';
import Catalog from '../elements/Catalog';

const MainMovie = () => {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [activeGenre, setActiveGenre] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    
    const handleGenreFilter = (genre) => {
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter((g) => g !== genre));
        } else {
            setSelectedGenres([genre]);
        }
    };

    const handleSort = (sortType) => {
        setSortBy(sortType);
    };

    const resetFilters = () => {
        setSelectedGenres([]);
        setActiveGenre(null);
        setSortBy(null);
    };

    return (
        <MovieProvider>
            <div className="container">
            <Header/>
            <div className="mainSection">
                <Catalog page={"Популярные фильмы"}/>
                <div className="mainButtons">
                    <h4>Сортировать</h4>
                    <div className="sortButtons">
                        <SortMovie label={"По возрастанию рейтинга"} onClick={() => handleSort("ratingAsc")} />
                        <SortMovie label={"По убыванию рейтинга"} onClick={() => handleSort("ratingDesc")} />
                    </div>
                    <h4>Фильтровать по жанру</h4>
                    <div className="filterButtons">
                        {genresData.map((genre) => (
                            <div key={genre.id}>
                                <FilterMovie onClick={() => handleGenreFilter(genre.genre)}>
                                    {genre.genre}
                                </FilterMovie>
                            </div>
                        ))}
                        <FilterMovie onClick={resetFilters}>Сбросить</FilterMovie>
                    </div>
                </div>
                <MoviesData selectedGenres={selectedGenres} sortBy={sortBy} />
                <Sidebar></Sidebar>
            </div>
        </div>
        </MovieProvider>
    );
};

export default MainMovie;