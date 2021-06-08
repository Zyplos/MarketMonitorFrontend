import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import RegisterPage from "./pages/RegisterPage";
import AddAssets from "./pages/AddAssetsPage";
import AboutUs from "./pages/AboutUsPage";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/register">
          <RegisterPage />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/aboutus">
          <AboutUs />
        </Route>

        <Route path="/addassets">
          <AddAssets />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
