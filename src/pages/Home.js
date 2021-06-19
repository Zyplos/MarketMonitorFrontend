/** @jsxImportSource theme-ui */
import { Heading, Flex, Paragraph } from "@theme-ui/components";
import MainLayout from "../internals/MainLayout";
import useUser from "../internals/useUser";
import ThemedRouterButtonLink from "../components/ThemedRouterButtonLink";
import HomeHeroImage from "../assets/home-hero.png";

function Home() {
  const { user, isError } = useUser();

  let homeButtons;
  if (!user || isError) {
    homeButtons = (
      <>
        <ThemedRouterButtonLink to="/register">Register</ThemedRouterButtonLink>
        <ThemedRouterButtonLink
          bg="backgroundTertiary"
          to="/login"
          sx={{ ml: 2 }}
        >
          Login
        </ThemedRouterButtonLink>
      </>
    );
  } else {
    homeButtons = (
      <>
        <ThemedRouterButtonLink to="/tracking">
          View Assets
        </ThemedRouterButtonLink>
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
