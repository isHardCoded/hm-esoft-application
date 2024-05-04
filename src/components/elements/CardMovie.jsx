import AddFutureMovie from "../actions/AddFutureMovie";
import AddLikedMovie from "../actions/AddLikedMovie";
import { Link } from 'react-router-dom';

const CardMovie = ({id, title, image, full_description, rating, actors, genres, type}) => {
    return (
        <div className="cardMovie">
            <img className="cardImage" src={image} alt={rating} />
            <div className="cardContent">
                <div>
                    <h4><Link to={`/films/${title}`}>{title}</Link></h4>
                    <p className="cardRating">{rating}</p>
                </div>
                <p>{full_description}</p>
                <div className="cardInfo">
                    <div className="cardActors">
                        <h4>Актеры:<p>{actors.join(', ')}</p></h4>
                    </div>
                    <div className="cardCategory">
                        <h4>Жанр:<p>{genres.join(', ')}</p></h4>
                    </div>
                    <div className="cardType">
                        <h4>Тип:<p>{type}</p></h4>
                    </div>
                </div>
                <div className="cardActions">
                    <AddLikedMovie title={title}/>
                    <AddFutureMovie title={title}/>
                </div>            
            </div>
        </div>
    )
}

export default CardMovie