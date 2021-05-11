import UnsplashLogo from "../general/images/UnsplashLogo";
import FacebookButton from "../general/FacebookButton";
import Form from "../general/Form";
import Input from "../general/Input";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { loginUser } from "../../redux/users/userActions";
import { useHistory } from 'react-router-dom'
import { cookieHasChanged } from '../general/CookieHasChanged'
// import { getUsers } from "../../redux/actions/usersActions";


export default function Login() {
    // const users = useSelector((state: RootStateOrAny) => state.users.all);
    const user = useSelector((state: RootStateOrAny) => state.user);
    const [emailInput, setEmailInput] = useState("");
    const [passInput, setPassInput] = useState("");
    let history = useHistory()

    

    const dispatch = useDispatch();
    // useEffect(() => {
    //     cookieHasChanged()
    // }, [])


    const handleSubmit = (e: any) => {
        e.preventDefault();
        let formData = {
            email: emailInput,
            password: passInput,
        };

        dispatch(loginUser(formData))
        // dispatch(dummyGetData())

        // if (dispatch(login(formData))) {
        //     history.push('/')
        // }

    };

    

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
                <Form handleSubmit={handleSubmit}>
                    <div className="flex-col w-11/12">
                        <div className="pb-6">
                            <label className="block" htmlFor="email">
                                Email
                            </label>
                            <Input id="email" type="text" setChange={setEmailInput} />
                        </div>
                        <div className="">
                            <label className="block" htmlFor="password">
                                Password
                            </label>
                            <Input
                                id="password"
                                type="password"
                                setChange={setPassInput}
                            />
                        </div>
                        <button type="submit">submit</button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
