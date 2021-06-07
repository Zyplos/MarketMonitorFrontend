import {
  Alert,
  Box,
  Button,
  Checkbox,
  Heading,
  Input,
  Label,
} from "@theme-ui/components";
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
        <Heading as="h1">Register</Heading>
        {postData.message && postData.message.includes("Failed") && (
          <Alert>Sorry, but that email is already in use.</Alert>
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
        <Box>
          <Label htmlFor="horns">
            <Checkbox type="checkbox" id="horns" name="horns" /> I agree to the
            terms and conditions.
          </Label>
        </Box>
        <Button type="submit">Submit</Button>
      </form>
    </AuthenticationLayout>
  );
}

export default RegisterPage;
