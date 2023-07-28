import React from "react";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { Search } from "@mui/icons-material";
import UploadIcon from "@mui/icons-material/Upload";
import SubNavbar from "./SubNavbar";
import MediaQuery from "../../Utils/MediaQueries";

const SearchContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  width: "341px", // Adjust the width as needed
  height: "54px",
  backgroundColor: "rgba(43, 43, 43, 0.1)", // Adjust the background color as needed
  borderRadius: "4px", // Adjust the border radius as needed
  marginRight: "19px",
});

const SearchIcon = styled(Search)({
  marginLeft: "16px",
  marginRight: "8px",
  color: "rgba(43, 43, 43, 0.4)", // Adjust the icon color as needed
});

const SearchInput = styled("input")({
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  fontSize: "15px",
  fontFamily: "Heebo, sans-serif",
  width: "100%",
});

const AllInvoices = () => {
  const {
    isHeightBelow1001x1100,
    isHeightBelow900x1000,
    isHeightBelow770x899,
    isHeightBelow680x769,
    isHeightBelow550x679,
    isHeightBelow549,
    isScreenWide4,
    isScreenWide2,
    isScreenWide1,
    isScreenWide,
    isMediumScreen1,
    isMediumScreen2,
    isMediumScreen3,
    isMediumScreen4,
  } = MediaQuery();

  let navigationHeight = 50;
  let sidebarWidth = 18;
  let mainContentMarginLeft = 2;
  let mainContentWidth = "78vw";
  let allInvoicePT = "40px";

  if (isHeightBelow1001x1100 || isScreenWide4) {
    // 1920 x 1080
    navigationHeight = 94;
    sidebarWidth = 20;
    mainContentMarginLeft = 2;
    mainContentWidth = "70vw";
    allInvoicePT = "52px";
  } else if (isHeightBelow900x1000 || isScreenWide2) {
    // 1600 x 900
    navigationHeight = 90;
    sidebarWidth = 20;
    mainContentMarginLeft = 2;
    mainContentWidth = "70vw";
    allInvoicePT = "50px";
  } else if (isHeightBelow770x899 || isScreenWide1) {
    //1440 x 810
    navigationHeight = 82;
    sidebarWidth = 20;
    mainContentMarginLeft = 2;
    mainContentWidth = "70vw";
    allInvoicePT = "47px";
  } else if (isHeightBelow680x769 && isScreenWide) {
    // 1366 x 768
    navigationHeight = 75;
    sidebarWidth = 20;
    mainContentMarginLeft = 2;
    mainContentWidth = "70vw";
    allInvoicePT = "42px";
  } else if (isMediumScreen1 && isHeightBelow550x679) {
    // 1200 x 675
    navigationHeight = 70;
    sidebarWidth = 20;
    mainContentMarginLeft = 2;
    mainContentWidth = "70vw";
    allInvoicePT = "29px";
  } else if (isMediumScreen3 || isHeightBelow549) {
    // 900 x 506
    navigationHeight = 50;
    sidebarWidth = 20;
    mainContentMarginLeft = 2;
    mainContentWidth = "65vw";
    allInvoicePT = "35px";
  } else if (isScreenWide) {
    // my screen
    navigationHeight = 60;
    sidebarWidth = 16;
    mainContentMarginLeft = 2;
    mainContentWidth = "81vw";
    allInvoicePT = "35px";
  } else if (isMediumScreen2) {
    navigationHeight = 60;
    sidebarWidth = 18;
    mainContentMarginLeft = 2;
    mainContentWidth = "78vw";
  } else if (isMediumScreen4) {
    navigationHeight = 50;
    sidebarWidth = 18;
    mainContentMarginLeft = 2;
    mainContentWidth = "78vw";
  } else if (isMediumScreen1) {
    navigationHeight = 70;
    sidebarWidth = 18;
    mainContentMarginLeft = 2;
    mainContentWidth = "78vw";
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          position: "fixed",
          top: "0px",
          zIndex: 2,
          height: `${94}px`,
          backgroundColor: "yellow",
        }}
      >
        navigation
      </div>
      <div
        style={{
          height: "100%",
          width: "100vw",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            color: "white",
            width: `${18}vw`,
            height: "100%",
            backgroundColor: "green",
            position: "fixed",
            top: "0px",
            bottom: "0px",
            left: "0px",
          }}
        >
          <div style={{ marginTop: `${94}px` }}>
            {/* fixed sidebar content here */}
            sidebar
          </div>
        </div>
        <div
          style={{
            marginTop: `${94}px`,
            marginLeft: `${18}vw`,
            paddingLeft: `${2}vw`,
            width: "70vw",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "50px",
            }}
          >
            <Typography
              variant="subtitle2"
              component="p"
              style={{
                color: "rgba(0, 0, 0, 1)",
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
                fontSize: "24px",
              }}
            >
              All Invoices
            </Typography>
            <div style={{ display: "flex" }}>
              <Button
                variant="text"
                sx={{
                  height: "54px",
                  backgroundColor: "rgba(30, 30, 30, 0.1)",
                  color: "rgba(43, 43, 43, 1)",
                  width: "108px",
                  marginRight: "19px",
                }}
              >
                Tags
                <KeyboardArrowDownIcon />
              </Button>
              <SearchContainer>
                <SearchIcon />
                <SearchInput placeholder="Search documents" />
              </SearchContainer>
              <Button
                variant="contained"
                startIcon={<UploadIcon />}
                sx={{
                  backgroundColor: "rgba(159, 119, 235, 1)",
                  height: "54px",
                  width: "132px",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "rgba(159, 119, 235, 0.8)",
                  },
                }}
              >
                Upload
              </Button>
            </div>
          </div>
          <SubNavbar />
        </div>
      </div>
    </div>
  );
};

export default AllInvoices;
