import useSWR from "swr";

const fetcherWithToken = (url, accessToken) =>
  fetch(url, {
    method: "GET",
    headers: {
      "x-access-token": accessToken,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      return error;
    });

function useUser() {
  const accessToken = localStorage.getItem("accessToken");

  const { data, error } = useSWR(
    [process.env.REACT_APP_AUTH_API_BASEURL + "api/test/user", accessToken],
    fetcherWithToken
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useUser;
