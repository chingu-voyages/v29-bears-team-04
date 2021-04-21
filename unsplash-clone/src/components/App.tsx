import { Switch, Route, BrowserRouter } from "react-router-dom";

// General Components
import FourZeroFour from "./generalComponents/FourZeroFour";
import Header from "./generalComponents/header/Header";

// Pages
import AllTopics from "./pages/AllTopics";
import Topic from "./pages//Topic";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Unsplash from "./pages/Unsplash";

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
