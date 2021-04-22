import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HamburgerDropdown from "./HamburgerDropdown";
import SearchBar from "./SearchBar";
import UnsplashLogo from "../images/UnsplashLogo";

enum DisplayClass {
    DISPLAY = "flex py-2 px-2 justify-between",
    HIDE = "hidden",
}

export default function Header() {
    const location = useLocation();
    const [displayHeader, setDisplayHeader] = useState(DisplayClass.DISPLAY);

    useEffect(() => {
        location.pathname === "/login" || location.pathname === "/register"
            ? setDisplayHeader(DisplayClass.HIDE)
            : setDisplayHeader(DisplayClass.DISPLAY);
    },[location]);

    return (
        <div className={displayHeader}>
            <Link to="/">
                <div className="flex">
                    <UnsplashLogo width={40} height={40} cls="pr-3" />
                    <div className="flex-col hidden lg:block">
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
