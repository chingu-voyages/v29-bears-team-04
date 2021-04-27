import UnsplashLogo from "../generalComponents/images/UnsplashLogo";
import FacebookLogo from "../generalComponents/images/FacebookLogo";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux"
import React, { useState, useEffect } from 'react';
import { login } from "../../redux/actions/userActions"
import { getUsers } from "../../redux/actions/usersActions"



export default function Login() {
    const users: any = useSelector((state:RootStateOrAny) => state.users.all)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    })

    interface user {
        id: number;
        name: string;
        email: string
    }

    
    return (
            <div className="login-container flex justify-center align-middle">

                <div className="flex flex-col flex-h-center upper pb-6">
                {users.map((user:user) => {
            return <h1>{user.name}</h1>
        })}
                    <div className="flex-h-center pb-5">
                        <UnsplashLogo width={100} height={100} />
                    </div>
                    <h2 className="login-title">Login</h2>
                    <div>Welcome back.</div>
                <button className="facebook-login">
                    <div className="flex-h-center">
                        <FacebookLogo cls="facebook-logo" width={15} height={15} />
                    </div>
                    <div>Login with Facebook</div>
                </button>

                <form action="">
                    <input type="text" />
                </form>
                </div>
            </div>
    );
}
