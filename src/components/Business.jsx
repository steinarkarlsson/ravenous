function Business({business}) {
    return (
        <div className="flex flex-col m-10">
            <img src={business.image_url} alt={business.name}/>
            <h4 className="text-left text-xl font-bold">{business.name}</h4>
            <div className="flex flex-row">
                <div className="basis-2/3 text-left">
                    <p>{business.location.address1}</p>
                    <p>{business.location.city}</p>
                    <p>{business.location.state} {business.location.zip_code}</p>
                </div>
                <div className="basis-1/3 text-right">
                    <p className="uppercase text-xl text-yellow-600 font-bold">{business.categories.title}</p>
                    <p className="text-yellow-600 font-bold">{business.rating} stars</p>
                    <p className="">{business.review_count} reviews</p>
                </div>
            </div>
        </div>
    )
}

export default Business;