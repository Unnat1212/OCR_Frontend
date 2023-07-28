import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { LinearProgress } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import MySlider from "./Slider";
import { up } from "../../Theme/Theme";

const Setting = () => {
  const progressValue = (400 / 500) * 100; // Calculate the progress percentage

  const PREFIX = "MyContainer";
  const classes = {
    root: `${PREFIX}-root`,
    label_description: `${PREFIX}-label_description`,
    checkBoxPaddingLeft: `${PREFIX}-paddingForCheckbox`,
    descriptionWidth: `${PREFIX}-descriptionWidth`,
    checkBoxMainClass: `${PREFIX}-checkBox`,
    gridContainer: `${PREFIX}-gridContainer`,
  };
  const Root = styled("div")(({ theme }) => ({
    [`&.${classes.root}`]: {
      width: "100%",
      height: "100vh",
    },
    [`& .${classes.descriptionWidth}`]: {
      color: "rgba(43, 43, 43, 0.8)",
      [up("xs")]: {
        width: "28vw",
      },
      [up("sm")]: {
        width: "27vw",
      },
      [up("md")]: {
        width: "27vw",
      },
      [up("lg")]: {
        width: "22.5vw",
      },
      [up("xl")]: {
        width: "25.5vw",
      },
      [up("xxl")]: {
        width: "20.5vw",
      },
    },
    [`& .${classes.label_description}`]: {
      paddingTop: "1%",
      paddingLeft: "1%",
    },
    [`& .${classes.checkBoxPaddingLeft}`]: {
      letterSpacing: "0rem",
      fontWeight: 500,
      color: "rgba(43, 43, 43, 0.8)",
      whiteSpace: "nowrap",
    },
    [`& .${classes.checkBoxMainClass}`]: {
      height: "3vh",
      width: "16vw",
      "& .Mui-checked": {
        color: "rgba(159, 119, 235, 1)",
      },

      [up("xs")]: {
        padding: "0px 0px",
        "& .css-i4bv87-MuiSvgIcon-root": {
          width: "14px",
          height: "14px",
        },
      },
      [up("sm")]: {
        padding: "0px 0px",
        "& .css-i4bv87-MuiSvgIcon-root": {
          width: "16px",
          height: "16px",
        },
      },
      [up("md")]: {
        padding: "1px 0px",
        "& .css-i4bv87-MuiSvgIcon-root": {
          width: "20px",
          height: "20px",
        },
      },
      [up("lg")]: {
        padding: "2px 0px",
        "& .css-i4bv87-MuiSvgIcon-root": {
          width: "20px",
          height: "20px",
        },
      },
      [up("xl")]: {
        padding: "0px",
        "& .css-i4bv87-MuiSvgIcon-root": {
          width: "22px",
          height: "22px",
        },
      },
      [up("xxl")]: {
        padding: "0px",
        "& .css-i4bv87-MuiSvgIcon-root": {
          width: "24px",
          height: "24px",
        },
      },
    },
  }));

  const [selectAll, setSelectAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState(Array(31).fill(false));

  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    setCheckboxes(checkboxes.map(() => checked));
  };

  const handleCheckboxChange = (index) => (event) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = event.target.checked;
    setCheckboxes(newCheckboxes);
  };

  return (
    <Root className={classes.root}>
      <Box
        sx={{
          width: "100%",
          height: "9vh",
          backgroundColor: "yellow",
        }}
      >
        navigation content start here navigation
      </Box>
      <Box
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          style={{
            color: "white",
            width: "19vw",
            height: "100%",
            backgroundColor: "green",
            position: "relative",
            top: "0px",
            bottom: "0px",
            left: "0px",
          }}
        >
          sidebar
        </Box>
        <Grid
          container
          sx={{
            padding: "2.5% 1.5% 0% 1.5%",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            style={{
              color: "rgba(0, 0, 0, 1)",
              marginBottom: "2.7vh",
            }}
          >
            Setting
          </Typography>
          <Grid
            container
            sx={{
              backgroundColor: "rgba(134, 134, 134, 0.1)",
              height: "9.2vh",
              marginBottom: "1vh",
              borderWidth: "0px",
              borderRadius: "5px",
            }}
          >
            <Grid
              item
              xs={4}
              sm={5}
              md={5}
              lg={4}
              xl={5}
              xxl={4}
              className={classes.label_description}
            >
              {/* Content for the first div */}
              <Typography variant="h5">Account</Typography>
            </Grid>
            <Grid item xs={8} sm={7} md={7} lg={8} xl={7} xxl={8}>
              <Typography
                variant="h5"
                style={{
                  color: "rgba(30, 30, 30, 1)",
                  marginTop: "2vh",
                }}
              >
                Pratik Patel
                <Typography
                  variant="body1"
                  component="p"
                  style={{
                    color: "rgba(43, 43, 43, 0.8)",
                  }}
                >
                  pratik.patel@aspiresoftserv.com
                </Typography>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              height: {
                sm: "20vh",
                md: "20vh",
                lg: "22vh",
                xl: "20vh",
                xxl: "19vh",
              },
              backgroundColor: "rgba(134, 134, 134, 0.1)",
              marginBottom: "1vh",
              borderWidth: "0px",
              borderRadius: "5px",
            }}
          >
            {/* Content for the second div */}
            <Grid
              item
              xs={4}
              sm={5}
              md={5}
              lg={4}
              xl={5}
              xxl={4}
              className={classes.label_description}
            >
              <Typography
                variant="h5"
                style={{
                  color: "rgba(30, 30, 30, 1)",
                }}
              >
                API Key
              </Typography>
              <Typography variant="body2" className={classes.descriptionWidth}>
                Use your API Key to authenticate with the AspireSofserv API.
                Refer to the documentation for usage details.
              </Typography>
            </Grid>
            <Grid item xs={8} sm={7} md={7} lg={8} xl={7} xxl={8}>
              <TextField
                defaultValue="658gvdf5gdfg6d2f5g6d5fg65dfgdfg5df4"
                variant="outlined"
                sx={{
                  width: "32vw",
                  marginTop: "1vh",
                  fontSize: "14px",
                  fontFamily: "Heebo, sans-serif",
                  fontWeight: 400,
                  color: "rgba(43, 43, 43, 0.8)",
                  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                    height: "2vh",
                  },
                }}
              />
              <LinearProgress
                variant="determinate"
                value={progressValue}
                sx={{
                  width: "14vw",
                  height: "0.6vh",
                  marginTop: "2.5vh",
                  borderRadius: "5px",
                  backgroundColor: "rgba(217, 217, 217, 1)",
                  "& .css-5xe99f-MuiLinearProgress-bar1": {
                    backgroundColor: "rgba(159, 119, 235, 1)  ",
                    borderRadius: "5px",
                  },
                }}
              />
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  color: "rgba(43, 43, 43, 0.8)",
                  fontWeight: 500,
                  marginTop: "0.5vh",
                }}
              >
                490 of 500 credits remaining
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  color: "rgba(43, 43, 43, 0.6)",
                  fontWeight: 400,
                }}
              >
                Expires April 25th, 2023
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              height: {
                sm: "15vh",
                md: "16vh",
                lg: "14vh",
                xl: "13vh",
                xxl: "11vh",
              },
              backgroundColor: "rgba(134, 134, 134, 0.1)",
              marginBottom: "1vh",
              borderWidth: "0px",
              borderRadius: "5px",
            }}
          >
            {/* Content for the third div */}
            <Grid
              item
              xs={4}
              sm={5}
              md={5}
              lg={4}
              xl={5}
              xxl={4}
              className={classes.label_description}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "rgba(30, 30, 30, 1)",
                  marginBottom: "0.4vh",
                }}
              >
                Auto Validation Threshold
              </Typography>
              <Typography variant="body2" className={classes.descriptionWidth}>
                Automatically validate data fields with confidence above this
                threshold
              </Typography>
            </Grid>
            <Grid item xs={8} sm={7} md={7} lg={8} xl={7} xxl={8}>
              <MySlider />
              <Box
                sx={{
                  display: "flex",
                  width: "16vw",
                  justifyContent: "space-between",
                  marginTop: "0px",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "rgba(43, 43, 43, 0.6)",
                  }}
                >
                  90%
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "rgba(43, 43, 43, 0.6)",
                  }}
                >
                  No Auto Validation
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              backgroundColor: "rgba(134, 134, 134, 0.1)",
              borderWidth: "0px",
              borderRadius: "5px",
            }}
          >
            <Grid
              item
              xs={4}
              sm={5}
              md={5}
              lg={4}
              xl={5}
              xxl={4}
              className={classes.label_description}
            >
              {/* Content for the fourth div */}
              <Typography
                variant="h5"
                sx={{
                  color: "rgba(30, 30, 30, 1)",
                  marginBottom: "5px",
                }}
              >
                Data Fields
              </Typography>
              <Typography variant="body2" className={classes.descriptionWidth}>
                Select the fields that should be extracted
              </Typography>
            </Grid>
            <Grid item xs={8} sm={7} md={7} lg={8} xl={7} xxl={8}>
              <Grid container>
                <Grid item xs={6} sm={6.5} md={7} lg={6} xl={6} xxl={5}>
                  <Box
                    sx={{
                      marginTop: "3.4vh",
                      marginBottom: "1.5vw",
                    }}
                  >
                    <FormControlLabel
                      className={classes.checkBoxMainClass}
                      control={
                        <Checkbox
                          checked={selectAll}
                          onChange={handleSelectAllChange}
                        />
                      }
                      label={
                        <Typography
                          variant="subtitle1"
                          className={classes.checkBoxPaddingLeft}
                        >
                          Select All
                        </Typography>
                      }
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(43, 43, 43, 0.8)",
                      marginBottom: "0.9vh",
                    }}
                  >
                    Invoice
                  </Typography>
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[0]}
                        onChange={handleCheckboxChange(0)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Invoice Number
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[1]}
                        onChange={handleCheckboxChange(1)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Invoice Date
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[2]}
                        onChange={handleCheckboxChange(2)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Invoice Order Date
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[3]}
                        onChange={handleCheckboxChange(3)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Invoice Purchase Order Number
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[4]}
                        onChange={handleCheckboxChange(4)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Currency Code
                      </Typography>
                    }
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(43, 43, 43, 0.8)",
                      marginTop: "2.7vh",
                    }}
                  >
                    Supplier
                  </Typography>
                  <Box sx={{ marginTop: "0.9vh" }}>
                    <FormControlLabel
                      className={classes.checkBoxMainClass}
                      control={
                        <Checkbox
                          checked={checkboxes[5]}
                          onChange={handleCheckboxChange(5)}
                        />
                      }
                      label={
                        <Typography
                          variant="subtitle1"
                          className={classes.checkBoxPaddingLeft}
                        >
                          Supplier Company Name
                        </Typography>
                      }
                    />
                  </Box>
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[6]}
                        onChange={handleCheckboxChange(6)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Supplier Address
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[7]}
                        onChange={handleCheckboxChange(7)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Supplier Business Number
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[8]}
                        onChange={handleCheckboxChange(8)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Supplier Phone Number
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[9]}
                        onChange={handleCheckboxChange(9)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Supplier Fax
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[10]}
                        onChange={handleCheckboxChange(10)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Supplier Email
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[11]}
                        onChange={handleCheckboxChange(11)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Supplier Website
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[12]}
                        onChange={handleCheckboxChange(12)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Supplier VAT
                      </Typography>
                    }
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(43, 43, 43, 0.8)",
                      marginTop: "2.7vh",
                    }}
                  >
                    Payment Method
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "0.9vh",
                    }}
                  >
                    <FormControlLabel
                      className={classes.checkBoxMainClass}
                      control={
                        <Checkbox
                          checked={checkboxes[13]}
                          onChange={handleCheckboxChange(13)}
                        />
                      }
                      label={
                        <Typography
                          variant="subtitle1"
                          className={classes.checkBoxPaddingLeft}
                        >
                          Paytm
                        </Typography>
                      }
                    />
                  </Box>
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[14]}
                        onChange={handleCheckboxChange(14)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Paypal
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[15]}
                        onChange={handleCheckboxChange(15)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Gpay
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs={6} sm={5.5} md={5} lg={6} xl={6} xxl={7}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(43, 43, 43, 0.8)",
                      marginTop: "3.7vh",
                    }}
                  >
                    Invoice
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "0.9vh",
                    }}
                  >
                    <FormControlLabel
                      className={classes.checkBoxMainClass}
                      control={
                        <Checkbox
                          checked={checkboxes[16]}
                          onChange={handleCheckboxChange(16)}
                        />
                      }
                      label={
                        <Typography
                          variant="subtitle1"
                          className={classes.checkBoxPaddingLeft}
                        >
                          Payment Date Due
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      className={classes.checkBoxMainClass}
                      control={
                        <Checkbox
                          checked={checkboxes[17]}
                          onChange={handleCheckboxChange(17)}
                        />
                      }
                      label={
                        <Typography
                          variant="subtitle1"
                          className={classes.checkBoxPaddingLeft}
                        >
                          Payment Amount Base
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      className={classes.checkBoxMainClass}
                      control={
                        <Checkbox
                          checked={checkboxes[18]}
                          onChange={handleCheckboxChange(18)}
                        />
                      }
                      label={
                        <Typography
                          variant="subtitle1"
                          className={classes.checkBoxPaddingLeft}
                        >
                          Payment Amount Tax
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      className={classes.checkBoxMainClass}
                      control={
                        <Checkbox
                          checked={checkboxes[19]}
                          onChange={handleCheckboxChange(19)}
                        />
                      }
                      label={
                        <Typography
                          variant="subtitle1"
                          className={classes.checkBoxPaddingLeft}
                        >
                          Payment Amount Total
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      className={classes.checkBoxMainClass}
                      control={
                        <Checkbox
                          checked={checkboxes[20]}
                          onChange={handleCheckboxChange(20)}
                        />
                      }
                      label={
                        <Typography
                          variant="subtitle1"
                          className={classes.checkBoxPaddingLeft}
                        >
                          Payment Amount Paid
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      className={classes.checkBoxMainClass}
                      control={
                        <Checkbox
                          checked={checkboxes[21]}
                          onChange={handleCheckboxChange(21)}
                        />
                      }
                      label={
                        <Typography
                          variant="subtitle1"
                          className={classes.checkBoxPaddingLeft}
                        >
                          Payment Amount Due
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      className={classes.checkBoxMainClass}
                      control={
                        <Checkbox
                          checked={checkboxes[22]}
                          onChange={handleCheckboxChange(22)}
                        />
                      }
                      label={
                        <Typography
                          variant="subtitle1"
                          className={classes.checkBoxPaddingLeft}
                        >
                          Payment Reference
                        </Typography>
                      }
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(43, 43, 43, 0.8)",
                      marginTop: "3vh",
                    }}
                  >
                    Customer
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "0.9vh",
                    }}
                  >
                    <FormControlLabel
                      className={classes.checkBoxMainClass}
                      control={
                        <Checkbox
                          checked={checkboxes[23]}
                          onChange={handleCheckboxChange(23)}
                        />
                      }
                      label={
                        <Typography
                          variant="subtitle1"
                          className={classes.checkBoxPaddingLeft}
                        >
                          Customer Number
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      className={classes.checkBoxMainClass}
                      control={
                        <Checkbox
                          checked={checkboxes[24]}
                          onChange={handleCheckboxChange(24)}
                        />
                      }
                      label={
                        <Typography
                          variant="subtitle1"
                          className={classes.checkBoxPaddingLeft}
                        >
                          Customer Name
                        </Typography>
                      }
                    />
                  </Box>
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[25]}
                        onChange={handleCheckboxChange(25)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Customer Company Number
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[26]}
                        onChange={handleCheckboxChange(26)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Customer Billing Address
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[27]}
                        onChange={handleCheckboxChange(27)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Customer Delivery Address
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[28]}
                        onChange={handleCheckboxChange(28)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Customer Phone Number
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[29]}
                        onChange={handleCheckboxChange(29)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Customer Address
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    className={classes.checkBoxMainClass}
                    control={
                      <Checkbox
                        checked={checkboxes[30]}
                        onChange={handleCheckboxChange(30)}
                      />
                    }
                    label={
                      <Typography
                        variant="subtitle1"
                        className={classes.checkBoxPaddingLeft}
                      >
                        Customer Email
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Root>
  );
};

export default Setting;
