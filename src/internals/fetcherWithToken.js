const fetcherWithToken = async (url, accessToken) => {
  console.log("==========FETCHERTOKEN FETCHING WITH " + accessToken);
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-access-token": accessToken,
    },
  });

  console.log("==========FETCHERWITHTOKEN", res);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    console.log("==========FETCHERWITHTOKEN NOT OK!!!!!");
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default fetcherWithToken;
