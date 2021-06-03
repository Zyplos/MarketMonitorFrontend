import { useState } from "react";
import { useHistory } from "react-router";
import useSWR from "swr";
import AuthenticationLayout from "../internals/AuthenticationLayout";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [postData, setPostData] = useState({});
  const history = useHistory();

  console.log("POSTDATA=====,", postData);

  if (postData.id) {
    history.push("/");
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(process.env.REACT_APP_AUTH_API_BASEURL + "api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPostData(data);
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
        }
      })
      .catch((error) => {
        setPostData({ error });
      });
  };

  return (
    <AuthenticationLayout>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {["User Not found.", "Invalid Password!"].includes(
          postData.message
        ) && <p className="form-error">Username or password incorrect.</p>}
        {postData.error && (
          <p className="form-error">
            Sorry, got an error trying to sign you in.
          </p>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </AuthenticationLayout>
  );
}

export default LoginPage;
