import React from "react";
import { BiShieldX } from "react-icons/bi";
import { ReactiveBase, RangeInput } from "@appbaseio/reactivesearch";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { margin } from "@mui/system";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
      width: 240,
    },
  },
};

function Main(props) {
  const data1 = () => {
    let d = JSON.parse(localStorage.getItem(props.name));

    return d ? d : [];
  };

  let [val, setValue] = useState(data1);
  function operation(value) {
    if (Array.isArray(value)) {
      setValue(value);
    }

    localStorage.setItem(props.name, JSON.stringify(val));
  }
  const data = () => {
    let d = JSON.parse(localStorage.getItem(props.name));

    if (d) {
      props.re(d);
    } else {
      props.re(val);
    }
  };
  useEffect(() => data(), [val]);
 function remove(rem,sav){
    setValue([rem,sav])
    localStorage.setItem(props.name, JSON.stringify([rem,sav]));
}
  return (
    <div>
      <FormControl variant='standard' sx={{ m: 1 }} className='FormCon'>
        <InputLabel id='demo-multiple-checkbox-label'>{props.name}</InputLabel>
        <Select MenuProps={MenuProps}>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <p
              style={{
                boxSizing: "border-box",
                border: "1px solid",
                width: "90px",
                display: "flex",
                justifyContent:'space-between'
                ,paddingInline:'5px 12px',
                paddingTop:'1px',fontSize:'17px'
              }}
            >
              <BiShieldX  style={{color:"darkblue" }} onClick={()=>remove(0,val[1])} /> {val[0]}
            </p>
            <p
              style={{
                boxSizing: "border-box",
                border: "1px solid",
                width: "90px",
                display: "flex",
                justifyContent:'space-between'
                ,paddingInline:'5px 12px',
                paddingTop:'1px',fontSize:'17px'
              }}
            >
              <BiShieldX style={{color:"darkblue" }} onClick={()=>remove(val[0],10000)} /> {val[1]}
            </p>
          </span>
          <MenuItem>
            <ReactiveBase app='good-books-ds' url='https://'>
              <div className='row'>
                <div className='col'>
                  <RangeInput
                    dataField=''
                    componentId='PriceFilter'
                    range={{
                      start: 1,
                      end: 10000,
                    }}
                    onValueChange={function (value) {
                      operation(value);
                    }}
                  />
                </div>

                <div className='col'></div>
              </div>
            </ReactiveBase>
          </MenuItem>
        </Select>{" "}
      </FormControl>
    </div>
  );
}
export default Main;
