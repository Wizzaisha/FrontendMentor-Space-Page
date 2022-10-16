import { useState } from "react";
import "./Crew.css";
import CrewCard from "./CrewCard";
import data from "../../data.json";

export default function Crew () {

    const initialIndex = data.crew.findIndex(e => e.name === data.crew[0].name);

    const [crewIndex, setCrew] = useState(initialIndex);

    function getCrew(name) {
        setCrew(name);
    }

    return (
        <div className="bodyContent" style={{paddingBottom: "0"}}>
            <h3 className="heading4"><span className="numberTitle">02</span> MEET YOUR CREW</h3>
            <CrewCard 
                crewIndex={crewIndex} 
                getCrew={getCrew}
            />
        </div>
    )
}