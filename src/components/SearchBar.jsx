function SearchBar({
                       handleSearchTermChange,
                       handleLocationChange,
                       handleSortByChange,
                       handleSubmit,
                       searchTerm,
                       selectedLocation,
                       sortBy
                   }) {

    return (
        <div className="flex flex-col w-full h-1/2 overflow-hidden">
            <div className="flex justify-center h-20 bg-yellow-600 font-extrabold text-white text-4xl">ravenous</div>
            <div className="flex relative">
                <img className="absolute z-0"
                     src="https://media.cntraveler.com/photos/61f975646ddac9f81df58a62/16:9/w_1280,c_limit/GettyImages-1280180647.jpg"
                     alt="ravenous logo"/>
                <div className="absolute z-10">
                    <div className="flex justify-center h-12 m-5">
                        <button name="best_match"
                                onClick={handleSortByChange}
                                className={`hover:drop-shadow-xl w-20 text-center font-bold px-20 ${sortBy === 'best_match' ? 'text-lg text-yellow-600' : 'text-md text-white'}`}>Best
                            Match
                        </button>
                        <button name="rating" onClick={handleSortByChange}
                                className={`text-white hover:drop-shadow-xl w-20 text-center font-bold px-20 ${sortBy === 'rating' ? 'text-lg text-yellow-600' : 'text-md text-white'}`}>Highest
                            Rated
                        </button>
                        <button name="review_count" onClick={handleSortByChange}
                                className={`text-white hover:drop-shadow-xl w-20 text-center font-bold px-20 ${sortBy === 'review_count' ? 'text-lg text-yellow-600' : 'text-md text-white'}`}>Most
                            Viewed
                        </button>
                    </div>
                    <hr className="w-96 h-1 mx-auto my-4"/>
                    <div className="flex flex-row justify-center h-12 m-5">
                        <input type="text" name="search" value={searchTerm} size="40" onChange={handleSearchTermChange}
                               placeholder="Search Businesses"
                               className="rounded-md mx-5 text-black bg-white p-3"/>
                        <input type="text" name="location" value={selectedLocation} onChange={handleLocationChange}
                               size="40" placeholder="Where?"
                               className="rounded-md mx-5 text-black bg-white p-3"/>
                    </div>
                    <div className="flex justify-center h-12 m-5">
                        <button onClick={handleSubmit}
                                className="bg-yellow-600 text-white w-40 font-bold text-xl rounded-md px-5">Let's Go
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;