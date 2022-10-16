import React, { useEffect, useState } from "react";
import "./destination.css"
import Data from "./Data"
import img01 from "../assets/destination/image-moon.png";
import img02 from "../assets/destination/image-mars.png";
import img03 from "../assets/destination/image-europa.png";
import img04 from "../assets/destination/image-titan.png";
export default function Destination() {

  // let destination=Data[0];
  let images = [img01, img02, img03, img04];
  let [destination, setDestination] = useState(Data[0]);
  let [img, setImg] = useState(images[0]);
  const toggleActive = (id) => {
    let elements = document.getElementsByClassName("destLink");
    for (let i = 0; i < 4; i++) {
      // console.log(elements);
      if (i === id) {
        elements[i].classList.add("active");
        setDestination(Data[id]);
        setImg(images[id]);
      }
      else {
        elements[i].classList.remove("active");
      }
    }
  }
  useEffect(()=>{
    toggleActive(0)
},[]);
  return (
    <main>
      <div className="destinations">
        <div className="pic-wrapper">
          <div className="pic-header">
            <span id="code">{destination.id}</span>&nbsp;<strong> PICK YOUR DESTINATION</strong>
          </div>
          <div className="pic rotate">
            {<img src={img} alt="SOON"/>}
          </div>
        </div>
        <div className="card">
          <div className="navs">
            <div id="dest1" className="destLink" onClick={() => toggleActive(0)}>{Data[0].title}</div>
            <div id="dest2" className="destLink" onClick={() => toggleActive(1)}>{Data[1].title}</div>
            <div id="dest3" className="destLink" onClick={() => toggleActive(2)}>{Data[2].title}</div>
            <div id="dest4" className="destLink" onClick={() => toggleActive(3)}>{Data[3].title}</div>
          </div>
          <div className="title">
            {destination.title}
          </div>
          <div className="content">
            {destination.content}
          </div>
            <hr id="hr2"/>
          <div className="footer">
            <div className="distance">
              <p id="subTitle">Avg Dist :</p>
              <p id="value">{destination.avgDist}</p>
            </div>
            <div className="travelTime">

              <p id="subTitle">Est.Travel Time :</p>
              <p id="value">{destination.travelTime}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}