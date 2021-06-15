import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Tracking from "./pages/Tracking";
import RegisterPage from "./pages/RegisterPage";
import AddAssetsPage from "./pages/AddAssetsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
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
          <AboutUsPage />
        </Route>

        <Route path="/contactus">
          <ContactUsPage />
        </Route>

        <PrivateRoute path="/addassets">
          <AddAssetsPage />
        </PrivateRoute>

        <PrivateRoute path="/profile">
          <Profile />
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
