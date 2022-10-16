import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Technology from "./components/technology/Technology";
import Crew from "./components/crew/Crew";
import Destination from "./components/destination/Destination";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  const handleCallback = (childData) => {
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
            <Route path="space-tour/" element={<Home/>}/>
            <Route path="space-tour/home" element={<Home />} />
            <Route path="space-tour/destination" element={<Destination />} />
            <Route path="space-tour/crew" element={<Crew />} />
            <Route path="space-tour/technology" element={<Technology />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
