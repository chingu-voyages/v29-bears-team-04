import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../images/HamburgerMenu";

type HamburgerDrops = {
    text: string;
    path: string;
};

type Props = {
    drops: HamburgerDrops[];
};

enum DropDownClass {
    DISPLAY = "absolute top-12 right-1 bg-black rounded-lg",
    HIDE = "hidden",
}

export default function HamburgerDropdown({ drops }: Props) {
    const [toggle, setToggle] = useState<Boolean>(false);

    return (
        <>
            <div className="relative block">
                <button
                    className="focus:outline-none align-center px-2"
                    onClick={() => setToggle(!toggle)}
                >
                    <HamburgerMenu width={25} height={25} cls="mt-1" />
                </button>

                <ul className={toggle ? DropDownClass.DISPLAY : DropDownClass.HIDE}>
                    <div className="relative text-white">
                        <div className="bg-black w-4 h-4 absolute origin-bottom-right transform rotate-45 right-3" />
                        {drops.map((item, index) => (
                            <li className="block w-56 pl-3 py-3">
                                <Link key={index} to={item.path}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </>
    );
}
