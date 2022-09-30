import React from "react";
import "./nav.css";
import { useNavigate,Link,to } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useMediaQuery } from "react-responsive";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
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
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    color: "brown",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Nd = (props) => {
  const nav = useNavigate();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1300px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1300px)" });

  return (
    <>
      <div className='Nd'>
        {isDesktop && (
          <p
            style={{
              marginTop: "35px",
              marginLeft: "22px",
              fontSize: "44px",
              color: "darkred",
              cursor: "pointer",
             
            }}
          >
            <AccountCircleRoundedIcon />
          </p>
        )}
       
          <p 
                      onClick={() => {
              props.selection("women");
             
            }}
          >
           <Link className="t" to={"genre/women"}>women</Link>
          </p>
          <p
            onClick={() => {
              props.selection("girl");
             
              
            }}
          >
          <Link className="t" to={"genre/girl"}>girl</Link>
          </p>
          <p
            onClick={() => {
              props.selection("Accessories");
             
            }}
          >
            
            <Link className="t" to={"genre/Accessories "}> Accessories</Link>
          </p>
          <p
            onClick={() => {
              props.selection("sale");
             
            }}
          >
            
            <Link className="t" to={"genre/Sale "}> Sale </Link>
          </p>
        
        {isDesktop && (
          <p
            style={{
            
              marginRight: "32px",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            checkout
          </p>
        )}
      </div>

      {isTabletOrMobile && (
        <>
          <div
            className='Nd'
            style={{ marginTop: "90px", backgroundColor: "#e3dddc" }}
          >
            <p
              style={{
              
                marginLeft: "22px",
                fontSize: "44px",
                color: "darkred",
                cursor: "pointer",
              }}
            >
              <AccountCircleRoundedIcon />
            </p>

            <Search
              style={{
                borderRadius: "24px",
                width: "70%",
                marginTop: "-3px",
                marginLeft: "12px",
                marginRight: "6px",
                backgroundColor: "white",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <p
              style={{
                fontSize: "13px",
                margin: "10px",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              checkout
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Nd;
