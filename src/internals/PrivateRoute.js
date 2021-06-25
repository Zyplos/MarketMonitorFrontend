import { Spinner } from "@theme-ui/components";
import { Redirect, Route } from "react-router";
import FullBox from "../components/FullBox";
import useUser from "./useUser";

// https://reactrouter.com/web/example/auth-workflow
function PrivateRoute({ children, ...rest }) {
  let { isLoading, isError } = useUser();

  if (isLoading) {
    return (
      <FullBox useDims>
        <Spinner />
      </FullBox>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isError && isError.status === 401 ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}

export default PrivateRoute;
