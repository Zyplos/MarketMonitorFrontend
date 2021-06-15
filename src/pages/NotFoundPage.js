import { Link as RouterLink } from "react-router-dom";
import FullBox from "../components/FullBox";
import { Heading, Link, Button, Paragraph } from "theme-ui";

function NotFoundPage() {
  return (
    <FullBox useDims>
      <Heading as="h1">404</Heading>
      <Paragraph>This page does not exist.</Paragraph>
      <Link as={RouterLink} to="/">
        <Button>Home</Button>
      </Link>
    </FullBox>
  );
}

export default NotFoundPage;
