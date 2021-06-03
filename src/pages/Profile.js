import useSWR from "swr";
import useUser from "../internals/useUser";

function Profile() {
  const { user, isError } = useUser();

  console.log(user, isError);

  return <h1>profile</h1>;
}

export default Profile;
