import useSWR from "swr";
import fetcherWithToken from "../internals/fetcherWithToken";
import useUser from "../internals/useUser";

function AddAssets() {
  const { user, isError } = useUser();
  const { data: assetsData, assetsError } = useSWR(
    process.env.REACT_APP_AUTH_API_BASEURL + "api/test/getAssetsOfUser",
    fetcherWithToken
  );

  console.log(user, isError);

  return (
    <div>
      <h1>Add Assets</h1>
      <p>user object:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>isError object:</p>
      <pre>{JSON.stringify(isError, null, 2)}</pre>
      <p>assetsData object:</p>
      <pre>{JSON.stringify(assetsData, null, 2)}</pre>
      <p>assetsError object:</p>
      <pre>{JSON.stringify(assetsError, null, 2)}</pre>
    </div>
  );
}

export default AddAssets;
