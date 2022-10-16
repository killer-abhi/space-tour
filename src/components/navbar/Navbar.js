import "../navbar/navbar.css";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { useEffect, useState } from "react";


function Navbar(props) {

    const [isExpanded, setisExpanded] = useState(false);
    const [isActive,setisActive]=useState([0,0,0,0]);

    function handleNavigation() {
        if (isExpanded) {
            setisExpanded(false);
        }
        else {
            setisExpanded(true);
        }
        console.log(isExpanded);

    }
    function toggleActive(id) {
        // console.log(id)
        props.sendData(id);
        if (isActive) {
            setisActive(false);
        }
        else {
            setisActive(true);
        }
        
        var elements=document.getElementsByClassName("link");
        for(let i=0;i<4;i++){
            if(i===id){
                elements[i].classList.add("active");
            }
            else{
                elements[i].classList.remove("active");
            }
        }

    }
    useEffect(()=>{
        toggleActive(0)
    },[]);
    return (
        <main>
            <div className="navbar">
                <div className="logo">
                    <p id="logo-img"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg></p>
                    <hr id="hr"/>
                </div>
                <div className="icono">
                    <p id="open" onClick={handleNavigation} style={{ isExpanded } ? { display: "block" } : { display: "none" }} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg></p>
                </div>
                <div className="nav-area">
                    <div className="navigate">
                        <Link to="/home" className="link" id="page01" onClick={()=>toggleActive(0)}><strong> 00</strong> &nbsp; HOME</Link>
                        <Link to="/destination" className="link" id="page02" onClick={()=>toggleActive(1)}><strong> 01</strong> &nbsp; DESTINATON</Link>
                        <Link to="/crew" className="link" id="page03" onClick={()=>toggleActive(2)}><strong> 02</strong> &nbsp; CREW</Link>
                        <Link to="/technology" className="link"id="page04" onClick={()=>toggleActive(3)}><strong> 03</strong> &nbsp; TECHNOLOGY</Link>
                    </div>
                </div>
            </div>
            <div className='wrapper'  >
                <div className={!isExpanded ? `mobile-nav ` : `mobile-nav toggle`}>
                    <div className="overlay">
                        <p id="close" onClick={handleNavigation}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" /><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" /></g></svg></p>
                        <Link to="/home" className="link"  onClick={handleNavigation}><strong> 00</strong> &nbsp; HOME</Link>
                        <Link to="/destination" className="link" onClick={handleNavigation}><strong> 01</strong> &nbsp; DESTINATON</Link>
                        <Link to="/crew" className="link" onClick={handleNavigation}><strong> 02</strong> &nbsp; CREW</Link>
                        <Link to="/technology" className="link" onClick={handleNavigation}><strong> 03</strong> &nbsp; TECHNOLOGY</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Navbar;