import { Switch, Route, BrowserRouter } from "react-router-dom";

// General Components
import FourZeroFour from "./generalComponents/FourZeroFour";
import Header from "./generalComponents/header/Header";

// Pages
import AllTopics from "./topics/AllTopics";
import Topic from "./topics/Topic";
import Login from "./login/Login";
import Register from "./register/Register";
import Unsplash from "./unsplash/unsplash";

import "./App.scss";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Header />
                <Switch>
                    {/* HomePage */}
                    <Route exact path="/" component={Unsplash} />

                    {/* Register Page */}
                    <Route exact path="/join" component={Register} />

                    {/* Login Page */}
                    <Route exact path="/login" component={Login} />

                    {/* All Topics Page  */}
                    <Route exact path="/t/" component={AllTopics} />

                    {/* Image Specific Topics Page  */}
                    <Route path="/t/:type" component={Topic} />

                    {/* 404 Page */}
                    <Route component={FourZeroFour} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
