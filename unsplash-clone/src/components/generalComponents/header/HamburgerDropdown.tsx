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
            <div className="">
                    <button className="burger-container focus:outline-none" onClick={toggleDropdown}>
                        <HamburgerMenu width={30} height={30} cls="h-full w-full py-2"/>
                    </button>
                    <div className={dropdownState ? "dropdown active rounded bg-black absolute right-0 px-2 py-1 m-2 transition ease-in duration-100" : "dropdown"}>
                    <ul>
                        {dropdownState
                            ? DropdownItems.map((item, index) => (
                                  <li className="block text-white px-4 py-1">
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
