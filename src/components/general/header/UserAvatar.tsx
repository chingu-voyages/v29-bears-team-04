import React from "react";
import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import { logoutUser } from "../../../redux/users/userActions"
import { useDispatch } from 'react-redux'


type Props = {
    source: string,
    cls: string,
    drops: AvatarProps[];
}

enum DropDownClass {
    DISPLAY = "absolute top-12 right-1 bg-black rounded-lg",
    HIDE = "hidden",
}


type AvatarProps = {
    text: string;
    path: string;
};


export default function UserAvatar ({ source, cls, drops }: Props) {

    const [toggle, setToggle] = useState<Boolean>(false);
    const emptyDiv = document.createElement('div')
    const buttonRef = useRef(emptyDiv)

    const dispatch = useDispatch()

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick)
    }, [])

    
    const handleAvatarClick = (e:React.SyntheticEvent) => {
        e.preventDefault()
        console.log("avatar clicked")
        setToggle(!toggle)
    }

    const handleOutsideClick = (e:any) => {
        const node = buttonRef.current
        if (!node.contains(e.target)) {
            setToggle(false)
        }
    }

    const handleLogout = (e:React.SyntheticEvent) => {
        e.preventDefault()
        dispatch(logoutUser())
    }

    
    return (
        <div className={`relative block w-12 pl-2 object-contain ${cls}`} onClick={handleAvatarClick} ref={buttonRef} >
            <img src={ source } alt="alt-text" className="rounded-full cursor-pointer"  ></img>
            <ul className={toggle ? DropDownClass.DISPLAY : DropDownClass.HIDE}>
                    <div className="relative text-white z-10">
                        <div className="bg-black w-4 h-4 absolute origin-bottom-right transform rotate-45 right-3" />
                        {drops.map((item, index) => (
                            <li className="block w-56 pl-3 py-3 hover:text-gray-500 transition duration-100 ease-in-out">
                                <Link key={index} to={item.path}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li className="block w-56 pl-3 py-3 hover:text-gray-500 transition duration-100 ease-in-out">
                                <button onClick={ handleLogout }>
                                    Log Out
                                </button>
                            </li>
                    </div>
                </ul>
        </div>
        
    )
}