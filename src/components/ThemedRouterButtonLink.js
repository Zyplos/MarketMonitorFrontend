import { Button } from "@theme-ui/components";
import { Link as RouterLink } from "react-router-dom";

function ThemedRouterButtonLink({ children, ...props }) {
  return (
    <Button {...props} as={RouterLink}>
      {children}
    </Button>
  );
}

export default ThemedRouterButtonLink;
