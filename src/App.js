import { Switch, Route, Link } from "react-router-dom";
import useSWR from "swr";
import useUser from "./internals/useUser";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const { user, isError } = useUser();

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <h1>home</h1>
          <p>
            <Link to="/login">/login</Link>
          </p>
          <p>
            <Link to="/register">/register</Link>
          </p>
          <p>
            <Link to="/profile">/profile</Link>
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
