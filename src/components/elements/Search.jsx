import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import CardMovie from '../elements/cards/CardMovie';

const Search = () => {
    const { register, watch } = useForm();
    const [movies, setMovies] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Lanoriya/json-values/main/films.json')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error(error));
    }, []);

    const handleCheckboxChange = (e) => {
        const { value } = e.target;
        if (selectedTypes.includes(value)) {
            setSelectedTypes(selectedTypes.filter((type) => type !== value));
        } else {
            setSelectedTypes([...selectedTypes, value]);
        }
    };

    const searchTerm = watch('search');

    const filteredMovies = movies.filter(movie =>
        (!searchTerm || movie.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedTypes.length === 0 || selectedTypes.includes(movie.type))
    );

    return (
        <div className="searchBlock">
            <div className="searchField">
            <input {...register('search')} type="text" placeholder="Что вас интересует" />
            <div className="checkboxes">
            <label>
                <input type="checkbox" value="Фильм" onChange={handleCheckboxChange} />
                Фильм
            </label>
            <label>
                <input type="checkbox" value="Мультфильм" onChange={handleCheckboxChange} />
                Мультфильм
            </label>
            <label>
                <input type="checkbox" value="Сериал" onChange={handleCheckboxChange} />
                Сериал
            </label>
            </div>
        </div>
            <ul className='movieList'>
                {filteredMovies.map((movie) => (
                <li key={movie.id}>
                    <CardMovie
                        id={movie.id}
                        title={movie.title}
                        image={movie.image}
                        short_description={movie.short_description}
                        rating={movie.rating}
                        actors={movie.actors}
                        genres={movie.genres}
                        type={movie.type}
                    />
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Search;