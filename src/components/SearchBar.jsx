function SearchBar() {
    const searchTerm = '';
    const selectedLocation = '';
    return (
        <div className="flex flex-col w-full h-1/2 border border-blue-800">
            <div className="flex justify-center h-20 bg-amber-300 font-extrabold text-white text-4xl">ravenous</div>
            <div className="relative">
                <img className="absolute z-0"
                     src="https://media.cntraveler.com/photos/61f975646ddac9f81df58a62/16:9/w_1280,c_limit/GettyImages-1280180647.jpg"
                     alt="ravenous logo"/>
                <div className="absolute z-10">
                    <div className="flex justify-center h-12 m-5">
                        <button className="text-white w-20 text-center text-md font-bold px-20">Best Match</button>
                        <button className="text-white w-20 text-center text-md font-bold px-20">Highest Rated</button>
                        <button className="text-white w-20 text-center text-md font-bold px-20">Most Viewed</button>
                    </div>
                    <hr className="w-96 h-1 mx-auto my-4"/>
                    <div className="flex flex-row justify-center h-12 m-5">
                        <input type="text" name="search" value={searchTerm} size="40" placeholder="Search Businesses"
                               className="border border-slate-600 rounded-md mx-5 text-black bg-white p-3"/>
                        <input type="text" name="location" value={selectedLocation} size="40" placeholder="Where?"
                               className="border border-slate-600 rounded-md mx-5 text-black bg-white p-3"/>
                    </div>
                    <div className="flex justify-center h-12 m-5">
                        <button className="bg-amber-300 text-white w-40 font-bold text-xl rounded-md px-5">Let's Go
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;