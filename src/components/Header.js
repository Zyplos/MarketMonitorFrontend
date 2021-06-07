import { Link } from "@theme-ui/components";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link className="logo" as={RouterLink} to="/profile">
        Market Monitor
      </Link>
      <div className="sub-header">
        <Link as={RouterLink} to="/login">
          Log in
        </Link>
      </div>
    </div>
  );
}

export default Header;
