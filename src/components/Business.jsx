const business = {
    image: 'https://via.placeholder.com/150',
    name: 'Sample Business',
    address: '1234 Main St',
    city: 'Anytown',
    state: 'USA',
    zip: '12345',
    category: 'Sample Category',
    rating: 4.5,
    reviewCount: 1000,
}

function Business() {
  return (
      <div class="relative ">
          <img src={business.image} alt={business.name}/>
          <h1>{business.name}</h1>
          <div>
              <p>{business.address}</p>
              <p>{business.city}</p>
              <p>{business.zip}</p>

              <p>{business.category}</p>
              <p>{business.rating} stars</p>
              <p>{business.reviewCount} reviews</p>
          </div>
      </div>
  );
}

export default Business;