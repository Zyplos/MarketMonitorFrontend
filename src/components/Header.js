/** @jsxImportSource theme-ui */
import { Fragment } from "react";
import { Flex, Link, Text, NavLink } from "@theme-ui/components";
import { Link as RouterLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import useUser from "../internals/useUser";

function Header() {
  const { user, isError } = useUser();
  let userNavSection;

  if (!user || isError) {
    userNavSection = (
      <Link as={RouterLink} to="/login">
        Log in
      </Link>
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
    <Flex sx={{ alignItems: "center", p: 5 }}>
      <Link as={RouterLink} to="/" sx={{ mr: 3 }}>
        <Logo sx={{ display: "block" }} />
      </Link>
      <Link as={RouterLink} to="/" sx={{ display: ["none", null, "block"] }}>
        <Text variant="styles.h2">Market Monitor</Text>
      </Link>

      <div sx={{ ml: "auto" }}>{userNavSection}</div>
    </Flex>
  );
}

export default Header;
