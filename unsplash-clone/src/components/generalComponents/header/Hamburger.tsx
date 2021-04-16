import "./Header.scss";
import Burger from "../../../images/hamburger-menu.svg";
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DropdownList from './DropdownList';


export default function Hamburger() {
    const [dropdownState, setDropdownState] = useState(false)

    const [loggedIn, setLoggedIn] = useState(false)

    const toggleDropdown = (e:React.MouseEvent<any>) => setDropdownState(!dropdownState)

  

    



    
    return (
        <div className="hamburger">
            
            <button className="burger-container" onClick={ toggleDropdown }>
                <img src={Burger}>

                </img>
            </button>
            <ul className={ dropdownState ? "dropdown active" : "dropdown"}>
                {dropdownState ? < DropdownList setDropdownState={setDropdownState}/> : null}
                
            </ul>
        </div>
    )
}
