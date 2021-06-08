import { Heading, Link } from "@theme-ui/components";
import { Switch, Route, Link as RouterLink } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import RegisterPage from "./pages/RegisterPage";
import AddAssets from "./pages/AddAssetsPage";
import AboutUs from "./pages/AboutUsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Heading>temp home</Heading>

          <p>
            <Link as={RouterLink} to="/login">
              /login
            </Link>
          </p>
          <p>
            <Link as={RouterLink} to="/register">
              /register
            </Link>
          </p>
          <p>
            <Link as={RouterLink} to="/profile">
              /profile
            </Link>
          </p>
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
      <Footer/>
    </div>
  );
}

export default App;
