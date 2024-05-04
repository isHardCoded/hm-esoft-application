const SortMovie = ({ onClick, label }) => {
    return (
        <button className="sortBtn" onClick={onClick}>{label}</button>
    )
}

export default SortMovie