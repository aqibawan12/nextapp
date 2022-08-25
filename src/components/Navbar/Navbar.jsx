import * as React from "react";
import Feilds from "./Feilds.jsx";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import FeaturedPlayListRoundedIcon from "@mui/icons-material/FeaturedPlayListRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { AiOutlineInstagram } from "react-icons/ai";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
}
export default function PrimarySearchAppBar(props) {
 
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const navigate = useNavigate();
  const Ppc = [
    <AccountCircleRoundedIcon />,
    <ProductionQuantityLimitsIcon />,
    <FeaturedPlayListRoundedIcon />,
    <CategoryRoundedIcon />,
  ];
  const Apc = [<ShareRoundedIcon />, <InfoRoundedIcon />];
  function Call(){
   navigate('/Cart')
  }
 
  function operation(id) {
    if (id === 1) {
      navigate("Product");
    }
    if (id === 0) {
      navigate("signup");
    }
    if (id === 3) {
      navigate("Category");
    }
    if (id === 2) {
      navigate("Feature");
    }
  }
  function operation1(id) {
    if (id === 1) {
      navigate("About");
    }
    if (id === 0) {
      navigate("Share");
    }
  }
  const list = (anchor) => (
    <Box
      style={{ marginTop: "90px" }}
      sx={{ height: anchor === "top" || anchor === "bottom" ? "0px" : 260 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["My Account", "Products", "Feature Products", "Categories"].map(
          (text, index) => (
            <Feilds
              key={index}
              value={text}
              id={index}
              onSelect={operation}
              icons={Ppc}
            />
          )
        )}
      </List>
      <Divider />
      <List>
        {["Share", "About us"].map((text, index) => (
          <Feilds
            key={index}
            value={text}
            id={index}
            onSelect={operation1}
            icons={Apc}
          />
        ))}
      </List>
      <div role='presentation' onClick={handleClick} style={{ padding: 30 }}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link>
            <FacebookRoundedIcon
              style={{ color: "blue", fontSize: "25px" }}
              onClick={() =>
                window.location.replace("https://www.facebook.com/")
              }
            />
          </Link>
          <Link>
            <AiOutlineInstagram
              style={{ color: "red", fontSize: "25px" }}
              onClick={() =>
                window.location.replace("https://www.instagram.com/")
              }
            />
          </Link>
        </Breadcrumbs>
      </div>
    </Box>
  );
  

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position='fixed' variant="elevation">
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <div>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <MenuIcon onClick={toggleDrawer(anchor, true)}>
                    {anchor}
                  </MenuIcon>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
         
            <IconButton onClick={Call}
              size='large'
              color='inherit'
            > 
              <Badge badgeContent={props.badge} color='error'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
           
          <IconButton onClick={Call}
              size='large'
             
              color='inherit'
            >
              <Badge badgeContent={props.badge}  color='error'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            
          </Box>
        </Toolbar>
      </AppBar>
      
      
    </Box>
  );
}
