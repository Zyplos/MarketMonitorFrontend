/** @jsxImportSource theme-ui */
import { Link } from "@theme-ui/components";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  return (
    <div sx={{ mt: 5, p: 3, textAlign: "center", bg: "backgroundSecondary" }}>
      <p>
        MarketMonitor is a student project. Learn more{" "}
        <Link className="aboutLink" as={RouterLink} to="/aboutus">
          about us
        </Link>
        , or{" "}
        <Link className="aboutLink" as={RouterLink} to="/contactus">
          contact us
        </Link>{" "}
        with any comments or concerns.
      </p>
    </div>
  );
}

export default Footer;
