import useSWR from "swr";
import fetcherWithToken from "./fetcherWithToken";

function useUser() {
  const accessToken = localStorage.getItem("accessToken");
  const { data, error } = useSWR(
    [process.env.REACT_APP_AUTH_API_BASEURL + "api/test/user", accessToken],
    fetcherWithToken,
    {
      errorRetryCount: 5,
    }
  );

  console.log("=========USE USER", data, error);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useUser;
