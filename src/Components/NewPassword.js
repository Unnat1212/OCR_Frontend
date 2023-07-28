// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import classes from "./NewPassword.module.css";
// import { Button, Typography, ThemeProvider, createTheme } from "@mui/material";
// import logoImg from "./OCR-logo.png";
// import MediaQuery from "../Utils/MediaQueries";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   color: theme.palette.text.secondary,
// }));

// const theme = createTheme({});

// export default function NewPassword() {
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
//   } = MediaQuery();

//   let headingFontSize = "41px";
//   let logoMarginBottom = "60px";
//   let inputBottomMargin = "21px";
//   let headingLineHeight = "55px";
//   let lostBottomMargin = "37px";
//   let boxLeftmargin = "5rem";
//   let resetFontSize = "18px";
//   let inputHeight = "38px";
//   let inputWidth = "300px";
//   let logoHeight = "35px";
//   let infoFontSize = "11px";
//   let titleLeft = "200px";
//   let logoWidth = "90px";
//   let buttonFontSize = "14px";
//   let loremWidth = "200px";
//   // new
//   let loremTopMargin = "15px";
//   let loremLineHeight = "14px";
//   let lostOrResendMarginTop = "6px";
//   let labelMarginBottom = "4px";
//   let buttonHeight = "36px";
//   let buttonWidth = "300px";
//   let newPasswordMarginBottom = "23px";
//   if (isHeightBelow1001x1100 || isScreenWide4) {
//     // 1920 x 1080
//     headingLineHeight = "76.8px";
//     headingFontSize = "64px";
//     infoFontSize = "15px";
//     titleLeft = "212px";
//     loremLineHeight = "22.03px";
//     loremTopMargin = "27px";
//     loremWidth = "359px";
//     lostOrResendMarginTop = "9px";
//     logoMarginBottom = "58px";
//     lostBottomMargin = "37px";
//     inputBottomMargin = "49px";
//     labelMarginBottom = "8px";
//     newPasswordMarginBottom = "34px";
//     boxLeftmargin = "335px";
//     resetFontSize = "24px";
//     buttonFontSize = "18px";
//     buttonWidth = "470px";
//     buttonHeight = "54px";
//     inputHeight = "52px";
//     inputWidth = "468px";
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
//     lostOrResendMarginTop = "8px";
//     logoMarginBottom = "51px";
//     lostBottomMargin = "32px";
//     inputBottomMargin = "42px";
//     labelMarginBottom = "8px";
//     newPasswordMarginBottom = "31px";
//     boxLeftmargin = "260px";
//     resetFontSize = "22px";
//     buttonFontSize = "18px";
//     buttonWidth = "470px";
//     buttonHeight = "54px";
//     inputHeight = "52px";
//     inputWidth = "468px";
//     logoHeight = "56px";
//     logoWidth = "140px";
//   } else if (isHeightBelow770x899 || isScreenWide1) {
//     //1440 x 810
//     headingLineHeight = "59px";
//     headingFontSize = "54px";
//     infoFontSize = "14px";
//     titleLeft = "138px";
//     loremLineHeight = "20px";
//     loremWidth = "336px";
//     loremTopMargin = "18px";
//     lostOrResendMarginTop = "7px";
//     logoMarginBottom = "44px";
//     lostBottomMargin = "27px";
//     inputBottomMargin = "38px";
//     labelMarginBottom = "6px";
//     newPasswordMarginBottom = "27px";
//     boxLeftmargin = "240px";
//     resetFontSize = "20px";
//     buttonFontSize = "17px";
//     inputHeight = "45px";
//     inputWidth = "400px";
//     buttonWidth = "402px";
//     buttonHeight = "47px";
//     logoWidth = "125px";
//     logoHeight = "51px";
//   } else if (isHeightBelow680x769 && isScreenWide) {
//     // 1366 x 768
//     headingLineHeight = "53px";
//     headingFontSize = "50px";
//     infoFontSize = "13px";
//     titleLeft = "144px";
//     loremLineHeight = "20px";
//     loremTopMargin = "15px";
//     loremWidth = "313px";
//     lostOrResendMarginTop = "7px";
//     logoMarginBottom = "39px";
//     lostBottomMargin = "23px";
//     inputBottomMargin = "34px";
//     labelMarginBottom = "5px";
//     newPasswordMarginBottom = "23px";
//     boxLeftmargin = "231px";
//     resetFontSize = "19px";
//     buttonFontSize = "16px";
//     inputHeight = "45px";
//     inputWidth = "380px";
//     buttonWidth = "382px";
//     buttonHeight = "47px";
//     logoWidth = "120px";
//     logoHeight = "45px";
//   } else if (isMediumScreen1 && isHeightBelow550x679) {
//     // 1200 x 675
//     headingLineHeight = "47px";
//     headingFontSize = "45px";
//     infoFontSize = "11px";
//     titleLeft = "107px";
//     loremLineHeight = "17px";
//     loremTopMargin = "10px";
//     loremWidth = "295px";
//     lostOrResendMarginTop = "5px";
//     logoMarginBottom = "30px";
//     lostBottomMargin = "19px";
//     inputBottomMargin = "28px";
//     labelMarginBottom = "4px";
//     newPasswordMarginBottom = "19px";
//     boxLeftmargin = "195px";
//     resetFontSize = "17px";
//     buttonFontSize = "15px";
//     inputHeight = "40px";
//     inputWidth = "340px";
//     buttonWidth = "342px";
//     buttonHeight = "42px";
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
//     lostOrResendMarginTop = "5px";
//     logoMarginBottom = "27px";
//     lostBottomMargin = "16px";
//     inputBottomMargin = "22px";
//     labelMarginBottom = "3px";
//     newPasswordMarginBottom = "16px";
//     boxLeftmargin = "97px";
//     resetFontSize = "15px";
//     buttonFontSize = "13px";
//     inputHeight = "33px";
//     inputWidth = "260px";
//     buttonWidth = "262px";
//     buttonHeight = "35px";
//     logoWidth = "80px";
//     logoHeight = "32px";
//   } else if (isMediumScreen2) {
//     headingLineHeight = "40px";
//     headingFontSize = "37px";
//     infoFontSize = "9px";
//     titleLeft = "112px";
//     loremLineHeight = "14px";
//     loremTopMargin = "9px";
//     loremWidth = "218px";
//     lostOrResendMarginTop = "5px";
//     logoMarginBottom = "27px";
//     lostBottomMargin = "16px";
//     inputBottomMargin = "22px";
//     labelMarginBottom = "3px";
//     newPasswordMarginBottom = "16px";
//     boxLeftmargin = "172px";
//     resetFontSize = "15px";
//     buttonFontSize = "13px";
//     inputHeight = "33px";
//     inputWidth = "260px";
//     buttonWidth = "262px";
//     buttonHeight = "35px";
//     logoWidth = "80px";
//     logoHeight = "32px";
//   } else if (isScreenWide3) {
//     headingLineHeight = "50px";
//     headingFontSize = "47px";
//     infoFontSize = "14px";
//     logoMarginBottom = "30px";
//     inputHeight = "50px";
//     lostBottomMargin = "30px";
//     logoHeight = "43px";
//     resetFontSize = "21px";
//     boxLeftmargin = "270px";
//     inputBottomMargin = "48px";
//     inputWidth = "450px";
//     titleLeft = "210px";
//     buttonWidth = "452px";
//     buttonHeight = "52px";
//   } else if (isScreenWide) {
//     headingLineHeight = "52px";
//     headingFontSize = "47px";
//     infoFontSize = "11px";
//     logoMarginBottom = "26px";
//     loremWidth = "270px";
//     inputHeight = "36px";
//     lostBottomMargin = "23px";
//     logoHeight = "40px";
//     resetFontSize = "18px";
//     boxLeftmargin = "195px";
//     inputBottomMargin = "25px";
//     inputWidth = "380px";
//     titleLeft = "152px";
//     buttonWidth = "382px";
//     buttonHeight = "38px";
//   } else if (isMediumScreen1) {
//     headingLineHeight = "40px";
//     headingFontSize = "37px";
//     infoFontSize = "9px";
//     titleLeft = "117px";
//     loremLineHeight = "14px";
//     loremTopMargin = "9px";
//     loremWidth = "218px";
//     lostOrResendMarginTop = "5px";
//     logoMarginBottom = "27px";
//     lostBottomMargin = "16px";
//     inputBottomMargin = "22px";
//     labelMarginBottom = "3px";
//     newPasswordMarginBottom = "16px";
//     boxLeftmargin = "195px";
//     resetFontSize = "15px";
//     buttonFontSize = "13px";
//     inputHeight = "33px";
//     inputWidth = "260px";
//     buttonWidth = "262px";
//     buttonHeight = "35px";
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
//             className={classes.newPasswordHeading}
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
//                 width: loremWidth,
//                 lineHeight: loremLineHeight,
//               }}
//             >
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore
//             </Typography>
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sm={6} md={7} lg={7.11} style={{ height: "100vh" }}>
//           <Item className={classes.newPassSecondGrid}>
//             <Box marginLeft={boxLeftmargin}>
//               <img
//                 src={logoImg}
//                 alt="dummy"
//                 className={classes.newPassOCRLogo}
//                 style={{
//                   width: logoWidth,
//                   marginBottom: logoMarginBottom,
//                   height: logoHeight,
//                 }}
//               ></img>
//               <Typography
//                 variant="h1"
//                 component="h1"
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
//                   marginTop: lostOrResendMarginTop,
//                   color: "rgba(43, 43, 43, 0.6)",
//                   fontSize: infoFontSize,
//                   fontWeight: 400,
//                   marginBottom: lostBottomMargin,
//                   fontFamily: "Heebo, sans-serif",
//                 }}
//               >
//                 Lost your password? Please enter code.
//               </Typography>
//               <div
//                 className={classes.newPassEmailInputContainer}
//                 style={{ marginBottom: inputBottomMargin }}
//               >
//                 <label
//                   className={classes.newPassEmailLabel}
//                   style={{
//                     fontSize: infoFontSize,
//                     marginBottom: labelMarginBottom,
//                     fontFamily: "Heebo, sans-serif",
//                   }}
//                 >
//                   New Password
//                 </label>
//                 <input
//                   type="text"
//                   className={classes.newPassEmailInput}
//                   style={{
//                     width: inputWidth,
//                     fontSize: buttonFontSize,
//                     height: inputHeight,
//                     marginBottom: newPasswordMarginBottom,
//                   }}
//                 />
//                 <label
//                   className={classes.newPassEmailLabel}
//                   style={{
//                     fontSize: infoFontSize,
//                     marginBottom: labelMarginBottom,
//                     fontFamily: "Heebo, sans-serif",
//                   }}
//                 >
//                   Confirm Password
//                 </label>
//                 <input
//                   type="text"
//                   className={classes.newPassEmailInput}
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
//                   fontSize: buttonFontSize,
//                   height: buttonHeight,
//                   fontFamily: "Heebo, sans-serif",
//                   textTransform: "none",
//                   "&:hover": {
//                     backgroundColor: "#7e57c2",
//                   },
//                 }}
//               >
//                 Submit
//               </Button>
//             </Box>
//           </Item>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }
