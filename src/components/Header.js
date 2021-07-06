/** @jsxImportSource theme-ui */
import { Fragment, useState } from "react";
import { Close, Flex, MenuButton } from "theme-ui";
import useUser from "../internals/useUser";
import ResponsiveLogo from "../components/ResponsiveLogo";
import ThemedRouterNavLink from "./ThemedRouterNavLink";
import Dropdown from "./Dropdown";
import Profile from "./Profile";

function Header() {
  const { user, isError } = useUser();
  const [isOpen, setOpen] = useState(false);
  let userNavSection;

  function showNavbar() {
    setOpen(!isOpen);
  }

  if (!user || isError) {
    userNavSection = (
      <Fragment>
        <ThemedRouterNavLink to="/register">Register</ThemedRouterNavLink>
        <ThemedRouterNavLink to="/login">Log in</ThemedRouterNavLink>
      </Fragment>
    );
  } else {
    userNavSection = (
      <Fragment>
        <ThemedRouterNavLink to="/tracking">Tracking</ThemedRouterNavLink>
        <ThemedRouterNavLink to="/addassets">Add Assets</ThemedRouterNavLink>
        <Dropdown toggle={<ThemedRouterNavLink>Profile</ThemedRouterNavLink>}>
          <div sx={{ p: 4 }}>
            <Profile />
          </div>
        </Dropdown>
      </Fragment>
    );
  }

  return (
    <Flex
      sx={{
        alignItems: "center",
        px: [2, 5],
        py: [2, 4],
        flexWrap: "wrap",
        flexDirection: ["column", "row"],
      }}
    >
      <ThemedRouterNavLink to="/">
        <ResponsiveLogo />
      </ThemedRouterNavLink>

      <div
        sx={{
          ml: [null, "auto"],
          display: [isOpen ? "flex" : "none", "flex"],
          flexDirection: ["column", "row"],
          width: ["100%", "auto"],
          bg: ["backgroundSecondary", "background"],
        }}
      >
        {userNavSection}
      </div>

      <div
        id="nav-toggle"
        sx={{
          position: "absolute",
          top: "24px",
          left: "24px",
          padding: 2,
          backgroundColor: "backgroundSecondary",
          display: ["block", "none"],
          zIndex: 100,
          width: "48px",
          height: "48px",
        }}
        onClick={showNavbar}
      >
        {isOpen ? <Close color="white" /> : <MenuButton sx={{ display: "block", fill: "white" }} />}
      </div>
    </Flex>
  );
}

export default Header;
