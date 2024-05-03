import Business from "./Business";

function BusinessList({businesses}) {
  return (
    <div className="grid grid-cols-3 content-center max-w-7xl justify-center">
        {businesses.map((business) => (
            <Business business={business}/>
        ))}
    </div>
  );
}

export default BusinessList;