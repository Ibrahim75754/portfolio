import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import ShavenDetails from './components/ProjectDetails/ShavenDetails';
import TravelBD from './components/ProjectDetails/TravelBD';
import Blog from './components/Blog/Blog';
import PureSmile from './components/ProjectDetails/PureSmile';


function App() {
  return (
    <div className="App" style={{ backgroundColor: "#212529", color: "white", minHeight: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="shavenDetails" element={<ShavenDetails />} />
          <Route path="travelBD" element={<TravelBD />} />
          <Route path="pureSmile" element={<PureSmile />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
