import { Link } from "react-router-dom";
import "./NotFoundRoute.css";

export default function NotFoundRoute () {


    return (
        <div className="notFoundContainer">
            <h1 className="heading1 ntTitle">There's nothing here!</h1>
            <Link to={"/"} className="btnBack">Go Home</Link>
        </div>
    )
}