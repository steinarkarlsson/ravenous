const business = {
    image: 'https://via.placeholder.com/150',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Bordertown',
    state: 'KY',
    zip: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
}

function Business() {
    return (
        <div class="flex flex-col w-1/4">
            <img src={business.image} alt={business.name}/>
            <h4 class="text-left text-xl font-bold">{business.name}</h4>
            <div class="flex flex-row">
                <div class="basis-2/3 text-left">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zip}</p>
                </div>
                <div class="basis-1/3 text-right">
                    <p class="uppercase text-xl text-yellow-600 font-bold">{business.category}</p>
                    <p class="text-yellow-600 font-bold">{business.rating} stars</p>
                    <p class="">{business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    )
}

export default Business;