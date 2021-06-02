import { Switch, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
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
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
