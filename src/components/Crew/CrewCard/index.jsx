import "./CrewCard.css";
import data from "../../../data.json";
import SlideBar from "../../SlideBar";

export default function CrewCard ({ crewIndex, getCrew }) {

    const findCrew = data.crew[crewIndex];


    let styleCrewBar = {
        bar: {
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            padding: "0",
            color: "rgba(52, 52, 52, 0.84)",
            margin: "0"
        },
        link: {
            color: "#ffffff",
        }
    }

    return (
        findCrew && 
            <div className="infoCardCrew">
                <div className="textCrew">
                    <p className="heading4 crewSubtitle">{findCrew.role.toUpperCase()}</p>
                    <p className="heading3 crewTitle">{findCrew.name.toUpperCase()}</p>
                    <p className="textCrewBio">{findCrew.bio}</p>
                    <div className="slideCrew">
                        <SlideBar 
                            arrData={Array.from({length: data.crew.length}, (v, i) => i)}
                            styleBar={styleCrewBar}
                            handleNavBar={getCrew}
                            currentData={crewIndex}
                            hoverType={"point"}
                        />
                    </div>
                </div>
                <div className="crewImg">
                    <img src={findCrew.images.png} alt="crew"/>
                </div>
            </div>
    )
}


