import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../images/HamburgerMenu";
import { useSelector, RootStateOrAny } from "react-redux";
import { logoutUser, clearHistory } from "../../../redux/users/userActions";
import { useDispatch } from 'react-redux'

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
    const user = useSelector((state: RootStateOrAny) => state.user);
    const dispatch = useDispatch()
    
    const handleLogout = (e:React.SyntheticEvent) => {
        dispatch(logoutUser())
        dispatch(clearHistory())
        setToggle(!toggle)
        console.log('logout clicked')
    }

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
                        <li className="block w-56 pl-3 py-3">
                            {Object.keys(user.currentUser).length === 0 ?  <Link to={"/login"} >Login</Link> : <Link to={"/"} onClick={ handleLogout } >Logout</Link>}  
                        </li>
                    </div>
                </ul>
            </div>
        </>
    );
}
