import { Link } from "react-router-dom";
import HamburgerDropdown from "./HamburgerDropdown";
import SearchBar from "./SearchBar";
import UnsplashLogo from "../images/UnsplashLogo";

export default function Header() {
    return (
        <div className="flex py-2 px-2">
            <Link to="/">
                <div className="flex">
                    <UnsplashLogo width={40} height={40} cls="pr-3" />
                    <div className="flex flex-col hidden lg:block" >
                        <p>Unsplash</p>
                        <p>Photos from everyone</p>
                    </div>
                </div>
            </Link>
            <SearchBar />
            <HamburgerDropdown />
        </div>
    );
}
