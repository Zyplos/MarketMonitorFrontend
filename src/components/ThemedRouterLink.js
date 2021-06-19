import { Link } from "@theme-ui/components";
import { Link as RouterLink } from "react-router-dom";

function ThemedRouterLink({ children, ...props }) {
  return (
    <Link {...props} as={RouterLink}>
      {children}
    </Link>
  );
}

export default ThemedRouterLink;
