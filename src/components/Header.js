import { Link } from "@theme-ui/components";
import { Link as RouterLink } from "react-router-dom";

import useUser from "../internals/useUser";

function Header() {
    const { user, isError } = useUser();
    let button;

    if(user) {
        button = <Link as={RouterLink} to="/AddAssets">Add Assets</Link> 
    }
    else {
        button = <Link as={RouterLink} to="/login">Log in</Link>  
    }

    if(isError) {
        console.log('Header useUser(): ' + isError)
    }

    return (
        <div className="header">
            <Link className="logo" as={RouterLink} to="/profile">
                Market Monitor
            </Link>
            <div className="sub-header"> 
                {button}
            </div>
        </div>
    );
}

export default Header;
