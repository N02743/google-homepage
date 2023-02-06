import "./App.css";
import DownNavBar from "./components/DownNavBar";
import TopNavBar from "./components/TopNavBar";
import GoogleLogo from "./image/GoogleLogo.png"
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="App">
        <TopNavBar />
        <img id="Logo" src={GoogleLogo} alt="GoogleLogo"></img>
        <SearchBar />
        <DownNavBar />
      </div>
    </>
  );
}

export default App;
