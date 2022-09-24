import * as React from "react";
import { styled, alpha, Box } from "@mui/system";
import SliderUnstyled, {
  sliderUnstyledClasses,
} from "@mui/base/SliderUnstyled";
import { FormControl, Input, MenuItem, Select } from "@mui/material";

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  300: "#66B2FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledSlider = styled(SliderUnstyled)(
  ({ theme }) => `
  color: ${theme.palette.mode === "light" ? blue[500] : blue[300]};
  height: 6px;
  width: 90%;
  margin: 16px 50px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    opacity: 1;
  }

  &.${sliderUnstyledClasses.disabled} { 
    pointer-events: none;
    cursor: default;
    color: ${theme.palette.mode === "light" ? grey[300] : grey[600]};
    opacity: 0.5;
  }

  & .${sliderUnstyledClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
    opacity: 0.4;
  }

  & .${sliderUnstyledClasses.track} {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
  }

  & .${sliderUnstyledClasses.thumb} {
    position: absolute;
    width: 16px;
    height: 16px;
    margin-left: -6px;
    margin-top: -6px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    border: 3px solid currentColor;
    background-color: #fff;

    :hover,
    &.${sliderUnstyledClasses.focusVisible} {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === "light" ? blue[400] : blue[300],
        0.15
      )};
    }

    &.${sliderUnstyledClasses.active} {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === "light" ? blue[200] : blue[300],
        0.3
      )};
    }
  }

  & .${sliderUnstyledClasses.mark} {
    position: absolute;
    width: 4px;
    height: 4px;
 
    border-radius: 2px;
    background-color: currentColor;
    top: 50%;
    opacity: 0.7;
    transform: translateX(-50%);
  }

  & .${sliderUnstyledClasses.markActive} {
    background-color: #fff;
  }

  & .${sliderUnstyledClasses.valueLabel} {
    font-family: IBM Plex Sans;
    font-size: 14px;
    display: block;
    position: relative;
    top: -1.6em;
    text-align: center;
    transform: translateX(-50%);
  }
`
);

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };
 const handleInputChange = (event) => {
    setValue(   event.target.value)  ;
  };
  return (
    <FormControl sx={{ m: 1, width: 250 }}>
      <Select>
        <Box sx={{ width: 150 }}>
          <span
            style={{ display: "flex", alignContent: "center", margin: "10px" }}
          >
            {" "}
            <input
              style={{
                width: "100px",
                height: "20px",
                borderRadius: "6px",
                margin: "1px",
              }}
              type='Number'
              wr
              name='Price'
              setValue
         z
            />{" "}
         
          </span>
          <StyledSlider
            value={value}
            onChange={handleChange}
            getAriaLabel={() => "Temperature range"}
            getAriaValueText={valuetext}
            min={0}
            max={100}
          />
        </Box>
        <Input
            value={value}
            size='medium'
            onChange={handleInputChange}
            
            inputProps={{
             
              min: 0,
              max: 1000,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
           
          />
      </Select>{" "}
    </FormControl>
  );
}
