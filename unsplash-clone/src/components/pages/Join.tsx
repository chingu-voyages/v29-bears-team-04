import React, { useState } from "react";
import FacebookButton from "../general/FacebookButton";
import Form from "../general/Form";
import Input from "../general/Input";

export default function Join() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = () => {
        console.log(email, password);
    };

    return (
        <div className="flex flex-col sm:flex-row w-screen h-screen">
            <div className="bg-red-500 w-screen h-1/3 sm:h-screen sm:w-1/3">
                Image Goes Here
            </div>
            <div className="h-screen w-full">
                <div className="h-full bg-green-100 flex flex-col items-center justify-start sm:justify-center">
                    <div className="flex flex-col items-center py-6">
                        <div className="font-bold  text-2xl pb-4">Join Unsplash</div>
                        <div>
                            Already have an account? <a href="/login">Login</a>
                        </div>
                    </div>
                    <FacebookButton
                        width={15}
                        height={15}
                        buttonText="Join with Facebook"
                    />
                    <div className="mb-5 w-full flex justify-center">OR</div>
                    <Form handleSubmit={handleSubmit}>
                        <div className="flex-col w-11/12">
                            <div className="pb-6">
                                <label className="block" htmlFor="email">
                                    Email
                                </label>
                                <Input id="email" type="text" setChange={setEmail} />
                            </div>
                            <div className="">
                                <label className="block" htmlFor="password">
                                    Password
                                </label>
                                <Input
                                    id="password"
                                    type="text"
                                    setChange={setPassword}
                                />
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
