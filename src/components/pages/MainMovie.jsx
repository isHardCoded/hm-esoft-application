import { useState } from 'react';
import FilterMovie from '../actions/FilterMovie';
import SortMovie from '../actions/SortMovie';
import MoviesData from '../../data/MoviesData';
import Sidebar from '../elements/Sidebar';

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
        setActiveGenre(genre);
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
        <div className="container">
            <div className="mainSection">
                <h1>Популярные фильмы</h1>
                <div className="mainButtons">
                    <h4>Сортировать</h4>
                    <div className="sortButtons">
                        <SortMovie label={"По возрастанию рейтинга"} onClick={() => handleSort("ratingAsc")} />
                        <SortMovie label={"По убыванию рейтинга"} onClick={() => handleSort("ratingDesc")} />
                    </div>
                    <h4>Фильтровать по жанру</h4>
                    <div className="filterButtons">
                        {["Драма", "Криминал", "Боевик", "Анимация", "Комедия", "Приключения", "Триллер", "Фантастика", "Биография", "Мюзикл", "Фэнтези", "Романтика"].map((genre) => (
                            <FilterMovie
                                key={genre}
                                className={activeGenre === genre ? 'active' : null}
                                onClick={() => handleGenreFilter(genre)}
                            >
                                {genre}
                            </FilterMovie>
                        ))}
                        <FilterMovie onClick={resetFilters}>Сбросить</FilterMovie>
                    </div>
                </div>
                <MoviesData selectedGenres={selectedGenres} sortBy={sortBy} />
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default MainMovie;