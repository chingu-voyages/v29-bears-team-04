import FacebookButton from "../general/FacebookButton";

export default function Join() {
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
                    {/* form Part */}
                    <form className="w-full flex justify-center" action="">
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
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
