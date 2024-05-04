import Header from "../elements/Header"
import Catalog from "../elements/Catalog"

const SearchMovie = () => {
    
    return (
        <div className="container">
            <div className="searchMovie">
                <Header/>
                <Catalog page={"Поиск фильма"}/>
            </div>
        </div>
    )
}

export default SearchMovie