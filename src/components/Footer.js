/** @jsxImportSource theme-ui */
import { Link } from "@theme-ui/components";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  //TODO: About us
  return (
    <div sx={{ mt: 5, p: 3, textAlign: "center", bg: "backgroundSecondary" }}>
      <p>
        Market Monitor is a student project. Learn more{" "}
        <Link className="aboutLink" as={RouterLink} to="/aboutus">
          about us
        </Link>
        .
      </p>
    </div>
  );
}

export default Footer;
