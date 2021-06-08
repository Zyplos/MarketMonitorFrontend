/** @jsxImportSource theme-ui */

function FullBox({ useDims, ...props }) {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        height: useDims ? "100vh" : "auto",
        maxHeight: useDims ? "100vh" : "none",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
      {...props}
    >
      {props.children}
    </div>
  );
}

export default FullBox;
