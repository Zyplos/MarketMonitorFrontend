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
import useSWR from "swr";
import fetcherWithToken from "../internals/fetcherWithToken";
import MainLayout from "../internals/MainLayout";
import useUser from "../internals/useUser";

import { ReactComponent as ErrorIcon } from "../assets/error.svg";

import FullBox from "../components/FullBox";

function Tracking() {
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
      const timestamp =
        "As of " +
        new Date(asset._id.time).toLocaleString("en-US", {
          timeZone: "EST",
        });
      return (
        <Card
          key={index}
          sx={{ mb: 3, display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <Heading as="h3" mb={2}>
              {asset._id.ticker}
            </Heading>
            <Text sx={{ color: "muted" }}>
              {asset._id.name + " • " + timestamp}
            </Text>
            <Text sx={{ color: "primary" }}>{" $" + asset._id.rate}</Text>
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
              data-name={asset._id.name}
              data-ticker={asset._id.ticker}
              onClick={removeAssetFromUser}
            >
              Remove
            </Button>
          </div>
        </Card>
      );
    });
  }

  return (
    <MainLayout>
      <Container>
        <Heading as="h1" sx={{ my: 4 }}>
          Tracking
        </Heading>
        {dataView}
      </Container>
    </MainLayout>
  );
}

export default Tracking;
