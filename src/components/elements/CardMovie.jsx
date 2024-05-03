const CardMovie = ({title, image, full_description, rating, actors, genres}) => {
    return (
        <div className="cardMovie">
            <img className="cardImage" src={image} alt={rating} />
            <div className="cardContent">
                <div>
                    <a href="#">{title}</a>
                    <p className="cardRating">{rating}</p>
                </div>
                <p>{full_description}</p>
                <div className="cardInfo">
                    <div className="cardActors">
                        <h4>Актеры:<p>{actors}</p></h4>
                    </div>
                    <div className="cardCategory">
                        <h4>Жанр:<p>{genres}</p></h4>
                    </div>
                </div>
                <div className="cardActions">
                    <p>В избранное</p>
                    <p>Смотреть позже</p>
                </div>            
            </div>
        </div>
    )
}

export default CardMovie