import { Heading, Link } from "@theme-ui/components";
import { Switch, Route, Link as RouterLink } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div>
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
      </Switch>
    </div>
  );
}

export default App;
