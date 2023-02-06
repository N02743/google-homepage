import "./App.css";
import DownNavBar from "./components/downNavBar";
import TopNavBar from "./components/topNavBar";
import Testboot from "./test";
import googlelogo from "./image/googlelogo.png"

function App() {
  return (
    <>
      <div className="App">
        <TopNavBar />
        <img id="logo" src={googlelogo} alt="googlelogo"></img>
        {/* <Testboot /> */}
        <h1>Search bar</h1>
        <h1>search button</h1>
        <DownNavBar />
      </div>
    </>
  );
}

export default App;
