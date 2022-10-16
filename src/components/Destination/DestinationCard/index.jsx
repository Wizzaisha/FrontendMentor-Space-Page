import "./DestinationCard.css";
import data from "../../../data.json";
import SlideBar from "../../SlideBar";


export default function DestinationCard ({destiny, getDestiny}) {

    const findDestiny = data.destinations.find(i => i.name.toUpperCase() === destiny.toUpperCase());
    const arrData = data.destinations.map(e => e.name.toUpperCase());


    let styleDestBar = {
        bar: {
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            padding: "0",
        },
        link: {
            color: "#ffffff",
            textDecoration: "underline 3px solid #ffffff",
            textUnderlineOffset: "15px"
        }
    }

    return (  
        findDestiny &&
            <div className="destinyCard">
                <img src={findDestiny.images.png} alt="destiny-img" className="cardImg" />
                <div className="infoCardDestiny">
                    
                    <SlideBar 
                        arrData={arrData}
                        handleNavBar={getDestiny}
                        currentData={destiny.toUpperCase()}
                        hoverType="line"
                        styleBar={styleDestBar}
                    />

                    <h2 className="heading2 destTitle">{findDestiny.name.toUpperCase()}</h2>
                    <p>{findDestiny.description}</p>
                    <hr className="destinyHr"/>
                    <div className="subInfo">
                        <div>
                            <p className="subheading2">AVG.DISTANCE</p>
                            <p className="subheading1">{findDestiny.distance.toUpperCase()}</p>
                        </div>
                        <div>
                            <p className="subheading2">EST.TRAVEL TIME</p>
                            <p className="subheading1">{findDestiny.travel.toUpperCase()}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}