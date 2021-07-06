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

function App() {
  return (
    <>
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

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
