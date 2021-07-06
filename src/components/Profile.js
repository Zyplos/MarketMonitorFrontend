/** @jsxImportSource theme-ui */
import { Button, Heading, Paragraph, Spinner, Text } from "@theme-ui/components";

import useUser from "../internals/useUser";

import { ReactComponent as ErrorIcon } from "../assets/error.svg";

function simpleLogout(e) {
  e.preventDefault();
  localStorage.setItem("accessToken", null);
  window.location.href = "/";
}

function Profile() {
  const { user, isError } = useUser();

  if (isError) {
    return (
      <>
        <ErrorIcon sx={{ mb: 3, fill: "#ff3e3e" }} />
        <Paragraph>Unable to communicate with database.</Paragraph>
        <Paragraph variant="muted">{isError?.toString()}</Paragraph>
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Spinner />
        <Text>Loading user profile</Text>
      </>
    );
  }

  return (
    <>
      <Heading>Profile</Heading>

      {user && user.email && (
        <div>
          <Paragraph>
            {user.firstName} {user.lastName}
          </Paragraph>
          <Paragraph>{user.email}</Paragraph>
          <Paragraph>
            Tracking {user.numAssets} of {user.maxNumAssets} max assets.
          </Paragraph>
        </div>
      )}

      {/* <p>user object:</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <p>isError object:</p>
        <pre>{JSON.stringify(isError, null, 2)}</pre> */}

      <Button bg="red" onClick={simpleLogout}>
        Log out
      </Button>
    </>
  );
}

export default Profile;
