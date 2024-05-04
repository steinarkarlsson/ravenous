import './App.css';
import SearchBar from "./components/SearchBar"
import BusinessList from "./components/BusinessList";
import retrieveBusinesses from "./utils/dataProvider";
import {useState} from "react";

function App() {
    const [searchTerm, setSearchTerm] = useState('indian');
    const [selectedLocation, setSelectedLocation] = useState('Auckland');
    const [sortBy, setSortBy] = useState('best_match');
    const [businesses, setBusinesses] = useState([{}]);

    retrieveBusinesses(searchTerm, selectedLocation, sortBy).then((response) => {
        setBusinesses(response.businesses);
    });

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    }
    const handleSortByChange = (event) => {
        setSortBy(event.target.name);
    }
    const handleSubmit = () => {
        retrieveBusinesses(searchTerm, selectedLocation, sortBy).then((response) => {
            setBusinesses(response.businesses);
        });
    }

    return (
        <div className="flex justify-center w-full">
            <div>
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={handleSearchTermChange}
                    setLocation={handleLocationChange}
                    selectedLocation={selectedLocation}
                    setSortBy={handleSortByChange}
                    sortBy={sortBy}
                    setSubmit={handleSubmit}
                />
                <div>
                    {businesses ? <BusinessList businesses={businesses}/> : <p>No businesses found</p>}
                </div>
            </div>
        </div>
    );
}

export default App;
