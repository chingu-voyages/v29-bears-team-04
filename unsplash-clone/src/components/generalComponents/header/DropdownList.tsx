import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function DropdownList(...setDropdownState:any) {
    const closeMobileMenu = (e:React.MouseEvent<any>) => setDropdownState(false)
    console.log(setDropdownState)
    return (
        <>
                <li>
                    <Link to='/' onClick={ closeMobileMenu }>Home</Link>
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
            </>
    )
}
