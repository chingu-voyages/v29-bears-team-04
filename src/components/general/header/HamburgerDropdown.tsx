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
    DISPLAY = "absolute top-12 right-1 bg-black",
    HIDE = "hidden",
}

export default function HamburgerDropdown({ drops }: Props) {
    const [toggle, setToggle] = useState<Boolean>(false);

    return (
        <>
            <div className="relative block">
                <button
                    className="focus:outline-none align-center"
                    onClick={() => setToggle(!toggle)}
                >
                    <HamburgerMenu width={40} height={40} cls="py-2" />
                </button>

                <ul className={toggle ? DropDownClass.DISPLAY : DropDownClass.HIDE}>
                    <div className="relative">
                        <div className="bg-black absolute w-4 h-4 origin-bottom-right transform rotate-45 right-3" />
                        {drops.map((item, index) => (
                            <li className="block text-white px-4 py-1">
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
