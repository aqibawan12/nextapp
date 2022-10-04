import React from "react";
import "./checkout.css";
import cities from "cities.json";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";

import { MenuItem } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Checkout = (props) => {
  let filter = props.cartState.filter((val) => val.stockValue > 0);
  const isDesktop = useMediaQuery({ query: "(min-width: 1300px)" });
  const currencies = [
    {
      value: "Pakistan",
      label: "pkr",
    },
  ];
  let navigate = useNavigate();
  const [currency, setCurrency] = React.useState("Pakistan");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const [currency1, setCurrency1] = React.useState("Lahore");

  const handleChange1 = (event) => {
    setCurrency1(event.target.value);
  };
  let [show, sShow] = React.useState([]);
  const top100Film = () => {
    let arr = [];
    cities.map((val) => {
      if (val.country === "PK") {
        return arr.push(val.name);
      }
    });
    sShow(arr);
  };

  useEffect(() => {
    top100Film();
  }, []);
  let [t, sT] = useState([]);
  
    const lS = JSON.parse(localStorage.getItem("ls"));
    
 
  let login = props.logi;
  function loginOut() {
    let name=[]
    if (login) {
      lS.map((val)=>{
        name.push(val.displayName,val.email)
        
      })
      console.log(name)
      return (
        <>
          <div className='loginInfo'>
            <span className='imageLogin'>
              <img
                src='data:image/png;base64,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'
                alt='11'
              />
              <p>
                {name[0].toUpperCase()}({name[1]})
                <span
                  onClick={() => props.rn(false)}
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    lineHeight: "22px",
                    cursor: "pointer",
                  }}
                >
                  <br />
                  Log out
                </span>
              </p>
            </span>
          </div>
        </>
      );
    } else {
      return (
        <>
          <p className='shipCH' style={{ fontWeight: 100, color: "grey" }}>
            Already have an Account?{" "}
            <span
              style={{
                color: "black",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => navigate("/login")}
            >
              LOG IN
            </span>
          </p>
          <div className='AccHeld'>
            <TextField label='Email' fullWidth type='email' />
          </div>
        </>
      );
    }
  }
  return (
    <div className='checkout'>
      <div className='Ist'>
        <span className='Lcrumbs'>
          <p>cart</p>
          <p>
            <FiChevronRight />
          </p>

          <p>information</p>
          <p>
            <FiChevronRight />
          </p>

          <p>shipping</p>
          <p>
            <FiChevronRight />
          </p>

          <p>Payment</p>
          <p>
            <FiChevronRight />
          </p>
        </span>
        {loginOut()}
        <p className='shipCH'>Shipping Address</p>
        <div className='shippingAde'>
          <div className='feild1'>
            <TextField
              fullWidth
              id='filled-select-Country'
              select
              label='Country'
              value={currency}
              onChange={handleChange}
              variant='filled'
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <span className='SFeild'>
            <div className='feild1'>
              <TextField
                fullWidth
                id='filled-select-name'
                label='First Name'
                value={currency}
                onChange={handleChange}
                variant='filled'
              />
            </div>
            <div className='feild1'>
              <TextField
                fullWidth
                id='filled-select-name'
                label='Last Name'
                value={currency}
                onChange={handleChange}
                variant='filled'
              />
            </div>
          </span>
          <div className='feild1'>
            <TextField
              fullWidth
              id='filled-select-Address'
              label='Address'
              value={currency}
              onChange={handleChange}
              variant='filled'
            />
          </div>
          <div className='feild1'>
            <TextField
              fullWidth
              id='filled-select-apartment'
              label='Apartment,suite,etc. (optional)'
              value={currency}
              onChange={handleChange}
              variant='filled'
            />
          </div>
          <div className='feild1'>
            <Autocomplete
              disablePortal
              id='combo-box-demo'
              options={show}
              fullWidth
              renderInput={(params) => (
                <TextField
                  label='City'
                  variant='filled'
                  {...params}
                  name='name'
                />
              )}
            />
          </div>
          <div className='feild1'>
            <TextField
              fullWidth
              id='filled-select-no'
              label='Phone Number'
              typeof='Number'
              value={currency}
              onChange={handleChange}
              variant='filled'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>92</InputAdornment>
                ),
              }}
            ></TextField>{" "}
            <div className='sumbitCheck'>
              <button type='reset'>Continue to shopping</button>
              <p>
                {" "}
                <FiChevronLeft />
                Continue to shopping
              </p>
            </div>
          </div>
        </div>
      </div>
      {isDesktop && (
        <div className='sndPart'>
          <div className='Snd'>
            <div className=' CartPro1'>
              {filter.map((val) => (
                <div className='PChec'>
                  <div>
                    <img
                      className='imgCH'
                      src={val.images[0]}
                      alt='sorry! not found'
                    />
                  </div>
                  <div className='CHsETT'>
                    <div className='DESCH'>
                      <p className='ValueCh'>{val.name} </p>
                      <p className='ValueCh1'>RS {val.price} </p>{" "}
                    </div>
                    <div>
                      {" "}
                      <p className='typeCH'>{"Small"}</p>{" "}
                      <p className='typeCH1'>{val.id}</p>{" "}
                      <p className='typeCH1'>Quantity: {val.stockValue}</p>{" "}
                    </div>
                    <div className='DESCH'>
                      <p className='ValueCh'>Item Total</p>
                      <p className='ValueCh1'>
                        RS {val.price * val.stockValue}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='DisSec'>
            <TextField
              id='disTEx'
              fullWidth
              variant='filled'
              label='Discount'
              value={currency}
              onChange={handleChange}
            />
            <button disabled className='disBtn' type='submit'>
              Apply
            </button>
          </div>

          <p
            className='SubCh'
            style={{ marginTop: "-22px", borderTop: "1px solid grey" }}
          >
            <span style={{ marginTop: "9px" }}> SUBTOTAL </span>
            <span style={{ fontWeight: "bolder", marginTop: "9px" }}>
              Rs {props.total}
            </span>{" "}
          </p>
          <p className='SubCh' style={{ borderBottom: "1px solid grey" }}>
            <span style={{ marginBottom: "9px" }}> Shipping </span>
            <span style={{ fontWeight: "lighter", marginBottom: "9px" }}>
              {"calculated on Next step"}
            </span>
          </p>
          <p className='SubCh' style={{ marginTop: "-22px" }}>
            TOTAL
            <span style={{ fontWeight: "bolder", fontSize: "25px" }}>
              Rs {props.total}
            </span>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
