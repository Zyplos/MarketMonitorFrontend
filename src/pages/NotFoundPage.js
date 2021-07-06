import FullBox from "../components/FullBox";
import ThemedRouterButtonLink from "../components/ThemedRouterButtonLink";
import { Heading, Paragraph } from "theme-ui";

function NotFoundPage() {
  return (
    <FullBox useDims>
      <Heading as="h1">404</Heading>
      <Paragraph>This page does not exist.</Paragraph>

      <ThemedRouterButtonLink to="/">Home</ThemedRouterButtonLink>
    </FullBox>
  );
}

export default NotFoundPage;
