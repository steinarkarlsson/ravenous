import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar"
import BusinessList from "./components/BusinessList";

function App() {
  return (
    <div className="App">
      <div>
        <SearchBar />
        <BusinessList />
      </div>
    </div>
  );
}

export default App;
