import {
  Alert,
  Box,
  Button,
  Checkbox,
  Heading,
  Input,
  Label,
  Text,
} from "@theme-ui/components";
import { useState } from "react";
import { Redirect } from "react-router";
import AuthenticationLayout from "../internals/AuthenticationLayout";

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [postData, setPostData] = useState({});

  if (postData?.message?.includes("success")) {
    return <Redirect to="/login" />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(process.env.REACT_APP_AUTH_API_BASEURL + "api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPostData(data);
      })
      .catch((error) => {
        setPostData({ error: true, ...error });
      });
  };

  return (
    <AuthenticationLayout>
      <form onSubmit={handleSubmit}>
        <Heading as="h1">Register</Heading>
        {postData.message?.includes("Failed") && (
          <Alert>Sorry, but that email is already in use.</Alert>
        )}

        <Label htmlFor="firstName">First Name</Label>
        <Input
          type="text"
          name="firstName"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {postData.message?.includes("firstName") && (
          <Text variant="error">Missing first name.</Text>
        )}

        <Label htmlFor="lastName">Last Name</Label>
        <Input
          type="text"
          name="lastName"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {postData.message?.includes("lastName") && (
          <Text variant="error">Missing last name.</Text>
        )}

        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {postData.message?.includes("email") && (
          <Text variant="error">Missing email.</Text>
        )}

        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {postData.message?.includes("password") && (
          <Text variant="error">Missing password.</Text>
        )}

        <Box>
          <Label htmlFor="horns">
            <Checkbox type="checkbox" id="horns" name="horns" required /> I
            agree to the terms and conditions.
          </Label>
        </Box>
        <Button type="submit">Submit</Button>
      </form>
    </AuthenticationLayout>
  );
}

export default RegisterPage;
