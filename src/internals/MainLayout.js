/** @jsxImportSource theme-ui */
import { Flex } from "@theme-ui/components";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <Flex sx={{ flexDirection: "column", height: "100%" }}>
      <Header />
      <div sx={{ flexGrow: "1" }}>{children}</div>
      <Footer />
    </Flex>
  );
}

export default MainLayout;
