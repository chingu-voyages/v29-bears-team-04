import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../images/HamburgerMenu";

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

export default function HamburgerDropdown() {
    const [dropdownState, setDropdownState] = useState<Boolean>(false);

    const toggleDropdown = (e: React.MouseEvent<any>) => setDropdownState(!dropdownState);

    const closeMobileMenu = (e: React.MouseEvent<any>) => setDropdownState(false);

    return (
        <>
            <div className="align-center">
                <div className={dropdownState ? "dropdown active" : "dropdown"}>
                    <button className="burger-container" onClick={toggleDropdown}>
                        <HamburgerMenu width={30} height={30} />
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
