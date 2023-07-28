// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import classes from "./ResetPassword.module.css";
// import {
//   Button,
//   Typography,
//   // useMediaQuery,
//   ThemeProvider,
//   createTheme,
// } from "@mui/material";
// import MediaQuery from "../Utils/MediaQueries";
// import { Link } from "react-router-dom";
// import logoImg from "./OCR-logo.png";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   color: theme.palette.text.secondary,
// }));

// const theme = createTheme({});

// export default function ResetPassword() {
//   const {
//     isHeightBelow1001x1100,
//     isHeightBelow900x1000,
//     isHeightBelow770x899,
//     isHeightBelow680x769,
//     isHeightBelow550x679,
//     isHeightBelow549,
//     isScreenWide4,
//     isScreenWide3,
//     isScreenWide2,
//     isScreenWide1,
//     isScreenWide,
//     isMediumScreen1,
//     isMediumScreen2,
//     isMediumScreen3,
//     isMediumScreen4,
//     isMediumScreen5,
//   } = MediaQuery();
//   // const isHeightBelow1001x1100 = useMediaQuery(
//   //   "(min-height: 1020px) and (max-height: 1120px)"
//   // );
//   // const isHeightBelow900x1000 = useMediaQuery(
//   //   "(min-height: 850px) and (max-height: 1020px)"
//   // );
//   // const isHeightBelow770x899 = useMediaQuery(
//   //   "(min-height: 780px) and (max-height: 849px)"
//   // );
//   // const isHeightBelow680x769 = useMediaQuery(
//   //   "(min-height: 700px) and (max-height: 779px)"
//   // );
//   // const isHeightBelow550x679 = useMediaQuery(
//   //   "(min-height: 599px) and (max-height: 699px)"
//   // );
//   // const isHeightBelow549 = useMediaQuery("max-height: 599px)");

//   // const isScreenWide4 = useMediaQuery(
//   //   "(min-width: 1851px) and (max-width: 2000px)"
//   // );
//   // const isScreenWide3 = useMediaQuery(
//   //   "(min-width: 1650px) and (max-width: 1850px)"
//   // );
//   // const isScreenWide2 = useMediaQuery(
//   //   "(min-width: 1501px) and (max-width: 1649px)"
//   // );
//   // const isScreenWide1 = useMediaQuery(
//   //   "(min-width: 1400px) and (max-width: 1500px)"
//   // );
//   // const isScreenWide = useMediaQuery(
//   //   "(min-width: 1250px) and (max-width: 1399px)"
//   // );
//   // const isMediumScreen1 = useMediaQuery(
//   //   "(min-width: 1050px) and (max-width: 1249px)"
//   // );
//   // const isMediumScreen2 = useMediaQuery(
//   //   "(min-width: 950px) and (max-width: 1049px)"
//   // );
//   // const isMediumScreen3 = useMediaQuery(
//   //   "(min-width: 850px) and (max-width: 949px)"
//   // );
//   // const isMediumScreen4 = useMediaQuery(
//   //   "(min-width: 700px) and (max-width: 849px)"
//   // );
//   // const isMediumScreen5 = useMediaQuery(
//   //   "(min-width: 600px) and (max-width: 699px)"
//   // );

