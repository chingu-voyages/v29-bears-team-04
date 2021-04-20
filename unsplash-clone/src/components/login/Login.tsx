import "./login.scss";
import UnsplashLogo from "../generalComponents/images/UnsplashLogo";
import FacebookLogo from "../generalComponents/images/FacebookLogo";

export default function Login() {
    return (
        <div className="flex flex-container flex-v-center login-container">
            <div className="login-container flex flex-col h-90 ">
                <div className="flex flex-col flex-h-center upper pb-6">
                    <div className="flex-h-center pb-5">
                        <UnsplashLogo width={75} height={75} />
                    </div>
                    <h2 className="login-title">Login</h2>
                    <div>Welcome back.</div>
                </div>
                <button className="facebook-login">
                    <div className="flex-h-center">
                        <FacebookLogo clas="facebook-logo" width={15} height={15} />
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
