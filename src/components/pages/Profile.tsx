import {useSelector, RootStateOrAny} from 'react-redux'


export default function Profile() {
    const user = useSelector((state: RootStateOrAny) => state.user);

    return (
        <div>
            Welcome, {user.currentUser.name || "user"}
        </div>
    )
}
