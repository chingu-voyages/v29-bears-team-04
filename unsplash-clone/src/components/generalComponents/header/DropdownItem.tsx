import { Link } from 'react-router-dom'

export default function DropdownItem(props:any) {
    const {title, path, closeMobileMenu} = props;
    return (
        <li >
            <Link to={path} onClick={ closeMobileMenu } >{title}</Link>
        </li>
    )
}
