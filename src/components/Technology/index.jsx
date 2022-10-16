import "./Technology.css";

import data from "../../data.json";

import TechnologyCard from "./TechnologyCard";
import { useState } from "react";

export default function Technology() {

    const initialIndex = data.technology.findIndex(e => e.name === data.technology[0].name);

    const [currData, setCurrData] = useState(initialIndex + 1);

    function getTech (name) {
        setCurrData(name);
    }


    return (
        <div className="bodyContent">
            <h3 className="heading4"><span className="numberTitle">03</span> SPACE LAUNCH 101</h3>
            <TechnologyCard 
                currDataIndex={currData}
                getTech={getTech}
            />
        </div>
    )
}