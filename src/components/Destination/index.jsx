import { useState } from "react";
import "./Destination.css";
import DestinationCard from "./DestinationCard";
import data from "../../data.json";


export default function Destination() {

    const [destiny, setDestiny] = useState(data.destinations[0].name);

    function getDestiny (name) {
        setDestiny(name);
    }

    return (
        <div className="bodyContent">
            <h3 className="heading4 locTitle"><span className="numberTitle">01</span> PICK YOUR DESTINATION</h3>
            
            <div>
                
                <DestinationCard destiny={destiny} getDestiny={getDestiny}/>
            </div>

        </div>
    )
}