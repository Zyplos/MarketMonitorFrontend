import { Container, Heading, Link } from "@theme-ui/components";
import { Link as RouterLink } from "react-router-dom";
import MainLayout from "../internals/MainLayout";

function Home() {
  return (
    <MainLayout>
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
          <Link as={RouterLink} to="/tracking">
            /tracking
          </Link>
        </p>
      </Container>
    </MainLayout>
  );
}

export default Home;
