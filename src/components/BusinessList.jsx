import Business from "./Business";

function BusinessList() {
  return (
    <div className="grid grid-cols-3 content-center max-w-7xl justify-center border border-red-600">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
    </div>
  );
}

export default BusinessList;