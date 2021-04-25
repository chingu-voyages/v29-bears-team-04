import UnsplashLogo from "../generalComponents/images/UnsplashLogo";
import FacebookLogo from "../generalComponents/images/FacebookLogo";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux"
import React, { useState, useEffect } from 'react';
import { login } from "../../redux/actions/userActions"



export default function Login() {
    const user: any = useSelector((state:RootStateOrAny) => state.user)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(login())
    })
    return (
<<<<<<< HEAD
        <div className="flex flex-col items-center justify-center h-screen bg-yellow-300">
            <div className="h-5/6 w-full">
                {/* Logo Part */}
                <div className="flex-col pb-6">
                    <div className="pb-5 flex justify-center">
                        <UnsplashLogo width={75} height={75} />
                    </div>
                    <div className="flex justify-center pb-3 font-bold text-xl">
                        Login
                    </div>
                    <div className="flex justify-center">Welcome back.</div>
                </div>
                {/* FB Button  */}
                <div className="w-full flex justify-center">
                    <button className="flex justify-center items-center w-11/12 py-1 bg-blue-600 text-white rounded-md my-5">
                        <FacebookLogo cls="fill-current mr-3 " width={15} height={15} />
                        <div>Login with Facebook</div>
                    </button>
                </div>
                <div className="mb-5 w-full flex justify-center">OR</div>
                {/* form Part */}
                <form className="flex-1 flex justify-center" action="">
                    <div className="flex-col w-11/12">
                        <div className="pb-6">
                            <label className="block" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full border-solid border-gray-300"
                                id="email"
                                type="text"
                            />
                        </div>
                        <div className="">
                            <label className="block" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full border-solid border-gray-300"
                                id="password"
                                type="text"
                            />
                        </div>
=======
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
>>>>>>> af1e2857824649b0f64c791150f4b942c8fd5a39
                    </div>
                </form>
                </div>
            </div>
    );
}
