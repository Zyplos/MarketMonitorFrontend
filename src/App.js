import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Tracking from "./pages/Tracking";
import RegisterPage from "./pages/RegisterPage";
import AddAssets from "./pages/AddAssetsPage";
import AboutUs from "./pages/AboutUsPage";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoute from "./internals/PrivateRoute";
import Profile from "./pages/Profile";

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

        <PrivateRoute path="/tracking">
          <Tracking />
        </PrivateRoute>

        <Route path="/aboutus">
          <AboutUs />
        </Route>

        <PrivateRoute path="/addassets">
          <AddAssets />
        </PrivateRoute>

        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
