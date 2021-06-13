/** @jsxImportSource theme-ui */
import { Fragment } from "react";
import { Flex, NavLink } from "@theme-ui/components";
import { Link as RouterLink } from "react-router-dom";
import useUser from "../internals/useUser";
import ResponsiveLogo from "../components/ResponsiveLogo";

function Header() {
  const { user, isError } = useUser();
  let userNavSection;

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
    <Flex sx={{ alignItems: "center", p: 5 }}>
      <NavLink as={RouterLink} to="/">
        <ResponsiveLogo />
      </NavLink>

      <div sx={{ ml: "auto" }}>{userNavSection}</div>
    </Flex>
  );
}

export default Header;
