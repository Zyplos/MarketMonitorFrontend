const fetcherWithToken = (url) => {
  const accessToken = localStorage.getItem("accessToken");
  return fetch(url, {
    method: "GET",
    headers: {
      "x-access-token": accessToken,
    },
  }).then((response) => response.json());
};

export default fetcherWithToken;
