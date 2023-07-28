import { createTheme } from "@mui/material/styles";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1440,
    xxl: 1700,
  },
};

const { up } = createTheme({ breakpoints }).breakpoints;

const theme = createTheme({
  breakpoints,
  typography: {
    h4: {
      fontSize: "16px",
      fontWeight: 600,
      fontFamily: "Poppins, sans-serif",
      [up("sm")]: {
        fontSize: "12px",
      },
      [up("md")]: {
        fontSize: "15px",
      },
      [up("lg")]: {
        fontSize: "20px",
      },
      [up("xl")]: {
        fontSize: "22px",
      },
      [up("xxl")]: {
        fontSize: "24px",
      },
    },
    h5: {
      fontSize: "14px",
      fontWeight: 500,
      fontFamily: "Heebo, sans-serif",
      [up("sm")]: {
        fontSize: "11px",
      },
      [up("md")]: {
        fontSize: "13px",
      },
      [up("lg")]: {
        fontSize: "15px",
      },
      [up("xl")]: {
        fontSize: "17px",
      },
      [up("xxl")]: {
        fontSize: "18px",
      },
    },
    body2: {
      fontSize: "10px",
      fontWeight: 400,
      fontFamily: "Heebo, sans-serif",
      [up("sm")]: {
        fontSize: "8px",
      },
      [up("md")]: {
        fontSize: "10px",
      },
      [up("lg")]: {
        fontSize: "11px",
      },
      [up("xl")]: {
        fontSize: "13px",
      },
      [up("xxl")]: {
        fontSize: "14px",
      },
    },
    subtitle1: {
      fontSize: "11px",
      fontWeight: 400,
      fontFamily: "Heebo, sans-serif",
      [up("sm")]: {
        fontSize: "9px",
      },
      [up("md")]: {
        fontSize: "11px",
      },
      [up("lg")]: {
        fontSize: "12px",
      },
      [up("xl")]: {
        fontSize: "14px",
      },
      [up("xxl")]: {
        fontSize: "15px",
      },
    },
    subtitle2: {
      fontSize: "9px",
      fontWeight: 400,
      fontFamily: "Heebo, sans-serif",
      [up("sm")]: {
        fontSize: "8px",
      },
      [up("md")]: {
        fontSize: "10px",
      },
      [up("lg")]: {
        fontSize: "12px",
      },
      [up("xl")]: {
        fontSize: "13px",
      },
      [up("xxl")]: {
        fontSize: "13px",
      },
    },
    body1: {
      fontSize: "12px",
      fontWeight: 400,
      fontFamily: "Heebo, sans-serif",
      [up("sm")]: {
        fontSize: "13px",
      },
      [up("md")]: {
        fontSize: "9px",
      },
      [up("lg")]: {
        fontSize: "13px",
      },
      [up("xl")]: {
        fontSize: "16px",
      },
      [up("xxl")]: {
        fontSize: "16px",
      },
    },
  },
});

export { theme, up };
