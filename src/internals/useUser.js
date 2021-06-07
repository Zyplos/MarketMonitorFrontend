import useSWR from "swr";
import fetcherWithToken from "./fetcherWithToken";

function useUser() {
  const { data, error } = useSWR(
    process.env.REACT_APP_AUTH_API_BASEURL + "api/test/user",
    fetcherWithToken
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useUser;
