import {useSelector, RootStateOrAny} from 'react-redux'


export default function MyAccount() {
    const user = useSelector((state: RootStateOrAny) => state.user);

    return (
        <div>
            Welcome to your account, {user.currentUser.name || "user"}
        </div>
    )
}
