import React from "react";

import { ReactiveBase, RangeInput } from "@appbaseio/reactivesearch";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
      width: 260,
    },
  },
};

function Main(props) {
  let [val, setValue] = useState([0, 22]);
  function operation(value){
     setValue(value)
 
     props.re(val)
      
      
  } 
 
 
 
 
  return (
    <div>
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id='demo-multiple-checkbox-label'>{props.name}</InputLabel>
        <Select MenuProps={MenuProps}>
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
                    onValueChange={
                     function(value){
                      operation(value)
                     }
                  }
                    
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
