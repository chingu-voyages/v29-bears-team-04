import "./Header.scss";
import Unsplash_logo from "../../../images/Unsplash_logo.svg";
import SearchBar from "./SearchBar";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <Link to="/">
            <div className="logo-container">
                <img src={Unsplash_logo} alt="logo" />
            </div>
            </Link>
            <SearchBar />
            <Hamburger />
        </div>
    );
}
