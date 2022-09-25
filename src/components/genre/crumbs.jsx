import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useEffect } from "react";
import LocalStorage from "localstorage";

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

export default function MultipleSelectCheckmarks(props) {
  const data1 = () => {
    let d = JSON.parse(localStorage.getItem(props.name));
   return d?d:[]
  };
  const [personName, setPersonName] = React.useState(data1);

  let newArr = [];
  if (props.data === undefined) {
     
  } else {
    for (let index = 0; index < 100; index++) {
      newArr[index] = props.data[index];
      if (newArr[index] === undefined) {
        break;
      }
    }
  }
  const arr = newArr.filter((a) => a);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    localStorage.setItem(props.name, JSON.stringify(value));
  };
  const data = () => {
    let d = JSON.parse(localStorage.getItem(props.name));
    if (d) {
      props.re(d, props.name);
    }
    else{
      props.re(personName, props.name)
    }
  };
  useEffect(() => data(), [personName]);

  if (props.data === undefined) {
    return null;
  } else {
    return (
      <div>
        <FormControl sx={{ m: 1, width: 250 }}>
          <InputLabel id='demo-multiple-checkbox-label'>{props.name}</InputLabel>
          <Select
            labelId='demo-multiple-checkbox-label'
            id='demo-multiple-checkbox'
            multiple
            value={personName}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {arr.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}
