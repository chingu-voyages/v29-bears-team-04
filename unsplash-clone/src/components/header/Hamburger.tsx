import "./Header.scss";
import Burger from "../../images/hamburger-menu.svg";
import { useState } from 'react'


export default function Hamburger() {
    const [dropdownState, setDropdownState] = useState("dropdown-hidden")

    const toggleDropdown = (e:React.MouseEvent<any>) => {
        dropdownState === "dropdown-hidden" ? setDropdownState("dropdown-visible") : setDropdownState("dropdown-hidden")
    }
    return (
        <div className="hamburger">
            <button className="burger-container" onClick={ toggleDropdown }>
                <img src={Burger}>

                </img>
            </button>
            <div className={ dropdownState }>

            </div>
        </div>
    )
}
