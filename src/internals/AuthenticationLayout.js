/** @jsxImportSource theme-ui */

import { Flex, NavLink } from "@theme-ui/components";
import { Link as RouterLink } from "react-router-dom";
import ResponsiveLogo from "../components/ResponsiveLogo";

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
      <NavLink as={RouterLink} to="/" sx={{ mb: 3 }}>
        <ResponsiveLogo />
      </NavLink>
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
