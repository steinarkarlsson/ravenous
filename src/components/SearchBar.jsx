function SearchBar() {
    const searchTerm = '';
    const selectedLocation = '';
    return (
        <div>
            <div>
                <input type="text" value={searchTerm}/>
            </div>
            <div>
                <input type="text" value={selectedLocation}/>
            </div>
        </div>
    )
}

export default SearchBar;