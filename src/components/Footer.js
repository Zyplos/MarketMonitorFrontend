import { Link } from "@theme-ui/components";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
    //TODO: About us 
    return (
        <div className="footer">
            <p>Market Monitor is a student project: Learn more <Link className="aboutLink"as={RouterLink} to="/AboutUs">about us</Link></p>
        </div>
    );
}

export default Footer;