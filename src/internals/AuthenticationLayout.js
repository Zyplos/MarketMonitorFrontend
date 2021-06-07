/** @jsxImportSource theme-ui */
import { Flex } from "@theme-ui/components";

function AuthenticationLayout({ children }) {
  return (
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div
        sx={{
          border: "1px solid #cfcfcf",
          padding: "48px",
          margin: "48px",
          borderRadius: "10px",
        }}
      >
        {children}
      </div>
    </Flex>
  );
}

export default AuthenticationLayout;
