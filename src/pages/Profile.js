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
  const {
    data: assetsData,
    error: assetsError,
    mutate: assetsMutate,
  } = useSWR(
    [
      process.env.REACT_APP_AUTH_API_BASEURL + "api/test/getAssetsOfUser",
      accessToken,
    ],
    fetcherWithToken,
    {
      refreshInterval: 1000 * 60,
    }
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

  function removeAssetFromUser(e) {
    e.preventDefault();
    const { name, ticker } = e.target.dataset;

    const url =
      process.env.REACT_APP_AUTH_API_BASEURL + "api/test/removeAssetFromUser";
    const accessToken = localStorage.getItem("accessToken");
    const body = { name, ticker };

    fetch(url, {
      method: "POST",
      headers: {
        "x-access-token": accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(() => {
        assetsMutate(
          {
            assets: assetsData.assets.filter(
              (asset) => asset.ticker !== ticker
            ),
          },
          false
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  if (assetsData && assetsData.assets && assetsData.assets.length > 0) {
    dataView = assetsData.assets.map((asset, index) => {
      return (
        <Card
          key={index}
          sx={{ mb: 3, display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <Heading as="h3">{asset.ticker}</Heading>
            <Text sx={{ color: "muted" }}>{asset.name + " | "}</Text>
            <Text sx={{ color: "primary" }}>{" $" + asset.rate}</Text>
            <br></br>
            <Text sx={{ color: "muted" }}>
              {"As of " +
                new Date(asset.time).toLocaleString("en-US", {
                  timeZone: "EST",
                })}
            </Text>
          </div>
          <div>
            <Button
              mr={2}
              sx={{ backgroundColor: "secondary", marginTop: "10px" }}
            >
              Notify
            </Button>
            <Button
              mr={2}
              sx={{ backgroundColor: "red", marginTop: "10px" }}
              data-name={asset.name}
              data-ticker={asset.ticker}
              onClick={removeAssetFromUser}
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

  function simpleLogout(e) {
    e.preventDefault();
    localStorage.setItem("accessToken", null);
    window.location.href = "/";
  }

  return (
    <MainLayout>
      <Container>
        {/* <p>user object:</p>
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

        <Button bg="red" onClick={simpleLogout}>
          Log out
        </Button>
      </Container>
    </MainLayout>
  );
}

export default Profile;
