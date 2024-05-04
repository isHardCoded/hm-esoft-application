const DetailedCardMovie = ({ title, image, full_description, rating, actors, genres, release_year, duration, age_rating, type, comments }) => {

    return (
        <>
            <div className="cardDetailedMovie">
                <img src={image} alt="image" />
                <div className="detailedCardContent">
                    <div className="detailedCardText">
                        <div>
                            <h4>{title}</h4>
                            <p className="detailedCardRating">{rating}</p>
                        </div>
                        <p>{full_description}</p>
                    </div>
                    <div className="detailedCardInfo">
                        <div>
                        <p><b>Актёры: </b> {actors.join(', ')}</p>
                        <p><b>Жанр: </b> {genres.join(', ')}</p>
                        <p><b>Год выпуска: </b> {release_year}</p></div>
                        <div>
                        <p><b>Длительность: </b>{duration}</p>
                        <p><b>Возрастное ограничение: </b>{age_rating}</p>
                        <p><b>Тип: </b>{type}</p></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailedCardMovie;