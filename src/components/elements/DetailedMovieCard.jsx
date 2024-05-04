import { act } from "react"

const DetailedMovieCard = ({title, image, full_description, rating, actors, genres, release_year, duration, age_rating, type, comments}) => {

    return (
        <div className="cardDetailedMovie">
            <img src={image} alt="image" />
            <p>{title}</p>
            <p>{full_description}</p>
            <p>{rating}</p>
            <p>{actors.join(', ')}</p>
            <p>{genres.join(', ')}</p>
            <p>{release_year}</p>
            <p>{duration}</p>
            <p>{age_rating}</p>
            <p>{type}</p>
            <p>{comments}</p>

        </div>
    )
}

export default DetailedMovieCard