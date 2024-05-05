import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <h2>isHardCodedMovie</h2>
            <ul>
                <li><a href="/">Популярные фильмы</a></li>
                <li><Link to="/search">Поиск фильма</Link></li>
            </ul>
        </div>
    )
}

export default Header