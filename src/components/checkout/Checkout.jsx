import React from "react";
import "./checkout.css";
import cities from "cities.json";
import { FiChevronRight } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { MenuItem } from "@mui/material";
import { useEffect } from "react";
const Checkout = (props) => {
    let filter = props.cartState.filter((val) => val.stockValue > 0);
  const isDesktop = useMediaQuery({ query: "(min-width: 1300px)" });
  const currencies = [
    {
      value: "Pakistan",
      label: "pkr",
    },
  ];
  const [currency, setCurrency] = React.useState("Pakistan");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const [currency1, setCurrency1] = React.useState("Lahore");

  const handleChange1 = (event) => {
    setCurrency1(event.target.value);
  };

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
        <p>
          Already have an Account <span>log in</span>
        </p>
        <div className='AccHeld'>
          <input type='email' name='' id='' />
        </div>
        <p>Shipping Address</p>
        <div className='shippingAde'>
          <div className='feild1'>
            <TextField   fullWidth
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
              <TextField    fullWidth
                id='filled-select-name'
                label='First Name'
                value={currency}
                onChange={handleChange}
                variant='filled'
              />
            </div>
            <div className='feild1'>
              <TextField     fullWidth
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
            <TextField   fullWidth
              id='filled-select-apartment'
              label='Apartment,suite,etc. (optional)'
              value={currency}
              onChange={handleChange}
              variant='filled'
            />
          </div>
          <div className='feild1'>
            <TextField   fullWidth
              id='filled-select-City'
              select
              label='City'
              value={currency1}
              onChange={handleChange1}
              variant='filled'
            >
              {cities.map((val) => {
                if (val.country === "PK") {
                  return (
                    <MenuItem key={val.name} value={val.name}>
                      {val.name}
                    </MenuItem>
                  );
                }
              })}
            </TextField>
          </div>
          <div className='feild1'>
            <TextField   fullWidth
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
            ></TextField>
          </div>
        </div>
      </div>
      {isDesktop && <div className='Snd'>
      <div className=' CartPro'>
        {filter.map((val)=>
          <div className="PChec">
             <div><img  className="imgCH"src={val.images[0]} alt="sorry! not found" /></div>
             <div className="CHsETT">
             <div className="DESCH"><p className="ValueCh">{val.name} </p><p  className="ValueCh">{val.price} </p> </div>
             <div> <p>{"Small"}</p> <p>{val.id}</p>  <p>Quantity: {val.stockValue}</p>             </div>
            <div className="DESCH"><p>Item Total</p><p>{val.price*val.stockValue}</p></div>
             </div></div>
        )}


           
          </div>
        
        
        
        
        
        
        
        </div>}
    </div>
  );
};

export default Checkout;
