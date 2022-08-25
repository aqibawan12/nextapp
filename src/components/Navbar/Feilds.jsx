import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const Feilds = (props) => {
  const index = props.id;

  return (
    <div>
      <ListItem key={props.id}>
        <ListItemButton
          onClick={() => {
            props.onSelect(index);
          }}
        >
          <ListItemIcon>
            {index === 0 ? (
              <span style={{ color: "blue" }}>{props.icons[0]}</span>
            ) : null}
            {index === 1 ? (
              <span style={{ color: "blue" }}>{props.icons[1]}</span>
            ) : null}
            {index === 2 ? (
              <span style={{ color: "blue" }}>{props.icons[2]}</span>
            ) : null}
            {index === 3 ? (
              <span style={{ color: "blue" }}>{props.icons[3]}</span>
            ) : null}
          </ListItemIcon>
          <ListItemText primary={props.value} />
        </ListItemButton>
      </ListItem>
    </div>
  );
};

export default Feilds;