//   let headingFontSize = "41px";
//   let logoMarginBottom = "60px";
//   let inputBottomMargin = "51px";
//   let headingLineHeight = "43px";
//   let buttonBottomMargin = "36px";
//   let lostBottomMargin = "37px";
//   let boxLeftmargin = "5rem";
//   let resetFontSize = "18px";
//   let inputHeight = "38px";
//   let inputWidth = "300px";
//   let logoHeight = "35px";
//   let infoFontSize = "11px";
//   let titleLeft = "165px";
//   let logoWidth = "90px";
//   let buttonFontSize = "14px";
//   let loremWidth = "261px";
//   let loremTopMargin = "15px";
//   let loremLineHeight = "14px";
//   let lostTextMarginTop = "6px";
//   let labelMarginBottom = "4px";
//   let linkFontSize = "14px";
//   let buttonHeight = "36px";
//   let buttonWidth = "300px";
//   if (isHeightBelow1001x1100 || isScreenWide4) {
//     // 1920 x 1080
//     headingLineHeight = "76.8px";
//     headingFontSize = "64px";
//     infoFontSize = "15px";
//     titleLeft = "212px";
//     loremTopMargin = "27px";
//     loremWidth = "359px";
//     lostTextMarginTop = "9px";
//     logoMarginBottom = "60px";
//     lostBottomMargin = "37px";
//     buttonBottomMargin = "22px";
//     inputBottomMargin = "51px";
//     labelMarginBottom = "8px";
//     boxLeftmargin = "335px";
//     loremLineHeight = "22.03px";
//     inputHeight = "52px";
//     inputWidth = "468px";
//     buttonWidth = "470px";
//     buttonHeight = "54px";
//     resetFontSize = "24px";
//     buttonFontSize = "18px";
//     linkFontSize = "16px";
//     logoHeight = "60px";
//     logoWidth = "148px";
//   } else if (isHeightBelow900x1000 || isScreenWide2) {
//     // 1600 x 900
//     headingLineHeight = "66px";
//     headingFontSize = "60px";
//     infoFontSize = "15px";
//     titleLeft = "166px";
//     loremLineHeight = "22.03px";
//     loremTopMargin = "23px";
//     loremWidth = "349px";
//     lostTextMarginTop = "7px";
//     logoMarginBottom = "50px";
//     lostBottomMargin = "30px";
//     buttonBottomMargin = "20px";
//     inputBottomMargin = "44px";
//     labelMarginBottom = "7px";
//     boxLeftmargin = "246px";
//     inputHeight = "52px";
//     inputWidth = "468px";
//     buttonWidth = "470px";
//     buttonHeight = "54px";
//     resetFontSize = "22px";
//     buttonFontSize = "18px";
//     linkFontSize = "16px";
//     logoHeight = "56px";
//     logoWidth = "140px";
//   } else if (isHeightBelow770x899 || isScreenWide1) {
//     //1440 x 810
//     headingLineHeight = "59px";
//     headingFontSize = "54px";
//     infoFontSize = "14px";
//     titleLeft = "138px";
//     loremLineHeight = "20px";
//     loremTopMargin = "18px";
//     loremWidth = "336px";
//     lostTextMarginTop = "6px";
//     logoMarginBottom = "40px";
//     lostBottomMargin = "26px";
//     buttonBottomMargin = "17px";
//     inputBottomMargin = "40px";
//     labelMarginBottom = "7px";
//     boxLeftmargin = "232px";
//     inputHeight = "45px";
//     inputWidth = "400px";
//     buttonWidth = "402px";
//     buttonHeight = "47px";
//     resetFontSize = "20px";
//     buttonFontSize = "17px";
//     linkFontSize = "15px";
//     logoWidth = "125px";
//     logoHeight = "51px";
//   } else if (isHeightBelow680x769 || isScreenWide) {
//     // 1366 x 768
//     headingLineHeight = "53px";
//     headingFontSize = "50px";
//     infoFontSize = "13px";
//     titleLeft = "144px";
//     loremLineHeight = "20px";
//     loremTopMargin = "15px";
//     loremWidth = "313px";
//     lostTextMarginTop = "6px";
//     logoMarginBottom = "34px";
//     lostBottomMargin = "22px";
//     buttonBottomMargin = "13px";
//     inputBottomMargin = "30px";
//     labelMarginBottom = "6px";
//     boxLeftmargin = "220px";
//     inputHeight = "45px";
//     inputWidth = "380px";
//     buttonWidth = "382px";
//     buttonHeight = "47px";
//     resetFontSize = "19px";
//     buttonFontSize = "16px";
//     linkFontSize = "14px";
//     logoWidth = "120px";
//     logoHeight = "45px";
//   } else if (isMediumScreen1 && isHeightBelow550x679) {
//     // 1200 x 675
//     headingLineHeight = "42px";
//     headingFontSize = "40px";
//     infoFontSize = "12px";
//     titleLeft = "113px";
//     loremLineHeight = "17px";
//     loremTopMargin = "12px";
//     loremWidth = "295px";
//     lostTextMarginTop = "5px";
//     logoMarginBottom = "27px";
//     lostBottomMargin = "18px";
//     buttonBottomMargin = "11px";
//     inputBottomMargin = "22px";
//     labelMarginBottom = "5px";
//     boxLeftmargin = "195px";
//     inputHeight = "40px";
//     inputWidth = "340px";
//     buttonWidth = "342px";
//     buttonHeight = "42px";
//     resetFontSize = "18px";
//     buttonFontSize = "14px";
//     linkFontSize = "13px";
//     logoHeight = "42px";
//     logoWidth = "103px";
//   } else if (isMediumScreen3 || isHeightBelow549) {
//     // 900 x 506
//     headingLineHeight = "40px";
//     headingFontSize = "37px";
//     infoFontSize = "9px";
//     titleLeft = "83px";
//     loremLineHeight = "14px";
//     loremTopMargin = "9px";
//     loremWidth = "218px";
//     lostTextMarginTop = "4px";
//     logoMarginBottom = "20px";
//     lostBottomMargin = "15px";
//     buttonBottomMargin = "8px";
//     inputBottomMargin = "16px";
//     labelMarginBottom = "4px";
//     boxLeftmargin = "100px";
//     inputHeight = "35px";
//     inputWidth = "260px";
//     buttonWidth = "262px";
//     buttonHeight = "37px";
//     resetFontSize = "16px";
//     buttonFontSize = "13px";
//     linkFontSize = "13px";
//     logoWidth = "80px";
//     logoHeight = "32px";
//   } else if (isMediumScreen1) {
//     headingLineHeight = "41px";
//     headingFontSize = "38px";
//     infoFontSize = "11px";
//     titleLeft = "94px";
//     loremLineHeight = "17px";
//     loremTopMargin = "12px";
//     loremWidth = "255px";
//     lostTextMarginTop = "5px";
//     logoMarginBottom = "27px";
//     lostBottomMargin = "18px";
//     buttonBottomMargin = "11px";
//     inputBottomMargin = "22px";
//     labelMarginBottom = "5px";
//     boxLeftmargin = "149px";
//     inputHeight = "40px";
//     inputWidth = "340px";
//     buttonWidth = "342px";
//     buttonHeight = "42px";
//     resetFontSize = "18px";
//     buttonFontSize = "14px";
//     linkFontSize = "13px";
//     logoHeight = "42px";
//     logoWidth = "103px";
//   } else if (isMediumScreen2) {
//     headingLineHeight = "40px";
//     headingFontSize = "37px";
//     infoFontSize = "9px";
//     titleLeft = "115px";
//     loremLineHeight = "14px";
//     loremTopMargin = "9px";
//     loremWidth = "218px";
//     lostTextMarginTop = "4px";
//     logoMarginBottom = "20px";
//     lostBottomMargin = "15px";
//     buttonBottomMargin = "8px";
//     inputBottomMargin = "16px";
//     labelMarginBottom = "4px";
//     boxLeftmargin = "186px";
//     inputHeight = "35px";
//     inputWidth = "260px";
//     buttonWidth = "262px";
//     buttonHeight = "37px";
//     resetFontSize = "16px";
//     buttonFontSize = "13px";
//     linkFontSize = "13px";
//     logoWidth = "80px";
//     logoHeight = "32px";
//   } else if (isScreenWide3) {
//     headingLineHeight = "66px";
//     headingFontSize = "60px";
//     infoFontSize = "15px";
//     titleLeft = "166px";
//     loremLineHeight = "22.03px";
//     loremTopMargin = "23px";
//     loremWidth = "349px";
//     lostTextMarginTop = "7px";
//     logoMarginBottom = "50px";
//     lostBottomMargin = "30px";
//     buttonBottomMargin = "20px";
//     inputBottomMargin = "44px";
//     labelMarginBottom = "7px";
//     boxLeftmargin = "246px";
//     inputHeight = "52px";
//     inputWidth = "468px";
//     buttonWidth = "470px";
//     buttonHeight = "54px";
//     resetFontSize = "22px";
//     buttonFontSize = "18px";
//     linkFontSize = "16px";
//     logoHeight = "56px";
//     logoWidth = "140px";
//   } else if (isMediumScreen4) {
//     headingLineHeight = "40px";
//     headingFontSize = "37px";
//     infoFontSize = "9px";
//     titleLeft = "106px";
//     loremLineHeight = "14px";
//     loremTopMargin = "9px";
//     loremWidth = "218px";
//     lostTextMarginTop = "4px";
//     logoMarginBottom = "20px";
//     lostBottomMargin = "15px";
//     buttonBottomMargin = "8px";
//     inputBottomMargin = "16px";
//     labelMarginBottom = "4px";
//     boxLeftmargin = "84px";
//     inputHeight = "35px";
//     inputWidth = "260px";
//     buttonWidth = "262px";
//     buttonHeight = "37px";
//     resetFontSize = "16px";
//     buttonFontSize = "13px";
//     linkFontSize = "13px";
//     logoWidth = "80px";
//     logoHeight = "32px";
//   } else if (isMediumScreen5) {
//     headingLineHeight = "34px";
//     headingFontSize = "28px";
//     infoFontSize = "8px";
//     titleLeft = "66px";
//     loremLineHeight = "14px";
//     loremTopMargin = "9px";
//     loremWidth = "195px";
//     lostTextMarginTop = "3px";
//     logoMarginBottom = "17px";
//     lostBottomMargin = "13px";
//     buttonBottomMargin = "7px";
//     inputBottomMargin = "14px";
//     labelMarginBottom = "3px";
//     boxLeftmargin = "80px";
//     inputHeight = "30px";
//     inputWidth = "200px";
//     buttonWidth = "202px";
//     buttonHeight = "32px";
//     resetFontSize = "15px";
//     buttonFontSize = "12px";
//     linkFontSize = "13px";
//     logoWidth = "80px";
//     logoHeight = "32px";
//   }
//   return (
//     <ThemeProvider theme={theme}>
//       <Grid container sx={{ height: "100vh", width: "100vw" }}>
//         <Grid
//           item
//           xs={12}
//           sm={6}
//           md={5}
//           lg={4.89}
//           sx={{
//             background: `url(${require("./sideBar.png")})`,
//             height: "100vh",
//             backgroundPosition: "center",
//             backgroundSize: "cover",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//           }}
//         >
//           <Typography
//             variant="h6"
//             component="span"
//             className={classes.heading}
//             style={{
//               fontSize: headingFontSize,
//               lineHeight: headingLineHeight,
//               fontFamily: "Poppins, sans-serif",
//               left: titleLeft,
//               fontWeight: "600",
//               color: "rgba(159, 119, 235, 1)",
//               whiteSpace: "pre-line",
//             }}
//           >
//             <span style={{ color: "white" }}>OCR- {"\n"}</span>
//             Service to {"\n"}
//             Expense {"\n"}
//             Account
//             <Typography
//               variant="subtitle2"
//               component="p"
//               style={{
//                 marginTop: loremTopMargin,
//                 color: "rgba(30, 30, 30, 0.6)",
//                 fontWeight: 400,
//                 fontFamily: "Heebo, sans-serif",
//                 fontSize: infoFontSize,
//                 lineHeight: loremLineHeight,
//                 width: loremWidth,
//               }}
//             >
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore
//             </Typography>
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sm={6} md={7} lg={7.11}>
//           <Item className={classes.secondGrid}>
//             <Box marginLeft={boxLeftmargin}>
//               <img
//                 src={logoImg}
//                 alt="dummy"
//                 className={classes.OCRLogo}
//                 style={{
//                   width: logoWidth,
//                   marginBottom: logoMarginBottom,
//                   height: logoHeight,
//                 }}
//               ></img>
//               <Typography
//                 variant="subtitle1"
//                 component="p"
//                 style={{
//                   color: "rgba(0, 0, 0, 1)",
//                   fontFamily: "Poppins, sans-serif",
//                   fontWeight: "600",
//                   fontSize: resetFontSize,
//                 }}
//               >
//                 Reset Password
//               </Typography>
//               <Typography
//                 variant="body2"
//                 component="p"
//                 style={{
//                   marginTop: lostTextMarginTop,
//                   color: "rgba(43, 43, 43, 0.6)",
//                   fontSize: infoFontSize,
//                   fontWeight: 400,
//                   marginBottom: lostBottomMargin,
//                   fontFamily: "Heebo, sans-serif",
//                 }}
//               >
//                 Lost your password? Please enter your email address
//               </Typography>
//               <div
//                 className={classes.emailInputContainer}
//                 style={{ marginBottom: inputBottomMargin }}
//               >
//                 <label
//                   className={classes.emailLabel}
//                   style={{
//                     fontSize: infoFontSize,
//                     marginBottom: labelMarginBottom,
//                     fontFamily: "Heebo, sans-serif",
//                   }}
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="text"
//                   className={classes.emailInput}
//                   style={{
//                     width: inputWidth,
//                     fontSize: buttonFontSize,
//                     height: inputHeight,
//                   }}
//                 />
//               </div>
//               <Button
//                 variant="contained"
//                 sx={{
//                   backgroundColor: "#9F77EB",
//                   width: buttonWidth,
//                   fontWeight: 500,
//                   color: "rgba(255, 255, 255, 1)",
//                   marginBottom: buttonBottomMargin,
//                   fontSize: buttonFontSize,
//                   height: buttonHeight,
//                   fontFamily: "Heebo, sans-serif",
//                   textTransform: "none",
//                   "&:hover": {
//                     backgroundColor: "#7e57c2",
//                   },
//                 }}
//               >
//                 Send Code
//               </Button>
//               <div
//                 style={{
//                   width: inputWidth,
//                   display: "flex",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Typography
//                   variant="body2"
//                   component="p"
//                   style={{
//                     color: "rgba(43, 43, 43, 0.4)",
//                     fontWeight: 500,
//                     fontFamily: "Heebo, sans-serif",
//                     fontSize: linkFontSize,
//                   }}
//                 >
//                   Go back to
//                   <Link
//                     style={{
//                       color: "rgba(159, 119, 235, 1)",
//                       fontFamily: "Heebo, sans-serif",
//                     }}
//                   >
//                     Log In
//                   </Link>
//                 </Typography>
//               </div>
//             </Box>
//           </Item>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }
