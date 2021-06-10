/** @jsxImportSource theme-ui */
import {
  Button,
  Card,
  Container,
  Heading,
  Paragraph,
  Spinner,
  Text,
} from "@theme-ui/components";
import useSWR, { cache } from "swr";
import { Link } from "react-router-dom";
import fetcherWithToken from "../internals/fetcherWithToken";
import MainLayout from "../internals/MainLayout";
import useUser from "../internals/useUser";

import { ReactComponent as ErrorIcon } from "../assets/error.svg";

import FullBox from "../components/FullBox";

function Profile() {
  const accessToken = localStorage.getItem("accessToken");
  const { user, isError } = useUser();
  const { data: assetsData, error: assetsError } = useSWR(
    [
      process.env.REACT_APP_AUTH_API_BASEURL + "api/test/getAssetsOfUser",
      accessToken,
    ],
    fetcherWithToken
  );

  if (isError || assetsError) {
    return (
      <FullBox useDims>
        <ErrorIcon sx={{ mb: 3, fill: "#ff3e3e" }} />
        <Paragraph>Unable to communicate with database.</Paragraph>
        <Paragraph variant="muted">{isError?.toString()}</Paragraph>
        <Paragraph variant="muted">{assetsError?.toString()}</Paragraph>
      </FullBox>
    );
  }

  if (!user) {
    return (
      <FullBox useDims>
        <Spinner />
        <Text>Loading user profile</Text>
      </FullBox>
    );
  }

  let dataView = (
    <Heading as="h3" sx={{ my: 4 }}>
      Your tracked assets will live here!
    </Heading>
  );

  if (assetsData && assetsData.assets && assetsData.assets.length > 0) {
    dataView = assetsData.assets.map((asset, index) => {
      return (
        <Card
          key={index}
          sx={{ mb: 3, display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <Heading as="h3">{asset.ticker}</Heading>
            <Text sx={{ color: "#6F6F6F" }}>{asset.name + " | "}</Text>
            <Text sx={{ color: "#70c244" }}>{" $" + asset.rate}</Text>
            <br></br>
            <Text sx={{ color: "#6F6F6F" }}>
              {"As of " +
                new Date(asset.time).toLocaleString("en-US", {
                  timeZone: "EST",
                })}
            </Text>
          </div>
          <div>
            <Button
              mr={2}
              sx={{ backgroundColor: "#eb3434", marginTop: "10px" }}
            >
              Remove
            </Button>
          </div>
        </Card>
      );
    });
  }

  if (assetsError) {
    console.log("assetData encountered an error");
    console.log(assetsError);
  }

  /* const testData = {
    assets: [
      {
        _id: "60bd92993084492542574d93",
        name: "DELIVERY HERO SE",
        rate: 134.75,
        time: "2021-06-08T21:52:45.496Z",
        ticker: "DLVHF",
      },
      {
        _id: "60be1122d85a7107d60f16a5",
        name: "TERAX ENERGY INC",
        rate: 0.05,
        time: "2021-06-08T21:52:45.601Z",
        ticker: "TEXG",
      },
      {
        _id: "60be11dbaa3706088aaebab1",
        name: "ISHARES CANADIAN HYBRID CORP",
        rate: 0,
        time: "2021-06-08T21:52:39.926Z",
        ticker: "ICDZF",
      },
      {
        _id: "60be1af46ba1770004bdda78",
        name: "BUSINESS WARRIOR CORP",
        rate: 0.10395,
        time: "2021-06-08T21:52:45.540Z",
        ticker: "BZWR",
      },
      {
        _id: "60be2fe683fda30ff6213b57",
        name: "APPLE INC",
        rate: 126.74,
        time: "2021-06-08T21:52:45.568Z",
        ticker: "AAPL",
      },
    ],
  }; */

  return (
    <MainLayout>
      <Container>
        {/* <Link to="/login">/login</Link>
        <p>user object:</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <p>isError object:</p>
        <pre>{JSON.stringify(isError, null, 2)}</pre>
        <p>assetsData object:</p>
        <pre>{JSON.stringify(assetsData, null, 2)}</pre>
        <p>assetsError object:</p>
        <pre>{JSON.stringify(assetsError, null, 2)}</pre> */}
        <Heading as="h1" sx={{ my: 4 }}>
          Profile:
        </Heading>
        {user && user.email && (
          <div>
            <Paragraph>
              {user.firstName} {user.lastName}
            </Paragraph>
            <Paragraph>{user.email}</Paragraph>
            <Paragraph>
              Tracking {user.numAssets} of {user.maxNumAssets} max assets.
            </Paragraph>
          </div>
        )}
        <Heading as="h1" sx={{ my: 4 }}>
          Tracking:
        </Heading>
        {dataView}
      </Container>
    </MainLayout>
  );
}

export default Profile;
