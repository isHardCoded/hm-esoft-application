import { useMovieContext } from '../context/ContextMovie';

const AddLikedMovie = ({ title }) => {
    const { likedMovies, setLikedMovies } = useMovieContext();

    const handleAddLikedMovie = () => {
        if (!likedMovies.includes(title)) {
            setLikedMovies(prevMovies => [...prevMovies, title]);
        } else {
            alert(`Фильм "${title}" уже есть в списке избранных.`);
        }
    };

    return (
        <button className='addBtn' onClick={handleAddLikedMovie}>Добавить в избранное</button>
    );
};

export default AddLikedMovie;