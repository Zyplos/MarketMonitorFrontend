/** @jsxImportSource theme-ui */
import { useEffect, useState, useRef } from "react";

const styles = {
  backgroundColor: "backgroundTertiary",
  borderRadius: "subtle",
  position: "absolute",
  top: "50px",
  right: 0,
  display: "none",
  transition: "opacity 0.4s ease, transform 0.4s ease, display 0.4s",
  zIndex: 2,
};

// https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
function Dropdown({ toggle, children }) {
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);

  function toggleMenu(e) {
    e.preventDefault();
    setOpen(!open);
  }

  useEffect(() => {
    const pageClickEvent = (e) => {
      // If the active element exists and is clicked outside of
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(!open);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (open) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [open]);

  return (
    <div sx={{ position: "relative", display: "inline-block" }}>
      <div onClick={toggleMenu}>{toggle}</div>
      <div
        ref={dropdownRef}
        sx={{
          ...styles,
          ...{
            opacity: open ? 1 : 0,
            display: open ? "block" : "none",
            transform: open ? "translateY(0px)" : "translateY(-20px)",
          },
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
