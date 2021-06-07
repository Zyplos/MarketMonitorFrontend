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

export default fetcherWithToken;
