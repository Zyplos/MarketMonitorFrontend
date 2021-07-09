/** @jsxImportSource theme-ui */
import {
  Container,
  Heading,
  Paragraph,
  Grid,
  Link,
} from "@theme-ui/components";
import { ReactComponent as A1 } from "../assets/a1temp.svg";
import { ReactComponent as A2 } from "../assets/a2temp.svg";
import { ReactComponent as A3 } from "../assets/a3temp.svg";
import { ReactComponent as A4 } from "../assets/a4temp.svg";
import { ReactComponent as TwitterSvg } from "../assets/twitter.svg";
import { ReactComponent as GitHubSvg } from "../assets/github.svg";
import { ReactComponent as LinkSvg } from "../assets/link.svg";
import PlayStorePng from "../assets/get-on-playstore.png";
import MainLayout from "../internals/MainLayout";

const avatarStyles = {
  width: "180px",
  height: "180px",
  mb: 3,
};

const iconStyles = {
  fill: "text",
  verticalAlign: "bottom",
  mr: 2,
};

const TwitterIcon = () => {
  return <TwitterSvg sx={iconStyles} />;
};
const GitHubIcon = () => {
  return <GitHubSvg sx={iconStyles} />;
};
const LinkIcon = () => {
  return <LinkSvg sx={iconStyles} />;
};
//test
const PlayStoreImage = () => {
  return <img src={PlayStorePng} alt="Get On Play Store" sx={{width: "200px"}}/>;
};

function AboutUs() {
  return (
    <MainLayout>
      <Container mb={5}>
        <Heading as="h1" sx={{ my: 4 }}>
          About Us
        </Heading>

        <Paragraph>
          MarketMonitor is a tool for monitoring stock prices. It was created to
          help trading enthusiasts easily receive alerts on stock price changes.
          Add a stock to your watchlist and then set price limits that will
          trigger notifications once the stock price rises or drops. Create an
          account and track your favorite stocks.
        </Paragraph>
        <Paragraph>
          Download our mobile app for faster access:
        </Paragraph>
        <Link href="http://waelmobeirek.com/" target="_blank">
                <PlayStoreImage/>
              </Link>
        <Paragraph>
          MarketMonitor was created by a team of four students:
        </Paragraph>

        <Grid
          columns={[1, null, 2]}
          gap={4}
          sx={{
            mt: 5,
            "> div": {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          <div>
            <A1 sx={avatarStyles} />
            <Heading>Wael</Heading>
            <Paragraph>
              <Link href="http://waelmobeirek.com/" target="_blank">
                <LinkIcon /> waelmobeirek.com
              </Link>
            </Paragraph>
            <Paragraph>
              <Link href="https://github.com/waelmb" target="_blank">
                <GitHubIcon /> @waelmb
              </Link>
            </Paragraph>
          </div>

          <div>
            <A2 sx={avatarStyles} />
            <Heading>Andrew</Heading>
            <Paragraph>
              <Link href="https://github.com/amerkle2" target="_blank">
                <GitHubIcon /> @amerkle2
              </Link>
            </Paragraph>
          </div>

          <div>
            <A3 sx={avatarStyles} />
            <Heading>Angel</Heading>
            <Paragraph>
              <Link href="https://zyplos.dev" target="_blank">
                <LinkIcon /> zyplos.dev
              </Link>
            </Paragraph>
            <Paragraph>
              <Link href="https://github.com/zyplos" target="_blank">
                <GitHubIcon /> @Zyplos
              </Link>
            </Paragraph>
            <Paragraph>
              <Link href="https://twitter.com/zyplos" target="_blank">
                <TwitterIcon /> @Zyplos
              </Link>
            </Paragraph>
          </div>

          <div>
            <A4 sx={avatarStyles} />
            <Heading>Enoc</Heading>
            <Paragraph>
              <Link href="https://github.com/EnocCa" target="_blank">
                <GitHubIcon /> @EnocCa
              </Link>
            </Paragraph>
          </div>
        </Grid>
        <Paragraph>Disclaimer of Liability: Market Monitor is a student project. Prices shown may or may not reflect real-time prices due to delays. You should not rely upon the material or information on the website as a basis for making any business , legal, or any other decisions. The Market Monitor team is not liable for any loss or damage in connection with using our website or mobile application.</Paragraph>
      </Container>
    </MainLayout>
  );
}

export default AboutUs;
