import { useState } from "react";
import { useHistory } from "react-router";
import AuthenticationLayout from "../internals/AuthenticationLayout";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [postData, setPostData] = useState({});
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(process.env.REACT_APP_AUTH_API_BASEURL + "api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPostData(data);
        if (data.message.includes("success")) {
          history.push("/login");
        }
      })
      .catch((error) => {
        setPostData({ error });
      });
  };

  return (
    <AuthenticationLayout>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {postData.message && postData.message.includes("Failed") && (
          <p className="form-error">Sorry, but that email is already in use.</p>
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
        <div>
          <input type="checkbox" id="horns" name="horns" />
          <label htmlFor="horns">I agree to the terms and conditions.</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </AuthenticationLayout>
  );
}

export default RegisterPage;
