import { Link } from 'react-router-dom';

const Similar = ({image, genres, title}) => {
    return (
        <>
            
            <Link to={`/films/${title}/genres/${genres}`}><img src={image} alt="imageSimilar"></img></Link>
        </>
    )
}

export default Similar