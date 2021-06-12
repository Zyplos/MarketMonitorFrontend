/** @jsxImportSource theme-ui */
import {
  Button,
  Card,
  Container,
  Heading,
  Paragraph,
  Spinner,
  Text,
  Flex,
  Box,
} from "@theme-ui/components";
import useSWR from "swr";
import fetcherWithToken from "../internals/fetcherWithToken";
import MainLayout from "../internals/MainLayout";
import useUser from "../internals/useUser";

import { ReactComponent as ErrorIcon } from "../assets/error.svg";

import FullBox from "../components/FullBox";
import AssetNotificationMenu from "../components/AssetNotificationMenu";

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

  console.log(assetsData);

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
              (asset) => asset._id.ticker !== ticker
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
        <div key={index} sx={{ mb: 5 }}>
          <Card>
            <Flex sx={{ alignItems: "center" }}>
              <div>
                <Heading as="h3" mb={2}>
                  {asset._id.ticker}
                </Heading>
                <Text sx={{ color: "muted" }}>
                  {asset._id.name + " • " + timestamp}
                </Text>
              </div>
              <Text as="h1" sx={{ ml: "auto", color: "primary" }}>
                {" $" + asset._id.rate}
              </Text>
            </Flex>
          </Card>

          <Flex sx={{ maxWidth: "90%", mx: "auto" }}>
            <Flex
              bg="primary"
              py={2}
              px={4}
              sx={{
                alignItems: "center",
                borderBottomLeftRadius: "main",
                borderBottomRightRadius: "main",
              }}
            >
              Being Notified • Min: $240, Max: $689
            </Flex>
            <div sx={{ ml: "auto" }}>
              {/* <Button
                mr={2}
                sx={{ backgroundColor: "secondary", marginTop: "10px" }}
              >
                Notify
              </Button> */}
              <AssetNotificationMenu ticker={asset._id.ticker}></AssetNotificationMenu>
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
          </Flex>
        </div>
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
