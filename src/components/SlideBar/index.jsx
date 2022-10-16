import "./SlideBar.css";

export default function SlideBar ({arrData, handleNavBar, currentData, hoverType, styleBar }) {
    
    return (
        <ul style={styleBar.bar} className="navBarStyles" >
            {arrData && arrData.map((element, index) => {
                return (    
                    <div key={element + index}>
                        <li 
                            className={`navText ${hoverType === "line" ? "hoverLine" : hoverType === "point" ? "hoverPoint pointStyle" : hoverType === "number" ? "hoverNumber numberStyle" : "" }`} 
                            style={currentData === element ? styleBar.link : null} 
                            onClick={() => handleNavBar(element)}
                        >{hoverType === "point" ? <span>&#9679;</span> : element}</li>                    
                    </div>  
                )
            })}
        </ul>
    )
}