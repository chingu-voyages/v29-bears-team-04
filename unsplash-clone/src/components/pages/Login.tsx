import UnsplashLogo from "../general/images/UnsplashLogo";
import FacebookButton from "../general/FacebookButton";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { login } from "../../redux/actions/userActions";
import { getUsers } from "../../redux/actions/usersActions";

export default function Login() {
    const users: any = useSelector((state: RootStateOrAny) => state.users.all);
    const [emailInput, setEmailInput] = useState("");
    const [passInput, setPassInput] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let formData = {
            email: emailInput,
            password: passInput,
        };
        dispatch(login(formData));
    };

    interface user {
        id: number;
        name: string;
        email: string;
    }
    return (
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
                <FacebookButton width={15} height={15} buttonText="Login with Facebook" />
                <div className="mb-5 w-full flex justify-center">OR</div>
                {/* form Part */}
                <form
                    className="flex-1 flex justify-center"
                    action=""
                    onSubmit={handleSubmit}
                >
                    <div className="flex-col w-11/12">
                        <div className="pb-6">
                            <label className="block" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full border-solid border-gray-300"
                                id="email"
                                type="text"
                                onChange={(e) => {
                                    setEmailInput(e.target.value);
                                }}
                            />
                        </div>
                        <div className="">
                            <label className="block" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full border-solid border-gray-300"
                                id="password"
                                type="password"
                                onChange={(e) => {
                                    setPassInput(e.target.value);
                                }}
                            />
                        </div>
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
