import './App.css';
import SearchBar from "./components/SearchBar"
import BusinessList from "./components/BusinessList";

const businesses = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDduFw54H5IFfFDvng4Wws96yenR9yx_DZ0PFSul8mKg&s',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Bordertown',
        state: 'KY',
        zip: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 9,
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDduFw54H5IFfFDvng4Wws96yenR9yx_DZ0PFSul8mKg&s',
        name: 'Jewel of India',
        address: '1010 Paddington Way',
        city: 'Auckland',
        state: 'KY',
        zip: '10101',
        category: 'Indian',
        rating: 5,
        reviewCount: 933,
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDduFw54H5IFfFDvng4Wws96yenR9yx_DZ0PFSul8mKg&s',
        name: 'Taco Bell',
        address: '1010 Paddington Way',
        city: 'Hamilton',
        state: 'KY',
        zip: '10101',
        category: 'Mexican',
        rating: 3.2,
        reviewCount: 80,
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDduFw54H5IFfFDvng4Wws96yenR9yx_DZ0PFSul8mKg&s',
        name: 'Burger King',
        address: '1010 Paddington Way',
        city: 'Auckland',
        state: 'KY',
        zip: '10101',
        category: 'quick',
        rating: 3.0,
        reviewCount: 90,
    }
]

function App() {
  return (
    <div className="flex justify-center w-full">
      <div>
        <SearchBar />
        <BusinessList businesses={businesses} />
      </div>
    </div>
  );
}

export default App;
