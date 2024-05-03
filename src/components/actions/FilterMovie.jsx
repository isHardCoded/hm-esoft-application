const FilterMovie = ({ onClick, children }) => {
    return (
        <button className="filterBtn" onClick={onClick}>{children}</button>
    )
}

export default FilterMovie