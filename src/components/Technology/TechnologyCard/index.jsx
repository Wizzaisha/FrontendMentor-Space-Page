import "./TechnologyCard.css";

import data from "../../../data.json";
import SlideBar from "../../SlideBar";
import { useEffect, useState } from "react";


function getWindowSize () {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };           
}

export default function TechnologyCard ({currDataIndex, getTech}) {

    const [windowSize, setWindowSize] = useState(getWindowSize());


    useEffect(() => {
        function handleWindowResize () {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
    }, [])
    
    const findTech = data.technology[currDataIndex - 1];


    let styleTechBar = {
        bar: {
            display: "flex",
            flexDirection: `${windowSize.innerWidth > 1200 ? "column" : "row" }`,
            gap: "1rem",
            padding: "0",
            color: "#ffffff", 
            margin: "0",
        },
        link: {
            backgroundColor: "#ffffff",
            color: "#0b0d17"
        }
    }

    return (
        <div className="techCard">
            {findTech &&
            <>  
                <div className="navAndInfo">
                    <div className="techNavBar">
                        <SlideBar 
                            arrData={Array.from({length: data.technology.length}, (v, i) => i + 1)}
                            handleNavBar={getTech}
                            currentData={currDataIndex}
                            hoverType="number"
                            styleBar={styleTechBar}
                        />
                    </div>
                    <div className="infoTech">
                        <p className="heading5">THE TERMINOLOGY...</p>
                        <p className="heading3">{findTech.name.toUpperCase()}</p>
                        <p>{findTech.description}</p>
                    </div>
                </div>
                <div className="imgTech">
                    <img src={windowSize.innerWidth > 1200 ? findTech.images.portrait : findTech.images.landscape} alt="tech" />
                </div>
            </> 

            }
        </div>
    )
}