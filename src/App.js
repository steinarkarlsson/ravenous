import './App.css';
import SearchBar from "./components/SearchBar"
import BusinessList from "./components/BusinessList";

function App() {
  return (
    <div className="App flex justify-center">
      <div>
        <SearchBar />
        <BusinessList />
      </div>
    </div>
  );
}

export default App;
