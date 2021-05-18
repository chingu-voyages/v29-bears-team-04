import {useSelector, RootStateOrAny} from 'react-redux'
import { useEffect } from 'react'
import { useLocation } from "react-router-dom";


export default function Profile() {
    const user = useSelector((state: RootStateOrAny) => state.user);
    const location = useLocation()
    // const tabBar = document.querySelector("#root > div > div.block > div.px-2.pt-2.shadow-md.flex.justify-between")

    // useEffect(() => {
    //     if (tabBar) {
    //         tabBar.className += " hidden"
    //     }
    // })

    return (
        <div>
            Welcome, {user.currentUser.name || "user"}
        </div>
    )
}
