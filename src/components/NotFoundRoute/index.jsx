import { Link } from "react-router-dom";
import "./NotFoundRoute.css";

export default function NotFoundRoute () {


    return (
        <div className="notFoundContainer">
            <p className="heading1 ntTitle">There's nothing here!</p>
            <Link to={"/"} className="btnBack">Go Home</Link>
        </div>
    )
}