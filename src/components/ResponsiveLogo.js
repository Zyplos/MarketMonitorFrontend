/** @jsxImportSource theme-ui */
import { Text, Flex } from "@theme-ui/components";
import { ReactComponent as Logo } from "../assets/logo.svg";

function ResponsiveLogo() {
  return (
    <Flex sx={{ display: "flex", alignItems: "center" }}>
      <Logo sx={{ display: "block", mr: [0, null, 3] }} />
      <Text
        variant="styles.h2"
        sx={{ display: ["none", null, "block"], mb: 0 }}
      >
        Market Monitor
      </Text>
    </Flex>
  );
}

export default ResponsiveLogo;
