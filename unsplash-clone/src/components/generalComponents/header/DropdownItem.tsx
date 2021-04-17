import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    title:string;
    path:string;
    closeMobileMenu: (e:React.MouseEvent<any>) => void
}

export default function DropdownItem({title, path, closeMobileMenu}:Props) {
    return (
        <li >
            <Link to={path} onClick={ closeMobileMenu } >{title}</Link>
        </li>
    )
}
