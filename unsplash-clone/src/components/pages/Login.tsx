import UnsplashLogo from "../generalComponents/images/UnsplashLogo";
import FacebookLogo from "../generalComponents/images/FacebookLogo";

export default function Login() {
    return (
            <div className="login-container flex justify-center py-20 h-90 ">
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
