import "./App.css";
import DownNavBar from "./components/downNavBar";
import TopNavBar from "./components/topNavBar";
import Testboot from "./test";
import googlelogo from "./image/googlelogo.png"
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="App">
        <TopNavBar />
        <img id="logo" src={googlelogo} alt="googlelogo"></img>
        <SearchBar />
        {/* <Testboot /> */}
        <DownNavBar />
      </div>
    </>
  );
}

export default App;
