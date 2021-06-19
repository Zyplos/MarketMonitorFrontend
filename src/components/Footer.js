/** @jsxImportSource theme-ui */
import ThemedRouterLink from "./ThemedRouterLink";

function Footer() {
  return (
    <div sx={{ p: 3, textAlign: "center", bg: "backgroundSecondary" }}>
      <p>
        MarketMonitor is a student project. Learn more{" "}
        <ThemedRouterLink to="/aboutus">about us</ThemedRouterLink>, or{" "}
        <ThemedRouterLink to="/contactus">contact us</ThemedRouterLink> with any
        comments or concerns.
      </p>
    </div>
  );
}

export default Footer;
