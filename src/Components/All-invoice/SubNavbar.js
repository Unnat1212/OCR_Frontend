import React, { useState } from "react";
import { styled } from "@mui/system";
import SubNavAll from "./SubNavAll";

const NavbarContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingLeft: "60px",
  paddingTop: "57px",
  margin: "0 auto", // Adjust the margin as needed
});

const NavItem = styled("div")({
  marginRight: "66px", // Adjust the spacing between items as needed
  fontSize: "15px",
  fontFamily: "Heebo, sans-serif",
  color: "rgba(43, 43, 43, 0.8)", // Adjust the text color as needed
  cursor: "pointer",
  position: "relative",
  "&:hover": {
    color: "rgba(43, 43, 43, 0.6)",
  },
  "&.active::after": {
    content: '""',
    position: "absolute",
    bottom: "-4px",
    left: 0,
    width: "100%",
    borderBottom: "4px solid rgba(159, 119, 235, 1)",
  },
});

const Component1 = () => (
  <div>
    <SubNavAll />
  </div>
);
const Component2 = () => (
  <div
    style={{
      width: "77vw",
      height: "71vh",
      backgroundColor: "yellow",
      margin: "1.30vh 1.40vw 0px 1.45vw",
    }}
  >
    {/* uploaded content */}
    table2
  </div>
);
const Component3 = () => (
  <div
    style={{
      width: "77vw",
      height: "71vh",
      backgroundColor: "yellow",
      margin: "1.30vh 1.40vw 0px 1.45vw",
    }}
  >
    {/* validated content */}
    table3
  </div>
);
const Component4 = () => (
  <div
    style={{
      width: "77vw",
      height: "71vh",
      backgroundColor: "yellow",
      margin: "1.30vh 1.40vw 0px 1.45vw",
    }}
  >
    {/* exported content  */}
    table4
  </div>
);

const SubNavbar = () => {
  const [activeNavItem, setActiveNavItem] = useState("All");

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  const renderComponent = () => {
    switch (activeNavItem) {
      case "All":
        return <Component1 />;
      case "Uploaded":
        return <Component2 />;
      case "Validated":
        return <Component3 />;
      case "Exported":
        return <Component4 />;
      default:
        return <Component1 />;
    }
  };

  return (
    <div>
      <NavbarContainer>
        <NavItem
          onClick={() => handleNavItemClick("All")}
          className={activeNavItem === "All" ? "active" : ""}
          style={
            activeNavItem === "All" ? { color: "rgba(159, 119, 235, 1)" } : {}
          }
        >
          All
        </NavItem>
        <NavItem
          onClick={() => handleNavItemClick("Uploaded")}
          className={activeNavItem === "Uploaded" ? "active" : ""}
          style={
            activeNavItem === "Uploaded"
              ? { color: "rgba(159, 119, 235, 1)" }
              : {}
          }
        >
          Uploaded
        </NavItem>
        <NavItem
          onClick={() => handleNavItemClick("Validated")}
          className={activeNavItem === "Validated" ? "active" : ""}
          style={
            activeNavItem === "Validated"
              ? { color: "rgba(159, 119, 235, 1)" }
              : {}
          }
        >
          Validated
        </NavItem>
        <NavItem
          onClick={() => handleNavItemClick("Exported")}
          className={activeNavItem === "Exported" ? "active" : ""}
          style={
            activeNavItem === "Exported"
              ? { color: "rgba(159, 119, 235, 1)" }
              : {}
          }
        >
          Exported
        </NavItem>
      </NavbarContainer>
      {renderComponent()}
    </div>
  );
};

export default SubNavbar;
