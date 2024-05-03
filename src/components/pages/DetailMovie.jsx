import { useParams } from 'react-router-dom';

const DetailMovie = () => {
    const { title } = useParams();

    return (
        <>
            <h1>Детали фильма</h1>
            <p>Movie Name: {title}</p>
        </>
    )
}

export default DetailMovie