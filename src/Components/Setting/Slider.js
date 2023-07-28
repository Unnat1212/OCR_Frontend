import React from "react";
import Slider from "@mui/material/Slider";

const MySlider = () => {
  // State to keep track of the slider value
  const [sliderValue, setSliderValue] = React.useState(50);

  // Handler function for slider value change
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div>
      <Slider
        value={sliderValue}
        onChange={handleSliderChange}
        aria-label="My slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={100}
        sx={{
          marginTop: {
            sm: "1vh",
            md: "1vh",
            lg: "3vh",
            xl: "3vh",
            xxl: "3vh",
          },
          width: "16vw",
          borderRadius: "5px",
          "& .MuiSlider-rail": {
            backgroundColor: "rgba(159, 119, 235, 1)",
          },
          "& .css-1gv0vcd-MuiSlider-track": {
            backgroundColor: "rgba(159, 119, 235, 1)",
            borderWidth: "0px",
          },
          "& .css-eg0mwd-MuiSlider-thumb::after": {
            height: "10px",
            width: "10px",
          },
          "& .css-eg0mwd-MuiSlider-thumb": {
            backgroundColor: "rgba(159, 119, 235, 1)",
            height: "13px",
            width: "13px",
          },
          "& .css-o8etcq-MuiSlider-valueLabel": {
            backgroundColor: "rgba(159, 119, 235, 1)",
          },
        }}
      />
    </div>
  );
};

export default MySlider;
