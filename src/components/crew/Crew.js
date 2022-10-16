import React from "react";
import { useState, useEffect } from "react";
import CrewData from "./CrewData";
import "./crew.css";

import img01 from "../assets/crew/image-douglas-hurley.png"
import img02 from "../assets/crew/image-mark-shuttleworth.png"
import img03 from "../assets/crew/image-victor-glover.png"
import img04 from "../assets/crew/image-anousheh-ansari.png"

export default function Crew() {

  let images = [img01, img02, img03, img04];
  let [member, setMember] = useState(CrewData[0]);
  let [img, setImg] = useState(images[0]);
  const handleChange = (id) => {
    let members = document.getElementsByClassName("circle");
    let k=0;
    for (let i = 0; i < 8; i++) {
      console.log(members);
      if(i>3){
        k=id+3;
      }

      if (i === id||i===(id+4)) {
        members[i].classList.add("show");
        setMember(CrewData[id]);
        setImg(images[id]);
      }
      else {
        members[i].classList.remove("show");
      }
    }
  }
  useEffect(() => {
    handleChange(0)
  }, []);

  return (
    <main>
      <div className="CrewCard">
        <div className="left">
          <div className="header">
            <strong id="code">{member.id}</strong> &nbsp;MEET YOUR CREW
          </div>
          <div className="pic-mob">
            <div id="pic"><img src={img} alt="" srcset="" /></div>
              <hr id="hr"/>
          </div>
          <div className="mob-slider">
            <div className="circle" onClick={() => handleChange(0)}></div>
            <div className="circle" onClick={() => handleChange(1)}></div>
            <div className="circle" onClick={() => handleChange(2)}></div>
            <div className="circle" onClick={() => handleChange(3)}></div>
          </div>
          <div id="post">{member.post}</div>
          <div id="name">{member.name}</div>
          <div id="info">{member.info}</div>
          <div className="pc-slider">
            <div className="circle" onClick={() => handleChange(0)}></div>
            <div className="circle" onClick={() => handleChange(1)}></div>
            <div className="circle" onClick={() => handleChange(2)}></div>
            <div className="circle" onClick={() => handleChange(3)}></div>
          </div>
        </div>
        <div className="picture">
          <div id="pic"><img src={img} alt="" srcset="" /></div>
        </div>
      </div>
    </main>

  )
}