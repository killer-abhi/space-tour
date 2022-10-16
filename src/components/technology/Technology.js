import React from "react";
import { useState, useEffect } from "react";
import "./technology.css";
import Data from "./Data"
import img02 from "../assets/technology/image-spaceport-landscape.jpg";
import img03 from "../assets/technology/image-space-capsule-landscape.jpg";
import img01 from "../assets/technology/image-launch-vehicle-landscape.jpg";


export default function Technology(props) {

    let images = [img01, img02, img03];
    let [techno, setTechno] = useState(Data[0]);
    let [img, setImg] = useState(images[0]);
    const toggleActive = (id) => {
        let elements = document.getElementsByClassName("techno-nav");
        // console.log(elements);
        let k=0;
        for (let i = 0; i < 6; i++) {
            if (i === id||(i-3)===id) {
                elements[i].classList.add("techno-active");
                setTechno(Data[id]);
                setImg(images[id]);
            }
            else {
                elements[i].classList.remove("techno-active");
            }
            k++;
        }
    }
    useEffect(() => {
        toggleActive(0)
    }, []);
    return (
        <main>
            <div className="technology">
                <div className="text">
                    <strong id="code">{techno.id}</strong>&nbsp;
                    SPACE LAUNCH 101
                </div>
                <div className="mob-technopic">
                    <img src={img} alt="ready" />
                </div>
                <div className="mob-techno-slider">
                    <div className="techno-nav" onClick={() => toggleActive(0)}>1</div>
                    <div className="techno-nav" onClick={() => toggleActive(1)}>2</div>
                    <div className="techno-nav" onClick={() => toggleActive(2)}>3</div>
                </div>
                <div className="techno-card">
                    <div className="techno-slider">
                        <div className="techno-nav" id = '0' onClick={() => toggleActive(0)}>1</div>
                        <div className="techno-nav" id = '1' onClick={() => toggleActive(1)}>2</div>
                        <div className="techno-nav" id = '2' onClick={() => toggleActive(2)}>3</div>
                    </div>
                    <div className="technoContent">
                        <p id="termino">THE TERMINOLOGY . . .</p>
                        <p id="name">{techno.name}</p>
                        <p id="desc">
                            {techno.desc}
                        </p>
                    </div>
                    <div className="technopic">
                        <img src={img} alt="ready" />
                    </div>
                </div>
            </div>
        </main>
    )
}