import { Link as RouterLink } from "react-router-dom";
import FullBox from "../components/FullBox";
import { Heading, Text, Link, Button } from "theme-ui";

function NotFoundPage() {
  return (
    <FullBox useDims>
      <Heading as="h1">404</Heading>
      <Text>This page does not exist.</Text>
      <Link as={RouterLink} to="/">
        <Button>Home</Button>
      </Link>
    </FullBox>
  );
}

export default NotFoundPage;
