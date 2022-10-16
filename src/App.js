import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Technology from "./components/technology/Technology";
import Crew from "./components/crew/Crew";
import Destination from "./components/destination/Destination";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation
} from "react-router-dom";

function App() {

  const [childData, setChildData] = useState(0);
  const handleCallback = (childData) => {

    setChildData(childData);

    let bg = document.getElementsByTagName("BODY")[0];
    bg.className = "bg-props";
    let classes = ["home-bg", "destination-bg", "crew-bg", "technology-bg"]
    // console.log(childData);
    let newclass = classes[childData];
    bg.classList.add(newclass);
  }

  return (
    <div id='App'>
      <Router>
        <Navbar sendData={handleCallback} />
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
