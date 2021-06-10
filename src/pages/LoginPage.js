import { Alert, Button, Heading, Input, Label } from "@theme-ui/components";
import { useState } from "react";
import { Redirect } from "react-router";
import { mutate } from "swr";
import AuthenticationLayout from "../internals/AuthenticationLayout";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [postData, setPostData] = useState({});

  console.log("POSTDATA=====,", postData);

  if (postData.accessToken) {
    return <Redirect to="/profile" />;
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
        if (data.accessToken) {
          console.log("===================LOGINPAGE :SETTING TOKEN");
          localStorage.setItem("accessToken", data.accessToken);
        }
        mutate(process.env.REACT_APP_AUTH_API_BASEURL + "api/test/user").then(
          () => {
            console.log("==========LOGINPAGE MUTATED!! SETTING POST DATA");
            setPostData(data);
          }
        );
      })
      .catch((error) => {
        console.log({ error: true, ...error });
        setPostData({ error: true, ...error });
      });
  };

  return (
    <AuthenticationLayout>
      <form onSubmit={handleSubmit}>
        <Heading as="h1">Login</Heading>
        {["User Not found.", "Invalid Password!"].includes(
          postData.message
        ) && <Alert>Username or password incorrect.</Alert>}
        {postData.error && (
          <Alert>Sorry, got an error trying to sign you in.</Alert>
        )}
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Log In</Button>
      </form>
    </AuthenticationLayout>
  );
}

export default LoginPage;
