import './App.css';
import SearchBar from "./components/SearchBar"
import BusinessList from "./components/BusinessList";

function App() {
  return (
    <div className="flex justify-center w-full">
      <div>
        <SearchBar />
        <BusinessList />
      </div>
    </div>
  );
}

export default App;
