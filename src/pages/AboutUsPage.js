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

// andrew, enoc, wael, angel

function AboutUs() {
  return (
    <MainLayout>
      <Container>
        <Heading as="h1" sx={{ my: 4 }}>
          About Us
        </Heading>

        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          consequuntur possimus suscipit voluptatem enim nemo similique quam
          molestiae omnis porro?
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, rerum.
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
      </Container>
    </MainLayout>
  );
}

export default AboutUs;
