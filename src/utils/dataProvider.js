const apiKey = 'oDT07epYGkH1FeGLFOKSTVpvUeDbWGTCFzgpmfjEK8CKKtUWD_SOJvCnJuJ5uQKhX6lyRC3ODQkC8A3efd4io0OdMIbJkpfa2a1vvt8vV1jz6sVGBlyX7Dbso6E1ZnYx';

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