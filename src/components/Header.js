/** @jsxImportSource theme-ui */
import { Fragment, useState } from "react";
import { Close, Flex, NavLink, MenuButton } from "theme-ui";
import { Link as RouterLink } from "react-router-dom";
import useUser from "../internals/useUser";
import ResponsiveLogo from "../components/ResponsiveLogo";

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
        <NavLink as={RouterLink} to="/register">
          Register
        </NavLink>
        <NavLink as={RouterLink} to="/login">
          Log in
        </NavLink>
      </Fragment>
    );
  } else {
    userNavSection = (
      <Fragment>
        <NavLink as={RouterLink} to="/tracking">
          Tracking
        </NavLink>
        <NavLink as={RouterLink} to="/addassets">
          Add Assets
        </NavLink>
        <NavLink as={RouterLink} to="/profile">
          Profile
        </NavLink>
      </Fragment>
    );
  }

  if (isError) {
    console.log("Header useUser(): " + isError);
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
      <NavLink as={RouterLink} to="/">
        <ResponsiveLogo />
      </NavLink>

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
        {isOpen ? (
          <Close color="white" />
        ) : (
          <MenuButton sx={{ display: "block", fill: "white" }} />
        )}
      </div>
    </Flex>
  );
}

export default Header;
