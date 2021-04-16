import "./Header.scss";
import Burger from "../../../images/hamburger-menu.svg";
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Hamburger() {
    const [dropdownState, setDropdownState] = useState(false)

    const toggleDropdown = (e:React.MouseEvent<any>) => setDropdownState(!dropdownState)

    const closeMobileMenu = (e:React.MouseEvent<any>) => setDropdownState(false)
    
    return (
        <div className="hamburger">
            <button className="burger-container" onClick={ toggleDropdown }>
                <img src={Burger}>

                </img>
            </button>
            <ul className={ dropdownState ? "dropdown active" : "dropdown"}>
                <li>
                    <Link to='/' onClick={ closeMobileMenu }>Join</Link>
                </li>
                <li>
                    <Link to='/join' onClick={ closeMobileMenu }>Join</Link>
                </li>
                <li>
                    <Link to='/login' onClick={ closeMobileMenu }>Login</Link>
                </li>
                <li>
                    <Link to='/t/' onClick={ closeMobileMenu }>Topics</Link>
                </li>
            </ul>
        </div>
    )
}
