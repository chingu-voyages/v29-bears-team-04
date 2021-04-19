import "./login.scss";
import UnsplashLogo from "../generalComponents/images/UnsplashLogo";
import FacebookLogo from "../generalComponents/images/FacebookLogo";

export default function Login() {
    return (
        <div className="flex flex-container flex-v-center login-container">
            <div className="login-container flex flex-col h-half">
                <div className="flex flex-col flex-h-center upper">
                    <div className="flex-h-center">
                        <UnsplashLogo width={40} height={40} />
                    </div>
                    <div>Login</div>
                    <div>Welcome back.</div>
                </div>
                <button className="facebook-login flex flex-h-center">
                    <div >
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
