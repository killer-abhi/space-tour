import "../navbar/navbar.css";
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";
import { useEffect, useState } from "react";


function Navbar(props) {

    // console.log(props.active)
    const [isExpanded, setisExpanded] = useState(false);
    // const [isActive,setisActive]=useState([0,0,0,0]);

    const handleNavigation = (id) => {
        if (isExpanded) {
            setisExpanded(false);
        }
        else {
            setisExpanded(true);
        }
        console.log(isExpanded);
        props.sendData(id);

    }
    const toggleActive=(id)=>{
        // console.log(id)
        props.sendData(id);

        var elements = document.getElementsByClassName("link");
        for (let i = 0; i < 4; i++) {
            if (i === id) {
                elements[i]?.classList.add("active");
            }
            else {
                elements[i]?.classList.remove("active");
            }
        }

    }
    let url = useLocation().pathname;
    let path = url.split('space-tour/')[1];
    let routes = ["", "home", "destination", "crew", "technology"];
    if (path === ''||path===routes[1]) {
        toggleActive(0);
    }
    else if(path===routes[2])
    {
        toggleActive(1);
    }
    else if(path===routes[3])
    {
        toggleActive(2);
    }
    else if(path===routes[4])
    {
        toggleActive(3);
    }
    useEffect(() => {
        toggleActive(0)
    }, []);
    return (
        <main>
            <div className="navbar">
                <div className="logo">
                    <p id="logo-img"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg></p>
                    <hr id="hr" />
                </div>
                <div className="icono">
                    <p id="open" onClick={() => handleNavigation(3)} style={{ isExpanded } ? { display: "block" } : { display: "none" }} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg></p>
                </div>
                <div className="nav-area">
                    <div className="navigate">
                        <Link to="space-tour/home" className="link" ><strong> 00</strong> &nbsp; HOME</Link>
                        <Link to="space-tour/destination" className="link" ><strong> 01</strong> &nbsp; DESTINATON</Link>
                        <Link to="space-tour/crew" className="link" ><strong> 02</strong> &nbsp; CREW</Link>
                        <Link to="space-tour/technology" className="link" ><strong> 03</strong> &nbsp; TECHNOLOGY</Link>
                        <p id="abhi">@ Abhishek Kumar</p>

                    </div>
                </div>
            </div>
            <div className='wrapper'  >
                <div className={!isExpanded ? `mobile-nav ` : `mobile-nav toggle`}>
                    <div className="overlay">
                        <p id="close" onClick={() => handleNavigation(0)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" /><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" /></g></svg></p>
                        <Link to="space-tour/home" className="link" onClick={() => handleNavigation(0)}><strong> 00</strong> &nbsp; HOME</Link>
                        <Link to="space-tour/destination" className="link" onClick={() => handleNavigation(1)}><strong> 01</strong> &nbsp; DESTINATON</Link>
                        <Link to="space-tour/crew" className="link" onClick={() => handleNavigation(2)}><strong> 02</strong> &nbsp; CREW</Link>
                        <Link to="space-tour/technology" className="link" onClick={() => handleNavigation(3)}><strong> 03</strong> &nbsp; TECHNOLOGY</Link>
                        <p id="abhi">@ Abhishek Kumar</p>
                        
                        
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Navbar;