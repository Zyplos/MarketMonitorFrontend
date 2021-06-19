/** @jsxImportSource theme-ui */

import { Flex } from "@theme-ui/components";
import ResponsiveLogo from "../components/ResponsiveLogo";
import ThemedRouterNavLink from "../components/ThemedRouterNavLink";

function AuthenticationLayout({ children }) {
  return (
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: [null, "100vh"],
        padding: 3,
      }}
    >
      <ThemedRouterNavLink to="/" sx={{ mb: 3 }}>
        <ResponsiveLogo />
      </ThemedRouterNavLink>
      <div
        sx={{
          backgroundColor: "backgroundSecondary",
          padding: 4,
          borderRadius: "main",
        }}
      >
        {children}
      </div>
    </Flex>
  );
}

export default AuthenticationLayout;
