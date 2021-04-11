import "./Header.scss";
import Unsplash_logo from "../../images/Unsplash_logo.svg";

import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={Unsplash_logo} alt="logo" />
            </div>
            <SearchBar />
            <div> Hamburger </div>
        </div>
    );
}
