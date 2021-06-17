/** @jsxImportSource theme-ui */
import {
  Container,
  Heading,
  Flex,
  Paragraph,
  Button,
} from "@theme-ui/components";
import { Link as RouterLink } from "react-router-dom";
import MainLayout from "../internals/MainLayout";
import useUser from "../internals/useUser";
import HomeHeroImage from "../assets/home-hero.png";

function Home() {
  const { user, isError } = useUser();

  let homeButtons;
  if (!user || isError) {
    homeButtons = (
      <>
        <Button as={RouterLink} to="/register">
          Register
        </Button>
        <Button
          bg="backgroundTertiary"
          as={RouterLink}
          to="/login"
          sx={{ ml: 2 }}
        >
          Login
        </Button>
      </>
    );
  } else {
    homeButtons = (
      <>
        <Button as={RouterLink} to="/tracking">
          View Assets
        </Button>
      </>
    );
  }
  return (
    <MainLayout>
      <Flex
        sx={{
          height: "100%",
          width: "100%",
          alignItems: [null, null, "center"],
          flexDirection: ["column", null, "row"],
        }}
      >
        <div sx={{ mt: [5, 0], ml: [5, 6], mr: [5, 0] }}>
          <Heading as="h1">Simple stock monitoring.</Heading>
          <Paragraph>
            Add stocks and get notified when they reach prices you're looking
            for.
          </Paragraph>
          {homeButtons}
        </div>
        <div
          sx={{
            background: `url(${HomeHeroImage})`,
            backgroundSize: [null, null, "cover"],
            backgroundPositionY: [0, 0, "center"],
            backgroundPositionX: [0, 0, "left"],
            backgroundRepeat: "no-repeat",

            height: "100%",
            flexGrow: "1",
          }}
        ></div>
      </Flex>
    </MainLayout>
  );
}

export default Home;
