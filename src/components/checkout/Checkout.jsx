import React from "react";
import "./checkout.css";
import cities from "cities.json";
import { FiChevronRight, FiChevronLeft, FiChevronsDown } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { FormControlLabel, MenuItem } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import validator from "validator";
const currencies = [
  {
    value: "Pakistan",
    label: "pkr",
  },
];
const Checkout = (props) => {
  let filter = props.cartState.filter((val) => val.stockValue > 0);

  const isDesktop = useMediaQuery({ query: "(min-width: 1300px)" });
  const [errorText1, setErrorText1] = useState();
  const [errorText2, setErrorText2] = useState();
  const [errorText3, setErrorText3] = useState();
  const [errorText4, setErrorText4] = useState();
  const [errorText5, setErrorText5] = useState();
  const [errorText6, setErrorText6] = useState();
  let navigate = useNavigate();
  const [currency, setCurrency] = React.useState("Pakistan");
  const [em, setEm] = React.useState();
  const [name, setName] = React.useState();
  const [lname, setLName] = React.useState();
  const [add, setAdd] = React.useState();
  const [apar, setApar] = React.useState();
  const [no, setNo] = React.useState();
  const [vis, setVis] = React.useState(false);
  const [vis1, setVis1] = React.useState(false);
  const [City, setCity] = React.useState();
  let [show, sShow] = React.useState([]);
  let [t, sT] = useState([]);
  let [dis, setD] = useState("");
  let [dis1, setD1] = useState("dis");
  let [dis2, setD2] = useState("dis");
  let [col, setCol] = useState("colorP");
  let [col1, setCol1] = useState("");
  let [col2, setCol2] = useState("");
  let total = props.total;
  let item = props.badge;
  function Operation() {
    if (!em || !validator.isEmail(em)) {
      setErrorText6("Provide valid Email");
      return;
    }
    setErrorText6("");
    if (!name) {
      setErrorText1("Provide valid name");
      return;
    }
    setErrorText1("");
    if (!lname) {
      setErrorText2("Provide valid name");
      return;
    }
    setErrorText2("");
    if (!add) {
      setErrorText3("Provide Your Shipping address");
      return;
    }
    setErrorText3("");
    if (!no || !validator.isMobilePhone(no)) {
      setErrorText4("Provide Valid Phone number ");
      return;
    }
    setErrorText4("");

    if (!City) {
      setErrorText5("Please select ypur City");
      return;
    }
    setErrorText5("");
    setD("dis");
    setD1("");
    setVis(true);
    setCol1("colorP");
    setCol("");
    setCol2("");
   
  }
  function complete(){
    axios.post(
      "https://sheet.best/api/sheets/2133d233-678a-4238-a11a-6d72a178dc18",
      {
        em,
        name,
        City,
        add,
        no,
        apar,
        item,
        total,
        filter,
      }
    );
   props.z("1")
    alert("Thanks for ordering ")
    navigate('/')
  }
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeLName = (event) => {
    setLName(event.target.value);
  };
  const handleChangeAdd = (event) => {
    setAdd(event.target.value);
  };
  const handleChangeApar = (event) => {
    setApar(event.target.value);
  };
  const handleChangeNo = (event) => {
    setNo(event.target.value);
  };
  const handleChangeEm = (event) => {
    setEm(event.target.value);
  };
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
  const lS = JSON.parse(localStorage.getItem("ls"));
  useEffect(() => {
    if (lS) {
      lS.map((val) => setEm(val.email));
    }
  }, []);
  let login = props.logi;
  function rev(v) {
    setEm(v);
  }
  function LoginOut(r) {
    let name = [];
    if (login) {
      lS.map((val) => {
        name.push(val.displayName, val.email);
      });

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
            <TextField
              value={em}
              onChange={handleChangeEm}
              helperText={errorText6}
              error={errorText6}
              label='Email'
              fullWidth
              type='email'
            />
          </div>
        </>
      );
    }
  }
  function shipping() {
    return (
      <>
        <div className={dis1}>
          <div style={{ border: "1px solid" }}>
            <div
              style={{
                display: "flex",
              }}
            >
              <span className='shipCut'>
                {" "}
                <p className='shipCutP1'>Contact</p>
                <p className='shipCutP2'>{em}</p>
              </span>

              <p
                style={{ flex: "0 1 55px",cursor:'pointer' }}
                onClick={() => {
                  setD("");
                  setD1("dis");
                  setD2("dis");
                }}

              >
                change
              </p>
            </div>
            <p className='line'></p>
            <div style={{ display: "flex" }}>
              <span className='shipCut' style={{ marginBottom: "12px" }}>
                {" "}
                <p className='shipCutP1'>Ship to</p>
                <p className='shipCutP2'>{add} </p>
              </span>
              <p
                style={{ flex: "0 1 55px" ,cursor:'pointer' }}
                onClick={() => {
                  setD("");
                  setD1("dis");
                  setD2("dis");
                }}
              >
                change
              </p>
            </div>{" "}
          </div>
          <div style={{ margin: "4px" }}>
            <p className='pt12'>Shipping method</p>
            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid",
                height: "40px",
              }}
            >
              <span style={{ marginLeft: "7px" }}>
                <RadioGroup
                  aria-labelledby='demo-radio-buttons-group-label'
                  defaultValue='other'
                  checked={true}
                  name='radio-buttons-group'
                >
                  <FormControlLabel
                    value='other'
                    control={<Radio />}
                    label='Home Delivery'
                  />
                </RadioGroup>
              </span>{" "}
              <span style={{ marginTop: "12px", marginRight: "14px" }}>
                Free
              </span>
            </p>
            <div className='sumbitCheck' style={{ marginTop: "52px" }}>
              <button
                type='reset'
                onClick={() => {
                  setD("dis");
                  setD2("");
                  setD1("dis");
                  setVis1(true);
                  setCol2("colorP");
                  setCol1("");
                  setCol("");
                }}
              >
                Continue to Payment
              </button>
              <p  onClick={() => {
                setD("");
                setD1("dis");
                setD2("dis");
                setCol("colorP");
                setCol1("");
                setCol2("");
              }}>
                <span className='btncheck' style={{ textTransform: "uppercase" ,cursor:'pointer'}}>
                  <FiChevronLeft />
                  RETURN TO INFORMATION
                </span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  function shipMethod() {
    return (
      <>
        <div className={dis2}>
          <div style={{ border: "1px solid" }}>
            <div
              style={{
                display: "flex",
                marginTop: "-1px",
                marginBottom: "-10px",
              }}
            >
              <span className='shipCut'>
                {" "}
                <p className='shipCutP1'>Contact</p>
                <p className='shipCutP2'>{em} </p>
              </span>

              <p
                style={{ flex: "0 1 55px" ,cursor:'pointer'}}
                onClick={() => {
                  setD("");
                  setD1("dis");
                  setD2("dis");
                }}
              >
                change
              </p>
            </div>
            <p className='line'></p>
            <div
              style={{
                display: "flex",
                marginTop: "-1px",
                marginBottom: "-15px",
              }}
            >
              <span className='shipCut' style={{ marginBottom: "12px" }}>
                {" "}
                <p className='shipCutP1'>Ship to</p>
                <p className='shipCutP2'>{add} </p>
              </span>
              <p
                style={{ flex: "0 1 55px",cursor:'pointer' }}
                onClick={() => {
                  setD("");
                  setD1("dis");
                  setD2("dis");
                }}
              >
                change
              </p>
            </div>{" "}
            <p className='line'></p>
            <div
              style={{
                display: "flex",
                marginTop: "-5px",
                marginBottom: "-8px",
              }}
            >
              <span className='shipCut' style={{ marginBottom: "12px" }}>
                {" "}
                <p className='shipCutP1'>Method</p>
                <p className='shipCutP2'>Home Delivery {"free"}</p>
              </span>
              <p style={{ flex: "0 1 55px", visibility: "hidden" }}>change</p>
            </div>{" "}
          </div>

          <div style={{ margin: "4px" }}>
            <p className='pt12'>Payment</p>
            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid",
                height: "40px",
              }}
            >
              <span style={{ marginLeft: "7px" }}>
                <RadioGroup
                  aria-labelledby='demo-radio-buttons-group-label'
                  defaultValue='other'
                  checked={true}
                  name='radio-buttons-group'
                >
                  <FormControlLabel
                    value='other'
                    control={<Radio />}
                    label='CASH ON DELIVERY (COD)'
                  />
                </RadioGroup>
              </span>{" "}
              <span style={{ marginTop: "12px", marginRight: "14px" }}>
                Free
              </span>
            </p>
            <div className='sumbitCheck' style={{ marginTop: "52px" }}>
              <button
                type='reset'
                onClick={() => {
                  complete()
                  setD("dis");
                  setD1("dis");
                }}
              >
                Complete your order
              </button>
              <p style={{ textTransform: "uppercase" ,cursor:'pointer'}}  onClick={() => {
              
                if (vis === true) {
                  Operation();
                  setD2("dis");
                  setCol1("colorP");
                  setCol("");
                  setCol2("");
                }
              }}>
                <span className='btncheck'>
                  <FiChevronLeft />
                  return to shipping
                </span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  let [hide, setHide] = useState("show");
  let [hide1, setHide1] = useState("sndPart");
  function option() {
    hide === "hide" ? setHide("show") : setHide("hide");
    hide1 === "sndPart" ? setHide1("sndPart12") : setHide1("sndPart");
  }
  return (
    <>
      <h3 className='titleCag'>Checkout</h3>
      <div className='mobileCH' onClick={() => option()}>
        <p className='mobileInn'>
          <span className='cartSumA'>
            <span className='CSum'>Cart summary {hide} </span>
            <span className='CIcon'>
              <FiChevronsDown />
            </span>
          </span>
          <span className='CTotal'>Rs {total} </span>
        </p>
      </div>
      <div className='checkout'>
        <div className='Ist'>
          <span className='Lcrumbs'>
            <p
              className={col}
              onClick={() => {
                setD("");
                setD1("dis");
                setD2("dis");
                setCol("colorP");
                setCol1("");
                setCol2("");
              }}
            >
              information
            </p>
            <p>
              <FiChevronRight />
            </p>

            <p
              className={col1}
              onClick={() => {
                if (vis === true) {
                  Operation();
                  setD2("dis");
                  setCol1("colorP");
                  setCol("");
                  setCol2("");
                }
              }}
            >
              shipping
            </p>
            <p>
              <FiChevronRight />
            </p>

            <p
              className={col2}
              onClick={() => {
                if (vis1 === true) {
                  setD("dis");
                  setD2("");
                  setD1("dis");
                  setCol2("colorP");
                  setCol1("");
                  setCol("");
                }
              }}
            >
              Payment
            </p>
            <p>
              <FiChevronRight />
            </p>
          </span>
          {shipMethod()}
          {shipping()}

          <div className={dis}>
            {LoginOut(rev)}
            <p className='shipCH'>Shipping Address</p>
            <div className='shippingAde'>
              <div className='feild1'>
                <TextField
                  required
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
                    required
                    fullWidth
                    id='filled-select-name'
                    label='First Name'
                    helperText={errorText1}
                    error={errorText1}
                    value={name}
                    onChange={handleChangeName}
                    variant='filled'
                  />
                </div>
                <div className='feild1'>
                  <TextField
                    required
                    fullWidth
                    id='filled-select-name'
                    label='Last Name'
                    helperText={errorText2}
                    error={errorText2}
                    value={lname}
                    onChange={handleChangeLName}
                    variant='filled'
                  />
                </div>
              </span>
              <div className='feild1'>
                <TextField
                  required
                  fullWidth
                  id='filled-select-Address'
                  label='Address'
                  helperText={errorText3}
                  error={errorText3}
                  value={add}
                  onChange={handleChangeAdd}
                  variant='filled'
                />
              </div>
              <div className='feild1 '>
                <TextField
                  fullWidth
                  id='filled-select-apartment'
                  label='Apartment,suite,etc. (optional)'
                  value={apar}
                  onChange={handleChangeApar}
                  variant='filled'
                />
              </div>
              <div className='feild1'>
                <Autocomplete
                  disablePortal
                  id='combo-box-demo'
                  options={show}
                  inputValue={City}
                  onInputChange={(event, newInputValue) => {
                    setCity(newInputValue);
                  }}
                  fullWidth
                  renderInput={(params) => (
                    <TextField
                      required
                      label='City'
                      variant='filled'
                      helperText={errorText5}
                      error={errorText5}
                      {...params}
                      name='name'
                    />
                  )}
                />
              </div>
              <div className='feild1'>
                <TextField
                  fullWidth
                  required
                  id='filled-select-no'
                  label='Phone Number'
                  type='tel'
                  value={no}
                  helperText={errorText4}
                  error={errorText4}
                  onChange={handleChangeNo}
                  variant='filled'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>92</InputAdornment>
                    ),
                  }}
                ></TextField>{" "}
                <div className='sumbitCheck'>
                  <button
                    type='sumbit'
                    onClick={() => {
                      Operation();
                    }}
                  >
                    Continue to shipping
                  </button>
                  <p style={{ visibility: "hidden" }}>
                    <span className='btncheck'>
                      <FiChevronLeft />
                      Continue to shopping
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={hide1}>
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
                      <p className='typeCH1'>Quantity: {val.stockValue}</p>
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
            style={{ marginTop: "22px", borderTop: "1px solid grey" }}
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
      </div>
    </>
  );
};

export default Checkout;
