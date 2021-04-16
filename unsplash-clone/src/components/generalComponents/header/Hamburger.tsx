import "./Header.scss";
import Burger from "../../../images/hamburger-menu.svg";
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DropdownItems from './DropdownItems';
import DropdownItem from './DropdownItem'


export default function Hamburger() {
    const [dropdownState, setDropdownState] = useState(false)

    const [loggedIn, setLoggedIn] = useState(false)

    const toggleDropdown = (e:React.MouseEvent<any>) => setDropdownState(!dropdownState);

    const closeMobileMenu = (e:React.MouseEvent<any>) => setDropdownState(false);

  

    



    
    return (
        <div className="hamburger">
            <button className="burger-container" onClick={ toggleDropdown }>
                <img src={Burger}>

                </img>
            </button>
            <ul className={ dropdownState ? "dropdown active" : "dropdown"}>
                {dropdownState? DropdownItems.map((item, index) => {
                    return <DropdownItem {...item} closeMobileMenu={closeMobileMenu} index={index}/>
                }) : null}
            </ul>
        </div>
    )
}
