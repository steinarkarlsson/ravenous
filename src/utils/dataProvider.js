import config from '../config.env';

const apiKey = config.YELP_API_KEY;

const retrieveBusinesses = (searchTerm, location, sortBy) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}&sort_by=${sortBy}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "accept": "application/json",
        },
    }).then((response) => {
        return response.json();
    }, (error) => {
        console.log(error);
    },);
}

export default retrieveBusinesses;