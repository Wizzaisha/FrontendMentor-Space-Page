import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "./NavBar.css";


export default function NavBar() {

    const [showMenu, setShowMenu] = useState(false);

    const location = useLocation();

    const [hover, setHover] = useState({
        destination: false,
        home: false,
        crew: false,
        technology: false
    });

    function handleMouseOver (name) {
        setHover({
            ...hover,
            [name]: true
        });
    }

    function handleMouseOut (name) {
        setHover({
            ...hover,
            [name]: false
        });
    }
    

    return (
        <div className="navContainer">

            <img src="/assets/shared/logo.svg" alt="logo" className="logoNav"/>
            
            {!showMenu &&
                <img src="/assets/shared/icon-hamburger.svg" alt="hamburger-icon" className={`hamburgerIcon ${!showMenu ? "displayHamburger" : null}`} onClick={() => setShowMenu(!showMenu)} />
            }
            <div className={`navSubContainer ${!showMenu ? "displayMenu" : null}`}>
                <div className="lineNav"><hr /></div>

                <div className="navBarContainer">
                    <img src="/assets/shared/icon-close.svg" alt="closeIcon" className={`closeIcon ${!showMenu ? "displayClose" : null}`} onClick={() => setShowMenu(false)} />
                    <ul className="navbar">
                        <div className="links">
                            <Link onMouseOver={() => handleMouseOver("home")} onMouseOut={() => handleMouseOut("home")} to={"/"} className={`navLink navText`}><span className="numNav"><b>00</b></span> HOME</Link>
                            {location.pathname === "/" ? <hr className={`activeLink`}/> : null}
                            {hover.home && location.pathname !== "/" ? <hr className={`activeLink2`}/> : null}
                        </div>
                        <div className="links">
                            <Link onMouseOver={() => handleMouseOver("destination")} onMouseOut={() => handleMouseOut("destination")} to={"/destination"} className={`navLink navText`}><span className="numNav"><b>01</b></span> DESTINATION</Link>
                            {location.pathname === "/destination" ? <hr className={`activeLink`}/> : null}
                            {hover.destination && location.pathname !== "/destination" ? <hr className={`activeLink2`}/> : null}
                        </div>
                        <div className="links">
                            <Link onMouseOver={() => handleMouseOver("crew")} onMouseOut={() => handleMouseOut("crew")} to={"/crew"} className={`navLink navText `}><span className="numNav"><b>02</b></span> CREW</Link>
                            {location.pathname === "/crew" ? <hr className={`activeLink`}/> : null}
                            {hover.crew && location.pathname !== "/crew" ? <hr className={`activeLink2`}/> : null}
                        </div>
                        <div className="links">
                            <Link onMouseOver={() => handleMouseOver("technology")} onMouseOut={() => handleMouseOut("technology")} to={"/technology"} className={`navLink navText `}><span className="numNav"><b>03</b></span> TECHNOLOGY</Link>
                            {location.pathname === "/technology" ? <hr className={`activeLink`}/> : null}
                            {hover.technology && location.pathname !== "/technology" ? <hr className={`activeLink2`}/> : null}
                        </div>
                    </ul>
                </div>

            </div>
            


        </div>
    )
}