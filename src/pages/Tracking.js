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
} from "@theme-ui/components";
import useSWR from "swr";
import toast, { Toaster } from "react-hot-toast";
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

  function revalidateAssetData(newData) {
    console.log("=========ASSETNOTIF REVALIDATING DATA ", newData);
    assetsMutate();
  }

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
        toast.success(`Removed ${ticker}.`);
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
        toast.error(`Couldn't remove ${ticker}.`);
        console.error("Error:", error);
      });
  }

  if (assetsData && assetsData.assets && assetsData.assets.length > 0) {
    dataView = assetsData.assets.map((asset, index) => {
      const timestamp =
        "As of " +
        new Date(asset._id.time).toLocaleString("en-US", {
          timeZone: "EST",
        }) + " (ET)";

      const AssetControls = () => {
        return (
          <>
            <Button
              sx={{ backgroundColor: "red" }}
              data-name={asset._id.name}
              data-ticker={asset._id.ticker}
              onClick={removeAssetFromUser}
            >
              Remove
            </Button>
            <AssetNotificationMenu
              sx={{ display: "inline-block", ml: 2 }}
              ticker={asset._id.ticker}
              revalidateAssetData={revalidateAssetData}
              toast={toast}
            ></AssetNotificationMenu>
          </>
        );
      };

      return (
        <div key={index} sx={{ mb: 5 }}>
          <Card>
            <Flex
              sx={{
                alignItems: ["flex-start", null, "center"],
                flexDirection: ["column", null, "row"],
              }}
            >
              <div sx={{ flexGrow: "1", order: [2, null, 1] }}>
                <Heading as="h3">{asset._id.ticker}</Heading>
                <Paragraph sx={{ color: "muted", mb: 0 }}>
                  {asset._id.name}
                </Paragraph>
                <Paragraph sx={{ color: "muted", mb: 0 }}>
                  {timestamp}
                </Paragraph>
              </div>
              <Text
                as="h1"
                sx={{
                  color: "primary",
                  order: [1, null, 2],
                  mb: [3, null, 0],
                }}
              >
                {" $" + asset._id.rate}
              </Text>
            </Flex>
            <div sx={{ display: ["flex", null, "none"], mt: 3 }}>
              <AssetControls />
            </div>
          </Card>

          <Flex sx={{ maxWidth: "90%", mx: "auto" }}>
            {(asset.min || asset.max) && (
              <Flex
                bg="secondary"
                py={2}
                px={4}
                sx={{
                  alignItems: "center",
                  mt: [2, null, 0],
                  borderRadius: ["big", null, "0"],
                  borderBottomLeftRadius: ["big", null, "main"],
                  borderBottomRightRadius: ["big", null, "main"],
                  width: ["100%", null, "auto"],
                }}
              >
                Being Notified • {asset.min ? `Min: $${asset.min}` : ""}
                {asset.min && asset.max ? ", " : " "}
                {asset.max ? `Max: $${asset.max}` : ""}
              </Flex>
            )}
            <div sx={{ ml: "auto", mt: 2, display: ["none", null, "block"] }}>
              <AssetControls />
            </div>
          </Flex>
        </div>
      );
    });
  }

  return (
    <MainLayout>
      <Container>
        <Toaster />
        <Heading as="h1" sx={{ my: 4 }}>
          Tracking
        </Heading>
        {dataView}
      </Container>
    </MainLayout>
  );
}

export default Tracking;
