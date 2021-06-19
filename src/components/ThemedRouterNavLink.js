import { NavLink } from "@theme-ui/components";
import { Link as RouterLink } from "react-router-dom";

function ThemedRouterNavLink({ children, ...props }) {
  return (
    <NavLink {...props} as={RouterLink}>
      {children}
    </NavLink>
  );
}

export default ThemedRouterNavLink;
