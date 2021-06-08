import { Container, Heading, Link } from "@theme-ui/components";
import { Link as RouterLink } from "react-router-dom";

function Home() {
  return (
    <Container>
      <Heading>temp home</Heading>

      <p>
        <Link as={RouterLink} to="/login">
          /login
        </Link>
      </p>
      <p>
        <Link as={RouterLink} to="/register">
          /register
        </Link>
      </p>
      <p>
        <Link as={RouterLink} to="/profile">
          /profile
        </Link>
      </p>
    </Container>
  );
}

export default Home;
