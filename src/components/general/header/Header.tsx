import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HamburgerDropdown from "./HamburgerDropdown";
import SearchBar from "./SearchBar";
import UnsplashLogo from "../images/UnsplashLogo";
import TabBar from "./TabBar";
import UserAvatar from './UserAvatar'
import blankAvatar from "../images/blank-avatar.jpg"
import { useSelector, RootStateOrAny } from "react-redux";


enum DisplayClass {
    DISPLAY = "block",
    HIDE = "hidden",
}

const TabProps = [
    { text: "Trees", path: "/" },
    { text: "Editorial", path: "#editorial" },
    { text: "Trees", path: "#trees" },
    { text: "Editorial", path: "#Editorial" },
    { text: "Trees", path: "#trees" },
    { text: "Editorial", path: "#Editorial" },
    { text: "Trees", path: "#trees" },
    { text: "Editorial", path: "#Editorial" },
];

const HamburgerProps = [
    { text: "About", path: "#About" },
    { text: "Wallpapers", path: "#wallpapers" },
    { text: "Brands", path: "#Brands" },
    { text: "Blog", path: "#Blog" },
    { text: "Collections", path: "#Collections" },
    { text: "Explore", path: "#Explore" },
    { text: "Join", path: "/join" }
];

const AvatarProps = [
    { text: "View Profile", path: "/profile" },
    { text: "Stats", path: "#Stats" },
    { text: "Account Settings", path: "#Settings" }
]

export default function Header() {
    
    const location = useLocation();
    const [displayHeader, setDisplayHeader] = useState(DisplayClass.DISPLAY);
    const [displayUser, setDisplayUser] = useState(DisplayClass.DISPLAY)
    const [displayTab, setDisplayTab] = useState(DisplayClass.DISPLAY)
    const user = useSelector((state: RootStateOrAny) => state.user);

    useEffect(() => {
        location.pathname === "/login" || location.pathname === "/join"
            ? setDisplayHeader(DisplayClass.HIDE)
            : setDisplayHeader(DisplayClass.DISPLAY);
    }, [location]
    
    );

    useEffect(() => {
        user.isLoggedIn ? setDisplayUser(DisplayClass.DISPLAY) : setDisplayUser(DisplayClass.HIDE)
    }, [user.isLoggedIn])

    useEffect(() => {
        location.pathname === "/profile"
            ? setDisplayTab(DisplayClass.HIDE)
            : setDisplayTab(DisplayClass.DISPLAY);
    }, [location]
    )

   



    return (
        <div className={displayHeader}>
            <div className="flex items-center pt-2 px-2 justify-between">
                <Link className="flex" to="/">
                    <UnsplashLogo width={40} height={40} cls="pr-3" />
                    <div className="flex-col hidden md:block">
                        <div>Unsplash</div>
                        <div>Photos from everyone</div>
                    </div>
                </Link>
                <SearchBar />
                <UserAvatar source={ blankAvatar } cls={ displayUser } drops={ AvatarProps }></UserAvatar>
                <HamburgerDropdown drops={HamburgerProps} />
            </div>
            <TabBar tabs={TabProps} cls={displayTab}/>
        </div>
    );
}
