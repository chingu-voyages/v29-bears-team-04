import { Link } from 'react-router-dom'

export default function DropdownItem(props:any) {
    const {title, path, closeMobileMenu, index} = props;
    return (
        <li key={index.toString()}>
            <Link to={path} onClick={ closeMobileMenu } >{title}</Link>
        </li>
    )
}
