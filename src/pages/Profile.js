import useSWR from "swr";
import useUser from "../internals/useUser";

function Profile() {
  const { user, isError } = useUser();

  console.log(user, isError);

  return (
    <div>
      <p>user</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>error</p>
      <pre>{JSON.stringify(isError, null, 2)}</pre>
    </div>
  );
}

export default Profile;
