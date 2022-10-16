import "./Home.css";
import { useNavigate } from "react-router-dom";

const homeText = {
    header: "space",
    subheader: "So, you want to travel to",
    auxText: "Let's face it; if you want to go space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!"
}


export default function Home () {

    const navigate = useNavigate();


    return (
        <div className="home">
            <div className="homeContent">
                <h4 className="heading5">{homeText.subheader.toUpperCase()}</h4>
                <h2 className="heading1">{homeText.header.toUpperCase()}</h2>
                <p>{homeText.auxText}</p>
            </div>
            <div className="divButtonHome">
                <button className="homeButton" onClick={() => navigate("/destination")}>EXPLORE</button>
            </div>

        </div>
    )
}

