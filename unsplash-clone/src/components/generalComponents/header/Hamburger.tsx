import "./Header.scss";
import Burger from "../../../images/hamburger-menu.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const DropdownItems = [
    {
        title: "Home",
        path: "/",
    },

    {
        title: "Join",
        path: "/join",
    },

    {
        title: "Login",
        path: "/login",
    },

    {
        title: "Topics",
        path: "/t/",
    },
];

export default function Hamburger() {
    const [dropdownState, setDropdownState] = useState<Boolean>(false);

    const toggleDropdown = (e: React.MouseEvent<any>) => setDropdownState(!dropdownState);

    const closeMobileMenu = (e: React.MouseEvent<any>) => setDropdownState(false);

    return (
        <>
            <div className="hamburger">
                <div className={dropdownState ? "dropdown active" : "dropdown"}>
                    <button className="burger-container" onClick={toggleDropdown}>
                        <img src={Burger} alt="dropdown icon"></img>
                    </button>
                    <ul>
                        {dropdownState
                            ? DropdownItems.map((item, index) => (
                                  <li>
                                      <Link
                                          key={index}
                                          to={item.path}
                                          onClick={closeMobileMenu}
                                      >
                                          {item.title}
                                      </Link>
                                  </li>
                              ))
                            : null}
                    </ul>
                </div>
            </div>
        </>
    );
}
