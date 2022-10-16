import "../home/home.css";
import{
    Link, useLocation
} from "react-router-dom";
function Home() {
    return (
        <div id="wrapper">
            <div id="content">
                <p id="text1">SO, YOU WANT TRAVEL TO</p>
                <p id="text2">SPACE</p>
                <p id="text3">Let's face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we'll give you a truly out of this world experience!</p>
            </div>
            <div className="explore">
                <Link to="destination"><button className="btn">EXPLORE</button></Link>
            </div>
        </div>
    )
}
export default Home;