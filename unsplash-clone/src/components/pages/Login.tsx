import UnsplashLogo from "../generalComponents/images/UnsplashLogo";
import FacebookLogo from "../generalComponents/images/FacebookLogo";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux"
import React, { useState, useEffect } from 'react';
import { login } from "../../redux/actions/userActions"



export default function Login() {
    const user: any = useSelector((state:RootStateOrAny) => state.user)
    // const useFetching = (login:any) => {
    //     const dispatch = useDispatch()
    
    //     useEffect(() => {
    //     dispatch(login());
    //   }, [])
    // }

    // useFetching(login)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(login())
    })
    return (
            <div className="login-container flex justify-center align-middle">
                <h1>{user.name}</h1>
                <div className="flex flex-col flex-h-center upper pb-6">
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
